# First Offer Academy — Build Plan v4 (autonomous session)

Execute every task in order without stopping to ask questions. First read `CLAUDE.md`, `docs/brand-guide.md`, `docs/site-brief.md`, and **`docs/CURRICULUM-SOURCE.md`**. The curriculum source is the truth for program facts, numbers, and Tyler's methods. Where anything in the codebase contradicts it, update the codebase.

## Session mechanics
- Track progress in `docs/PROGRESS-V4.md` (`[ ]`, `[x]`, `[skipped: reason]`). After a restart or compaction, re-read it and continue from the first unchecked task.
- After each task: `npm run build` and `npm run lint` must pass, then `git add -A && git commit -m "v4 task N: <name>"`. Never push.
- If a task fails 3 times, revert it, mark it skipped, and move on.
- New packages: none, except where a task names one.
- Log decisions in `docs/DECISIONS.md` and Tyler's inputs in `docs/TODO-TYLER.md`, as in v3.

## Content rules (unchanged, non-negotiable)
- Never invent testimonials, names, quotes, stats, employer names, logos, reviews, outcomes, or offer counts.
- Banned: guaranteed, guarantee, elite, top 1%. Never name Barclays, Deloitte, or Irvine Investment & Trading Group.
- Brand palette, fonts, and buttons only. All editable content lives in `content/`.
- Every guide and playbook is written in Tyler's voice from `docs/CURRICULUM-SOURCE.md`: direct, specific, practical. Each gets `reviewedByTyler: false` in its data; show a small "Draft" chip on the page while false. Log them for Tyler's review.

---

## Task 1 — Program facts update (site-wide)
- **1:1s are 60 minutes.** Replace every mention of 15-minute 1:1s (program, pricing, parents, FAQ, home, /our-promise, /zh, emails, legal pages, JSON-LD, `content/*`) with "weekly 60-minute 1:1" / "twelve 60-minute 1:1s". Add the 1:1 format table from the curriculum source to `/program`.
- **"What every student leaves with"**: replace the "By Week 12" list everywhere (program, parents, pricing plan card, home, /our-promise) with the 9 items in the curriculum source, keeping the "requirements, not outcomes" framing. The externship line follows the externship note (conditional wording driven by `content/site.ts` → `externships.provider`).
- **The Standard**: update `content/program.ts` levels, the ladder, the gates, the syllabus mapping, and weekly minimums (50 sequenced emails/week from Week 3; 500+ total) to match the curriculum source exactly.
- **Positioning**: add the line "Execution and accountability, from someone who just went through the two most recent recruiting cycles" to the home hero sub-copy (keep it tight), the founder section, /program hero, and /parents. What we sell is execution and accountability; the tactics are free.

## Task 2 — Founder facts + LinkedIn
- Replace "7 internships" everywhere with "7+ internships worked, and offers from many more" (and the hero float card: "7+ internships worked"). Add `founder.offerCount` (empty) to `content/site.ts`. When it's set, stats and the founder copy say "[N] internship offers". Log it for Tyler.
- Add Tyler's LinkedIn (https://www.linkedin.com/in/tylerho1) as `founder.linkedin` in `content/site.ts`. Show it:
  - as a "Connect on LinkedIn" link with a LinkedIn icon in the founder section (home + /about), on the coach card, and on /contact;
  - in the footer social tiles (set `socials.linkedin` to the same URL so the tile grid appears);
  - in the JSON-LD `founder` → `sameAs`.

## Task 3 — Remove case studies by student type
- Delete `/results/by-type` and its component, the "Case studies by student type" item in the Testimonials dropdown and mobile nav, the sitemap entry, any footer links, and `studentTypes` from `content/stories.ts` and its types. Remove the Community college / No club / First-generation / Transfer / Freshman / Sophomore chips everywhere. Add a redirect from `/results/by-type` to `/results` in `next.config.ts`.

## Task 4 — Week 1–12 buildout (much more robust)
- New `content/curriculum.ts` generated from `docs/CURRICULUM-SOURCE.md`. For each week: number, title, phase, objective, "What we teach" (4–6 specific bullets expanding the source), live reps, the 60-minute 1:1 focus that week, the weekly minimum, deliverables, level gate reached, coach questions, and the templates/assets used that week (linking to Task 6 downloads where they exist).
- New route `/curriculum`: an overview grid of all 12 weeks (cards: week number, title, one-line objective, level badge), phase bands, and a "Your student's weekly rhythm" block (group session + 60-min 1:1 + pod + Sunday scoreboard).
- New route `/curriculum/week-[n]` (static params 1–12): a full week page with every field above, a "numbers this week" strip (cumulative emails target, calls, stories, externship status), previous/next week navigation, and a CTA band.
- Replace the `/program` syllabus accordion with richer panels built from the same data, each linking to its week page. Add "Curriculum" to the Program dropdown.
- Parents angle: each week page gets a short "What parents will see this week" line (from the biweekly report cadence).

