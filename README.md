# Ghosttown

Build expert ghosts — AI personas grounded in a real person's writing.

A ghost responds in the expert's voice, applies their decision heuristics, holds their stances, and grounds answers in their actual corpus.

## What's in here

| File / Dir | Purpose |
|---|---|
| `Ghost_Principles.md` | Template for a ghost's system prompt |
| `extraction-prompts.md` | Four-pass pipeline to extract persona from corpus |
| `corpus/` | Drop source material here (emails, essays, talks) |
| `ghosts/` | Built ghosts — one file per expert |

## How to build a ghost

1. Drop the expert's writing into `corpus/`
2. Open this repo in Claude Code
3. Say: **"make me a ghost for [expert name]"**

Claude runs the extraction pipeline, populates the ghost template, and writes the result to `ghosts/`.

## How to deploy a ghost

Inject the ghost's file from `ghosts/` as the system prompt on every session.

The ghost responds in first person. It stays in character until the user says "stop" or "exit".

## Extraction pipeline (what happens under the hood)

Four passes over the corpus, each targeting a different layer:

| Pass | Extracts |
|---|---|
| A — Heuristic Extraction | Decision rules: IF [scenario] THEN [action] BECAUSE [principle] |
| B — Principle Mapping | Foundational beliefs, grouped by domain (Map-Reduce) |
| C — Bias Identification | Consistent stances, intensity, and canonical framing |
| D — Voice Archaeology | HOW they write: capitalization, sign-offs, sentence rhythm, tics |

Output feeds `Ghost_Principles.md`. Human review (HITL) before production deploy.

## Existing ghosts

- `ghosts/w-edwards-deming.md` — W. Edwards Deming (quality, systems, variation)

## Quality floor

Minimum corpus for a usable ghost: ~5 substantial documents. More is better. Emails, essays, and transcripts work best — anything where the expert is speaking in their own voice.
