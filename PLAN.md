# Site restructure plan

Cut repetition, make the homepage concise. Planned 2026-09-29, not yet started.

The homepage should answer two questions: what this is, and what the student
gets. Everything else lives on its own page.

---

## 0. Before anything: this folder

The project used to live in `~/Desktop/First-Offer-Academy`, which iCloud syncs.
iCloud had offloaded most of the files and was restoring them at roughly one
file per minute, which blocked `git` and broke builds. This folder
(`~/code/First-Offer-Academy`) is a fresh clone at `ff4a503`, outside iCloud.

- Work here from now on. The Desktop copy is stale the moment anything is
  committed here.
- Nothing is lost: both copies were at `ff4a503`, and origin has everything.
- Recommended: System Settings → Apple ID → iCloud → Drive → turn off
  "Desktop & Documents Folders", then delete the Desktop copy.

---

## 1. What the audit found

Measured on the built site, counting visible text only (not Next's hydration
payload, which inflates raw HTML counts three- to fourfold).

| Repeated on the homepage | Times |
|---|---|
| Accountability & Pods | 7 |
| Candidate Brand | 6 |
| Interview Reps | 6 |
| Outreach System | 5 |
| Track Technicals | 4 |
| Story Bank | 3 |
| `tyler.jpg` rendered | 3 |
| Sections | 16 |

The six part names come from one source (`content/programOverview.ts` →
`modules`), but six different homepage sections render them: Offerings,
HowItWorks, Tracks, LeavesWith, PriceBand (the "$5,000 includes" list), and
several FAQ answers.

---

## 2. Decisions

| Question | Decision |
|---|---|
| Founder photo on the homepage | One 48px circular headshot in the founder line, nothing larger |
| `/faq` | **Keep as its own page.** It already renders from the same `content/faq.ts` as /parents, so no text is duplicated, and the page carries FAQPage structured data worth keeping in search |
| "Compare options" footer link | **Keep.** `#compare` does exist on /program; the brief assumed it might not |
| Constants location | `content/site.ts`, not `lib/site.ts` — every other constant already lives in `content/` |

---

## 3. Homepage: 16 sections → 8

Final order. Nothing else renders on the homepage.

