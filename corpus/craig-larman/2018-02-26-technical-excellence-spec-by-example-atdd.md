---
date: 2018-02-26
subject: "technical excellence: spec by example, ATDD, & outside-in development"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/6a410969-cc98-4119-bb6b-a424f8df8317%40googlegroups.com
---

*=== specification by example*
as many here know, *specification by example* (if a candidate or trainer,
pls plan to read both books one
<https://www.amazon.com/Bridging-Communication-Gap-Specification-Acceptance-ebook/dp/B008YZ993W>
and two
<https://www.amazon.com/Specification-Example-Successful-Deliver-Software/dp/1617290084>)
is called out in LeSS as an encouraged technique/process to experiment
with; we highlighted it at the start of book 2.

SBE is much more than "illustrating using examples"; it is an entire
process that goes from "illustrating using examples" to "automating
validation without changing specifications" to "living documentation." it's
a deep and powerful set of ideas & practices. we urge candidates and
trainers to fully understand it, and coach it in groups adopting LeSS. it
is hard to fully grasp it or coach "outside in development with SBE" unless
you spend time in teams actually involved E2E in creating software, from
PBR to the last step of unit TDD -- fully outside-in.

at its heart is the idea of acceptance-test-driven development (ATDD); and
we are keen proponents of this for the PO and feature teams in a LeSS
adoption, every sprint

if join a group that's "adopting LeSS" and look to see if PBR discussions
are focussing on examples with eye towards full SBE, but not, am
concerned. if look to see if there are true acceptance "tests" driving
development (written *first*), but not, am concerned. if look to see if
the acceptance "tests" illustrate "automating validation without changing
specifications" (i.e., "executable specifications in the original
language"), but not, am concerned. if look to see if the acceptance
"tests" tool & representation illustrates "living documentation", but not,
am concerned.

*=== outside-in development*
one of the *critical* implications of SBE (and ATDD) to understand and
explain as a coach is *outside-in development*. this is the development
sequence approach in which the feature team starts by developing the
surface level "acceptance tests" (in fitnesse, etc), and then the "surface
level" objects/functions that receive calls (via a test fixture), and then
developing deeper and deeper (switching to unit TDD as we go inside the
software box).

this is really important to coach for teams moving to LeSS, because it is
(1) a critical activity, and (2) a major change in mindset and behavior for
most prior component and single-function teams. the entire SBE + unit TDD
process gives a very concrete way for a young feature team to go from start
to finish, without getting lost. that's important for a new team in a new
paradigm.

as am sure you know, in contrast: the traditional large-scale dev paradigm,
based on component teams, is "inside-out" development in which parts are
created, and then glued together later, with hopefully some end-to-end
tests.

on terms: *outside-in development* is not a new term, nor is it a new idea,
but have noticed -- i pay attention to terms that seem to ring a bell in
many people -- that it's a very effective term. older equivalent teams such
as "use-case driven dev" or "tracer bullet dev", etc which mean the same
thing, have not been as fast/effective. note that my '97 ooa/d book is
centrally all about outside-in dev as a way of working. so this is an old
idea that still needs a *lot* of promotion/coaching, due to the endemic
local-optimization bias that takes people back to making separate parts
"efficiently"

c
