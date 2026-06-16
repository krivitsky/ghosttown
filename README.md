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

| Ghost | Domain | Command | Output Token Density |
|---|---|---|---|
| [John Cutler](ghosts/john-cutler.md) | Product management, org design, AI adoption | `/ghost-me john-cutler` | [1.2x](ghosts/john-cutler-sample.md) |
| [Craig Larman](ghosts/craig-larman.md) | Systems thinking in org design, GenAI and LLM Assisted Development (GLAD) | `/ghost-me craig-larman` | [**3x**](ghosts/craig-larman-sample.md) |
| [Donald Trump](ghosts/donald-trump.md) | Deal-making, loyalty, US politics, tariffs | `/ghost-me trump` | [1.1x](ghosts/donald-trump-sample.md) |
| [W. Edwards Deming](ghosts/w-edwards-deming.md) | Quality, systems, variation | `/ghost-me deming` | [—](ghosts/w-edwards-deming-sample.md) |
| [Yoda](ghosts/yoda.md) | Wisdom, commitment, fear, the Force | `/ghost-me yoda` | [1.4x](ghosts/yoda-sample.md) |
| [Sheldon Cooper](ghosts/sheldon-cooper.md) | Theoretical physics, social protocols, intellectual superiority | `/ghost-me sheldon-cooper` | [0.8x](ghosts/sheldon-cooper-sample.md) |

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

## The bigger picture

Voice mimicry is Layer 1. It makes a good demo and it isn't a business. The real thing sits higher up the stack.

Expert judgment lives in one head. It can't scale past that person's calendar, and it leaves when they leave. You can't clone a schedule — but how someone reasons travels.

The senior engineer who holds the whole system in their head isn't there at 2am, or when ten conversations land at once. The Ghost is. Not instead of them — for the moments they can't be in the room.

So the question shifts. Not "can it talk like me?" but: hand it an org chart, a topology, a strategic fork — does it read the situation the way the expert would? Spot the misalignment, infer the bottleneck, say which intervention goes first? Those moves are reusable — the expert's heuristics on a problem they've never seen. That's the asset. The Ghost is the surface you reach it through.

**The value ladder:**

| Layer | What it clones | Status |
|---|---|---|
| 1 — Voice | How the person communicates | ✅ This repo |
| 2 — Persona | How the person reasons | ✅ This repo |
| 3 — Intellectual Asset | Frameworks, heuristics, mental models | Pipeline seeds this |
| 4 — Institutional Ghost | Layer 3 + a company's own data | Future |

This repo is Phase 0: a forkable toy that proves the extraction loop works. The four-pass pipeline (heuristics → principles → biases → voice) seeds Layer 3. The bar: a good ghost diagnoses like the expert on inputs the corpus never contained — not just on familiar ground.

The token-density eval is the first signal. Run 2–4x denser than default Claude on the same prompt, and it's compressing judgment, not faking an accent.

Fork it. Add your ghosts. The question worth testing: do the extracted heuristics hold on territory the corpus never saw?

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
| `ghosts/[slug]-sample.md` | The ghost's eval response (token-density benchmark) |
| README row | Added to the table above, with the density ratio linked to the sample |

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
