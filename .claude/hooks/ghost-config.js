#!/usr/bin/env node
// ghosttown — shared flag I/O for the persistence hooks.
//
// Ported from the caveman plugin's caveman-config.js. The security properties
// (symlink-safe writes/reads, size cap, charset whitelist) are load-bearing and
// must not be weakened — the flag lives at a predictable path (~/.claude/.ghost-active)
// which is an obvious symlink-clobber target for a local attacker.
//
// A "ghost flag" holds a single persona slug, e.g. "craig-larman". The slug is
// later joined into a filesystem path (ghosts/<slug>.md), so it is validated
// against a strict charset BEFORE any path is built — this is the path-traversal
// guard. Because SLUG_RE forbids '.', '/' and '\', traversal is structurally
// impossible regardless of OS path-join behavior.
//
// Set GHOSTTOWN_DEBUG=1 to emit stderr diagnostics when flag writes are refused.

const fs = require('fs');
const path = require('path');
const os = require('os');

// Slugs: lowercase, start with a letter, hyphen-separated. Length-capped well
// under MAX_FLAG_BYTES. Forbids any path-traversal character by construction.
const SLUG_RE = /^[a-z][a-z0-9-]{0,62}$/;

// Hard cap on flag file size. Longest realistic slug is ~30 bytes; 64 leaves
// slack without enabling a reader to slurp a large secret if the path is
// clobbered with a symlink to one.
const MAX_FLAG_BYTES = 64;

// Symlink-safe flag file write.
// Writes atomically via temp + rename with 0600 permissions and O_NOFOLLOW.
// When the parent dir is itself a symlink (legitimate: ~/.claude symlinked
// elsewhere), resolves through and verifies ownership (uid match on Unix, or
// under-home on Windows). The flag file itself must never be a symlink — that
// is the actual clobber vector. Silent-fails on any filesystem error.
function safeWriteGhostFlag(flagPath, content) {
  const debug = process.env.GHOSTTOWN_DEBUG === '1';
  try {
    const flagDir = path.dirname(flagPath);
    fs.mkdirSync(flagDir, { recursive: true });

    let realFlagDir;
    try {
      const lstat = fs.lstatSync(flagDir);
      if (lstat.isSymbolicLink()) {
        realFlagDir = fs.realpathSync(flagDir);
        const realStat = fs.statSync(realFlagDir);
        if (!realStat.isDirectory()) {
          if (debug) process.stderr.write(`[ghosttown] safeWrite: symlink target ${realFlagDir} not a directory\n`);
          return;
        }
        if (typeof process.getuid === 'function') {
          if (realStat.uid !== process.getuid()) {
            if (debug) process.stderr.write(`[ghosttown] safeWrite: ${realFlagDir} owned by uid ${realStat.uid}, not ${process.getuid()}\n`);
            return;
          }
        } else {
          const home = os.homedir();
          const normalizedReal = path.resolve(realFlagDir);
          const normalizedHome = path.resolve(home);
          if (!normalizedReal.toLowerCase().startsWith(normalizedHome.toLowerCase() + path.sep) &&
              normalizedReal.toLowerCase() !== normalizedHome.toLowerCase()) {
            if (debug) process.stderr.write(`[ghosttown] safeWrite: ${normalizedReal} outside home ${normalizedHome}\n`);
            return;
          }
        }
      } else {
        realFlagDir = flagDir;
      }
    } catch (e) {
      return;
    }

    const realFlagPath = path.join(realFlagDir, path.basename(flagPath));
    try {
      if (fs.lstatSync(realFlagPath).isSymbolicLink()) return;
    } catch (e) {
      if (e.code !== 'ENOENT') return;
    }

    const tempPath = path.join(realFlagDir, `.ghost-active.${process.pid}.${Date.now()}`);
    const O_NOFOLLOW = typeof fs.constants.O_NOFOLLOW === 'number' ? fs.constants.O_NOFOLLOW : 0;
    const flags = fs.constants.O_WRONLY | fs.constants.O_CREAT | fs.constants.O_EXCL | O_NOFOLLOW;
    let fd;
    try {
      fd = fs.openSync(tempPath, flags, 0o600);
      fs.writeSync(fd, String(content));
      try { fs.fchmodSync(fd, 0o600); } catch (e) { /* best-effort on Windows */ }
    } finally {
      if (fd !== undefined) fs.closeSync(fd);
    }
    fs.renameSync(tempPath, realFlagPath);
  } catch (e) {
    // Silent fail — flag is best-effort
  }
}

// Symlink-safe, size-capped, charset-validated read. Symmetric with the writer:
// refuses symlinks at the target, caps the read, and rejects anything that isn't
// a valid slug. Returns the slug string, or null on any anomaly — callers must
// treat null as "no ghost active" and never build a path from unvalidated bytes.
function readGhostFlag(flagPath) {
  try {
    let st;
    try {
      st = fs.lstatSync(flagPath);
    } catch (e) {
      return null;
    }
    if (st.isSymbolicLink() || !st.isFile()) return null;
    if (st.size > MAX_FLAG_BYTES) return null;

    const O_NOFOLLOW = typeof fs.constants.O_NOFOLLOW === 'number' ? fs.constants.O_NOFOLLOW : 0;
    const flags = fs.constants.O_RDONLY | O_NOFOLLOW;
    let fd;
    let out;
    try {
      fd = fs.openSync(flagPath, flags);
      const buf = Buffer.alloc(MAX_FLAG_BYTES);
      const n = fs.readSync(fd, buf, 0, MAX_FLAG_BYTES, 0);
      out = buf.slice(0, n).toString('utf8');
    } finally {
      if (fd !== undefined) fs.closeSync(fd);
    }

    const raw = out.trim().toLowerCase();
    if (!SLUG_RE.test(raw)) return null;
    return raw;
  } catch (e) {
    return null;
  }
}

// Resolve the plugin/repo root. CLAUDE_PLUGIN_ROOT is set when running as an
// installed plugin; otherwise fall back to the repo root. These scripts live at
// <root>/.claude/hooks/, so the fallback walks up two levels — correct when
// ghosttown is used as an opened repo.
function resolveRoot() {
  return process.env.CLAUDE_PLUGIN_ROOT || path.join(__dirname, '..', '..');
}

module.exports = { safeWriteGhostFlag, readGhostFlag, resolveRoot, SLUG_RE, MAX_FLAG_BYTES };
