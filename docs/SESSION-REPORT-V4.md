# Session Report: Build Plan v4

Date: 2026-09-21. All 8 tasks in `docs/BUILD_PLAN_V4.md` are done and checked in `docs/PROGRESS-V4.md`, with one commit per task (`v4 task 1` … `v4 task 8`). Nothing was pushed. Decisions are logged in `docs/DECISIONS.md` (under "Build Plan v4") and Tyler's to-dos in `docs/TODO-TYLER.md`.

## Verification (final state)
- `npm run build` and `npm run lint` pass.
- Screenshot/layout check (`node scripts/screenshots.mjs`) on all 59 routes at 375, 768, and 1440px: no horizontal scroll and no text within 16px of the edge. Earlier in the session this check caught a 768px horizontal scroll on every page, caused by the footer social grid appearing once LinkedIn was set. Fixed in Task 4.
- `npm run pdf`: the Playbook is **20 pages**. The script fails under 15. I opened all 20 pages as rendered images; nothing is cut off, and the table-of-contents page numbers are correct.
- `npm run downloads`: 15 files (2 CSV, 13 single-page PDFs). I rendered every PDF and checked it; each fits on one page. Only the cold email pack needed shrinking (80%).
- Guide lengths: `node --no-warnings scripts/count-guide-words.mjs` shows all 15 guides between 1,808 and 2,349 words (about 28,900 in total).
- Required greps across the repo (docs and node_modules excluded):
  - "15-minute", "15 minute", "7 internships", "Transfer", "No club": 0 hits.
  - "by-type": 1 hit, the `/results/by-type` → `/results` redirect in `next.config.ts` that Task 3 requires.
  - Banned words and names: 0 hits. The only "paid internship" match is inside "unpaid internship" in the parents FAQ ("Should my student take an unpaid internship?"), which is allowed.
- HTTP checks: `/timeline`, `/results/by-type`, and the old timeline PDF URL all 308-redirect correctly. `/curriculum/week-13` returns 404.

## What changed, by task
1. **Program facts.** 1:1s are now 60 minutes everywhere: program, pricing, parents, FAQ (and its JSON-LD), home, /our-promise, /zh, and the terms. /program has new tables for the 1:1 format and the 90-minute session format.
   - A single "What every student leaves with" list (9 items, "requirements, not outcomes") now appears on /program, /parents, /our-promise, home, and the /pricing plan card.
   - The externship line is conditional on `site.externships.provider`.
   - The Standard's gates now match the curriculum source, with target weeks, and the weekly minimum (50 sequenced emails a week from Week 3; 500+ total) is shown.
   - The positioning line ("Execution and accountability…") was added to the home hero, the founder section, the /program hero, and /parents.
2. **Founder facts + LinkedIn.**
   - "7+ internships worked, and offers from many more" everywhere; the hero float card says "7+ internships worked".
   - `founder.offerCount` (empty) switches the wording once it's set.
   - LinkedIn now appears in the founder section (home and /about), the coach card, /contact, the footer social tiles, and the JSON-LD `founder.sameAs`.
3. **Removed case studies by student type.** Removed the route, the nav item, `StoryFilter`, `studentTypes`, and the chips. Added a redirect to /results.
4. **Week 1–12 buildout.**
   - `content/curriculum.ts` holds all 12 weeks: objective, teaching bullets, live reps, the 1:1 focus, the minimum, deliverables, the level gate, coach questions, templates, a parents line, and numbers.
   - New pages: /curriculum (a week grid in phase bands, plus the weekly rhythm) and /curriculum/week-1 … week-12 (a numbers strip, every field, previous/next links, and a CTA band).
   - The /program syllabus is now a panel per week linking to its week page.
   - "Curriculum" was added to the Program menu and the footer.
5. **The First Offer Playbook.** 16 chapters, 20 pages, with a branded cover, a table of contents with real page numbers, page numbers on every page, and a running footer.
   - Built from `content/playbook.ts` by `scripts/build-playbook-pdf.mjs`.
   - /timeline became /playbook-pdf: chapter list, page count, a cover mockup, and the email gate. Every link, the confirmation email, and the analytics event were updated.
