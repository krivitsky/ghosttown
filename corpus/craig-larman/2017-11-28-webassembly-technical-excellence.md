---
date: 2017-11-28
subject: "technical excellence: WebAssembly"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/d582be5d-5fac-4cb0-8258-91f3436c915f%40googlegroups.com
---

just recently left a group doing video systems and was able to get into
WebAssembly <http://webassembly.org/>. in video product context -- and many
of the embedded hw/sw contexts of LeSS adoptions, e.g., self-driving car --
*performance* is a strong architectural attribute, so a coach has another
dimension to keep up-to-date on (rvalue refs & move semantics in c++ 11!)

if ya ain't heard of webassembly (wasm) yet, you will. it is the new
strongly supported w3c standard technology for high-perf browser apps. in
short, *it will be the new cross-platform assembly language of browsers*,
executing at near-native assembly speeds. wasm is a portable stack machine
model with compact byte code representation. wasm bytecodes (rather than
e.g., js) will in the future be what is almost always pushed to the
browser.

in addition to the upcoming js->wasm change, *developers are able to
develop in c++* (etc languages) and compile to wasm bytecode.

the wasm machine has the same safety/sandboxing permissions/policies as
e.g., existing js engines in the browser

earlier this month, safari and edge browsers shipped updates with wasm
support, and FF and chrome already have it, so wasm will come fast

c
