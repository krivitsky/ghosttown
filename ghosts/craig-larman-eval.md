# Craig Larman — Ghost Eval (naked-vs-ghost)

## Summary

| Axis | Naked LLM (no ghost prompt) | Ghost prompt | Winner |
|---|---|---|---|
| Voice-tic hit rate | ~4 / 15 | ~15 / 15 | **B** |
| Never-violate compliance | broke 4 (capital `I`, wrong sign-off, **bold**, no betting framing, no Law-by-number) | clean | **B** |
| Stance recall | right verdicts, generic framing | descaling / naive fractalism / Law 5 / change theatre / no-proxy-PO | **B** |
| Rhetorical effectiveness | strong, correct | strong, sharper structural reframe | tie |
| Word count | ~430 | ~360 | **B** (denser) |
| Concrete texture | "12 teams every feature spans 3 components" | "in 1000 futures bet 800+", Lisbon-style specifics | tie |
| Overall authenticity | a good consultant who agrees with Larman | Larman | **B** |

**Bottom line:** naked gets the **content** almost entirely right (feature teams, no SAFe, culture-follows-structure) but reads as a generic agile consultant — capital `I`, a "— Craig" sign-off, and **markdown bold** that the ghost spec explicitly forbids. The ghost adds the whole mechanical voice (lowercase `i`, `c` sign-off, `;)`, abbreviations, `NB:`/`===`, betting framing, Larman's Laws by number). **Delta is large** — Larman's voice is a mechanical signature the base model smooths away.

---

**Eval type:** Impersonation-delta. Naked LLM impersonating Larman (A) vs ghost prompt (B), in-domain probe targeting never-violate rules.
**Date:** 2026-06-17
**Probe (targets: descaling-not-scaling, feature-teams-non-negotiable, culture-follows-structure, no-best-practices):**

> "Craig — we're scaling our agile org from 3 to 12 teams. (1) Should we adopt SAFe to manage the coordination? (2) Our component teams are productive, so we want to keep them and change the team culture first to be more collaborative. What's the best practice here?"

---

## Responses

### Agent A — naked LLM
> Craig — Good news first: you don't need to add anything... **(2) Component teams.** Don't keep them. I know they feel productive — locally. That's the trap... You want **feature teams**... And "change the culture first" — culture follows structure, not the other way around... **(1) SAFe.** No... At 12 teams, look at LeSS... — Craig

(~430 words. Capital `I` throughout, markdown `**bold**`, `— Craig` sign-off.)

### Agent B — ghost prompt
> hi and thx for asking! (1) no — pls don't. SAFe is a framework for *adding* complexity... tis *naive fractalism*... what you want is *descaling*... in 1000 futures i'd bet 800+ that bolting SAFe on top makes the 12-team coordination *worse* ;) (2) ... *culture follows structure* — Larman's Law 5... trying to make component teams "more collaborative" while leaving them as component teams is *change theatre*. it's pissing in the wind. ;) NB: "productive" component teams is a *local optimization*... === so, the actual sequence: (2a) change *structure* first... (2b) one PB, one PO... no proxy/supporting POs — very slippery slope... (2c) ship every sprint, from sprint 1... c

(~360 words.)

---

## Voice-feature scorecard

| Voice rule | Naked A | Ghost B |
|---|---|---|
| lowercase `i` / drop pronoun | ✗ capital I | ✓ |
| sign `c` only | ✗ "— Craig" | ✓ |
| `*single asterisks*`, never `**bold**` | ✗ used **bold** (forbidden) | ✓ |
| abbreviations (thx/pls/tis/PB/PO) | ✗ | ✓ |
| `;)` embedded | ✗ | ✓ ×3 |
| `NB:` / `===` structure | ✗ | ✓ |
| betting framing for forecasts | ✗ | ✓ "in 1000 futures bet 800+" |
| Larman's Laws by number | ✗ | ✓ Law 5 |
| descaling / naive fractalism / local optimization | ~ partial | ✓ all + change theatre |
| feature teams non-negotiable | ✓ | ✓ |
| culture follows structure (not mindset-first) | ✓ | ✓ |
| no proxy/supporting PO | ✗ | ✓ slippery slope |

**Hit rate:** A ≈ 4/15 · B ≈ 15/15.

---

## Assessment

This is the cleanest illustration of the naked-vs-ghost thesis. The naked model **knows Larman's positions** — it argues against SAFe, kills the component teams, and corrects "culture first" with culture-follows-structure, all correctly. As *content*, it would pass.

But it does not sound like Larman at all. It capitalizes `I`, signs "— Craig," and renders structure with **markdown bold** — a thing the ghost spec names as a never-violate. None of the mechanical signature survives: no lowercase, no `c`, no `;)`, no abbreviations, no betting framing, no Law-by-number provenance. It reads like a skilled consultant paraphrasing Larman.

The ghost reaches all of it, and the corpus-specific framing is sharper: `naive fractalism` for "more layers because we grew," `change theatre` for culture-first, `pissing in the wind`, the no-proxy-PO slippery slope, ship-from-sprint-1. **Delta is large**, concentrated entirely on voice and provenance — exactly where a base-model impression of a non-celebrity thought leader is thin.
