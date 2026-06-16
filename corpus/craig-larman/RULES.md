# Email Retrieval Rules

## Source
- Gmail MCP: `mcp__claude_ai_Gmail__search_threads`
- Search query: `from:craig.larman@gmail.com to:candidate-less-trainers@googlegroups.com`
- Paginate with `pageToken` from `nextPageToken` in results (~201 total threads estimated)

## What to capture
- Only messages where `sender == "craig.larman@gmail.com"`
- Each Craig message in a thread = separate file (even if same thread/date)
- Skip messages from other senders

## File naming
`YYYY-MM-DD-short-slug.md`
- Date from message `date` field (not thread date)
- Slug from subject, lowercase, hyphens
- If two Craig messages same date same thread: use `-reply` suffix for later one
- If two Craig messages same date different threads: use distinct slugs from subject

## Frontmatter format
```
---
date: YYYY-MM-DD
subject: "exact subject line"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/[msgid]n%40googlegroups.com
---
```

## URL rule (critical)
- URL must be the Google Groups **msgid** URL, NOT a Gmail message/thread ID
- Extract from the `plaintextBody` footer line: `To view this discussion on the web visit https://groups.google.com/d/msgid/...`
- Gmail IDs (hex like `188ddc05af2cf430`) are wrong — they won't resolve
- msgids look like UUIDs: `90e6f062-1ea9-40c7-a828-d192d13ea25en%40googlegroups.com`

## Body
- Use `plaintextBody` field
- Strip Google Groups footer starting with `--\nYou received this message because you are subscribed`
- Keep Craig's text only, preserve formatting including `*bold*` markers

## Large thread handling
- MCP responses >token limit auto-save to tool-results files
- Extract with: `jq -r '.messages[] | select(.sender=="craig.larman@gmail.com") | ...' file.txt`
- Get URL from: `jq -r '.messages[] | select(.sender=="craig.larman@gmail.com") | (.plaintextBody // "") | split("\n")[] | select(test("groups.google.com/d/msgid/candidate-less-trainers/[^>]+n%40"))' file.txt`

## Deduplication
- Before writing any file, check [INDEX.md](INDEX.md) — if subject/date already listed, skip
- Check URL uniqueness: `grep -h "^url:" *.md | sort | uniq -d`
- Two threads with near-identical content on same day = Craig sent same email twice = keep BOTH (different threads, different Google Groups URLs)
- One thread with two Craig messages = two files (different dates or different content)

## Workflow
1. Read INDEX.md to see what's already stored and what's in the known gaps section
2. Write new files for known-gap emails first (bodies already fetched)
3. Fetch new threads for everything else
4. After writing new files, update INDEX.md: add rows to Stored table, remove from Known gaps
5. Update counts at top of INDEX.md (Stored / Missing)
