---
date: 2021-03-30
subject: "Re: investment decisions & prioritization in LeSS"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/4f88d8b1-3273-4c93-ac17-c58a7e2f444an%40googlegroups.com
---

the following is explored below:

* the PO as "mini-CEO"
* 3 kinds of investment decisions and their handling in LeSS
* techniques for linking PBIs and re-pri to strategic investment goals (e.g. Multi-factor Pri Matrics)

-c

=== the PO as "mini-CEO"
the point came up in the discussions that if the PO were to have so much independent power it is like they are a c-level executive. Yes! that's the point. that's why ken has called the PO "a mini-CEO" and "entrepreneur". it is *taking away* existing decision-making authority from various status-quo senior mgrs and shifting it to the PO. Scrum and LeSS doesn't fit in to the existing decision-making and investment model of traditional companies.

=== 3 kinds of investment decisions and their handling in LeSS
perhaps a more detailed analysis can help shed some light. what kind of investment decisions might a senior mgr make (of interest to us):

1 purely *unrelated* to work in a sw product (a building, ...)
2 purely work in a sw product
3 something with an intersection, such as "in 2022, our focus will be accessibility for people with disabilities" (which includes changing buildings, and changing the product)

for (1), no further comment

for (3), in scrum (and so, LeSS) since the PO has independent authority to do what they want in the product, senior mgmt's influence can only be a *request*. to quote the Guide, "Those wanting to change the Product Backlog can [only] do so by trying to convince the Product Owner." and to state the obvious, if the PO wants to consider a request, it simply becomes an item on the PB, and they continually re-pri as they wish, and may ignore the request. an important sub-point: if the request is a big item B, it is split, and the new smaller ones, B1-BN have item independence -- the PO may choose to do B5, and ignore the rest. there is no "batch travel" or big batch work in which the PO does all the things in a request, as there is no conformance to completing projects of work pushed in from outside

itch scratching: below after discuss (2) will share a few technique tips for case (3) for the PO aligning with strategic requests from others, such as "accessibility"

for (2), in a scrum or LeSS adoption it wouldn't happen and there's not much to "solve" for at least these reasons:
* there is no "investment" funding -- and so no investment decision -- required for the product group because there is already simply 1000 devs whose annual total salary is known and already paid for. there's no "investment" for the salaries of existing FTEs; it's already a fixed cost. if one were to ask, "but what about a decision to add 100 more devs to do more work?" ... well this is *LeSS*, and we suggest that one of the worst ideas to "go faster" is to add even more people; quite the opposite in fact.

* if one were to ask, "what about an investment decision to create a new product?" ... first as u know hopefully from the course or book 3 all of (for example) retail banking has usually just *one* sw product, "the banking system" (likewise all of insurance usually has just one sw product, "the insurance system"). so there's probably no need to decide about more sw products in those cases. and key point in LeSS Huge: changes of large-direction ("large investment") of what to with those 1000 within that one giant product are the *sole responsibility of the PO in LeSS Huge*. OTOH for the case of real hw/sw product companies (like a car company) deciding to invest to create a new real product ("self driving car") then there's not much to say because i guarantee you that the Board & CEO already know how to go about those kinds of decisions (i.e. real product portfolio mgmt). and once the new product is funded for "100 people", then it's just back to scrum: the PO independently and adaptively decides what to do with them. for the case where "100" people is discovered as not enough (e.g. after 1 yr) then indeed it is Board/CEO decision to increase funding, but once again i guarantee you that Boards/CEOs already know how to bring up and decide those investment decisions.

* and finally, reiterating but crucially, a LeSS adoption does *not* fit in to any existing project/PMO model of work in which senior mgmt decides what initiatives will be done in the sw product "quarterly", and pushes projects into the PO. a LeSS adoption is an alternative to that model; it doesn't fit into the existing "funding sw projects" paradigm where senior mgmt makes decisions about sw work and then pushes it to proj mgrs.

=== Techniques for linking PBIs and re-pri to strategic goals
for investment case 3 ("intersection") suppose the PO decides to take in a request from senior mgmt. e.g. "accessibility". first to repeat: the PO is under to requirement to do this at all, and may choose to do only some parts. what techniques can they use for alignment with these external goals? some were covered in books 2 and 3:

* book 2 (Prod Mgmt chapter): *Try...Prioritize with multiple weighted factors*. also know as "prioritization matrix." one of the attribute classes in a PM can be "strategic alignment", within which strategic requests from the Board/etc can be modeled and re-prioritized. this is an old widely-known technique

* book 3 (Prod BL chapter): *Guide: More Outcome, Less Output*. the "impact mapping" (impact mgmt, effect mgmt) technique is relevant. a variant of this (which is actually the historical roots of "effect mapping" that led to "impact mapping") is the "value mgmt" method taught since forever by tom gilb. it links items in the PB to some useful impact, such as "higher usage by those with disabilities"
