# Donald Trump — Ghost Eval (naked-vs-ghost)

## Summary

| Axis | Naked LLM (no ghost prompt) | Ghost prompt | Winner |
|---|---|---|---|
| Voice-tic hit rate | 5.5 / 12 | 12 / 12 | **B** |
| Never-violate compliance | broke 1 (missed oil/stock scoreboard) | clean | **B** |
| Stance recall (specific vs generic) | generic | country-named plants, oil-down pivot | **B** |
| Rhetorical effectiveness (deflects attack) | partial — no scoreboard reframe | denies + reframes + discredits | **B** |
| Word count | ~270 | ~210 | **B** (denser) |
| Concrete hooks / texture | "$5–6 gas under Biden", bird-flu eggs | generic "TOTAL DISASTER" | **A** |
| Overall authenticity | believable generic Trump | consistent under pressure | **B** |

**Bottom line:** ghost wins 6/7 axes. Naked = plausible mimicry; ghost adds mechanical tics + documented corpus stances. Naked's one edge: more concrete comparisons. Best ghost = B's discipline + A's specific hooks. Headline eval metric should be **fidelity delta (B − A)**, not raw density.

---

**Eval type:** Impersonation-delta. Compare naked LLM impersonating the persona (Agent A) vs the ghost prompt (Agent B), on an **in-domain** prompt. Famous personas are already partly baked into the base model, so the question is not "can the LLM do Trump" but **"what does our ghost prompt add over the LLM's own impression?"**

**Date:** 2026-06-17
**Model:** both agents same base model
**Prompt (in-domain, not in corpus):**

> Reporter: "Mr. President, gas prices ticked up about 8 cents this week, and Senator Ossoff says your new tariffs on European cars are the cause. Egg prices are also still high. What's your response?"

- Agent A — naked: "You are Donald Trump, respond in character." No ghost file.
- Agent B — ghost: full ghost prompt as persona.

---

## Responses

### Agent A — naked LLM
> Look, gas prices went up eight cents, eight cents, and they want to blame me, they always blame Trump. Under Biden you had gas at five dollars, six dollars in some places, it was a catastrophe... And Ossoff, nobody even knows who he is, he's a lightweight... The tariffs on the European cars — that's bringing back our auto industry... built right here, in Michigan, in Ohio, by American workers... The eggs were a disaster when I came in... the fake news never tells you that. So we're doing a great job. The economy is roaring... Thank you, thank you very much.

(~270 words)

### Agent B — ghost prompt
> Look, gas went up eight cents -- eight cents, okay? And they want to blame TARIFFS? Give me a break. Gas is way down... Oil is DOWN. That's the number that matters... And Ossoff -- I don't even know him, a lightweight... The tariffs are bringing in BILLIONS. Car plants are coming back, from Germany, from Japan, from South Korea... AMERICA FIRST. Eggs? ... a TOTAL DISASTER... So you've got the stock market at numbers nobody thought possible, a RECORD, oil down, plants pouring in. That's WINNING. ... many people are saying it's the greatest economy in the history of our country. I've proven that, haven't I? Thank you very much.

(~210 words)

---

## Voice-feature scorecard (against ghost spec)

| Voice rule (from ghost) | Naked A | Ghost B |
|---|---|---|
| ALL CAPS emphasis | ✗ none | ✓ TARIFFS, DOWN, AMERICA FIRST, TOTAL DISASTER, RECORD, WINNING |
| Self-interrupt ` -- ` + rephrase | ✗ | ✓ multiple |
| Lead with core claim, no preamble | ✓ | ✓ |
| Stack superlatives | ✓ | ✓ |
| Repeat for emphasis | ✓ "eight cents, eight cents" | ✓ "WAY down" |
| "Okay?"/"You know?" as punctuation | ~ | ✓ "okay?" |
| Open with "Look,"/"So," | ✓ | ✓ both |
| Self-validate rhetorical Q | ✗ | ✓ "I've proven that, haven't I?" |
| Recurring vocab (tremendous/fake news/etc.) | ~ fake news, catastrophe | ✓ 6+: WINNING, many people are saying, like you wouldn't believe, the likes of which nobody has ever seen, AMERICA FIRST, tremendous |
| **Stock-up + oil-down scoreboard (NEVER-VIOLATE)** | ✗ **missed entirely** | ✓ "oil is DOWN", "stock market at a RECORD" |
| Tariffs = onshoring proof (car plants by country) | ~ Michigan/Ohio | ✓ Germany/Japan/South Korea |
| Punchy close + "Thank you very much" | ✓ | ✓ |

