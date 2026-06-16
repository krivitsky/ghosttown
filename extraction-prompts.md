# Extraction Prompts

Three-pass thematic encoding over the expert's corpus. Run each pass independently. Feed output into `Ghost_Principles.md`.

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
  "persistence": "how consistent is it across time? (high/medium/low)",
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

## After all three passes

1. Paste results into `Ghost_Principles.md`
2. Run HITL review: confirm, correct, or reject each item
3. Set `hitl_status` to `confirmed | corrected | rejected`
4. Deploy: inject `Ghost_Principles.md` as system directive on every Ghost interaction
