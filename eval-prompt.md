# Standard Eval Prompt

Use this prompt for every ghost's token density eval. Same stimulus every time = comparable baselines across ghosts.

---

## Prompt to send both agents

> Please review this pull request and give your assessment.

---

## PR context to include

**PR:** [Flight] Resolve models before JSON.stringify
**Repo:** facebook/react
**PR #:** 36795
**State:** MERGED
**Author:** Michael Hart (mhart)
**Size:** +168 / -55

**What it does:**

Replaces `JSON.stringify(value, task.toJSON)` (replacer-based serialization) with a two-step process:
1. `resolveModel()` — recursive JS walk that does the same transformation the replacer did, entirely in JS
2. `JSON.stringify()` — called with no replacer, stays entirely in C++

**Why:** V8's `JSON.stringify` is implemented in C++. Calling back into JS for every key-value pair via a replacer incurs C++→JS boundary crossings that scale with payload size. Removing the replacer keeps the stringify pass fully in C++.

**Results:** Measured on a dashboard with ~25 components, 200 product rows (~325KB Flight payload), Node 20/22/24:
- `bench:bare` (in-process): Flight+Fizz sync median improves ~4–5%
- `bench:server` (HTTP, c=1): throughput improves ~3–6%

**Edge case:** `__proto__` as an own enumerable data property. Using a plain `{}` accumulator (faster) risks hitting the prototype setter. This PR uses `{}` but special-cases `__proto__` explicitly. Test included: verifies the key is serialized in source order, siblings survive intact, and the holder's prototype is untouched on the client after deserialization.

**Future opportunity noted:** Since `resolveModel()` produces a plain JS object tree before stringify, a future Flight mode could pass this intermediate representation directly to SSR client — skipping the serialize/deserialize roundtrip.

**Key diff excerpts:**

Removed `toJSON` from the Task type and `createTask`. ~55 lines of replacer logic deleted.

Added `resolveModel()` recursive walk. New test:
```js
it('should serialize an own __proto__ property nested among siblings without disturbing them', async () => {
  const value = {a: 1};
  Object.defineProperty(value, '__proto__', {
    value: {nested: true},
    enumerable: true, writable: true, configurable: true,
  });
  value.b = 2;
  // verifies: payload contains '"a":1,"__proto__":{"nested":true},"b":2'
  // verifies: on client, __proto__ is omitted, siblings a and b survive
  // verifies: Object.getPrototypeOf(model) === Object.prototype
});
```

---

## What to measure after both agents respond

- Word count (body only)
- Distinct insights / claims
- Words-per-insight ratio
- Ghost voice fidelity: stayed in character on unfamiliar territory?
- Density ratio: ghost ÷ default Claude (target: 2–4x)
