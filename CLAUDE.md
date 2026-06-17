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

### 5. Run the naked-vs-ghost eval

**Why this baseline.** Famous people are already partly baked into the base model. Comparing the ghost to *default Claude with no persona* measures the wrong thing — default Claude is not trying. The real question is: **what does our ghost prompt add over the LLM's own impression of this person?** So the baseline is a naked LLM *actively impersonating* the persona.

**Pick one in-domain probe prompt.** A single question in the persona's domain, **chosen to target 2–4 of their `Never violate these` rules** — that is exactly where a naked impression cracks (it gets the surface voice but smooths away mechanical tics and misses documented stances). Not in the corpus verbatim. One probe per ghost.

**Run two subagents in parallel:**
- **Agent A — naked:** "You are [Name]. Respond in first person, in character." No ghost file. Answer the probe.
- **Agent B — ghost:** read `ghosts/[slug].md`, adopt it fully, answer the same probe.

**Then the main agent scores both** on these axes (fill the summary table at the top of the eval file):

| Axis | What it measures |
|---|---|
| Voice-tic hit rate | % of the ghost's `Write like this` rules present (count them) |
| Never-violate compliance | how many hard rules each response honored (binary per rule) |
| Stance recall | did it surface the *specific* documented positions, or generic ones? |
| Rhetorical effectiveness | did it actually answer / win the exchange? |
| Word count | denser is usually better |
| Concrete texture | specific hooks, numbers, names — naked sometimes wins here |
| Overall authenticity | believable-generic vs. consistent-under-pressure |

**Headline metric = fidelity delta (B − A).** A ghost earns its keep only if it beats the naked impression. Note: delta is **largest for voices with a mechanical signature** the base model erases (Larman's lowercase-`i` + `c` sign-off, Sheldon's no-contractions, Deming's `— Deming` + sampling specifics) and **smallest for heavily-memorized fictional characters** (Yoda) where the base model already owns the voice.

Write `ghosts/[slug]-eval.md` — summary table at the very top (axes above, winner per axis, one bottom-line sentence), then: the probe, both responses verbatim, the voice-feature scorecard, and the assessment. See `ghosts/donald-trump-eval.md` as the reference format.

#### 5b. Density eval (secondary metric)

Separately, measure how token-dense the ghost is. Run two subagents on the **standard PR-review prompt in `eval-prompt.md`** (same stimulus for every ghost = comparable across the table):
- **Agent A:** default Claude, no persona.
- **Agent B:** the ghost (`ghosts/[slug].md` as system prompt).

Compute the density ratio = default's words-per-insight ÷ ghost's words-per-insight (>1x = ghost is denser). Then write **Agent B's response** to `ghosts/[slug]-sample.md` with a **Density Analysis** block on top:

```
# [Full Name] — Eval Sample

## Density Analysis

**[ratio]x vs default Claude** · ~[N] words

[2–3 lines: is it above or below 1x, and *why* — which voice mechanics compress (Larman's lowercase/abbreviations, Yoda's OSV) or inflate (Sheldon's no-contractions + enumeration, Trump's repetition). For verbose personas note that density is the wrong metric and fidelity is the point. If no baseline was run, write "Not measured" and say so.]

---

**Sample Prompt:** [one-line description] — full text: [eval-prompt.md](../eval-prompt.md).

**Sample Response:**

[ghost response verbatim]
```

(The `Sample Prompt` line is a one-line summary only — the verbatim stimulus lives in `eval-prompt.md`; always link it.)

### 6. Register in README

Add the ghost to the **Available ghosts** table in `README.md` — two metric columns, **Eval** and **Density**:

```
| [Full Name] | [2–4 word domain summary] | `/ghost-me [slug]` | [+NNN%](ghosts/[slug]-eval.md) | [X.Yx](ghosts/[slug]-sample.md) |
```

- Domain: pick the 2–4 words that best describe their expertise, not their biography
- **Eval:** voice-fidelity gain of the ghost over the naked impression, as a single relative % — `(ghost_hits ÷ naked_hits − 1) × 100`, e.g. `3/14 → 14/14` becomes `+367%`. Link to `-eval.md`.
- **Density:** the density ratio from 5b, e.g. `1.4x`. Link to `-sample.md`.
- If either eval was skipped, write `—` (no link) in that column.

### 7. Bump plugin version

Increment the minor version in `.claude-plugin/plugin.json` (e.g. `0.2.0` → `0.3.0`). Each new ghost = one minor bump.

### 8. Report

Tell the user:
- Ghost file location
- How many heuristics, principles, biases, voice features extracted
- Which items are `pending` HITL review
- The fidelity delta from the eval (naked vs ghost voice-tic hit rate) and which never-violate rules the naked baseline broke
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
