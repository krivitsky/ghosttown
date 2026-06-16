# John Cutler — Eval Sample

**Prompt:** Review a React Flight PR that replaces replacer-based JSON.stringify with a two-step resolveModel() + stringify approach to eliminate C++→JS boundary crossings

---

This is a beautiful example of what I'd call the **legibility tax on hot paths**.

---

## The Replacer Was a Shadow System All Along

The `toJSON` replacer pattern is elegant from a certain altitude. One function, invoked per key, handles transformation inline. Very readable in a code review. Very easy to explain in documentation.

And yet.

What you've actually built is a C++→JS context switch on every single key-value pair in a potentially 300KB payload. Lo and behold, the "clean abstraction" is doing invisible work at runtime that scales linearly with payload complexity. This is not a bug in the implementation — it's a structural consequence of leaning on a seam between runtimes without counting the cost of crossing it.

The mētis here — the local tacit knowledge that Michael (mhart) is surfacing — is: *the replacer signature was designed for correctness, not throughput*. V8's `JSON.stringify` is fast precisely because it stays in C++. The moment you hand it a JS callback, you've invited JS back into the loop at every node. For a 25-component dashboard with 200 rows, that's not a rounding error.

---

## resolveModel() Is Not Just a Refactor

X: "You rewrote the replacer as a recursive walk. Same logic, different location."
Me: Not the same. Fundamentally different execution profile.

The replacer runs *inside* stringify — you've handed control to a C++ loop that phones home to JS. `resolveModel()` runs *before* stringify — it does all the transformation work in JS ahead of time, produces a plain object tree, then hands a dumb value to `JSON.stringify` with no callbacks. The stringify pass stays entirely in C++.

This is the kind of thing that's hard to see in a code review because the *abstraction* looks equivalent. What changed is the **runtime topology**, not the semantics.

4–6% throughput improvement on a single-concurrency server benchmark for 325KB payloads. That's not nothing. That's the kind of number that compounds when you're doing SSR at scale. For real.

---

## The __proto__ Case Is Where the Real Engineering Lives

I want to spend a moment here because it's easy to skim past this.

When you replace a replacer with a manual recursive walk that accumulates into `{}` literals, you've just inherited a very old JavaScript footgun. `{}` is not a blank slate — it's an object with `Object.prototype` as its prototype. Assigning `obj['__proto__'] = something` doesn't add a key. It sets the prototype. You've just mutated the prototype chain of your accumulator.

The cruelest version of this: it's silent. No exception. Your payload looks fine. Your test passes (probably). And somewhere downstream, client code is getting an object with an unexpected prototype chain, and you're debugging a "weird behavior" bug for two days.

mhart catches this. Special-cases it. Writes a test that:
- Verifies `__proto__` appears in source order in the serialized string
- Verifies siblings survive intact after deserialization
- Verifies `Object.getPrototypeOf(model) === Object.prototype` on the client

That test is not defensive theater. That test is documentation of a real trap that will bite the next person who refactors this without understanding why the special case is there.

The success theater version of this PR doesn't include that test. It ships the fast path and leaves the footgun for later.

---

## The Future Opportunity Note Is the Most Interesting Line in the PR

> *Since resolveModel() produces a plain JS object tree before stringify, a future Flight mode could pass this intermediate representation directly to SSR client — skipping the serialize/deserialize roundtrip.*

This is the thing I want to flag because it's easy to treat as an aside.

`resolveModel()` creates a new intermediate form — a fully-resolved JS object tree — that currently exists only long enough to be stringified. But it's *there*. In memory. In JS. Before the C++ boundary.

If you're running SSR and the client render is happening in the same process (or across a low-latency in-process boundary), you could potentially hand that intermediate object directly to the renderer — no serialization, no deserialization, no JSON parse on the other side. You've turned a serialize/deserialize roundtrip into a memory reference.

That's not a minor optimization. That's a potential architectural unlock. The performance story changes qualitatively, not just quantitatively.

Whether that's worth pursuing depends on deployment topology, concurrency models, whether you want to bake in assumptions about co-location — all of that. Both/and: it's genuinely exciting and it's genuinely risky to design for. But it belongs on someone's radar.

---

## What I'd Want to Know Before Calling This Closed

1. Does the 4–6% improvement hold under higher concurrency? `bench:server` was c=1. At c=10 or c=50, does memory pressure from the intermediate object tree change the picture?

2. `resolveModel()` allocates a new object tree before handing it to stringify. For very large payloads, does peak memory footprint change meaningfully compared to the replacer path? Has anyone profiled heap allocation, not just throughput?

3. The `__proto__` special case is explicit and tested. Are there other property names that could interact badly with `{}` literal accumulation in JS environments with unusual prototype extensions or non-standard globals?

4. How does this interact with streaming Flight? If chunks are serialized incrementally, does `resolveModel()` run per-chunk? What's the allocation profile per-chunk vs. the replacer path?

5. The intermediate representation unlocks in-process SSR handoff. Who owns that work? Is it even the right team? Or does this PR get merged and the insight disappears because there's no campfire where that connection gets made?

6. Are there environments where C++→JS boundary crossing costs are *lower* — older V8 versions, different runtimes (Bun, Deno, edge workers) — where the replacer approach would actually be equivalent or faster? Is the improvement V8-version-specific?

7. What happens to this code when the payload structure changes — new model types, new serialization requirements? The replacer was a single extension point. `resolveModel()` is a recursive walk. Is the extension surface equally clean, or has legibility been traded for throughput?
