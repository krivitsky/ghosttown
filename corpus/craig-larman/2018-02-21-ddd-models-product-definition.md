---
date: 2018-02-21
subject: "Question: Domain Driven Design models & Product Definition"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/7c355ec5-e1b5-4d7e-acb5-1ff16d6c61de%40googlegroups.com
---

katrina,

hi. to build on what viktor wrote:

first, backgound: if you've read my '97 ooa/d book, you know am a keen fan
of OO domain-centric analysis & decomposition, domain modeling, etc. wrote
one of the first reviews of DDD book. both eric and i come from a smalltalk
background, where this kind of domain-centric view is strong, and so you'll
usually find strong domain-centric sympathies amongst us smalltalkers.

in fact, iirc, when discussing with bas our chosen name for Req Areas in
2007?, suggested Domain Areas, but bas (astutely) found the name too
limiting or constrained

in DDD, domains or sub-domains tend to be long-lived "core" aspects of a
field. e.g., Trade Processing, Insurance Claims.

*domains may be RAs, but not all RAs will be domains*

e.g. Trade Processing RA

but not all RAs should be long lived. why? we want the agility
(adaptiveness) to birth or end an RA in response to market, technologies,
or whatever changes. e.g., in banking, after 2008, with the advent of
Dodd-Frank etc, an RA called "regulatory compliance" spins up that keeps 5
teams busy for a couple of years. but then, done. time to close it down.

btw, this adaptiveness-in-RAs is also the reason an RA *must not* have any
supporting dev mgrs or formal existence in an org chart -- it would
increase the rigidity of the RA, making it more difficult to end

c

---

michael,

hi and thx for sharing this. if understand your story correctly, there were
dependencies between teams in diff areas?

if so, this does not come from having Req Areas associated with domains;
this comes from private code within boundaries. but in in LeSS Huge, there
is shared code across the entire product group. *there is no area boundary
in LeSS*. a feature team in RA-1 will work across all code they need to, to
create a complete e2e feature.

also, in LeSS an item is not split up between RAs, to do "their part".
rather, some "dominant" or volunteering RA takes the item, and does
everything across the product for it

c
