---
date: 2018-02-11
subject: "Re: The autonomous car battle"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/e3251dd9-76ac-40da-a6e8-9b8f1413f2f7%40googlegroups.com
---

hubert,

hi and thx for asking!

*the following comments are not specific to bmw and self-driving cars
(don't wanna bump into NDA issues)...*

first, the generalization of your question is: does the creation of *learning
machines* have some extraordinary impact on Scrum adoption or a deep new
insight. of course, deep-learning ANNs tend to be in the forefront of
learning machines these days.

note that the tooling and FWs (and research) for deep-learning ANNs is
making it easier and easier to create them (e.g., less effort on the ANN
architectural choices), so that the effort is shifting more to data prep
(data collection & cleaning, feature engineering, etc). that started some
years ago with Tensor Flow, and now there is a rich and super-fast evolving
ecosystem of higher and higher-level tooling that makes it easier

(branching slightly: there is also research underway to use *ANN-generating*
ANNs and genetic algorithms to generate good-enough problem-specific ANNs,
so that much of the creation could become *much* easier in another 5 years)

to the heart of your question: *no*. creating learning machines brings no
new *insights* to org design and scrum -- at least if one knows R&D system
dynamics and scrum and the "new specialty" well. it really is just more sw.
(perhaps noteworthy: my grad work was in AI).

(branching slightly: have observed over the last 15-ish years that when a
single-specialist encounters scrum for the first time and is rather naive
about the territory of R&D org design and scrum and prior info on the
subject, they write some post or book about "how you must customize scrum
for the special-never-before-considered-super-hard-case of "integrating
scrum" with "my special skill" that the scrum experts have never
considered, but i have... insert "*my unique insight post: changing scrum
to work with UI/DB/architecture/UX/AI/testing/analysis/product mgmt/etc*"
;) )

building on the above, therefore: no new insights, but integrating ANN
development bumps quickly into well-known *constraints and challenges of
creating Teams in scrum*.

for example, there was a time when one needed a high % of
very-rare-specialized knowledge workers for creating deep-learning ANNs,
and long durations to get anything done. that's changing now.

as you know, the generalization of the above constraint (e.g., "there are
50 people in the world that can do this, and it takes *forever*") makes it
harder to have a cross-functional and/or cross-component team. but that's
not a new insight or a special new case in scrum adoption

but the great news is as all those constraints are softening, due to more
and easier high-level tools, and concomitant easier and less-rare knowledge
needed (and lots of learning resources)

as the constraints soften, it is becoming easier for a team to be
cross-functional, and cross component. (both together imply *feature team*).
a comment on each, from what am seeing:

*cross-functional teams creating learning machines*: the tooling, easier
and more accessible knowledge, and shorter durations to get something done
(in a sprint) are allowing more cross-functional teams. also, i observe
that more of the work is shifting to data prep and "data science" (as the
later steps are becoming more automated/easier), so that the profile of
cross-functional knowledge needed to create and productionize a learning
machine is shifting quickly... it is simplifying and reducing.

*cross-component teams creating learning machines*: *first*, it is common
for different complex decision steps in a workflow to be done by different
learning machines. e.g., in self-driving cars, the main workflow is sorta:
sensor interpretation, environment model interpretation, trajectory
planning, and then car control. each step may have its own learning
machine. *second*, the durations are still pretty long to get something
done for 1 machine, so it is not realist for 1 team to work across all the
LM components within 1 sprint. but a team can indeed get started and make
progress on the next LM in the workflow, if the prior one has stabilized
enough to be a reasonable assumption/contract.
