---
source: email
subject: TBM 421: Minimally Viable Consistency (Part 3)
date: 2026-05-09
author: John Cutler
newsletter: The Beautiful Mess
---

Almost ten years ago, Arlo Belshee used a line that stuck with me: "Org design is basically about solving the puzzle of what must be consistent, and what you're willing to lose to keep it consistent."
I've written about consistency, and minimally viable consistency, before (Part 1, Part 2). In this post I want to explore what I've been calling sharp consistency, flexible consistency, and legible variety. You work with all three in your quest to find minimally viable consistency.
Understanding this is also a big unlock for where and how AI can be valuable for teams. As with most things, the devil is in the details. AI might make things genuinely more locally rich without sacrificing alignment, or just flatten everything.
A quick review of the core idea before I go somewhere new.
Why consistency?
Consistency in an organization reduces coordination costs, enables work and context to flow across boundaries without a translation tax, makes the system legible above the team level, supports faster feedback loops through apples-to-apples signals, and lowers cognitive load for anyone who moves between contexts.
It also acts as a scaffold for learning. When people are new to a role, team, or practice, shared structure gives them something to follow until they build their own intuition. It helps people get up to speed faster and creates a common language for coaching.
But consistency isn't free. In fact, sometimes it costs a great deal.
Why minimally viable consistency?
Consistency has diminishing returns and escalating costs.
Each additional constraint adds governance burden and reduces local fit. Over-consistency kills responsiveness and creativity because teams can't adapt to their domain without fighting the system. It generates performative compliance where people fill in the fields but the data means nothing.
You're always looking for the most upside with the least downside. If you can achieve the same consistent behavior and outcomes with fewer negative side effects, that's what you're shooting for.
The calculus here depends on context. A large enterprise with regulatory requirements, complex dependencies, and hundreds of teams coordinating across boundaries will genuinely need more consistency than a scaleup with fewer dependencies and more autonomous teams. Neither is wrong. They produce very different answers to the question of how much consistency is enough.
MVC asks: what is the least consistency we need to get the benefits above, without paying the costs of over-standardization? Getting this right is equal parts skill, science, and art.
Three approaches
Not all consistency works the same way or asks the same thing of people. When you decide what to make consistent, you're actually choosing between three different strategies:
Sharp consistency
A small number of things that are opinionated and uniform. It can be a hard rule, but "sharp" also means spiky, provocative, designed to get people thinking. The opinionatedness is part of the point. It creates a strong frame that shapes behavior through the clarity of the stance, not just through enforcement. Use when the value is in the sameness itself, and when the opinion embedded in the constraint really matter. Example: every team has named goals and input metrics, surfaced weekly in the same format. The opinion here is that teams should be accountable to outcomes they can influence, and that this should be visible.
Flexible consistency
Things that are consistent because they share an intent, but bend to local meaning. Use when the value is in the shared purpose, not the shared form. Example: every team has a "work unit" object that must be less than a quarter in duration, but can represent anything (a feature, an experiment, a spike) and links to whatever context the team needs.
Legible variety
A consistent way of describing inconsistency. Things that are intentionally different across teams, but the differences are named, visible, and navigable. You might challenge why this is a form of consistency at all, but the consistency is in the effort to name the variety. You are consistently explicit about what's different and why. Use when the work is structurally different across groups and people need to orient quickly without requiring sameness. Example: the org has five team types (platform, product, enablement, growth, ops), each with a different cadence and reporting shape, all documented so anyone can look at a team and know what to expect.
A basic portfolio
Here's what it might look like when you mix all three deliberately:
Sharp: Every team has named goals and input metrics, surfaced in the same format quarterly. A common way to see priorities, outcomes, dependencies, and progress across the org. Non-negotiable.
Flexible: Every team practices discovery, but we define the thinking that goes into it, not the exact artifacts, depth, or sequence. Teams apply better product judgment in their own way.
Legible variety: Our platform teams, product teams, and ops teams have fundamentally different initiative shapes (a six-month cross-team migration, a two-week experiment, a continuous optimization effort). We name those shapes explicitly so everyone knows what they're looking at.
Other frames
Here are a few other ways to look at the same three ideas:
As agreeing on what words mean:
We agree on what they mean, and we are going to all enact a very narrow definition. (Sharp.)
We agree on what they mean in principle, and we'll adapt accordingly. (Flexible.)
We agree we disagree on what they mean, but it is important to know how we disagree, and why it matters. (Legible variety.)
As a computer science analogy:
Sharp consistency is a strict schema (everything must match exactly, and the strictness is opinionated enough to trigger thought about what you're putting in).
Flexible consistency is an interface or protocol (you define the contract but not the implementation).
Legible variety is a tagged union (you enumerate the valid variants, each with its own shape, but the system knows all possible shapes and can route accordingly).
Each of these has risks.
Sharp consistency can stop matching reality but stay enforced anyway, so people route around it. Flexible consistency can be interpreted so differently that the shared part disappears entirely. Legible variety can accumulate too many types until the map becomes as complex as the territory.
The AI opportunity
Which brings me to AI and the jobs it can do well (and not as well).
Job 1: AI as translator between inconsistent contexts.
This lets you keep things inconsistent without jumping to consistency just for legibility's sake.
AI is effective at translating between schemas. One group works in bets and experiments, enterprise wants initiatives under a strategic pillar with coarse-grained capacity. AI can serve as the translator, like the person who previously had the mind-numbing job of copy-recontextualize-pass-along. Teams retain local variety, AI handles the translation to the enterprise view.
The risk: AI translation replaces the sensemaking that happens when people communicate directly. The messy "wait, what do you actually mean?" conversations are where alignment actually forms. If AI-generated summaries enable management from on high and reduce those conversations, you get legibility without understanding. (Related: Messy Docs As Helpful Pattern.)
Job 2: AI as enabler of multiple concurrent frames.
This lets you stop forcing everyone into one "official" model and support multiple valid views of the same work simultaneously.
Companies naturally gravitate toward "one model to rule them all" because simply having one way is hard enough. They don't embrace concurrent operating models or support multiple valid frames because the cognitive and coordination overhead of maintaining them is too high.
AI can break that down. The same underlying work can be viewed through different lenses depending on who's asking. Finance sees budget allocation and cost centers. PMs see bets and learning goals. Engineering sees technical scope and dependencies. Leadership sees strategic pillars and progress. None of these is "the real one" that everything else translates from. They're all valid frames, maintained simultaneously, without humans having to manually keep them in sync.
Again, the risk: humans keeping things in sync is how people actually learn, build shared understanding, and develop intuition about the system. If AI removes that friction entirely, you also remove the cognitive work that builds organizational sense-making. The translation was never just a tax. It was also a learning mechanism. (Related: Institutionalized Overload (Now With AI).)
Job 4: AI as a consistent coach for learning.
This lets you provide consistent guidance while people are building new muscles, adapted to their context.
When teams are learning new practices, they need consistent advice that still bends to their situation. AI can provide that: consistent guidance on what good discovery looks like, consistent nudges toward writing assumptions down before starting, consistent reminders to connect work to outcomes. But adapted to what this team is actually doing, right now. In the hands of more skilled coaches who configure and guide it, AI becomes a way to scale the scaffold without requiring that coach to be in every room.
The risk: coaching without relationship becomes compliance prompting. If the AI coach doesn't have context on the team's situation, history, and constraints, its nudges become generic best-practice nagging that people learn to dismiss. And if it replaces the human coach rather than extending them, you lose the judgment, trust, and adaptation that makes coaching actually work.
Questions to consider
Where in your org are you forcing sharp consistency that should actually be flexible? Where is something "flexible" that has eroded and become meaningless?
What are you calling consistent that is actually just a shared label with no shared meaning underneath?
Where do you have variety that no one has bothered to name or document? Is it causing confusion, or is it fine?
If you removed a consistency requirement tomorrow, what's the worst thing that would actually happen? Who would notice?
Are you asking for consistent behaviors when all you really need is a consistent interface?
Where are people spending time translating between local reality and global formats? Is that translation building understanding, or is it just overhead?
What consistency exists today only as a scaffold for learning? Has the learning already happened? Can you release it?
If AI could handle the translation for you, would you actually trust the output? What's missing for that trust to exist?
Where are you stuck in "one model to rule them all" not because it's right, but because maintaining multiple frames felt too expensive?
