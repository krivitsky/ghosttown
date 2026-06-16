---
source: email
subject: TBM 403: The Seduction (And Folly) Of Rollups, Points, and (Most) Time Tracking
date: 2026-01-27
author: John Cutler
newsletter: The Beautiful Mess
---

I made a simple tool to help make sense of a new team, group, or company: https://johnpcutler.github.io/team-association/ . If you want to share your selections with a team member (or just save it for later), click on Share to generate a unique URL with your choices and an optional note. Let me know what you think. Remember: it is all about sparking a conversation.

There are few ideas in business as seductive as the belief that teams can "roll up" their work in a neat, predefined tree, and that we can use things like story points and time tracking to gain magical insight into how our organization operates. When I show Sankey diagrams to executives, I can see their eyes light up. "This is it. The magic report!"

We want to believe, in our bones, that if we could just understand where all the energy and time is going, it would unlock newfound confidence and certainty.

But as with many seductive things, the truth invariably feels just out of reach.

There are reasons for this.

And once we accept those reasons, a new truth reveals itself.

The Conversation

Executive: John, every executive's dream is to be able to slice and dice how we are investing across the organization. Time, money, people, priorities. CAPEX and OPEX. Horizons. Strategic themes. KTLO versus new features. Dependencies. All of it. We want clean rollups, reliable reporting, defensible capitalization, and the ability to answer simple questions like 'where did the money go?' and 'are we making progress?'

Why is this still so hard in modern tooling? This should be solvable, right?

Me: There are a couple things that make this hard. I'll start there, and talk about the opportunities in a sec.

First is the fact that there are many things we spend our time on that would be a big pain to try to ticket-ify and track. Technology can help here, but there are limits. And it isn't just about friction or overhead. It is that while we can only really focus on one thing at a time, the thing we are focused on is rarely neatly defined.

Next is that, as you pointed out, while there are mapping schemes that are standard, e.g., capitalization, companies are constantly evolving different schemes. There's never a fixed set of schemes. Anyone who has worked in product ops knows this, because every quarter or so there's a new request to pivot things in a different way (and yes, every time they say this is the last time.)

OK, but say you had a magic time-motion tracker, the neural link to know what you are thinking about, and then a magic AI that could categorize things. You then have the puzzle that "rollups" are rarely as clean as people want them to be.

In fact, making rollups clean can be an anti-pattern.

For example, what if you want to connect an Epic directly to a strategic theme? Why is it necessary to hook it into made-up objects in the rollup? Or say your team wants to work in terms of bets, experiments, discovery, and a bunch of helpful local ideas. Does it really make sense to force them into the rollup language of the org (e.g., epics, initiatives, etc.) just so that you can get your reports? What if they get no value out of story points whatsoever, or don't work in sprints? Is it worth limiting their performance to get these reports, especially given they'll likely just do what they want to do AND have to fake doing what you want them to do?

OK, but say you had a magic time-motion tracker, and then a magic AI that could categorize things. You then have the puzzle that "rollups" are rarely as clean as people want them to be. In fact, making rollups clean can be an antipattern.

If those reports don't reflect the reality on the ground, what good are they? The problem with the dream of the rollup is that it was never a great fit for work that is complex and highly localized by nature.

The Risk of Faux Accounting

We are easily seduced by numbers that look like accounting. Story points. Hours. Percent allocations. Velocity. Capacity utilization. They add up. They fit in spreadsheets. They produce charts. They feel concrete.

The danger is that they borrow the authority of financial accounting without actually being accounting. They are proxies, guesses, and social contracts. When we forget that, we start managing the proxy instead of the real work. We chase numbers that sum neatly rather than signals that help us understand reality. Our desire for things that "add up" can get in the way of understanding the system we are trying to improve.

Executive: But how are you supposed to manage something if it isn't observable?

Me: Well, that's the trick, right? To make a system observable, you need to consider the nature of the system.

Take the difference between the allocation of time and the allocation of 'capacity.' They are different concepts. While knowing where the time went might be somewhat helpful, we need to consider capacity as something that is built, nurtured, established, and invested in over time.

