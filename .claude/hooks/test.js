#!/usr/bin/env node
// ghosttown — persistence-layer tests. No deps. Run: node .claude/hooks/test.js
//
// Drives the real hook scripts (ghost-mode-tracker.js, ghost-activate.js) the
// same way Claude Code does: stdin JSON for UserPromptSubmit, env for config.
// Each test runs against a throwaway CLAUDE_CONFIG_DIR so the real ~/.claude
// flag is never touched.

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const HOOKS = __dirname;                          // <root>/.claude/hooks
const ROOT = path.join(__dirname, '..', '..');    // repo/plugin root
const TRACKER = path.join(HOOKS, 'ghost-mode-tracker.js');
const ACTIVATE = path.join(HOOKS, 'ghost-activate.js');
const SET = path.join(HOOKS, 'ghost-set.js');
const SHOW = path.join(HOOKS, 'ghost-show.js');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ghosttown-test-'));
const FLAG = path.join(tmp, '.ghost-active');
const env = { ...process.env, CLAUDE_CONFIG_DIR: tmp, CLAUDE_PLUGIN_ROOT: ROOT };

function tracker(prompt) {
  return execFileSync('node', [TRACKER], { input: JSON.stringify({ prompt }), env, encoding: 'utf8' });
}
function sessionStart() {
  return execFileSync('node', [ACTIVATE], { env, encoding: 'utf8' });
}
function ghostSet(slug) {
  return execFileSync('node', [SET, slug], { env, encoding: 'utf8' });
}
function ghostShow(args) {
  return execFileSync('node', [SHOW, ...args], { env, encoding: 'utf8' });
}
function flag() {
  try { return fs.readFileSync(FLAG, 'utf8').trim(); } catch (e) { return null; }
}
function reset() { try { fs.unlinkSync(FLAG); } catch (e) {} }

let pass = 0, fail = 0;
function check(name, cond) {
  if (cond) { pass++; console.log('  ok   ' + name); }
  else { fail++; console.log('  FAIL ' + name); }
}

// --- activation -----------------------------------------------------------
reset();
const t1 = tracker('/ghost-me craig-larman');
check('activation writes flag', flag() === 'craig-larman');
check('activation emits reminder', t1.includes('GHOST ACTIVE: craig-larman'));

// --- per-turn reinforcement ----------------------------------------------
const t2 = tracker('what do you think of SAFe?');
check('per-turn reminder while active', t2.includes('GHOST ACTIVE: craig-larman'));
check('per-turn keeps flag', flag() === 'craig-larman');

// --- deactivation false-positive guards ----------------------------------
tracker('how do I stop the server');
check('"stop the server" keeps flag', flag() === 'craig-larman');
tracker('how do I exit vim');
check('"exit vim" keeps flag', flag() === 'craig-larman');
tracker('stop');
check('bare "stop" keeps flag', flag() === 'craig-larman');
tracker('exit');
check('bare "exit" keeps flag', flag() === 'craig-larman');
const t3 = tracker('what is exit code 1');
check('"exit code 1" keeps flag', flag() === 'craig-larman');
check('"exit code 1" still reinforces', t3.includes('GHOST ACTIVE'));

// --- SessionStart injection ----------------------------------------------
const s1 = sessionStart();
check('SessionStart injects header', s1.startsWith('GHOST ACTIVE: craig-larman'));
check('SessionStart injects full file', s1.includes('# Craig Larman — Ghost Prompt'));
check('SessionStart adds persistence note', s1.includes('stop ghost'));

// --- explicit deactivation -----------------------------------------------
const t4 = tracker('stop ghost');
check('"stop ghost" clears flag', flag() === null);
check('"stop ghost" emits no reminder', t4.trim() === '');
check('SessionStart silent when inactive', sessionStart().trim() === '');

// --- exit ghost / deactivate ghost / normal mode -------------------------
tracker('/ghost-me john-cutler');
tracker('exit ghost');
check('"exit ghost" clears flag', flag() === null);
tracker('/ghost-me john-cutler');
tracker('please return to normal mode');
check('"normal mode" clears flag', flag() === null);

// --- /ghost-me off not mis-parsed as slug --------------------------------
tracker('/ghost-me john-cutler');
check('re-activate before off', flag() === 'john-cutler');
tracker('/ghost-me off');
check('"/ghost-me off" clears flag', flag() === null);

// --- unknown slug ---------------------------------------------------------
reset();
tracker('/ghost-me nonexistent-person');
check('unknown slug not written', flag() === null);

// --- namespaced form ------------------------------------------------------
reset();
tracker('/ghosttown:ghost-me w-edwards-deming');
check('namespaced activation', flag() === 'w-edwards-deming');

// --- case-insensitive slug lowercased ------------------------------------
reset();
tracker('/ghost-me Craig-Larman');
check('mixed-case slug lowercased + written', flag() === 'craig-larman');

// --- path traversal -------------------------------------------------------
reset();
tracker('/ghost-me ../../etc/passwd');
check('path-traversal slug rejected', flag() === null);

// --- ghost-set.js (picker-path writer) -----------------------------------
reset();
ghostSet('john-cutler');
check('ghost-set writes valid slug', flag() === 'john-cutler');
reset();
ghostSet('nonexistent-person');
check('ghost-set rejects unknown slug', flag() === null);
reset();
ghostSet('../../etc/passwd');
check('ghost-set rejects traversal', flag() === null);
reset();
ghostSet('');
check('ghost-set no-ops on empty', flag() === null);
reset();
ghostSet('John-Cutler');
check('ghost-set lowercases slug', flag() === 'john-cutler');

// --- ghost-show.js (command helper) --------------------------------------
const list = ghostShow([]);
check('ghost-show lists ghosts', list.includes('craig-larman') && list.includes('john-cutler'));
check('ghost-show excludes -sample files', !list.split('\n').some(s => s.endsWith('-sample')));
const shown = ghostShow(['craig-larman']);
check('ghost-show prints profile', shown.includes('# Craig Larman — Ghost Prompt'));
let showErr = false;
try { ghostShow(['nonexistent-person']); } catch (e) { showErr = true; }
check('ghost-show errors on unknown slug', showErr);

// --- empty / malformed input ---------------------------------------------
reset();
let crashed = false;
try { tracker(''); execFileSync('node', [TRACKER], { input: 'not json', env, encoding: 'utf8' }); }
catch (e) { crashed = true; }
check('empty/malformed input does not crash', !crashed && flag() === null);

// --- teardown -------------------------------------------------------------
fs.rmSync(tmp, { recursive: true, force: true });

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
