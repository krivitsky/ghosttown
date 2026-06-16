#!/usr/bin/env node
// ghosttown — SessionStart hook.
//
// Runs once per session (startup, resume, AND /clear — no matcher, by design:
// the ghost is meant to survive a /clear). Reads the flag; if a ghost is active,
// re-injects the FULL ghost file as SessionStart context. Full-file injection is
// deliberate: the whole problem being solved is context compression pruning the
// original persona, so a pointer ("go read X") would get pruned too. Re-injecting
// the complete file means even a freshly compressed session starts grounded.
//
// Emits nothing when no ghost is active or the file is gone — never inject error
// noise into model context.

const fs = require('fs');
const path = require('path');
const os = require('os');
const { readGhostFlag, resolveRoot } = require('./ghost-config');

const claudeDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
const flagPath = path.join(claudeDir, '.ghost-active');

const slug = readGhostFlag(flagPath);
if (!slug) { process.stdout.write(''); process.exit(0); }

const ghostPath = path.join(resolveRoot(), 'ghosts', slug + '.md');
let ghostContent;
try {
  ghostContent = fs.readFileSync(ghostPath, 'utf8');
} catch (e) {
  // Flag points at a ghost that no longer exists — fail silent, don't half-inject.
  process.stdout.write('');
  process.exit(0);
}

process.stdout.write(
  'GHOST ACTIVE: ' + slug + '\n\n' +
  ghostContent +
  '\n\n---\nYou are this persona for the whole session — it persists across turns and through /clear. ' +
  'Drop character only if the user says "stop ghost", "exit ghost", or /ghost-me off.'
);