For example, imagine you have a temporarily assembled team of geniuses. At first, they haven't worked together, so their capacity is low. They can spend time wherever they want, but they will be hitting a lot of friction. Now nurture that team over time, work down technical debt, invest time and energy in connecting with customers, instrument the various surface areas, and supply them with powerful context about the strategy… and suddenly you might have a LOT of capacity, and they might be creating value very efficiently.

This could last until the strategy changes, maybe someone leaves, and suddenly all that well-earned capacity and potential trends to zero again. Anyway, my point is that what we would do to make capacity and the investment of capacity visible would be entirely different from what we might do to make the allocation of time visible as a tool to assist with management.

Stafford Beer's Viable System Theory suggests that to manage a system, your management model must have enough variety to match the reality of the system you are trying to manage. Rollups work in environments where work is stable, decomposable, and categories are slow to change. But they break down when work is cross cutting, discovery driven, and shaped by local context. Time tracking might work in transactional settings where labor is the product, but it is a poor proxy for understanding capacity, which is inherently emergent and built over time.

Executive: But that's a complex concept! Geez. I get it, but it takes a bit. And ideally you would have both, right?

Me: Sure. Provided the costs didn't outweigh the benefits.

Could you just get teams to do a monthly swag instead of any kind of rigorous, time-consuming tracking and mapping? Could you figure out how to do it without forcing teams to live the double life I mentioned above, or prematurely converge on solutions because they needed to create tickets?

So sure, you ideally would do both, but without actually compromising your results and impact.

Of course, if you're being paid by the hour, then maybe tracking every minute would be worth everything because that's how you get paid. If your company works very transactionally in terms of chargebacks, well, that's a decision you made. Let's go timesheets! But if you're being paid in other ways, you have to seriously question whether the juice is worth the squeeze, or even might make things worse.

Do perfect reports are timesheets matter more than impact?

Do perfect estimates matter more than impact?

Does the perception that you are bartering and trading capacity matter more than impact and making real, but hard, tradeoff decisions.

Executive: Let me challenge you for a second. You said the rollup doesn't reflect reality. You would probably agree that Stories always have Epics, right? And Epics have Initiatives? I mean, there are some things that consistently roll up, if I am not mistaken.

Me: Well, ask engineers about that. Ask them how often they're either not creating tickets for things, or have 'stories' that simply aren't part of an Epic. Or Epics that are actually more initiative-like. Or find themselves using Initiatives as a sort of catch-all accounting bucket—the bigger the better—because they were sick and tired of explaining what they were doing.

Talk to teams where they use a 'KTLO' label for anything that doesn't have a natural connection to things. In reality, meaningful refactoring is happening there, along with reactive work, side projects, and other work where scrutiny and detail might be helpful, but the systems get too convoluted if you try to categorize everything correctly.

Or ask a team about how real, messy work happens. The Epics that stall. The quick pivots. Discovery. Strings of experiments. Hypotheses. Spikes. Back-and-forth collaboration. Heavy dependencies. Light dependencies. Swarming to solve problems. Dead ends. Sudden breakthroughs. Work that can't be predicted up front. Divergence. Convergence. Initiatives that roll into each other. Slices. Increments. Projects that impact more than one goal. Things that check more than one box.

The paradox here is that the more you enforce the rollup, the more you find yourself making things up just to have something to roll up to. And don't get me started on the games that go on with time tracking. A team hears 'we're trying to keep BAU below 30%' or 'we're trying to boost our capitalization to X%,' and magically, oh magically, those numbers appear out the other side of the spreadsheet. So anyone who thinks that time tracking is somehow accurate and thoughtful, is missing a key point about how incentives work on teams. And how knowledge work works.

Which leaves you with two paths, and honestly, both are bad.

Either teams keep working in the real world, doing what they believe is necessary to create value, while faking their reporting to appease the rollup. Huge time suck.

Or teams adapt how they work to make sure everything rolls up cleanly, at the cost of sub-par results, local inefficiencies, and a quiet erosion of real performance.

The paradox here is that the more you enforce the rollup, the more you find yourself making things up just to have something to roll up to.

Neither outcome is what anyone actually wants.

Executive: I see your point…

Me: There's one more thing on that. I've met teams that were cranking out epics and stories, story points flying out the door, logging their time (in theory) diligently, and yet they weren't shipping a darn thing. Nothing. No changes in production.

