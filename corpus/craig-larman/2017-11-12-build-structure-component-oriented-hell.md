---
date: 2017-11-12
subject: "Re: build structure & system tips for easy/fast *feature* oriented dev"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/09769926-90da-436c-97c5-e2579e4d2b93%40googlegroups.com
---

in a component-centric build design (very common) the default build unit is
a component; e.g., a subset of c++ classes in some folder hierarchy. and
the build scripts (e.g. cmake) are organized around defining a component in
terms of some subset of files, and the afferent and efferent dependencies
to other components

this does not create major impediments if there are component teams, since
they just stay in their component, and the "interfaces between the
components" is limited

but when one does feature based dev, one is jumping across the entire code
base files frequently, adding and modifying (e.g.,) classes, with many many
dependencies (excluding cyclic ones) everywhere between the classes -- the
typical/classic model of OO design of a large space of collaborating
objects. in that context, there is strong need for the build design to have
"low cost of change" (adaptiveness/agility) to add and modify all these
classes everywhere, as a team works across the entire code stack to create
an e2e feature. but in a component-oriented build design, it is very common
that every "out of component" new dependency (which happen and change all
the time in feature-based OO design) creates lots of work to update and
maintain the artificial component-oriented build scripts that define and
constrain dependency, and also that must be updated for all the classes
being added

the analog of this component-build hell in java land is for example the use
of many jars and maven, for the "components". vs just a large space of all
the java source

c
