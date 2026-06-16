# Ghosttown — Builder Instructions

This repo builds expert ghosts: AI personas grounded in a real person's corpus.

## When someone says "make me a ghost for X"

Run this pipeline:

### 1. Confirm corpus
Check `corpus/` for source material. If empty, ask the user to drop files there (emails, essays, talks, transcripts — any text by the expert). Do not proceed without corpus.

### 2. Run four extraction passes over the corpus

Use the prompts in `extraction-prompts.md` — in order:

- **Pass A** — Heuristic Extraction: IF-THEN-BECAUSE decision rules
- **Pass B** — Principle Mapping (Map-Reduce): foundational beliefs, grouped by domain
- **Pass C** — Bias Identification: consistent stances, intensity, canonical framing
- **Pass D** — Voice Archaeology: HOW they write, not what (capitalization, sign-offs, tics, recurring phrases)

Run each pass over all corpus files. Collect all outputs before moving on.

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

Run two subagents in parallel on the same off-domain prompt (something the expert would review but not lecture about — e.g. a code PR, a business memo, a news article):

- **Agent A:** Default Claude, no persona. Answer the prompt naturally.
- **Agent B:** Ghost. Answer using the ghost file as system prompt.

After both respond, report:
- Word count for each
- Distinct insights/claims for each
- Words-per-insight ratio (density)
- Voice fidelity check: did the ghost stay in character on unfamiliar territory?

Log the density ratio as the ghost's calibration baseline. A well-built ghost should be 2–4x more token-dense than default Claude on the same content.

### 6. Report

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
├── corpus/                 ← drop expert's source material here
└── ghosts/                 ← one file per built ghost
```

## Rules

- Never invent corpus content. Extract only what appears in the source material.
- Never overwrite `Ghost_Principles.md` — it is the template. Write output to `ghosts/`.
- If corpus is thin (< 5 documents), warn the user: ghost quality will be low.
- If expert has strong stances on a topic and corpus shows evolution over time, surface the evolution — do not flatten to a single position.
