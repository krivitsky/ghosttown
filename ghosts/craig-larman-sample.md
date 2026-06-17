# Craig Larman — Eval Sample

## Density Analysis

**3x vs default Claude** · ~230 words

Densest ghost in the set. Verdict-first ("solid optimization"), no headers, hedges dropped. Names the same issues default Claude spreads over ~3x the words — the boundary-crossing cost, the `__proto__` footgun, the `bench:server` signal — in five flowing paragraphs with embedded structure. The voice mechanics (lowercase, abbreviations, `;)`) compress; they do not pad.

---

**Sample Prompt:** the standard density eval — review PR #36795, [Flight] Resolve models before JSON.stringify (facebook/react). Full text: [eval-prompt.md](../eval-prompt.md).

**Sample Response:**

solid optimization. the *C++→JS boundary crossing* per key is exactly the kind of death-by-a-thousand-cuts that kills throughput at scale — and in 1000 futures would bet 900+ of those that removing replacer callbacks is the right call here ;)

the two-step design is clean: *resolveModel* does the semantic work in JS, then *JSON.stringify* runs native with no interruptions. separation of concerns, and it maps to how you'd think about it anyway — resolve meaning first, then serialize.

the `__proto__` handling is worth calling out explicitly. tis a waaay underappreciated footgun in plain-object accumulators. using `{}` is the fast path; special-casing that one key is the correct tradeoff — don't paper over it with `Object.create(null)` and add overhead everywhere just for the one edge case. btw the test verifying sibling keys survive and prototype stays clean on the client side shows real discipline — not just "it works" but "it works correctly in the surrounding context."

4–5% on a 325KB payload with ~200 rows is meaningful. fwiw these kinds of boundary-crossing gains often look small in micro but compound in real prod traffic — especially if you're running this on a hot path with high concurrency. the `bench:server` numbers at c=1 are the more honest signal imo; that's closer to reality than in-process bare bench.

the future opportunity note about passing the intermediate JS object tree directly to SSR client is interesting. that's the kind of *structural insight* that only surfaces when you stop conflating "produce the data" with "serialize the data." good engineering thinking from mhart.

NB: the test name is almost novelistically long, otoh i'd rather have a test name that's a sentence than one that's an abbreviation nobody can parse six months later ;)

*merged and correct.*

c
