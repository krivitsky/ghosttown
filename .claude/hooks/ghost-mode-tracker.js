#!/usr/bin/env node
// ghosttown — UserPromptSubmit hook.
//
// Fires every turn. Three jobs, in this order:
//   1. Deactivation — ghost-scoped phrases only clear the flag.
//   2. Activation — /ghost-me <slug> writes the flag (the hook is the SOLE writer;
//      the markdown command only tells Claude to adopt the persona in-context).
//   3. Reinforcement — when a ghost is active, emit a short identity re-anchor so
//      the persona doesn't drift back to default-assistant voice mid-conversation.
//
// CRITICAL: bare "stop"/"exit" must NEVER clear the flag — they are ordinary words
// in dev conversation ("stop the server", "how do I exit vim"). Only the explicit
// ghost-scoped phrases below deactivate. (The markdown command's in-context stop
// words are separate: they let Claude drop character for a turn; they don't touch
// the persisted flag.)
//
// Silent-fails on any error — a hook must never block the user's prompt.

const fs = require('fs');
const path = require('path');
const os = require('os');
const { readGhostFlag, safeWriteGhostFlag, resolveRoot, SLUG_RE } = require('./ghost-config');

const claudeDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
const flagPath = path.join(claudeDir, '.ghost-active');

// Deactivation: explicit, ghost-scoped phrases. Checked before activation so
// "/ghost-me off" isn't mis-read as the slug "off".
const DEACTIVATE = [
  /\/(?:ghosttown:)?ghost-me\s+(?:off|stop|exit)\b/i,
  /\bstop\s+ghost\b/i,
  /\bexit\s+ghost\b/i,
  /\bdeactivate\s+ghost\b/i,
  /\bleave\s+(?:ghost|character|persona)\b/i,
  /\bnormal\s+mode\b/i,
];

// Activation: the /ghost-me <slug> command form (bare or namespaced), anchored to
// the start of the prompt. Slug is lowercased and existence-checked before write.
const ACTIVATE = /^\s*\/(?:ghosttown:)?ghost-me\s+([a-z0-9][a-z0-9-]*)\s*$/i;

let input = '';
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const prompt = (data.prompt || '').trim();

    // 1. Deactivation
    if (DEACTIVATE.some(re => re.test(prompt))) {
      try { fs.unlinkSync(flagPath); } catch (e) { /* already gone */ }
      return; // no reinforcement this turn
    }

    // 2. Activation — hook is the only flag writer
    const m = prompt.match(ACTIVATE);
    if (m) {
      const slug = m[1].toLowerCase();
      if (SLUG_RE.test(slug) &&
          fs.existsSync(path.join(resolveRoot(), 'ghosts', slug + '.md'))) {
        safeWriteGhostFlag(flagPath, slug);
      }
      // If the slug is unknown, don't write and don't block — the /ghost-me
      // command will list available ghosts for the user.
    }

    // 3. Per-turn reinforcement. SessionStart already injected the full persona
    //    (with all voice rules), so this only needs to re-anchor identity — a
    //    one-liner, not a re-teach. Cheap, fires every active turn.
    const slug = readGhostFlag(flagPath);
    if (slug) {
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'UserPromptSubmit',
          additionalContext: 'GHOST ACTIVE: ' + slug +
            '. Stay fully in character per the active ghost persona; do not drift to default-assistant voice.'
        }
      }));
    }
  } catch (e) {
    // Silent fail — never block the prompt.
  }
});
