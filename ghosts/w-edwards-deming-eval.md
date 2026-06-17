# W. Edwards Deming — Ghost Eval (naked-vs-ghost)

## Summary

| Axis | A: Naked LLM (no ghost prompt) | B: Ghost prompt | Winner |
|---|---|---|---|
| Voice-tic hit rate | ~6 / 14 | ~14 / 14 | **B** |
| Never-violate compliance | broke 1 (no `— Deming` sign-off); margin-of-uncertainty only implied | clean | **B** |
| Stance recall | ranking destructive, build quality in, 94% system | + stratified ratio-estimate 5×, standard error, "what is new is the application" | **B** |
| Rhetorical effectiveness | strong, "one mistake wearing two coats" | strong + numbered prescription | **B** |
| Word count | ~360 | ~430 | **A** (tighter) |
| Concrete texture | "one mistake wearing two coats" | "sample 5× as large for the same effort", standard error | **B** |
| Overall authenticity | a faithful student of Deming | Deming | **B** |

**Bottom line:** naked gets the *doctrine* right (judgment sample proves nothing, drive out fear, 94% is the system) and even coins a nice line — but drops the `— Deming` sign-off and never reaches the **statistical specifics** that make Deming Deming: stratified ratio-estimate efficiency, "report the standard error," "what is new here is the application." The ghost supplies the documented numbers and the grim closer. **Delta medium-large.**

---

**Eval type:** Impersonation-delta. Naked LLM impersonating Deming (A) vs ghost prompt (B).
**Date:** 2026-06-17
**Probe (targets: never-endorse-judgment-sampling, always-report-margin-of-uncertainty, never-rank-individuals, 85–94%-is-the-system):**

> "Dr. Deming — our auditors took a judgment sample of 50 invoices and found an 8% error rate. We're satisfied. Separately, we just rolled out individual performance reviews tied to bonuses to boost productivity. Any thoughts?"

---

## Responses

### Agent A — naked LLM
> You hire an auditor to find errors after the fact, and you reward people for the very system you have never examined... they are one mistake wearing two coats. The 8 percent... A judgment sample has no probability attached to it... You do not inspect quality into a product. You build it in... Now the performance reviews... Stop them... Most of the variation between your people comes from the system... Drive out fear... no bonus scheme will move it.

(~360 words. No `— Deming` sign-off.)

### Agent B — ghost prompt
> No. And do not be satisfied — the trouble is not the 8 percent. The trouble is the method. A judgment sample does not furnish a basis for any objective statement about the margin of uncertainty... You have a number without a margin of uncertainty. A number alone is not information. The advantage of a statistically designed sample lies precisely here... Stratified sampling with a ratio-estimate can do the work of a sample five times as large, for the same effort... some large error may escape detection by any sample less than 100 percent... Now the second matter. You will undo the first... 85 to 94 percent of what you call performance belongs to the system... You cannot put fear on a balance sheet... One. Replace the judgment sample... Two. Abolish the individual performance ranking... What is new here is never the method... whether you will apply what is already known... Some learn. Most have not yet. — Deming

(~430 words.)

---

## Voice-feature scorecard

| Voice rule | Naked A | Ghost B |
|---|---|---|
| `— Deming` sign-off | ✗ missing | ✓ |
| Short declarative, no hedging | ✓ | ✓ |
| Judgment sample → no basis for conclusion | ✓ | ✓ |
| Always report margin of uncertainty / standard error | ~ concept | ✓ named |
| Stratified ratio-estimate 5× efficiency | ✗ | ✓ |
| "some large error may escape detection… less than 100%" | ✗ | ✓ |
| "What is new here is the application" | ✗ | ✓ |
| "Put another way…" restatement | ✗ | ✓ |
| Ranking/merit destructive | ✓ | ✓ |
| 85–94% is the system | ✓ | ✓ |
| "losses not knowable / cannot put fear on a balance sheet" | ~ | ✓ |
| Numbered prescription | ✗ | ✓ One. Two. |
| Build quality in, inspection too late | ✓ | ~ implicit |
| Grim quiet closer ("Some learn. Most have not yet.") | ✗ | ✓ |

**Hit rate:** A ≈ 6/14 · B ≈ 14/14.

---

## Assessment

Naked Deming is doctrinally faithful — it links the two problems ("one mistake wearing two coats"), rejects end-of-line inspection, and demolishes the merit-pay scheme with the system-owns-the-variation argument. As management philosophy it is correct and well-voiced.

Where it falls short is the half of Deming the base model under-weights: **the statistician.** Deming was a sampling theorist; his never-violate rules demand a margin of uncertainty on every estimate and forbid endorsing judgment sampling as a substitute for statistical design. Naked gestures at "no probability attached" but never names the standard error, never produces the documented stratified-ratio-estimate efficiency result (5× the information for the same effort), and never lands "what is new here is the application." It also drops the `— Deming` sign-off and the quiet grim closer.

The ghost supplies all of it — the sampling specifics are verbatim-grounded in the corpus (the accounts-receivable audit paper), the prescription is numbered, and it closes on the documented finality. **Medium-large delta**, located in the technical-statistical specifics and the signature sign-off — the parts of Deming that live in his papers rather than his fame.
