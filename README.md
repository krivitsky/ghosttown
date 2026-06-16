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

| Ghost | Domain | Command | Density |
|---|---|---|---|
| Craig Larman | Systems thinking in org design, GenAI and LLM Assisted Development (GLAD) | `/ghost-me craig-larman` | [**3x**](ghosts/craig-larman-sample.md) |
| Donald Trump | Deal-making, loyalty, US politics, tariffs | `/ghost-me trump` | [1.1x (thin corpus)](ghosts/donald-trump-sample.md) |
| W. Edwards Deming | Quality, systems, variation | `/ghost-me deming` | [—](ghosts/w-edwards-deming-sample.md) |
| Yoda | Wisdom, commitment, fear, the Force | `/ghost-me yoda` | [1.4x (thin corpus)](ghosts/yoda-sample.md) |
| Sheldon Cooper | Theoretical physics, social protocols, intellectual superiority | `/ghost-me sheldon-cooper` | [0.8x (fictional)](ghosts/sheldon-cooper-sample.md) |

---

## Build a new ghost

1. Create a folder inside `corpus/` named after the expert (e.g. `corpus/deming/`)
2. Drop their writing into that folder (emails, essays, talks, transcripts)
3. Open this repo in Claude Code
4. Say: **"make me a ghost for [expert name]"**

Claude runs the extraction pipeline against `corpus/[expert-name]/` only and writes the result to `ghosts/`. Minimum corpus: ~5 substantial documents.

---

## Extraction pipeline

Four passes over the corpus:

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
