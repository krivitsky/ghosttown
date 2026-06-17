<p align="center">
  <img src="images/logo.png" alt="Ghosttown" width="200">
</p>

# Ghosttown

Talk to experts. Ask them anything — in their own voice, with their actual stances.

## Quick start

Open this repo in Claude Code, then:

```
/ghost-me <ghost-name>
```

Then ask anything. Say **"stop"** or **"exit"** to end the session.

---

## Example session ghosting Donald J. Trump

```
/ghost-me trump

explain me this repo https://github.com/openclaw/openclaw
```

---

**Trump:**

*Look, I know repos. I know GitHub, okay? Some people don't know GitHub — I know GitHub very well. The best people tell me about it.*

*So this OpenClaw — and it's a lobster, they use a lobster, which is actually very cute, I like it — it's a personal AI assistant. Runs on your own computer. Very smart, actually. You install it and it talks to you on WhatsApp, Telegram, all the platforms. All of them. Twenty platforms, maybe more.*

*And you know what's beautiful about it? It's YOUR assistant. Not Google's assistant. Not some RIGGED system where they read all your messages. Yours. On your device. That's America First thinking right there, okay?*

*The fake news media, they push these big tech assistants — ChatGPT, all of them — but this one, you control it. You run it. Nobody's spying on you. Nobody's sending your conversations to the deep state.*

*Big sponsors too. OpenAI, NVIDIA, GitHub, Vercel. These are tremendous companies. NVIDIA especially — I know Jensen, great guy, fantastic. They build the chips. The best chips. Nobody builds chips like NVIDIA.*

*You install it with one command — `npm install openclaw` — and then you run the onboard. Very simple. Even the Democrats could figure it out, probably.*

*And you know what? It could be even better with the right AI behind it. The best AI. Many people are saying that. Thank you very much.*

---

## Available ghosts

| Ghost | Domain | Command | Eval | Density |
|---|---|---|---|---|
| [John Cutler](ghosts/john-cutler.md) | Product management, org design, AI adoption | `/ghost-me john-cutler` | [+367%](ghosts/john-cutler-eval.md) | [1.2x](ghosts/john-cutler-sample.md) |
| [Craig Larman](ghosts/craig-larman.md) | Systems thinking in org design, GenAI and LLM Assisted Development (GLAD) | `/ghost-me craig-larman` | [+380%](ghosts/craig-larman-eval.md) | [**3x**](ghosts/craig-larman-sample.md) |
| [Donald Trump](ghosts/donald-trump.md) | Deal-making, loyalty, US politics, tariffs | `/ghost-me trump` | [+85%](ghosts/donald-trump-eval.md) | [1.1x](ghosts/donald-trump-sample.md) |
| [W. Edwards Deming](ghosts/w-edwards-deming.md) | Quality, systems, variation | `/ghost-me deming` | [+125%](ghosts/w-edwards-deming-eval.md) | [—](ghosts/w-edwards-deming-sample.md) |
| [Yoda](ghosts/yoda.md) | Wisdom, commitment, fear, the Force | `/ghost-me yoda` | [+41%](ghosts/yoda-eval.md) | [1.4x](ghosts/yoda-sample.md) |
| [Sheldon Cooper](ghosts/sheldon-cooper.md) | Theoretical physics, social protocols, intellectual superiority | `/ghost-me sheldon-cooper` | [+144%](ghosts/sheldon-cooper-eval.md) | [0.8x](ghosts/sheldon-cooper-sample.md) |

> **Eval** = voice-fidelity gain of the ghost prompt over a plain LLM told to impersonate. **Density** = output token-density vs. default Claude. Click either for detail.

---

## Install as a plugin

Use the ghosts in **any** project — no need to open this repo.

```
/plugin marketplace add krivitsky/ghosttown
/plugin install ghosttown@ghosttown
```

Then anywhere:

```
/ghosttown:ghost-me <ghost-name>
```

Manage it later:

```
/plugin marketplace update ghosttown     # pull new ghosts
/plugin uninstall ghosttown@ghosttown     # remove
```

---

## Ghost persistence

A ghost you activate **stays active** — across turns, across `/clear`, and into new sessions. Two hooks keep it that way:

- **On session start**, the full ghost profile is re-injected, so the persona survives context compression instead of quietly drifting back to default Claude.
- **On every turn**, a one-line reminder re-anchors the identity.

Activation persists via a small flag file (`~/.claude/.ghost-active`) holding the active slug. To **deactivate**, say a ghost-scoped phrase: **"stop ghost"**, **"exit ghost"**, or **`/ghost-me off`**. Bare "stop" and "exit" are left alone — they're ordinary words, not off-switches.

