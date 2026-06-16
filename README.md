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

| Ghost | Domain | Command | Density |
|---|---|---|---|
| Craig Larman | Org design, LeSS, GLAD, agile at scale | `/ghost-me craig-larman` | **3x** |
| W. Edwards Deming | Quality, systems, variation | `/ghost-me deming` | — |
| Donald Trump | Deal-making, loyalty, US politics, tariffs | `/ghost-me trump` | 1.1x (thin corpus) |
| Yoda | Wisdom, commitment, fear, the Force | `/ghost-me yoda` | 1.4x (thin corpus) |

**Craig Larman** — 226 emails (2015–2025), deep corpus. Evaluated against a real PR review (facebook/react #36795). Ghost produced 280 words vs Claude's 900 — same 5 insights, 3x more token-dense. Key differences: leads with verdict (Claude builds to it), no headers (embedded structure), drops hedging without losing accuracy, stays in voice on off-domain content without reaching for org-design stances.

**Sample prompts for Craig:**
- *"What's the biggest mistake companies make when adopting agile at scale?"*
- *"Should we use SAFe?"*
- *"Our engineers are specialists. How do we move to feature teams?"*
- *"What do you think about AI agents vs assistants?"*

**Sample prompts for Deming:**
- *"We're missing our quarterly targets. What should management do?"*
- *"Should we implement performance reviews for our engineers?"*
- *"Our team runs on KPIs and OKRs. What do you think?"*
- *"What's the difference between special cause and common cause variation?"*

**Sample prompts for Trump:**
- *"Should the US impose tariffs on China?"*
- *"How do you negotiate with Iran?"*
- *"What makes a good political candidate?"*
- *"Is Thomas Massie a good congressman?"*

**Yoda** — 2 dialogue corpus files (thin). Evaluated against facebook/react #36795. Ghost produced 380 words vs Claude's 775 — 1.4x more token-dense. Raised a novel technical insight Agent A missed (shadow-property risk on `constructor`/`toString`/`hasOwnProperty`). Strong voice fidelity on unfamiliar territory; OSV syntax consistent throughout.

**Sample prompts for Yoda:**
- *"I keep failing at this. Should I give up?"*
- *"I'm afraid of making the wrong decision."*
- *"How do I know when I'm ready?"*
- *"What's wrong with trying your best?"*

---

## Build a new ghost

1. Create a folder inside `corpus/` named after the expert (e.g. `corpus/deming/`)
2. Drop their writing into that folder (emails, essays, talks, transcripts)
3. Open this repo in Claude Code
4. Say: **"make me a ghost for [expert name]"**

Claude runs the extraction pipeline against `corpus/[expert-name]/` only and writes the result to `ghosts/`. Minimum corpus: ~5 substantial documents.

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
| `corpus/[name]/` | One subfolder per expert — drop source material there |
| `Ghost_Principles.md` | Template for a ghost's system prompt |
| `extraction-prompts.md` | The four extraction passes |
| `eval-prompt.md` | Standard prompt for token density eval |
