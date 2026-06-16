---
date: 2019-07-18
subject: "tech excellence: Rust -- emerging to replace C++ & more"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/5a9b2620-e0b6-4b66-8cc6-1dfd50d88fd5n%40googlegroups.com
---

what language won last 4 years as "most loved language" by world's largest dev survey, stackoverflow?

rust

https://www.rust-lang.org

new facebook Libra "blockchain" currency (probably huge) chose rust

more and more of Firefox is being rewritten in rust

microsoft just announced closely examining rust as replacement for c and c++

rust 1.0 released in 2015 and seems to be approaching a tipping point in interest, for good reason

why?

key reason is (1) extremely high performance -- same range as c and c++ -- and (2) strong mem & thread safety with (3) automatic memory mgmt (4) without a garbage collector or VM, while (5) remaining a high-abstraction language with OO and functional and classic non-OO options. that's a rather amazing feat of language design. as such -- and this is an important point -- it is the first meaningful language with traction that can replace c and c++ as a systems programming language, for everything from OS to embedded systems. for language design nerds: it has a lovely "borrow checker" semantic so that the compiler can find and disallow mem errors.

in addition to seriously being able to supplant c/c++, it also has a from-the-ground-up web assembly story and integration, as most of u probably know now wasm is going to be important. i.e. a full stack language from front end to back end to OS to embedded, with world class performance and safety, without a VM or a GC.

also, the language designers created this modern language from ground up with IDE and refactoring integration assumption, so the AST is visible to tools. e.g. the jetbrains CLion IDE has great support

related, unit and integration testing is baked in, so that each production-code file has baked in a unit testing section, and each lib has baked in an integration testing module

the learning support is excellent; the online Rust Book, maintained as part of the language by the core team, is excellent

after decades of being stuck with the immense pains and dangers of large-scale high-perf systems dev only viable in c++, there is finally a serious and better contender in rust. there's a chance it will become a major force over the next 5-10 years.

c
