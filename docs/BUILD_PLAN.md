# First Offer Academy — Build Plan (autonomous session)

Work through the tasks below in order, without stopping to ask questions. Read `CLAUDE.md`, `docs/brand-guide.md`, and `docs/site-brief.md` first. They override anything here.

## Rules for this session
- Never invent testimonials, names, quotes, stats, employer names, logos, reviews, ratings, or outcomes. If a task needs real data you don't have, build the structure, seed it with `permission: false` / empty values, and log it in `docs/TODO-TYLER.md`.
- Banned words: guaranteed, guarantee, elite, top 1%. Never name Barclays, Deloitte, or Irvine Investment & Trading Group.
- Stay inside the palette and type rules in CLAUDE.md. No new colors, no new fonts, no component libraries.
- All editable content lives in `content/`. Components read from it.
- After each task: `npm run build` and `npm run lint` must pass, then `git add -A && git commit -m "<task>"`. Do not push. If a task can't pass after 3 attempts, revert it, note why in `docs/TODO-TYLER.md`, and move on.
- Don't install packages beyond the ones named here.
- If a decision is ambiguous, pick the option most consistent with the brand guide and log the choice in `docs/DECISIONS.md`.

## Tasks

### 1. Baseline
- `npm install`, `npm run build`, `npm run lint`. Fix every error and warning.
- Install Playwright as a dev dependency (`npm i -D @playwright/test`, then `npx playwright install chromium`). Add `scripts/screenshots.mjs`, which starts the production server and saves full-page screenshots of every route at 375, 768, and 1440px to `screenshots/` (gitignored).

### 2. Visual QA pass
- Run the screenshot script. Check every page at every width for: horizontal scroll, overlapping elements, text touching edges (16px min gutter), orphaned grid items, cramped buttons, and broken images. Fix all of them.
- Check the header dropdowns with keyboard only (Tab / Shift+Tab / Escape). Dropdown menus must open on focus and close on Escape. Add a tiny client component for Escape if needed.

### 3. SEO and share previews
- `app/sitemap.ts` and `app/robots.ts` covering every route, including track and blog pages.
- `app/opengraph-image.tsx` using `next/og`: navy background, cream Young Serif headline "Your first internship shouldn't depend on which club lets you in.", sage "First Offer Academy" label. Per-article OG images at `app/blog/[slug]/opengraph-image.tsx` showing the article title.
- `app/icon.tsx`: navy rounded square with a cream "F" (matches the header logo mark).
- A unique `title` and `description` on every page.
- JSON-LD on the home page: `EducationalOrganization` with name, url, and the Irvine, CA address. On blog posts: `Article`. No ratings in schema.

### 4. 404 and polish
- `app/not-found.tsx` in brand style with links to Home, Program, and the Playbook.
- Subtle scroll-reveal fade-up on section heads and cards (IntersectionObserver in one small client component, CSS transitions, disabled under `prefers-reduced-motion`). No animation library.
- Hover states on every card and button are consistent (lift 2–3px, shadow deepen).

### 5. Program page, Wall Street Mastermind depth
- Add a "What you'll build" section to `/program`: six feature tiles in the style of WSM's program modules, using our own names: Candidate Brand (resume + LinkedIn + 60-sec intro), Outreach System (target list, email, follow-up cadence, tracker), Story Bank (six behavioral stories), Track Technicals (the Weeks 9–10 split), Interview Reps (graded mocks, the last run by strangers), and Accountability (pod, weekly minimums, parent reports). Each tile gets 3 bullets drawn only from content already in `content/program.ts` and `docs/site-brief.md`. Put the data in `content/program.ts`.
- Add a week-by-week accordion driven by a new `content/syllabus.ts`. Seed it only with what's already known (phase names, weeks, gates from `levels`). Leave per-week detail as TODO and log it for Tyler.

### 6. For Parents page (`/parents`)
- Hero: "What parents get" in plain words. Sections: what your student does each week, what you see (biweekly one-page report, Week 12 family meeting), how payment and the refundable deposit work, what we do not promise (no guaranteed offers, stated plainly), and the parent FAQ (reuse `content/faq.ts`).
- A parent testimonial slot (permission-gated, placeholder when `showPlaceholders` is true).
- Add it to the Results dropdown in the header and to the footer.

### 7. Student stories (case studies)
- `content/stories.ts` + `/results/[slug]` pages in WSM "How X got an offer at Y" format: headline, starting point, what they did (weekly numbers), outcome, quote. Every field permission-gated. Seed with zero stories. The Results page lists stories when they exist.

### 8. Lead magnet
- `/timeline`: landing page for a free "Freshman Recruiting Timeline" PDF. An email form posts to `/api/subscribe` (task 9). On success, show a download link to `/downloads/freshman-recruiting-timeline.pdf`. Create that PDF as a clean one-pager from the content of `content/articles.ts` (the freshman timeline article) in brand colors, generated by a script in `scripts/` so it can be regenerated.
- Link the timeline from the hero pills, the Playbook page, and the footer.

### 9. Forms, wired to Supabase
- Install `@supabase/supabase-js`. Create `supabase/migrations/001_init.sql` with tables `applications` (every field in the apply form, plus `created_at`) and `subscribers` (email unique, first_name, role, source, `created_at`). RLS on, with no public policies.
- Route handlers `app/api/apply/route.ts` and `app/api/subscribe/route.ts` insert using `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from env. Validate input server-side. Add a honeypot field on both forms. If the env vars are missing, return 503 and let the UI show the existing "not connected yet" message.
- Point `ApplyForm` and `NewsletterForm` at these routes (update `content/site.ts` defaults to `/api/apply` and `/api/subscribe`).
- Add `.env.example`. Document setup in `README.md`: create the Supabase project, run the migration, add env vars locally and in Vercel.

### 10. Analytics
- Install `@vercel/analytics` and add `<Analytics />` to the root layout. Track clicks on Apply, Book a parent call, and Subscribe as custom events.

### 11. Final QA and report
- Re-run the screenshot script and fix anything new.
- Run a Lighthouse-style check: images have width/height, fonts use `display: swap`, and nothing blocks render. Fix easy wins.
- `grep -ri` the codebase for banned words and banned names. Remove any hits.
- Write `docs/SESSION-REPORT.md`: what was built (by task), what's left for Tyler (merged `docs/TODO-TYLER.md`), and decisions made. Commit.

## Done when
All 11 tasks are committed, build and lint pass, and `docs/SESSION-REPORT.md` exists.
