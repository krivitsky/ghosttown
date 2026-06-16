---
date: 2015-08-04
subject: "Re: micro-services, component teams, & CI"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/57e20dc8-ac2d-4bef-82d5-e88e7a6a8a23%40googlegroups.com
---

>
>
> - If there are two people needed to work on the file at the same time,
> your file is too large - follow single responsibility principle
>

no, this is not per se related to SRP. there are valid reasons why 2
people may need to touch the same file or class. it's not an architectural
problem, and not solved with architecture/design. it's a consequence of
having *feature* teams with internal open source doing end2end customer
features. and "working on shared code" is not supposed to be a problem --
real CI and TDD provide a way for multiple people to work on collective
code together without meaningful merge conflicts.

as a simple example, if there's a small Money class, 2 people (from 2
teams) may need to modify it "at the same time" in the service of 2
different features.

the solution is *not* "better design so that we can maintain private code,
and avoid having to figure out how to do collective code ownership".

the solution is the opposite.

of course, a poorly designed class or file of functions may have low
cohesion and do too much, leading to "unnecessary" simultaneous
modification. bas and i see that all the time in telecomm -- with a 10,000
LOC C or C++ file. but mastering "working on shared" code is key agile
software development skill, not to be avoided by "micro services" and
component teams

"if it's hard to do, do it more often"
