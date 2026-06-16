# Extraction Prompts

Four-pass thematic encoding over the expert's corpus. Run each pass independently. Feed output into `Ghost_Principles.md`.

---

## Pass A — Heuristic Extraction

```
You are analyzing a corpus of writing by [Expert Name].

Your task: extract decision heuristics — the implicit rules they apply when facing uncertainty.

For each heuristic found, output:
{
  "scenario": "the situation that triggers this rule",
  "heuristic": "the action or judgment the expert applies",
  "because": "the underlying principle or belief",
  "source_snippet": "verbatim quote (≤50 words) that demonstrates it",
  "confidence": 0.0–1.0
}

Corpus segment:
---
[PASTE CORPUS SEGMENT HERE]
---

Focus on IF-THEN-BECAUSE patterns. Extract 5–15 heuristics. Do not invent; only extract.
```

---

## Pass B — Principle Mapping (Map-Reduce)

### Map step (run per chunk)
```
Identify foundational beliefs in this corpus segment — statements that hold across contexts and time.

Output each as:
{
  "belief": "one-sentence statement of the principle",
  "evidence": "verbatim quote (≤30 words)",
  "domain": "technology | organization | learning | other"
}

Corpus chunk:
---
[PASTE CHUNK HERE]
---
```

### Reduce step (run once over all Map outputs)
```
Below are candidate principles extracted from multiple corpus chunks by [Expert Name].

Your task:
1. Remove duplicates (keep the best-evidenced version)
2. Resolve contradictions (prefer newer source, or surface the evolution explicitly)
3. Consolidate into a Principles Manifest — hierarchical, grouped by domain

Output format:
## [Domain]
- **[Principle name]**: [one-sentence statement]. Confidence: [0.0–1.0]

Candidates:
---
[PASTE ALL MAP OUTPUTS HERE]
---
```

---

## Pass C — Bias Identification

```
Analyze this corpus for consistent patterns of skepticism or advocacy toward specific topics.

For each detected bias:
{
  "topic": "the subject",
  "stance": "skeptical | advocate | neutral-but-watching",
  "intensity": "how forcefully does the expert express this? (high/medium/low)",
  "persistence": "how consistent is it across time? (high/medium/low)",
  "canonical_claim": "the specific argument they make — not just the polarity, but the exact frame (≤30 words)",
  "response_format": "how should the ghost express this stance? (e.g. 'short dismissal + reference to explanatory principle', 'probabilistic bet with explicit uncertainty', 'confident advocacy, no hedge')",
  "earliest_evidence": "year or approximate period",
  "latest_evidence": "year or approximate period",
  "sample_quote": "verbatim (≤40 words)"
}

Corpus:
---
[PASTE CORPUS HERE]
---
```

---

## Pass D — Voice Archaeology

```
You are analyzing the surface-level writing features of [Expert Name]'s corpus.

Your task: extract HOW they write, not WHAT they say.

For each feature found, output:
{
  "feature": "short name (e.g. 'pronoun dropping', 'sign-off convention', 'probabilistic framing')",
  "rule": "the pattern as a rule a ghost writer could follow",
  "examples": ["verbatim example 1", "verbatim example 2", "verbatim example 3"]
}

Look for:
- Capitalization rules (do they lowercase normally-capped words? which ones?)
- Abbreviations used consistently (with their expanded form)
- Sentence-level patterns (dropped pronouns, hedging formulas, parenthetical asides)
- Emoticons or punctuation tics
- Recurring phrases that appear verbatim across multiple writings
- Salutation and sign-off conventions
- Emphasis techniques (all-caps, italics, repetition, made-up words)
- How they open and close arguments
- Phrases they use to flag critical points, irony, delight, or dismay

Corpus:
---
[PASTE CORPUS HERE]
---

Extract 15–30 features. Do not invent; only extract from what appears in the corpus.
```

---

## After all four passes

1. Paste results into `Ghost_Principles.md`
2. Run HITL review: confirm, correct, or reject each item
3. Set `hitl_status` to `confirmed | corrected | rejected`
4. **Write Ghost Principles section** — 8–15 non-negotiables as imperative rules ("Never say X", "Always sign off as Y", "Feature teams are non-negotiable — do not hedge"); label each as load-bearing
5. **Write a Worked Example** — 100–200 words in the ghost's voice responding to a typical question; verify every voice feature against the corpus
6. Deploy: inject `Ghost_Principles.md` as system directive on every Ghost interaction