## Task 5 — The Freshman Recruiting Playbook (15+ page lead magnet)
- Replace the one-page timeline PDF with **"The First Offer Playbook: How to Land Your First Internship Before Junior Year"**, a 15–20 page PDF generated from `content/playbook.ts` via the existing Playwright script (`npm run pdf`). Branded cover, table of contents, page numbers, running footer.
- Chapters (each with specifics, examples, templates, and checklists from the curriculum source):
  1. How recruiting actually works (the 5 things that matter, ranked; the freshman/sophomore market)
  2. The recruiting calendar by track and by quarter, freshman through junior year
  3. The top-tier resume (the rubric, line-by-line bullet rewrites, before/after examples with made-up example names clearly labeled as examples)
  4. Building a target list of 50 with contacts (A/B/C tiers, sourcing tools)
  5. The AI outreach system (personalization prompts, sequencing, follow-up cadence, guardrails)
  6. Cold email that gets answered (the Two C's, subject lines, 5 templates)
  7. The call (full framework, question bank, thank-you template)
  8. Turning calls into referrals (the close, staying warm, the tracker)
  9. Behavioral stories (the 25 self-questions, story template, mapping 8 stories to 10 questions)
  10. "Why this industry, why this firm" (the 3 buckets, worksheet)
  11. Technicals by track (study order and question lists: Finance, Consulting, Marketing, Tech)
  12. Interviews and superdays (flow, recovering from a blank, questions to ask)
  13. Externships and early experience (what counts, how to get it, how to put it on a resume)
  14. Your 12-week execution calendar (weekly numbers to 500 emails)
  15. Your 6-month game plan template
  16. Closing page: "The tactics are free. Execution is the hard part." with the program CTA.
- Update `/timeline` → rename the route to `/playbook-pdf` (redirect `/timeline`): landing page with chapter list, page count, cover mockup, email gate. Update every link to it.
- The script must fail if the PDF renders under 15 pages.

## Task 6 — Free loot: downloadable templates
Generate real files into `public/downloads/` from data in `content/downloads.ts` (with scripts in `scripts/`, run by `npm run downloads`). Use CSV for sheets (no new packages) and branded single-page PDFs via the existing Playwright pipeline for documents:
- Outreach tracker (CSV with headers, sample rows labeled EXAMPLE, and a follow-up date column)
- Target list template, A/B/C tiers with contact columns (CSV)
- Resume rubric (PDF) + resume template (PDF showing structure)
- Cold email template pack: 5 templates + follow-up sequence (PDF)
- AI personalization prompt pack (PDF)
- Call framework one-pager + referral close script (PDF)
- 25 self-questions + story template (PDF)
- "Why" worksheet (PDF)
- Technical question banks: Finance, Consulting, Marketing, Tech (4 PDFs)
- Interview scorecard (PDF)
- 6-month game plan template (PDF)
New route `/free-resources`: a card grid of every download (title, what it is, format, "Download"), grouped by stage, plus the Playbook PDF featured at the top. Most downloads are free with no email gate; only the Playbook PDF is gated. Add it to the Resources dropdown, the footer, and the home "Everything in one place" section.

## Task 7 — In-depth recruiting guides (the Playbook blog)
Expand `content/articles.ts` from 3 short posts to **at least 14 in-depth guides (1,800–3,500 words each)**, each with a table of contents, checklists, templates, and a "Download the template" link to its Task 6 file:
1. The complete freshman internship timeline (rewrite of the existing post)
2. How to write a top-tier resume with zero experience
3. Building a target list of 50 companies (and finding the right contacts)
4. The AI-assisted cold email system: personalization at scale without sounding like a robot
5. Cold email templates that get replies (rewrite and expand the existing post)
6. The networking call: a full framework and question bank
7. How to turn a call into a referral without asking for one
8. Behavioral interviews: finding and telling your 8 stories
9. "Tell me about yourself" (expand the existing post)
10. "Why banking/consulting/marketing/tech, and why this firm"
11. Finance technicals for beginners: the study order that works
12. Consulting case interviews from zero
13. Breaking into marketing and tech internships as a freshman
14. Externships: what they are and how to use them
15. For parents: how to support your student's search without taking it over
Add category filtering on `/blog` (Getting started, Resume, Networking, Interviews, Technicals, For parents), an estimated read time, and "Related guides" at the end of each article. Keep the existing article component and add support for tables and callout blocks in the `Block` type.

## Task 8 — QA and report
- Run the screenshot/layout check on every route at 375/768/1440 and fix issues. Run `npm run pdf` and `npm run downloads`, open the generated files, and check page counts and that nothing is cut off.
- Grep for "15-minute", "15 minute", "7 internships", "by-type", "Transfer", "No club", and the banned words and names. Zero hits outside the docs.
- Write `docs/SESSION-REPORT-V4.md` covering what changed, new routes, new downloads, and Tyler's review list (every guide and the Playbook PDF with `reviewedByTyler: false`, `founder.offerCount`, `externships.provider`, and anything else logged). Commit.

## Done when
All 8 tasks are checked in `docs/PROGRESS-V4.md`, build and lint pass, and `docs/SESSION-REPORT-V4.md` exists.
