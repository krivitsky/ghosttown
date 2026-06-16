#!/usr/bin/env node
// ghosttown — flag writer, invoked by the /ghost-me command after it resolves a
// persona. Usage: node ghost-set.js <slug>
//
// This is the "picker path" backstop. The UserPromptSubmit hook writes the flag
// deterministically for the single-shot `/ghost-me <slug>` form, but cannot see a
// slug the user picks in a follow-up message after a bare `/ghost-me`. The command
// runs this script once it knows the slug — single-shot or picked — so persistence
// works either way. Idempotent with the hook write; running both is harmless.
//
// Validates the slug (charset + ghost-file existence) before writing. No-op on a
// missing or unknown slug — never persists garbage.

const fs = require('fs');
const path = require('path');
const os = require('os');
const { safeWriteGhostFlag, resolveRoot, SLUG_RE } = require('./ghost-config');

const slug = (process.argv[2] || '').trim().toLowerCase();
if (!slug || !SLUG_RE.test(slug)) {
  process.stdout.write('ghost-set: no valid slug given; nothing written.\n');
  process.exit(0);
}
if (!fs.existsSync(path.join(resolveRoot(), 'ghosts', slug + '.md'))) {
  process.stdout.write('ghost-set: unknown ghost "' + slug + '"; nothing written.\n');
  process.exit(0);
}

const claudeDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
safeWriteGhostFlag(path.join(claudeDir, '.ghost-active'), slug);
process.stdout.write('ghost-set: persisted "' + slug + '".\n');