So let me challenge you with this idea: maybe all these labels we put on things—epics, stories, tasks, projects—are just imperfect placeholders for collaboration, and that the only thing that matters is tracking the changes that hit production. What released? How are customers using it? Is it doing what we expected it would do? That might be all that matters.

OK, that was hyperbole. Collaboration matters also. Swag estimates might matter. Planning matters. I just mean that we treat those things as ephemeral, squishy things meant to result in changes, versus how a contracting company might treat projects—both an accounting artifact AND a planning artifact.

Executive: One thing I'm missing here is the alternative. We have legal reasons for why we need to track capitalization. You need to. We have leaders asking, 'Where did we spend our time?' We need to answer questions about where the money is going. We have to plan, resolve dependencies, size up work. We have to do it all!

Me: Correct. The point I would make is that only one of those things requires time tracking, and that is capitalization. If you have any sort of internal chargeback model, where you are basically operating like mini-contractors within a company, you probably need time tracking there as well.

None of those things requires the use of story points, or at a minimum requires actually storing story points AFTER they have been used for whatever forward-looking planning you need to do. Ideally, you throw them away. None of those things requires that every task has a story, every story has an epic, and every epic has an initiative.

In terms of precision, most of those things are fine with throwaway, roughly right guesses. In other words, there are companies that do all the things you mention: 1) without a big rollup, 2) without heavyweight time tracking, and 3) without any kind of standard thing like 'points,' etc. They do this by sticking to first principles.

Executive: I'm not sure I believe you, but I'll suspend disbelief for a moment. How?

Me: A couple things come to mind.

First, they spend a lot of time and effort thinking about the 'return' side of the ROI puzzle. Everything we've been talking about so far is the investment side. But isn't it funny that we obsess about the investment side, and yet we shrug our shoulders on the return side? Well, that kind of makes sense, because return is hard to measure, and often takes a leap of faith, and requires embracing uncertainty. And all that is hard. So we don't do it, and make up for it by obsessing about the investment side of the equation.

Imagine what could happen if teams spent as much time trying to understand outcomes as they do bickering over points, and hours, and how the perfect rollup is supposed to happen. What if they worried about how changes 'roll out' to the impacts that matter? Anyway, if you spend time there, it smooths out the conversation a bit.

Next, they think about signals that matter for the system they are operating in. For example, they think about team health, developer experience, access to insights, throughput of changes, various "flow" and system health metrics, etc. This helps us understand the team in a more appropriate way, and starts chipping away at the capacity question.

Here's a great example: it is probably more important to know how often this team needs to do heavyweight collaboration with other teams as a signal for overall org design and architecture fit than it is to know that they shipped this HUGE 30-pointer or spend 30 hours working on something, or whatever. That dependency information doesn't require a rollup, but it might require mapping dependencies.

Imagine what could happen if teams spent as much time trying to understand outcomes as they do bickering over points, and hours, and how the perfect rollup is supposed to happen. What if they worried about how changes 'roll out' to the impacts that matter? Anyway, if you spend time there, it smooths out the conversation a bit.

Instead of starting with work, they start with goals and then connect work to goals when it makes sense, not all the time. Instead of chasing far-off, lagging metrics, they establish local input metrics that make sense, that they can return to again and again to better understand progress and variability.

These are just a couple of the ways that I've noticed companies shift the narrative.

Executive: That is a lot!

Me: But if I were to leave you with one idea, it is to go back to the ideas in How to Measure Anything by Douglas Hubbard. The basic idea there is that you can measure far more than you think, but only if you're clear about what decision the measurement is meant to support, accept uncertainty instead of chasing false precision, and choose measurement approaches that reduce uncertainty at the lowest possible cost.

I would also suggest the basic idea that you need to adapt your measurement approaches to the nature of the system you are attempting to work with. As much as we want our work to be about neat rollups, it just ain't so.

All of the needs you've mentioned are important. No doubt. All are valid. I'm not disputing that. But one thing I can save you from is imagining that the perfect rollup structure, or time tracking, or whatever mechanism we fixate on, will solve these problems. The problems are hard and complex. And once you accept that, it actually opens up an avenue for real progress.