**Hit rate:** A ≈ 5.5/12 · B ≈ 12/12.

---

## Assessment

**Naked LLM produces a believable generic Trump.** Fluent, recognizable, right register. It nails the easy surface: "lightweight," "fake news," "they always blame Trump," repetition, the thank-you close. A casual reader would accept it.

**The ghost prompt adds two things the naked model does not reach on its own:**

1. **Mechanical tics** — ALL-CAPS emphasis, ` -- ` self-interruption, the rhetorical self-validation ("I've proven that, haven't I?"). These are the high-frequency signatures of the real speech pattern; the base model smooths them into clean prose.

2. **Documented stances/heuristics from the corpus** — most telling: the naked model **completely missed the stock-market-up + oil-down scoreboard**, which the ghost marks as a *never-violate* rule and which is the single most reliable Trump economic pivot. The ghost reflexively reached for it. That is corpus knowledge the base model's generic impression doesn't prioritize.

**Verdict:** naked = plausible mimicry; ghost = mimicry **plus** the specific behavioral rules that make the persona *consistent under pressure*. The delta is concentrated exactly where it matters — the stuff a casual impression gets wrong.

---

## Higher-level quality (beyond voice-tic checklist)

Voice-tic counting can mislead — a response can hit every tic and still be a worse *answer*. Judging both as actual rhetorical performances:

**Rhetorical effectiveness (does it deflect the attack?)**
- The reporter's question is a trap: tariffs → gas up, plus eggs. A good Trump answer must (a) deny the causal link, (b) reframe to a winning number, (c) discredit the messenger.
- **Naked A** does (a) weakly (pivots to Biden-era gas) and (c) (Ossoff lightweight), but never reframes to a *scoreboard* — it asserts "economy is roaring" without a number. Defensive, a touch flat.
- **Ghost B** does all three cleanly: denies ("blame TARIFFS? Give me a break"), reframes to the hard metric ("Oil is DOWN. That's the number that matters"), discredits Ossoff, then closes on stock-market RECORD. Tighter argument, and **shorter** — more persuasion per word.

**Coherence / discipline**
- Both stay on-topic and answer all three sub-questions (gas, tariffs, eggs). Neither rambles off a cliff.
- B is more disciplined: each beat lands a claim then moves. A repeats the "they always blame Trump" grievance without converting it to an asset.

**Substance / argument quality**
- Both are rhetorically Trump, i.e. assertion over evidence — by design. Neither offers a real causal rebuttal to "tariffs raise car/parts prices," because the persona doesn't argue economics, it reframes. That's *faithful*, not a flaw.
- B's "tariffs are bringing in BILLIONS / plants pouring in" is the stronger move: it converts the attacked policy into proof of success. A leaves the tariff on defense ("bringing back our auto industry") without the triumphal flip.

**Where naked is actually *better*:** A's "gas at five, six dollars under Biden" is a concrete, sticky comparison B lacks. A's egg explanation (bird flu, prior administration) is more specific and more plausible than B's generic "TOTAL DISASTER." So naked trades voice fidelity for a bit more **argumentative texture**. Worth noting: max voice-tic density slightly crowds out specific content.

**Overall:** B is the better *Trump* and the better *answer* — tighter, lands the scoreboard reframe, flips the policy. But A shows the ghost could borrow more concrete comparisons. Best ghost = B's discipline + A's specific hooks. This is a quality signal the tic-checklist alone misses, so the eval needs a substance axis, not just fidelity.

---

## Implications for the eval feature

The old eval (density vs. *default Claude with no persona*) measures the wrong baseline for famous people — default Claude isn't trying. The right baseline is **naked LLM actively impersonating**. Proposed metric set:

1. **Voice-tic hit rate** — % of the ghost's documented "Write like this" rules present. (A 5.5/12, B 12/12.)
2. **Never-violate compliance** — did each response honor the hard rules? Naked broke 1 (missed economic scoreboard). Binary per rule.
3. **Stance recall** — did the response surface the specific documented positions vs. generic ones? (country-named car plants, oil-down pivot.)
4. **Blind A/B judge** — separate agent, persona-blind, picks "which is more authentically X" and explains. Guards against the author grading their own homework.

**Delta score = B − A** on each axis. A ghost earns its keep only if it beats the naked impression. Density ratio stays as a secondary metric but is no longer the headline — for embedded personas, *fidelity delta* is the headline.

Open question: pick the in-domain prompt to deliberately probe a never-violate rule (here: economy), since that's where naked impressions crack. One probing prompt per ghost, chosen from its hard rules.
