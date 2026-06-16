# Ghosttown — Builder Instructions

This repo builds expert ghosts: AI personas grounded in a real person's corpus.

## When someone says "make me a ghost for X"

Run this pipeline:

### 1. Confirm corpus
Derive the expert slug from their name (e.g. "Donald Trump" → `trump`, "W. Edwards Deming" → `deming`).

Check whether `corpus/[slug]/` exists and contains files.

**If folder is missing:** Create it immediately with `mkdir corpus/[slug]/`, then tell the user:

> I've created `corpus/[slug]/` for you. Now drop source material in there — anything written or spoken by [Expert Name]: essays, interviews, transcripts, emails, talks, blog posts. The more the better; aim for at least 5 substantial pieces. Once you've added files, tell me and I'll start the extraction.

**If folder exists but is empty:** Tell the user:

> `corpus/[slug]/` exists but is empty. Drop source material in there — anything written or spoken by [Expert Name]: essays, interviews, transcripts, emails, talks, blog posts. Aim for at least 5 substantial pieces. Tell me when you're ready.

**If thin corpus (fewer than 5 files):** Proceed but warn:

> Corpus is thin ([N] file(s)). Ghost quality may be low — consider adding more source material before or after the first extraction run.

Do not proceed with extraction until the user confirms files are in place. Do not read from other subfolders in `corpus/`.

### 2. Run four extraction passes over the corpus

Use the prompts in `extraction-prompts.md` — in order:

- **Pass A** — Heuristic Extraction: IF-THEN-BECAUSE decision rules
- **Pass B** — Principle Mapping (Map-Reduce): foundational beliefs, grouped by domain
- **Pass C** — Bias Identification: consistent stances, intensity, canonical framing
- **Pass D** — Voice Archaeology: HOW they write, not what (capitalization, sign-offs, tics, recurring phrases)

Run each pass over all files in `corpus/[slug]/` only. Do not mix in corpus from other ghost subfolders. Collect all outputs before moving on.

### 3. Populate Ghost_Principles.md

Fill every section of `Ghost_Principles.md` using extraction outputs:
- `## Write like this` ← Pass D
- `## Take these stances` ← Pass C
- `## Apply these heuristics` ← Pass A + B
- `## Never violate these` ← highest-confidence items from all passes
- `## Worked example` ← write 100–200 words in the ghost's voice; check every voice rule

Set `hitl_status` fields: `confirmed` where evidence is strong, `pending` where uncertain.

### 4. Save the ghost

Write the completed file to `ghosts/[expert-slug].md`.

Name format: `firstname-lastname.md` (e.g. `w-edwards-deming.md`).

### 5. Run token density eval

Run two subagents in parallel using the standard prompt in `eval-prompt.md`:

- **Agent A:** Default Claude, no persona. Answer the prompt naturally.
- **Agent B:** Ghost. Answer using the ghost file as system prompt.

After both respond:
- Compute density ratio (ghost ÷ default Claude, by words-per-insight)
- Check voice fidelity: did the ghost stay in character on unfamiliar territory?
- Write Agent B's response verbatim to `ghosts/[expert-slug]-sample.md` with this header:

```
# [Full Name] — Eval Sample

**Prompt:** [one-line description of the eval prompt]

---

[ghost response verbatim]
```

A well-built ghost should be 2–4x more token-dense than default Claude on the same content.

### 6. Register in README

Add the ghost to the **Available ghosts** table in `README.md`:

```
| [Full Name] | [2–4 word domain summary] | `/ghost-me [slug]` | [[density ratio](ghosts/[slug]-sample.md)] |
```

- Domain: pick the 2–4 words that best describe their expertise, not their biography
- Density: the ratio only — no parenthetical notes. Link it to the sample file.
- If eval was skipped, write `—` (no link)

### 7. Report

Tell the user:
- Ghost file location
- How many heuristics, principles, biases, voice features extracted
- Which items are `pending` HITL review
- Token density ratio from the eval
- How to deploy: inject the ghost file as system prompt

---

## Repo structure

```
ghosttown/
├── CLAUDE.md               ← you are here
├── README.md
├── Ghost_Principles.md     ← template (do not overwrite; copy into ghosts/)
├── extraction-prompts.md   ← the four passes
├── corpus/
│   └── [expert-slug]/      ← one subfolder per expert; pipeline reads only this
└── ghosts/                 ← one file per built ghost
```

## Rules

- Never invent corpus content. Extract only what appears in the source material.
- Never overwrite `Ghost_Principles.md` — it is the template. Write output to `ghosts/`.
- If corpus is thin (< 5 documents), warn the user: ghost quality will be low.
- If expert has strong stances on a topic and corpus shows evolution over time, surface the evolution — do not flatten to a single position.
