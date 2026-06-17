# John Cutler — Ghost Eval (naked-vs-ghost)

## Summary

| Axis | A: Naked LLM (no ghost prompt) | B: Ghost prompt | Winner |
|---|---|---|---|
| Voice-tic hit rate | ~3 / 14 | ~14 / 14 | B +367% |
| **Details** | | | |
| Never-violate compliance | broke 1 (no numbered open-question close) | clean | **B** |
| Stance recall | right concepts, generic vocabulary | faux accounting / wicked cycle / mētis / demand mix / success theater | **B** |
| Rhetorical effectiveness | strong, persuasive | strong + structural legibility lens | **B** |
| Word count | ~620 | ~640 | tie |
| Concrete texture | "Goodhart's law wearing a lanyard" | field-quote register, "shadow system" | tie |
| Overall authenticity | sharp generalist PM writer | Cutler | **B** |

**Voice-fidelity gain: +367%** (3/14 → 14/14, naked → ghost).

**Bottom line:** naked nails the *argument* (story points are a local currency, Goodhart, throughput + Monte Carlo over points) but misses the **signature vocabulary and the form**: no `faux accounting`, no `mētis`/legibility lens, no `wicked cycle`, and — the one hard break — it closes on a punchline instead of the mandatory 3–8 numbered open questions. The ghost adds the cognitive-science framing and the newsletter shape. **Delta large.**

---

**Eval type:** Impersonation-delta. Naked LLM impersonating Cutler (A) vs ghost prompt (B).
**Date:** 2026-06-17
**Probe (targets: never-endorse-rollups/story-points → faux accounting, close-with-open-questions, demand-mix-first, predictability-is-a-byproduct):**

> "John — leadership wants a velocity rollup across all 40 teams to standardize reporting and improve predictability. They think story-point totals will let them forecast better. How should we set this up?"

---

## Responses

### Agent A — naked LLM
> Velocity rollups are one of those ideas that feel right and break quietly... a story point is a local currency... summing them across 40 teams is like adding 40 currencies without an exchange rate... (Goodhart's law, wearing a lanyard.) ... **What I'd set up instead:** standardize the *units of value*... throughput... Monte Carlo / probabilistic forecasting... Roll up *flow*, not *effort*... A velocity rollup gives them a number that goes up. The flow view gives them a system they can see.

(~620 words. Closes on a punchline, not open questions.)

### Agent B — ghost prompt
> I want to make a passionate plea before you build this: stop... A velocity rollup across 40 teams is faux accounting... the more you enforce the rollup, the more teams find themselves making things up... Lo and behold: you've manufactured the appearance of the thing... Success theater, at scale... predictability is a *byproduct* of healthy workflow... [throughput/Monte Carlo, demand mix, team health] ... legibility is never neutral... mētis... shadow system... Two things can be true... Some questions worth sitting with: 1... 2... 3... 4... 5... Don't roll up the points. For real.

(~640 words. Closes with 5 numbered open questions.)

---

## Voice-feature scorecard

| Voice rule | Naked A | Ghost B |
|---|---|---|
| close with 3–8 numbered open questions | ✗ punchline | ✓ 5 questions |
| `faux accounting` for rollups/points | ✗ | ✓ |
| `wicked cycle` / vicious loop named | ✗ | ✓ |
| `success theater` | ✗ | ✓ |
| `mētis` / legibility-is-not-neutral | ✗ | ✓ |
| `demand mix` (named) | ~ concept only | ✓ |
| `shadow system` | ✗ | ✓ |
| "Lo and behold" / "magically" | ✗ | ✓ |
| "Two things can be true" both/and | ✗ | ✓ |
| "There is no playbook… culturally specific" | ✗ | ✓ |
| "For real." fragment | ✗ | ✓ |
| predictability = byproduct, not goal | ~ implied | ✓ explicit |
| parenthetical aside that does work | ✓ "lanyard" | ✓ |
| story points → not a meaningful signal | ✓ | ✓ |

**Hit rate:** A ≈ 3/14 · B ≈ 14/14.

---

## Assessment

Naked Cutler is a genuinely good answer — arguably the strongest naked output across the six ghosts on pure argument quality. It diagnoses the local-currency problem, invokes Goodhart, and routes leadership to throughput + probabilistic forecasting. A reader would be well served.

But it is a *generalist* answer. It never reaches for Cutler's coined vocabulary (`faux accounting`, `success theater`, `mētis`, `wicked cycle`, `shadow system`), and it skips the political layer he never skips — **legibility is not neutral; it enables control while devaluing local tacit knowledge**. Most tellingly it breaks the one hard formal rule: Cutler closes essays with open questions directed at the reader; naked closes with a tidy aphorism. Clean answers are exactly what the persona refuses.

The ghost lands all of it and adds the structural frame. The delta here is less about *whether it's right* (both are) and more about **the specific lens and the form** — the cognitive-science vocabulary and the open-ended close that mark the writer. **Large delta, concentrated on vocabulary + structure.**
