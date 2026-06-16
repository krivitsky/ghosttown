---
date: 2017-11-12
subject: "build structure & system tips for easy/fast *feature* oriented dev"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/7a2f5b06-4aa6-45a9-84ea-61b4e5df784f%40googlegroups.com
---

currently working with the bmw self-driving car group, coaching ATDD & uTDD
during real feature dev (about the only way to really grasp what is going
on at the heart of gemba).

had advised the group -- as always do -- to *not* have a separate build
team set up the new build structure (e.g., cmake structure, etc). but
rather, for a true feature team developing true end2end features take on
the task, and interleave creating a baby step build solution, then test it
for ease of use by creating real end2end features with it, then cycle. in
this way, it becomes fit for purpose and optimized for e2e feature dev

the group ignored the advice, and component-centric people in a build team
(bmw has before only had component teams and component-centric dev), with
no experience of the needs and flow of feature dev, created a new build
architecture that is 100% component centric, and absolutely horrible for
feature dev in terms of the impediments and delays and dependencies it
creates

getting this right is terribly important for the success of a new LeSS
adoption, right at the heart of gemba, and would not be really grasped
unless the LeSS coach was deeply involved in either doing dev with feature
teams, or long and close observation over many continuous hours and days.

so encourage coaches to be very close to doing or observing the sw dev
coding work during the early days of a LeSS adoption, grasping the
experiential nature of the build architecture, grasping if it is structured
component oriented (very common), and have the new build arch & system
created by a FT that understands feature dev and is doing it

btw, this problem is more pronounced in c & c++ build environments than
e.g., java

===
this topic is called "build structure & system tips for easy/fast *feature*
oriented dev", and would like to invite others to share their tips on this
important technical topic

c
