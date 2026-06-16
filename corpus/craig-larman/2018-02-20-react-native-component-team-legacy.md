---
date: 2018-02-20
subject: "Re: technical excellence: react native"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/e55d0f06-60c5-4c60-b2a2-20fb93198542%40googlegroups.com
---

just finished coaching a 10-day legacy code tdd workshop. we came across a
component (in c++) that had been originally been made by a component team,
that had several hundred lines for a homegrown FSM framework. after getting
our heads around it, it turned out the FSM had 2 states: on, off. and the
only "value add" code that did something useful (an "action" during the on
state), *was 1 line of code ("setX")*. the entire thing could have been
boiled down from (let's say) 300 lines of complexity, to about 5 lines to
flip a state boolean, and setX

"we're a component team; what are we gonna do for the next 2 weeks?" ;)

c
