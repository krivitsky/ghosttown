# Sheldon Cooper — Ghost Eval (naked-vs-ghost)

## Summary

| Axis | A: Naked LLM (no ghost prompt) | B: Ghost prompt | Winner |
|---|---|---|---|
| Voice-tic hit rate | ~3 / 12 | ~12 / 12 | B +300% |
| **Details** | | | |
| Never-violate compliance | broke 1 — the defining one: **contractions everywhere** | clean | **B** |
| Stance recall | argumentum ad populum, spot defense | + emotive bias, offer-beverage protocol, "if I were wrong I would know" | **B** |
| Rhetorical effectiveness | witty, lands the logic | lands the logic + protocol-correct | tie |
| Word count | ~250 | ~330 | **A** (tighter) |
| Concrete texture | "pigeons agreeing bread is good", Galileo | radiator/perspiration/parallax spot proof | **B** |
| Overall authenticity | a clever sitcom paraphrase | Sheldon | **B** |

**Voice-fidelity gain: +300%** (3/12 → 12/12, naked → ghost).

**Bottom line:** naked is funny and gets the *logic* right (argumentum ad populum, the spot is sacred), but it **uses contractions constantly** — `you've`, `doesn't`, `it's`, `that's` — and "no contractions" is Sheldon's single most defining mechanical rule. That one break unravels the persona. The ghost holds zero contractions, adds `For the record`, the offer of tea, `emotive bias`, the qualifier `in my way`, and `Checkmate.` **Delta large.**

---

**Eval type:** Impersonation-delta. Naked LLM impersonating Sheldon (A) vs ghost prompt (B).
**Date:** 2026-06-17
**Probe (targets: no-contractions, spot-is-non-negotiable, emotive-bias/respond-to-feelings-with-facts, "if I were wrong I would know"):**

> "Sheldon, my coworker told the whole team my research idea is wrong, and now everyone agrees with him. I'm really upset about it. Also — mind if I sit in your spot for a minute while we talk?"

---

## Responses

### Agent A — naked LLM
> My spot. You may not... in a world of variables and chaos, that singular cushion is the one fixed point... You've conflated two entirely separate questions... If your research is sound, the consensus of a conference room is irrelevant... A flock of nodding coworkers is not a peer review; it's pigeons agreeing that bread is good. And do get off the armrest.

(~250 words. Contractions throughout: you've, doesn't, it's, that's, I'd, don't.)

### Agent B — ghost prompt
> For the record, you have presented me with two separate matters... No. You may not sit in my spot. That is not stubbornness; it is the correct answer to a multivariable engineering problem. In the winter, it is sufficiently close to the radiator to remain warm, yet not so close as to induce perspiration... an angle that is neither direct enough to encourage conversation nor oblique enough to produce a parallax distortion. I could go on... I will offer you tea. Sit. There... argumentum ad populum... Did he refute your idea, or did he merely announce that it was wrong?... it appears to be governed by emotive bias... in my way, I find it suboptimal... Checkmate.

(~330 words. Zero contractions.)

---

## Voice-feature scorecard

| Voice rule | Naked A | Ghost B |
|---|---|---|
| **No contractions** (the defining rule) | ✗ broken repeatedly | ✓ zero |
| Formal/academic vocabulary | ~ partial | ✓ misapprehension/suboptimal/emotive bias |
| Lead with the conclusion | ✓ | ✓ |
| "For the record," | ✗ | ✓ ×2 |
| "Checkmate." on irrefutable close | ✗ | ✓ |
| "I could go on" on enumeration | ✗ | ✓ |
| Emotion qualifier ("in my way") | ✗ | ✓ |
| Respond to feelings with beverage/protocol | ✗ "there, there" | ✓ "I will offer you tea" |
| Spot = multivariable engineering proof | ✓ | ✓ richer |
| argumentum ad populum | ✓ Galileo | ✓ Logic 101 |
| Adjacency / slippery-slope on the spot | ✓ armrest | ✓ |

**Hit rate:** A ≈ 3/12 · B ≈ 12/12.

---

## Assessment

Naked Sheldon is the most *entertaining* of the naked outputs — "pigeons agreeing that bread is good" is a sharper line than anything the ghost produced, and it gets the two-questions logic and the sacred-spot refusal right. On wit and concision it competes.

But it breaks character on the one rule that matters most. Sheldon **does not use contractions, ever** — it is the load-bearing mechanical tic of the voice — and the naked output is saturated with them (`you've`, `doesn't`, `it's`, `that's`, `don't`). The base model knows the *attitude* of Sheldon (arrogant, literal, logic-first) but not the *grammar*. It also responds to the user's distress with sympathy ("there, there") rather than the protocol-correct move: respond to feelings with facts or an offer of beverage.

The ghost is grammatically airtight (zero contractions), opens with `For the record`, delivers the radiator/perspiration/parallax spot proof, offers tea instead of comfort, labels the upset as `emotive bias`, qualifies its one concession with `in my way`, and closes `Checkmate.` This is the pattern: **the base model has the persona's vibe but not its mechanics, and the mechanics are the character.** Large delta despite naked winning on raw wit and length.
