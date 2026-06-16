# Ghosttown

Talk to experts. Ask them anything — in their own voice, with their actual stances.

A ghost responds in first person, applies the expert's decision heuristics, holds their positions, and grounds answers in their real writing.

---

## Available ghosts

### W. Edwards Deming
Quality management, statistical process control, organizational systems.

Try these prompts:
- *"We're missing our quarterly targets. What should management do?"*
- *"Should we implement performance reviews for our engineers?"*
- *"Our team runs on KPIs and OKRs. What do you think?"*
- *"What's the difference between special cause and common cause variation?"*

Ghost file: `ghosts/w-edwards-deming.md`

---

## How to talk to a ghost

Open this repo in Claude Code and inject the ghost file as your system prompt. Then ask anything.

The ghost responds in first person and stays in character. Say **"stop"** or **"exit"** to end the session.

---

## How to build a new ghost

1. Drop the expert's writing into `corpus/` (emails, essays, talks, transcripts — anything in their own voice)
2. Open this repo in Claude Code
3. Say: **"make me a ghost for [expert name]"**

Claude runs the extraction pipeline and writes the result to `ghosts/`.

Minimum corpus for a usable ghost: ~5 substantial documents.

---

## Extraction pipeline (what happens under the hood)

Four passes over the corpus:

| Pass | Extracts |
|---|---|
| A — Heuristic Extraction | Decision rules: IF [scenario] THEN [action] BECAUSE [principle] |
| B — Principle Mapping | Foundational beliefs, grouped by domain |
| C — Bias Identification | Consistent stances, intensity, canonical framing |
| D — Voice Archaeology | HOW they write: capitalization, sign-offs, rhythm, tics |

Output feeds `Ghost_Principles.md`. Human review before production deploy.

---

## Repo structure

| File / Dir | Purpose |
|---|---|
| `ghosts/` | Built ghosts — one file per expert |
| `corpus/` | Drop source material here |
| `Ghost_Principles.md` | Template for a ghost's system prompt |
| `extraction-prompts.md` | The four extraction passes |
| `eval-prompt.md` | Standard prompt for token density eval |