1. **Announcement bar** — unchanged.
2. **Hero** — eyebrow, H1, one subline, two buttons only ("Apply for the January
   cohort" primary, "Book a parent call" secondary). The "Free resources" button
   comes out. One proof row: *N students coached to internships in their first
   year · 7+ internships worked by the founder · 24 seats, January 2027*. The
   large founder portrait comes out, and the duplicate stat row goes with it.
3. **Founder line** — one sentence under the proof row: "Built by Tyler Ho — 7+
   internships, incoming investment banking analyst," linking to /about, with a
   48px circular headshot.
4. **The problem** — H2 plus the three existing cards (Access is gated / The
   timeline is earlier / Career centers are built for everyone) and one
   "View program details →" link.
5. **What the student leaves with** — six cards, each a title, ONE sentence, and
   "Read more" to `/program#anchor`. Bullet lists come out. The three tracks move
   into the Track Technicals sentence ("Weeks 5–6 split by track: Finance,
   Consulting, or Marketing") as links. Keeps the one-line disclaimer that these
   describe the work, not an outcome.
6. **Proof** — Tom's "Kim's before and after" video, plus one student quote if
   one exists in the data, and "Read every result →" to /results.
7. **Free strip** — one slim cream strip: "Free: the 20-page Playbook and 13
   templates →" to /free-resources. Replaces three deleted sections.
8. **Tuition + final CTA (merged navy band)** — $5,000 or 3 payments of $1,700 ·
   24 seats · $1,000 deposit refundable until December 15, 2026 · refund policy
   link · Apply (sage button) + Book a parent call. Does **not** list the six
   parts.
9. **FAQ** — four questions only: Isn't freshman year too early? / What if they
   don't land an internship? / How much time does it take each week? / Is the
   deposit refundable? Answers rewritten so none recites the six part names.
   Keeps "All questions →".
10. **Footer + newsletter** — unchanged.

### Deleted from the homepage

| Section | Where the content already lives |
|---|---|
| "Everything in one place" 01–04 cards (`Offerings`) | Duplicates the nav |
| "How it works" Week 0–8 timeline (`HowItWorks`) | /program (`Syllabus`) |
| Weekly cadence cards (90-min session, 60-min 1:1, pod of three) | /program (`WeeklyFormat`) |
| "Our mission" + non-target paragraph + photo #2 (`Mission`) | Nowhere — the point survives in the Problem section |
| Track cards (`Tracks`) | Folded into the Track Technicals card; full pages at /tracks/* |
| "Why I built this" founder story + photo #3 (`Founder`) | /about |
| "Start with the same material we teach" (`FreeResources`) | Replaced by the slim strip → /free-resources |
| "Upcoming sessions" (`EventsSchedule`) | /events, the announcement bar, the nav |
| "Free guides from the Playbook" (`LatestArticles`) | /blog |
| "Success stories" (`SuccessStories`) | /results |
| "24 seats. January starts sooner…" (`FinalCta`) | The merged price band replaces it |

Verify before deleting: `HowItWorks` and the cadence cards must exist on
/program. `Syllabus` and `WeeklyFormat` are already rendered there, so this is a
check, not a move.

---

## 4. Structure, nav and redirects

### Merges

- `/curriculum` (PhaseMap + WeeklyRhythm) → **/program#curriculum**
- `/our-promise` (promise content + LeavesWith) → **/program#promise**
- `/results/parents` (ParentWall) → **/results#parents**

### Redirects (`next.config.ts`, permanent)

```
/curriculum    → /program#curriculum
/our-promise   → /program#promise
/results/parents → /results#parents
```

### Nav (`components/Header.tsx`)

- Program dropdown: How it works, Finance, Consulting, Marketing. **Pricing
  comes out** (it's already top level).
- Testimonials: a single top-level link to **/results**, no dropdown.
- "For parents" becomes its own top-level item.
- "Share your story" moves to the footer only.
- Resources dropdown: unchanged.

### Footer (`components/Footer.tsx`)

- `/curriculum` → `/program#curriculum`; `/our-promise` → `/program#promise`.
- Add "Share your story".
- Keep `/program#compare` — that section exists.
- No footer link may point at a removed page.

---

## 5. Photos

`tyler.jpg` appears in six places today.

| Where | Action |
|---|---|
| `components/sections/Hero.tsx` | **Remove.** Large portrait comes out of the hero |
| `components/sections/Mission.tsx` (via `ArchPhoto`) | **Gone** with the section |
| `components/sections/Founder.tsx` (/about) | **Keep.** The one full-size photo |
| Homepage founder line | **New**, 48px circle |
| `components/ArchPhoto.tsx` default, used by `ProgramHero` | **Replace** with a styled cream card; add `// PHOTO:` TODO for a real workshop photo |
| `components/CoachCard.tsx`, `app/workshops/page.tsx` | **Keep** — both are genuinely about Tyler |

No stock or AI images of people anywhere. Where a slot is removed, use a cream
card, a video thumbnail, or nothing.

---

## 6. Constants

Add to `content/site.ts`:

```ts
PILOT_STUDENTS = 8   // students coached to internships in their first year
```

Then replace every hardcoded copy:

| Value | Hardcoded in |
|---|---|
| Pilot number | `components/sections/Hero.tsx` ("8 students"), `components/sections/Founder.tsx` ("coached eight freshmen"), `content/stats.ts`, `app/about/page.tsx` metadata |
| Seats | `app/apply/page.tsx` (title + description), `content/stats.ts`, `content/programOverview.ts` |
| Price / plan | `app/pricing/page.tsx` metadata, `content/zh.ts` |
| Cohort start | `app/apply/page.tsx`, `content/stats.ts` |
| Refund date | `app/pricing/page.tsx` metadata |

Prose that spells the number ("eight freshmen") should read from the constant
too, spelled out in a helper rather than typed again.

---

## 7. Brand rules (unchanged, don't break)

Mist `#E7EDF5` ground · navy `#1A2B48` headlines, dark bands, primary buttons ·
black `#000000` body text · cream `#F7F4EE` cards and text on navy · sage
`#A8C4A4` one accent per page · dusty `#3F6690` links. No pure white, no black
fills, no black text on navy, no sage text on mist. Source Serif 4 600 for H1/H2,
Hanken Grotesk everywhere else. Primary navy button once per screen; on navy
bands the CTA is sage with navy text. No city, region or campus names. Never
"guaranteed" or "elite".

---

## 8. Files to touch

**Edit:** `app/page.tsx` · `app/program/page.tsx` · `app/results/page.tsx` ·
`components/sections/Hero.tsx` · `LeavesWith.tsx` · `PriceBand.tsx` ·
`FaqList.tsx` (a `home` variant capped at four) · `components/Header.tsx` ·
`components/Footer.tsx` · `components/ArchPhoto.tsx` · `content/site.ts` ·
`content/stats.ts` · `content/faq.ts` · `next.config.ts` · `app/globals.css`

**Add:** `components/sections/FounderLine.tsx` ·
`components/sections/FreeStrip.tsx`

**Delete:** `app/curriculum/` · `app/our-promise/` · `app/results/parents/` ·
`components/sections/Mission.tsx` · `Offerings.tsx` · `HowItWorks.tsx` ·
`Tracks.tsx` · `FreeResources.tsx` · `FinalCta.tsx` (if nothing else uses it —
check /about, /faq and the track pages first)

---

## 9. Verification

1. `npm run build` and `npm run lint` clean.
2. Homepage at 1440px and 390px: exactly the sections above, in order, no
   horizontal scroll.
3. Grep the homepage: each of the six part names appears only in the "What the
   student leaves with" cards. Target zero elsewhere, including FAQ answers.
4. Crawl every nav and footer link plus the three redirects; report any 404.
5. Confirm `tyler.jpg` renders at most once on the homepage and once on /about.
6. Report: sections removed, sections moved (from → to), redirects added, every
   file changed.

---

## 10. Risks

- **Deleting `/curriculum` and `/our-promise` drops two indexed URLs.** The
  permanent redirects preserve their search equity, but the anchors must exist
  on /program before the pages go, or both redirects land on a page with no
  matching section.
- **`FinalCta` is used by other pages** (/about, /faq, /results and others).
  Delete it from the homepage only; keep the component.
- **The homepage proof section needs real content.** There is one parent video
  and zero written testimonials. With placeholders off in production, section 6
  will be thin until real testimonials exist. That is a content problem, not a
  layout one.