6. **Free templates.** 15 downloads, generated from `content/downloads.ts` by `scripts/build-downloads.mjs` (`npm run downloads`).
   - The new /free-resources page groups them by stage, with the Playbook featured at the top. Only the Playbook asks for an email.
   - Linked from the Resources menu, the footer, the home "Everything in one place" section, and every week page.
7. **In-depth guides.** 15 guides with tables of contents, checklists, templates, tables, and callouts.
   - Each has "Download the template" links and "Related guides".
   - /blog has category filtering; read time is computed from word count.
   - Shared material lives once in `content/toolkit.ts` and is reused by the Playbook, the downloads, and the guides.
8. **QA and this report.**

## New routes
- `/curriculum` and `/curriculum/week-1` … `/curriculum/week-12`
- `/playbook-pdf` (replaces `/timeline`)
- `/free-resources`
- 12 new guides under `/blog/…`: resume-with-zero-experience, target-list-of-50, ai-cold-email-system, networking-call-framework, call-to-referral, behavioral-stories, why-this-industry-why-this-firm, finance-technicals-for-beginners, consulting-case-interviews-from-zero, marketing-and-tech-internships-freshman, externships, parents-support-without-taking-over. The 3 existing guides were rewritten under their old URLs.
- Removed: `/results/by-type` (redirects to /results) and `/timeline` (redirects to /playbook-pdf)

## New downloads (`public/downloads/`)
first-offer-playbook.pdf (gated) · resume-rubric.pdf · resume-template.pdf · self-questions.pdf · target-list.csv · outreach-tracker.csv · ai-prompt-pack.pdf · cold-email-pack.pdf · call-framework.pdf · why-worksheet.pdf · technicals-finance.pdf · technicals-consulting.pdf · technicals-marketing.pdf · technicals-tech.pdf · interview-scorecard.pdf · game-plan.pdf

## Tyler's review list
Everything below is drafted in your voice from `docs/CURRICULUM-SOURCE.md` and marked unreviewed. Details are in `docs/TODO-TYLER.md`.
1. **The Playbook PDF.** `content/playbook.ts` + `content/toolkit.ts`, with `playbook.reviewedByTyler: false`, so a "Draft" chip shows on the cover, in the footer, and on /playbook-pdf. After approving, set it to true and run `npm run pdf`.
2. **All 15 guides.** `content/guides/*.ts`, each `reviewedByTyler: false` with a "Draft" chip on its page. Check the finance technical explanations, the recruiting calendar by track (kept general, because dates vary by firm), and every line written as "I".
3. **The 15 templates.** `downloadsReviewedByTyler: false` in `content/downloads.ts` shows "Draft" on /free-resources and in each PDF footer. After approving, run `npm run downloads`.
4. **The curriculum expansion.** `content/curriculum.ts` expands each week beyond the source: teaching bullets, the 1:1 focus, coach questions, and the parent line. Check it matches how you'll actually run each week.
5. **`founder.offerCount`** in `content/site.ts`, currently empty. Once set, the site says "[N] internship offers".
6. **`externships.provider`** in `content/site.ts`, currently empty. Only set it once you've confirmed students complete real company-designed projects. Until then the site says "2 virtual externship projects" and never "Fortune 500".
7. **LinkedIn in the footer.** It now shows your personal profile. If you create a company page, put it in `socials.linkedin`.
8. Everything already open from v3 in `docs/TODO-TYLER.md`: testimonials, employers, format and hours, refund terms, Calendly, Stripe, Supabase, Resend, and photos.

## Worth knowing
- **Playbook length.** The Playbook reached 20 pages because the layout was tightened and it shows 4 of the 7 AI prompts and 10 technical questions per track. The full sets are in the free downloads, and the PDF says so.
- **New scripts.** They import the TypeScript content through a small resolve hook (`scripts/lib/ts-resolve.mjs`), so no packages were added.
- **Wording choices.** The plan's grep for "15 minute" meant rewording networking-call copy that had nothing to do with 1:1s: "a quick call", "quick prep".
- **Analytics and Supabase.** The subscribe `source` is now `playbook` (it was `timeline`), and the new analytics events are `playbook_download` and `template_download`. Existing Supabase rows keep `timeline`.
