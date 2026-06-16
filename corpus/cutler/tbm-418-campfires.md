---
source: email
subject: TBM 418: Campfires, Trails, and Quests
date: 2026-04-22
author: John Cutler
newsletter: The Beautiful Mess
---

I guess I'm putting together an AI series of sorts. This is #7.
Hope, Context, and Control
Seeing Everything, Understanding Nothing (The Context Trap)
Institutionalized Overload (Now With AI)
Legibility and Legitimacy
Before You Fire All Your Glue People Because of AI
Simple-player to Mutliplayer: Context Through Collaboration
At the day job, I'm deep in the question of how AI can help teams do more effective work, hence all the thinking below. It has highs and lows these days, with enough inspiring stories to keep me curious and hopeful.
If you and your team ever want to chat about this, reach out.
If you are using AI to reinforce broken mental models of how great software products get built, write the same old PRDs that wither on first contact with reality, generate box-checking business cases designed to shut out critique, decompose work into tidy cascades nobody believes in, and rinse all the value out of your customer feedback, you will supercharge whatever was already broken at your company with a deluge of polished markdown.
More artifacts, same blind spots.
But if you're using AI in ways that are congruent with the true, collaborative nature of product development, that respect how context emerges and gets shaped, that speed up learning and synthesis, and that result in higher leverage conversations with teammates, you're on the right track.
Co-design, co-prompting, evolving context(s), and shared understanding that compounds = right track.
Two Multiplayer Examples
Two personal examples of things working from the last 24hrs:
Lane Coherence
My coworker and I use Dotwork to pressure test the guiding principles for our stable workstreams, checking where our confidence has shifted and whether upcoming work is still in the right sequence. We take that readout as input into our next review session, where we reshape the principles to reflect what we currently believe is true. It doesn't replace conversations. It makes them higher leverage. We use AI as an imperfect, eager-to-please genie (thank you Kent Beck) to help us do better work. We use Dotwork to keep our mental model as up to date as possible.
Co-Prompting
In the midst of writing this post, I took a break to grapple with a thorny date problem (the best!). Let's go! First, my coworker explained that he had been adding some markdown files as context pointers in our codebase, and was excited for me to test them out using this as a use-case. I popped open our codebase in Cursor, and copied in a JSON file I had put together as part of a prototype (my initial effort to wrap my head around the problem). Then we "pair prompted," him with his technical eye, and me with my customer eye, to figure out what we supported. Meanwhile he was taking notes on where there were gaps in his context pointers, and where we were burning tokens.
In twenty minutes, I learned a ton about our platform, he learned about an area of functionality he hadn't checked out in a while, and we generated a couple options to discuss later with other team members. A couple minutes later, another coworker pinged me, and I was able to talk intelligently about how our system is architected while weaving in the customer's overall need.
These are two examples of things working. Like any team at the moment, we have our fair share of misses. But we're learning.
4Es
Both are great examples of multiplayer. There's a lens from cognitive science, the 4Es (embodied, embedded, enacted, extended), that captures why these sessions worked:
Embedded: our thinking was shaped by what we were sitting inside of. Dotwork's lane principles and confidence levels, the codebase, the context pointers, the customer JSON. That surrounding context shaped what we even thought to question.
Enacted: we didn't read an output and nod. We reshaped guiding principles, poked at prompts, redirected in real time. Understanding came through doing, not consuming.
Extended: neither of us could have held all of this in our heads alone. AI, the markdown files, the context pointers. They carried knowledge we could think with, not just refer to.
Embodied: the back-and-forth mattered. My coworker's technical eye caught things I'd miss; my customer eye caught things he'd miss. The pacing, the "wait, go back" moments, the way we traded the steering wheel. Not incidental to the outcome. It was the outcome.
In both examples, multiple people are bringing different perspectives, different knowledge, and different needs to the same session. Nobody is prompting in isolation and shipping the output. AI isn't the collaborator (although I use AI that way too, when it makes sense, and when I would annoy the crap out of a coworker). It's the surface the collaborators work on together. And the output isn't a deliverable; it's shared understanding that each person carries into their next conversation, decision, or piece of work.
Now flip it. What happens when someone works alone with AI, curating their own context, prompting in isolation? The 4Es reveal what's lost:
Embedded: you're embedded in your own curated context. The environment you reason within is shaped entirely by what you chose to include. You can't question what you didn't think to put there.
Enacted: the loop is prompt, read, revise, prompt again. AI goes where you steer it. No one redirects you. No "wait, go back" from a different vantage point.
Extended: AI extends your cognition, powerfully. But it holds what you gave it, not what three people with different expertise would have given it. Deep but narrow.
Embodied: there's no other body in the room. No one frowning at something that feels off. AI can simulate multiple perspectives if you ask, but that's directing a puppet show, not a collision of genuinely different stakes.
Single-player AI, through this lens, is accelerated isolation that feels like collaboration. It's using AI as a cartographer for places you haven't visited. The map looks authoritative, the terrain is detailed, the legend is clean. But nobody walked the ground, and they certainly didn't walk it with other people who see different things, trip over different rocks, and ask different questions about the landscape.
Stigmergy
Multiplayer doesn't have to be synchronous. Look at the pair-prompting example again, but focus on what happened before the session.
My coworker had been adding context pointers to the codebase on his own, days before we sat down together. When I opened the codebase, his thinking was already there, shaping what I saw and what I thought to ask. During the session, he was noting gaps to update for the next person. I brought in a customer JSON file that now lives in the repo for whoever comes next. A couple minutes later, I was on a call with another coworker, and the understanding from our session was already flowing into a different conversation.
There's a name for this kind of coordination: stigmergy. Ants leave pheromone trails that shape what the next ant does. Termites build by responding to what other termites have already placed. Wikipedia works this way: each edit reshapes the environment the next editor encounters. No central plan, just traces that accumulate. The 4Es still hold, just across time. The environment my coworker shaped (embedded) was the environment I reasoned within, even though he wasn't there when I opened it. Engaging with his traces was active, not passive (enacted). The markdown files carried his knowledge beyond the moment he wrote them (extended). And when we did sit down together, our different eyes made the traces richer than either of us would have alone (embodied).
Single-player AI is stigmergy for an audience of one. Your traces only loop back to you. Nobody else's surprise you, and yours don't compound for anyone else.
Campfires and Quests
But humans aren't ants. We have more to convene about than which path to take.
We need more than trails. We need campfires and quests. The trails are the traces we leave for each other: context pointers, shared docs, evolving principles. The quests are the purposeful work we do between campfires: sometimes solo, but often together. Pair prompting a thorny problem. A designer and developer researching a constraint side by side. Two people with different expertise walking the same territory and seeing different things.
And the campfire is where we bring it all back together: the pair-prompting session, the live reshaping of what we believe, the collision of different eyes on the same problem. We need all three, because we also need to map the territory together, not just report back from solo expeditions.
Trails without campfires are a wiki nobody reads. Quests without campfires are solo adventures that never connect. Campfires without trails or quests are Groundhog Day: great conversation, nothing learned since last time, start from zero again.
The question isn't "are you leaving traces?" or "are you having conversations?" It's: are your traces feeding your conversations, and are your conversations updating your traces? AI can power both halves of that loop. But only if there are other people in it.
I made this diagram about eight years ago, documenting what designer/developer collaboration actually looked like on a team with real trust. No AI involved.
Joint prep, then a kickoff. Co-design together, then go off and research individually. Come back for a pairing test. Split up for deeper work. Reconvene. Iterate. Release. The rhythm is the point: go apart, come together, go apart, come together. Trails and campfires, long before I had those words.
Now weave AI into every phase of this.
The individual prep is sharper because AI helps you synthesize what you know before you walk into the room.
The co-design session is higher leverage because everyone arrives with context that's already externalized, not trapped in someone's head.
The "go off and do deeper work" phase leaves richer traces because AI helps you document what you're learning as you learn it.
The pairing tests surface more because AI can hold the full history of what's been tried and what's changed.
The iteration cycles tighten because the context graph updates in real time, not whenever someone remembers to update the wiki.
I know there are people in 2026 who look at this diagram and say "AI makes all of this mess redundant. Why do you need the kickoff, the pairing, the back-and-forth? Just prompt it." I'd say the opposite. Used responsibly, AI doesn't make this redundant. It makes it accessible to teams that could never pull it off before, and even better for teams that already could.
AI doesn't replace any phase. It makes the trails richer between campfires, and the campfires more productive because of the trails.
