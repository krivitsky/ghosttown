#!/usr/bin/env node
// ghosttown — read-only helper for the /ghost-me command.
//
//   node ghost-show.js          → list available ghost slugs (one per line)
//   node ghost-show.js <slug>   → print that ghost's full profile to stdout
//
// Centralizes root resolution (via ghost-config) so the command works
// identically whether ghosttown runs as an installed plugin or an opened repo —
// the command never has to know an absolute path to ghosts/.

const fs = require('fs');
const path = require('path');
const { resolveRoot, SLUG_RE } = require('./ghost-config');

const ghostsDir = path.join(resolveRoot(), 'ghosts');
const slug = (process.argv[2] || '').trim().toLowerCase();

if (!slug) {
  let files;
  try { files = fs.readdirSync(ghostsDir); } catch (e) { process.stdout.write(''); process.exit(0); }
  const slugs = files
    .filter(f => f.endsWith('.md') && !f.endsWith('-sample.md'))
    .map(f => f.replace(/\.md$/, ''))
    .sort();
  process.stdout.write(slugs.join('\n') + (slugs.length ? '\n' : ''));
  process.exit(0);
}

if (!SLUG_RE.test(slug)) { process.stderr.write('invalid slug\n'); process.exit(1); }
try {
  process.stdout.write(fs.readFileSync(path.join(ghostsDir, slug + '.md'), 'utf8'));
} catch (e) {
  process.stderr.write('ghost not found: ' + slug + '\n');
  process.exit(1);
}
