---
date: 2017-11-18
subject: "Re: build structure & system tips for easy/fast *feature* oriented dev"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/9e455bf5-c127-4a91-9b91-d1b062c450a4%40googlegroups.com
---

commenting on various questions/topics

@all
NB: in LeSS we encourage trainers to NOT use the term "CI" to refer to a
build system. see our CI chapter in book 2, and the book 3 guide. *we want
trainers to emphasize that continuous integration is a developer behavior,
not a tool or build system*. and that's why in book 3 the guide is called "*integrate
continuously*", to emphasize this. you can have the world's greatest build
system, but if developers are working in separate branches or not merging
all their code all the time, there is *delayed integration*. consider
saying "build system" rather than "CI", and coaching people in "CI is a
developer behavior"

@all.
sure, the groups needs to move to a single repo (as bmw self-driving group
has now done). LeSS is based on a shared code model and full-stack feature
dev. separate repos create many frictions in that context

@bas.
*Craig: I'm usually quite comfortable with component-based build system
(not repositories) on the lower level, especially if it is the same
everywhere. When moving to higher level tests, then feature-based makes
most sense. Is that what you are referring to? Or is the main problem the
different repositories (and the awkward versioning that comes with that)?*
* not talking about diff repos... that is a strong inconsistency that have
already eliminated. rather, am talking about if the build design is
component-oriented in a way that impedes shared code full-stack dev. for
example, have you have worked with a build design in java where the build
design groups code into a gazilliion fine-grained jars, so that to develop,
rather than just seeing and working across the entire code stack of source
*.java files, you have to deal with the "jar problem"? during *deployment*
am all for whatever component-orientation is appropriate (jars, libs, etc),
but if that "deployment build design" gets in the way of "dev build
design", then there's a problem. or in c++ land, there may be a gazillion
cmake files for components organized in such a way that when one wants to
create features and is working across the code stack, there is a lots of
overhead in managing the cmakes because a strong component build design.
this is not a black-white issue; it isn't about "no component orientation
in the build design for development"; rather, it is mostly about degree and
ease. to take another example, in embedded car systems design, the
*deployment* architecture may involve dozens or hundreds of OS processes
(associated with code) interaction via a MOM bus; one can unfortunately
create the *dev* build design highly coupled to that deployment
architecture such that development for features has lots of friction.
rather, i suggest exploring a separation of concerns: a build design for
development that makes shared code feature dev easy, and a build design for
deployment separately as needed.

@gervais
*1. Containerization in the cloud?*
* orthogonal issue

*2. Component autonomy within the code source for parallel coding for TDD?*
* ? unsure what mean. but in agile sw dev ala XP (as we want in LeSS) many
developers can and should be able to work easily in *exactly* the same file
(e.g., foo.java) at exactly the same time, since they are integrating
continuously, and doing TDD and merging with all others in very short cycles

*3. No Branch? All merge or CI into root with Feature or toggle live
action be switches? One repository per Feature Set or Platform?*
* no branch... unless you mean the unavoidable git local, which is a
"branch"
* one and only 1 repo... even if thousands of people. otherwise people are
not integrating continuously
* yes to feature toggles
* NB: *CI is a behavior*, not a build system, as we cover in the books.
action >> pls read our Integrate Continuously guide in book 3 and the CI
chapter in book 2.

*4. Compile and resulting binaries in one file or multiple with property
files?*
* depends on tech/languages

*5. Method design for encapsulation? Class cohesion vs coupling? It seems
OOD is all about componentization within a class hierarchy? It seems cloud
containers are all about run components?*
* orthogonal issue

*6. Session management for real-time memory access?*
* ditto

*7. Database access, direct or centralized calls?*
* ditto

*8. ETL for data access and loads as part of real-time scheduled calls or
separate batch scheduled jobs?*
* ditto

*9. Testing of components within the end-To-end application as we
incrementally build? How to perform BDD and ATDD across transactions or
events? How to use and integrate auto testing tools like Selenium?*
* a large topic for another time. but....
* NB: selenium is a GUI testing tool. we recommend avoiding these.
* NB: note that in LeSS we encourage SBE, which is kinda the further
evolution/refinement of BDD/ATDD. pls see the 2 books on SBe
