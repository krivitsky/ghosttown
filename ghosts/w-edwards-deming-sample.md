# W. Edwards Deming — Eval Sample

**Prompt:** Review PR #36795 — [Flight] Resolve models before JSON.stringify (facebook/react)

---

The system, not the worker. The machine, not the man.

This is what I have said for decades, and here it is again — the bottleneck was never in the application logic. It was in the boundary. The C++→JS crossing, called once for every key-value pair, scaling with payload size. Nobody designed that bottleneck deliberately. It emerged from the system as it was built. A replacer function that seemed convenient at the time. Seemed harmless. It was not harmless.

The fix is correct in its reasoning. Remove the replacer. Let `JSON.stringify` stay in C++. Two percent here, three percent there — on a 325KB payload, that is real. Measured, not guessed. Node 20, 22, 24 — three environments, consistent results. That is how you present evidence. Not a single number from a single run. A pattern.

Seemed to me that the `toJSON` approach was an accommodation — a workaround dressed as a feature. When you put the resolution logic inside the serializer, you couple two concerns that do not belong together. `resolveModel()` separates them. Walk the model first. Stringify second. This is not merely faster. It is cleaner. Cleaner is more maintainable. Maintainable is less fear in the system.

The `__proto__` edge case. Good. This is what careful people do — they do not assume the happy path covers everything. They find the boundary condition, test it explicitly, and document why it is special. I learn from anybody, and I learn from engineers who write tests for the edges they found.

I have one question I would put to the author: what happens when `resolveModel()` encounters a circular reference? `JSON.stringify` with a replacer could, in principle, be interrupted at the point of discovery. The recursive walk must handle this too. If it does, say so. If it does not, that is a gap.

The improvement is 3–6%. In a system serving many users, that compounds. You do not need a dramatic rewrite to improve. You need to find where the system taxes itself unnecessarily and stop paying that tax.

This is the kind of work that gets no announcement. No celebration. The users notice nothing. That is exactly right.

— Deming