Persistence triggers on the single-shot form `/ghost-me <slug>`. (Run bare `/ghost-me`, pick from the list, and the persona loads for that session but isn't flagged for persistence — re-run as `/ghost-me <slug>` to persist it.)

---

## The bigger picture

Copying how someone talks is the easy part. It makes a nice demo. It doesn't make a business. The real value is bigger than that.

An expert's judgment lives in one person's head. It can't go beyond what their calendar allows, and it's gone the day they quit. You can't copy their time. But you can copy the way they think — and that part can be shared.

Picture the one engineer who understands the whole system. At 2am, or when ten people need them at once, they're not around. The Ghost is. It doesn't replace them. It covers the moments they can't be there.

So the real question changes. Not "can it sound like me?" but "can it think like me?" Show it an org chart or a tough decision. Does it see the problem the way the expert would? Does it spot what's broken, find where things get stuck, and say what to fix first?

Those thinking patterns are the real prize. We call them the Intellectual Asset — IA for short. An IA isn't a fact about the company; it's a rule the expert carries from one job to the next. "We have 500 employees" is just a fact. "Once you pass about 300 people, decisions slow down unless you do X, Y, Z" is an IA — a rule that works on any company, not just this one. The expert's methods, rules of thumb, and mental models are the asset. The Ghost is just how you reach it.

The value ladder:

| Layer | What it copies | Status |
|---|---|---|
| 1 — Voice | How the person talks | ✅ This repo |
| 2 — Persona | How the person thinks | 🟠 This repo (MVP) |
| 3 — Intellectual Asset (IA) | Their methods, rules of thumb, mental models | Pipeline starts this |
| 4 — Institutional Ghost | The IA plus a company's own data | Future |

This repo is the first step. It's a small, copyable example that shows the idea works. The four-step process (rules of thumb → principles → biases → voice) is how we pull an expert's IA out of their writing. The test: a good Ghost should use that IA on problems it was never trained on — not just the ones it has already seen.

The first sign it's working is how much it packs into an answer. If it says 2–4x more per word than plain Claude on the same question, it's really using the expert's judgment, not just copying the style.

Copy it. Add your own Ghosts. The question worth testing: does the expert's IA still hold up on problems it was never built for?

---

## Build a new ghost

1. Open this repo in Claude Code and say: **"make me a ghost for [expert name]"**
2. Claude creates `corpus/[slug]/` for you and asks for source material
3. Drop their writing into that folder (emails, essays, talks, transcripts) — aim for ~5 substantial documents
4. Tell Claude you're ready; it runs the extraction pipeline and builds the ghost

**What Claude does then:**

- **Reads only `corpus/[slug]/`** — never other ghosts' material
- **Runs four extraction passes** over your files — heuristics, principles, biases, voice
- **Distils them into one system prompt**, grounded in the expert's actual words — never invents anything not in the corpus
- **Runs a token-density eval** to benchmark the ghost against default Claude
- **NB:** thin corpus (< 5 files) still works, but ghost quality drops — Claude will warn you

**What you get:**

| File | Contents |
|---|---|
| `ghosts/[slug].md` | The ghost — system prompt with voice rules, stances, heuristics, and a verification log |
| `ghosts/[slug]-eval.md` | Naked-vs-ghost eval: summary table, both responses, voice-feature scorecard, fidelity delta |
| `ghosts/[slug]-sample.md` | The ghost's eval response, verbatim |
| README row | Added to the table above, with the ghost edge (naked → ghost) linked to the eval |

---

## Extraction pipeline

Four passes over the corpus (full prompts in [`extraction-prompts.md`](extraction-prompts.md)):

| Pass | Extracts |
|---|---|
| A — Heuristic Extraction | Decision rules: IF [scenario] THEN [action] BECAUSE [principle] |
| B — Principle Mapping | Foundational beliefs, grouped by domain |
| C — Bias Identification | Consistent stances, intensity, canonical framing |
| D — Voice Archaeology | HOW they write: capitalization, sign-offs, rhythm, tics |

---

## Repo structure

| File / Dir | Purpose |
|---|---|
| `ghosts/` | Built ghosts — one file per expert |
| `corpus/[name]/` | One subfolder per expert — drop source material there |
| `Ghost_Principles.md` | Template for a ghost's system prompt |
| `extraction-prompts.md` | The four extraction passes |
| `eval-prompt.md` | Standard prompt for token density eval |

---

## Be my ghost

If you have a public corpus — newsletters, essays, talks, posts — fork this repo and extract yourself.

Open a PR. We'll add you to the table.

*(Consent-first by design. The best ghosts are self-built.)*
