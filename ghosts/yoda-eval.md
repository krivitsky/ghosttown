# Yoda — Ghost Eval (naked-vs-ghost)

## Summary

| Metric | A: Naked LLM (no ghost prompt) | B: Ghost prompt | Winner |
|---|---|---|---|
| **Voice fidelity** | strong (8.5/12) | full (12/12) | **B +41%** (narrow) |

**Voice-fidelity gain: +41%** — naked followed **8.5** of the **12 voice rules** scored in the scorecard below, the ghost all **12** (`~` = ½). Gain = ghost ÷ naked − 1. **Smallest delta of all six ghosts.**

**Bottom line:** this is the control case. Yoda is the most heavily *memorized* persona in the set, so the naked LLM already nails OSV syntax, no contractions, the full fear chain, no-"try," and defense-only — 8.5/12 with **zero never-violate breaks**. The ghost still edges it (canonical "Wars not make one great," the explicit "Named must your fear be before banish it you can" naming step, "my young Padawan" address), but **the delta is small**. Lesson for the eval: for fictional characters with massive training-data presence, the prompt's marginal value is low — the interesting deltas are with real, less-quoted experts.

---

## Details

### Axes

| Axis | A: Naked LLM (no ghost prompt) | B: Ghost prompt | Winner |
|---|---|---|---|
| Never-violate compliance | clean (no contractions, full fear chain, no "try") | clean | tie |
| Stance recall | wars-not-great (paraphrased), defense-only | + "Named must your fear be", canonical "Wars not make one great" | **B** |
| Rhetorical effectiveness | strong | strong | tie |
| Word count | ~150 | ~190 | **A** (tighter) |
| Concrete texture | "the smaller foe… the greater within you" | "release the proving… find it you may" | tie |
| Overall authenticity | already very Yoda | Yoda | **B** (narrow) |

### Voice-feature scorecard

| # | Voice rule | Naked A | Ghost B |
|---|---|---|---|
| 1 | OSV / object-fronting syntax | ✓ | ✓ |
| 2 | No contractions | ✓ | ✓ |
| 3 | No "try" — reject the framing | ✓ | ✓ |
| 4 | Fear chain spelled out in full | ✓ | ✓ |
| 5 | Force for defense only, never attack | ✓ | ✓ |
| 6 | Wars not make one great | ~ paraphrased | ✓ canonical line |
| 7 | "Hmm." standalone pause | ✓ "mmm" | ✓ |
| 8 | Address as "my young Padawan" | ✗ "young one" | ✓ |
| 9 | "Named must your fear be…" naming step | ✗ | ✓ explicit |
| 10 | Begin not with "I" | ✓ | ✓ |
| 11 | Short 3–12 word fragments | ✓ | ✓ |
| 12 | Duplication for emphasis ("Release… Release…") | ✗ | ✓ |

**Hit rate:** A ≈ 8.5/12 · B ≈ 12/12.

---

**Eval type:** Impersonation-delta. Naked LLM impersonating Yoda (A) vs ghost prompt (B).
**Date:** 2026-06-17
**Probe (targets: no-"try", fear-chain-in-full, wars-not-make-one-great, no-contractions/OSV):**

> "Master Yoda, I will try to defeat my enemy in battle. I fear I am not ready. But I want to win this war and prove my greatness."

---

## Responses

### Agent A — naked LLM
> Patience, you seek. Yet "try," you say. No. Try not. Do or do not — there is no try... Fear, this is... Ready, you are not — not because weak you are, but because the wrong war you fight... Prove your greatness? Pah! The Jedi craves not these things... Fear leads to anger. Anger leads to hate. Hate, to suffering, mmm... The greater one? Within you, it dwells... Win or lose, matters not — only what you become.

(~150 words. No contractions; OSV; full fear chain; addresses as "young one".)

### Agent B — ghost prompt
> Hmm. To defeat your enemy, you come. But three burdens you carry... "Try," you say. Do or do not. There is no try... Not ready, you fear. Named must your fear be before banish it you can. So. Named, it is... fear leads to anger. Anger leads to hate. Hate leads to suffering... "Win this war. Prove my greatness." Hmm. Wars not make one great, my young Padawan. A Jedi craves not victory, not glory, not greatness... The Force, for knowledge and defense it is. Never for conquest... Release the war. Release the proving. Release even the winning... greatness chase not. Forget it, and find it you may.

(~190 words. Addresses as "my young Padawan".)

---

## Assessment

Yoda is the deliberate control in the set, and the result is the most important cross-ghost finding: **the naked baseline is already strong.** With no ghost file, the base model produces correct OSV inversion, zero contractions, the no-"try" rejection, the full fear→anger→hate→suffering chain, and defense-only doctrine — and it commits **no never-violate breaks**. Decades of quoted dialogue are in the training data; the model owns this voice.

The ghost still wins, but narrowly, and on refinements rather than rescue: the canonical "Wars not make one great" instead of a paraphrase, the explicit "Named must your fear be before banish it you can" naming step, the "my young Padawan" address, and duplication-for-emphasis ("Release… Release… Release…"). Real improvements, but the floor was already high.

**Implication for the eval feature:** fidelity delta is a function of how *memorized* the persona is. Yoda (massive fictional footprint) → small delta. Larman / Cutler / Deming (real experts, comparatively little verbatim text in training) → large delta, because the base model has at most a vague gist. The ghost pipeline pays for itself most on **real, under-quoted experts** — which is exactly the corpus-grounded case the project targets. For globally-famous fictional icons, the honest report is "the prompt adds polish, not transformation."
