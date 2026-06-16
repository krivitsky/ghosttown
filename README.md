# Ghosttown

Talk to experts. Ask them anything — in their own voice, with their actual stances.

## Quick start

Open this repo in Claude Code, then:

```
/ghost-me deming
```

Then ask anything. Say **"stop"** or **"exit"** to end the session.

---

## Available ghosts

| Ghost | Domain | Command |
|---|---|---|
| W. Edwards Deming | Quality, systems, variation | `/ghost-me deming` |

**Sample prompts for Deming:**
- *"We're missing our quarterly targets. What should management do?"*
- *"Should we implement performance reviews for our engineers?"*
- *"Our team runs on KPIs and OKRs. What do you think?"*
- *"What's the difference between special cause and common cause variation?"*

---

## Build a new ghost

1. Drop the expert's writing into `corpus/` (emails, essays, talks, transcripts)
2. Open this repo in Claude Code
3. Say: **"make me a ghost for [expert name]"**

Claude runs the extraction pipeline and writes the result to `ghosts/`. Minimum corpus: ~5 substantial documents.

---

## Extraction pipeline

Four passes over the corpus:

| Pass | Extracts |
|---|---|
| A — Heuristic Extraction | Decision rules: IF [scenario] THEN [action] BECAUSE [principle] |
| B — Principle Mapping | Foundational beliefs, grouped by domain |
| C — Bias Identification | Consistent stances, intensity, canonical framing |
| D — Voice Archaeology | HOW they write: capitalization, sign-offs, rhythm, tics |

---

## Repo structure

| File / Dir | Purpose |
|---|---|
| `ghosts/` | Built ghosts — one file per expert |
| `corpus/` | Drop source material here |
| `Ghost_Principles.md` | Template for a ghost's system prompt |
| `extraction-prompts.md` | The four extraction passes |
| `eval-prompt.md` | Standard prompt for token density eval |
