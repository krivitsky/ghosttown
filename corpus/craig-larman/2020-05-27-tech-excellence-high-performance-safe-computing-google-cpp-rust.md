---
date: 2020-05-27
subject: "tech excellence: high-performance and safe computing: google, c++ & rust"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/1a491375-9063-4f95-9e16-802f482f97e7%40googlegroups.com
---

google recently published that 70% of their severe security bugs are due to
memory-safety bugs from using C++ (or C), because these are intrinsically
unsafe languages. MS has concluded virtually an identical 70% across their
products, again also due to C++ and C. firefox has shifted to rust for this
reason and others

aside: google is excluding the use of Go in their new OS Fuschia, as it is
too slow and a relative resource hog, especially for OS dev. (rust does not
require a VM or GC, and does safe memory mgmt by language semantics, at
compile time)

safety-critical sw-intensive products are almost always large scale in
terms of # of devs (and code base size), and the default in virtually all
these cases was C or C++. in 2020 given what computer scientists now know
and what alternatives are available, and having worked in lawsuits as an
expert witness w.r.t. groups choosing and applying sw engineering "best
practices", predict there could eventually be civil or criminal-negligence
lawsuits in the future for groups that continue to choose 40-yr-old
egregiously unsafe languages in safety-critical products

https://www.chromium.org/Home/chromium-security/memory-safety
https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/
https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/project/policy/programming_languages.md

c
