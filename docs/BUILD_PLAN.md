# First Offer Academy — Build Plan v3 (autonomous session)

Work through every task below in document order (Phase A, then A2, then B…), without stopping to ask questions. Read `CLAUDE.md`, `docs/brand-guide.md`, and `docs/site-brief.md` first. They override anything here.

## Session mechanics (read first)
- Keep a live checklist in `docs/PROGRESS.md`: one line per task with `[ ]`, `[x]`, or `[skipped: reason]`. Update it after every task. If the session restarts or context gets compacted, re-read `docs/PROGRESS.md` and continue from the first unchecked task. Never redo finished tasks.
- After each task: `npm run build` and `npm run lint` must pass, then `git add -A && git commit -m "task N: <name>"`. Never push.
- If a task can't pass after 3 attempts, revert it (`git checkout -- .`), mark it skipped with the reason, and move on.
- Only install the packages named in a task.
- Ambiguous decision → choose what fits the brand guide best and log it in `docs/DECISIONS.md`.
- Anything needing Tyler's real input (names, numbers, keys, permissions, dates) → build the structure, leave the value empty or `permission: false`, and add a line to `docs/TODO-TYLER.md` with the file path.

## Content rules (non-negotiable)
- Never invent testimonials, names, quotes, stats, employer names, logos, reviews, ratings, press mentions, or outcomes.
- Banned words: guaranteed, guarantee, elite, top 1%. Never name Barclays, Deloitte, or Irvine Investment & Trading Group anywhere.
- Palette, fonts, and button rules from CLAUDE.md only. No component libraries.
- All editable content lives in `content/`. Legal text lives in `content/legal/`.
- Every legal page starts with a visible banner: "Draft — review with an attorney before launch." Log each legal page in `docs/TODO-TYLER.md` under "Attorney review".

---

## Phase A — Foundation

### 1. Baseline
- `npm install`, `npm run build`, `npm run lint`. Fix every error and warning.
- `npm i -D @playwright/test` and `npx playwright install chromium`. Add `scripts/screenshots.mjs`, which starts the production server and saves full-page screenshots of every route at 375, 768, and 1440px into `screenshots/` (add it to `.gitignore`).

### 2. Visual QA pass
- Screenshot every route. Fix horizontal scroll, overlaps, text within 16px of the edges, orphaned grid items, cramped buttons, and broken images.
- Header dropdowns work with keyboard only: they open on focus and close on Escape (small client component). The mobile menu closes after a link is tapped.

---

## Phase A2 — Wall Street Mastermind program-overview build (highest priority after A)

Reference: wallstmastermind.com/program-overview (structure and interaction patterns only). Copy their layout rhythm, never their claims: no "guarantee", no "Top 1%", no "elite", no "™", no "or we don't make money", no alumni/network counts we don't have. Where they show proof (videos, before/after, stats, logos), we show permission-gated slots that render as labeled placeholders while `site.showPlaceholders` is true and disappear when it's false.

### A2.1 Shared building blocks
- `components/Ornament.tsx`: a small decorative mark above section headings, like WSM's squiggle but our own: three dots (sage, navy, sage) or a short sage rule with a navy diamond. Use it on every section head in the new pages.
- `components/Highlight.tsx`: wraps a sentence in a soft sage underline highlight (like WSM's highlighted mission line). Use sparingly, once per page at most.
- `components/ArchPhoto.tsx`: a photo inside an arch-topped mist/cream shape (like WSM's mission image). Uses `/images/tyler.jpg` with `mix-blend-mode: multiply` on cream.
- `components/VideoSlot.tsx`: renders a YouTube/Vimeo embed from a URL, or a labeled placeholder ("Video: Hear from Tyler") when empty and placeholders are on. 16:9, rounded, with a play-button style.
- `components/ProofSlot.tsx`: a generic placeholder for before/after images, tracker screenshots, and audio. It takes a label, an aspect ratio, and an optional `src`.
- `components/IconTile.tsx`: a WSM-style module tile: a cream card with a small navy square icon badge pinned to the top-right corner, a title, and 3 check bullets. On desktop, hover (and on mobile, tap) reveals a one-line detail and a "Read more ↓" anchor link to the module section.

### A2.2 Rebuild `/program` as the long-form program overview
Put all copy in `content/programOverview.ts`. Sections, in this order:
1. **Hero:** H1 "A 12-week system that turns a first-year student into a real candidate." A sub-line that membership is by application, with 24 seats. Buttons: Apply (primary), Book a parent call (secondary). Right side: `VideoSlot` "Program overview from Tyler".
2. **Who it's for:** "First Offer Academy is for first- and second-year students who are…" with 4 pain points: didn't get into the club; don't know where to start; have no network in the field; sending applications and hearing nothing. Then a callout card: "This does not require a target school, a 4.0, a finance background, or club membership."
3. **By Week 12, your student will have:** a checklist drawn only from the program gates in `content/program.ts` (resume that passes the rubric, target list of 50, 100+ personalized emails sent, 5+ calls with professionals, 6 behavioral stories recorded, graded mock interviews completed, a documented search to show parents). Label it clearly as what the program requires, not as outcomes.
4. **Booking CTA band (navy):** "Book a free call to ask questions or apply." Sage button to Calendly, plus a cream-outline Apply button.
5. **How First Offer helps:** the real stats row (from `content/stats.ts`), then the six `IconTile`s in a 2×3 grid (WSM layout): Candidate Brand, Outreach System, Story Bank, Track Technicals, Interview Reps, Accountability & Pods. Put a small "Tap a tile for details" hint above the grid. Below it: "Learn more about the 6 parts ↓" anchoring to the table of contents.
6. **Why now:** heading "Recruiting starts earlier than anyone tells you." Subheading "Freshman year is the head start." Three short paragraphs on earlier timelines, club gatekeeping, and generic online advice, stated as general observations with no invented statistics. Then a **table of contents**: six anchor links to the modules.
7. **Six module sections** (one component, data-driven). Each module has:
   - Ornament, "Part N", title, and a one-line positioning statement in large display type (e.g. Story Bank: "The point isn't to have the perfect answer. It's to have a better-prepared one.").
   - Two `VideoSlot`s side by side: "Hear from Tyler" and "Hear from a student".
   - 2–3 paragraphs of body copy built only from `content/program.ts`, `docs/site-brief.md`, and the Playbook articles.
   - Three components as check bullets:
     - Candidate Brand: Honest gap check · Resume rubric pass · 60-second intro recorded.
     - Outreach System: Target list of 50 · Personalized emails with a follow-up cadence · Every call logged and thanked within 2 hours.
     - Story Bank: Six core stories · Structured frameworks · Line-by-line edits from your coach.
     - Track Technicals: Track split in Weeks 9–10 · Concepts before memorization · Practice with answer walk-throughs.
     - Interview Reps: Weekly 1:1 feedback · Live reps in session · Graded mocks, the last run by strangers.
     - Accountability & Pods: A pod of three · Weekly minimums and Sunday scoreboard · Biweekly parent reports and the Week 12 family meeting.
   - A proof asset per module via `ProofSlot`: resume before/after (3-up), "Sneak peek: a student's outreach tracker" (screenshot slot), "Before vs after: Tell me about yourself" (two video slots: Week 1 vs Week 12 recording), "Sample technical session" (video slot), "Mock interview recording" (audio/video slot), and "Inside a pod" (photo slot).
   - Alternate the image/text side on desktop. Add a "Back to top of modules ↑" link.
8. **Put it all together:** heading "Put it all together: a real search, fully executed, in 12 weeks." Restate the no-target-school note and the Week 12 checklist (compact), then a primary CTA "Book a free call".
9. **Success stories carousel:** heading "See what students are saying." Horizontal scroll-snap carousel of video cards with story headlines in WSM's "How [Name] landed [role]…" format, from `content/stories.ts` (permission-gated), plus left/right arrow buttons (a small client component; buttons hidden when there's nothing to scroll). The placeholders show 4 labeled cards. "View all results →" link.
10. **Final CTA pair (stacked):** "Read what we promise and what we don't →" (links to a new `/our-promise` page) and "Schedule a call with Tyler to apply" (primary).

### A2.3 `/our-promise` (our honest version of WSM's guarantee page)
- What we promise: a weekly session, 1:1s, feedback on every piece of work, a documented search graded against the Standard, parent reports, and the Week 12 meeting. What we don't: offers, specific employers, or outcomes; say why honestly (hiring decisions belong to employers). What we ask of students: weekly minimums; two missed weeks in a row triggers a student + parent call. Link to Terms and Refunds.

### A2.4 Home page: WSM patterns
- **Mission section** (place it after Problem): an `ArchPhoto` on the right; on the left, Ornament, "Our mission", a `Highlight` sentence "Our mission is to give every first-year student the recruiting playbook that used to belong to the few who got into the right club.", one supporting paragraph (non-target, community college, no club, all welcome), and a "View program details →" button.
- **"Where our students work" logo grid** (WSM style: 4-column grid with thin navy-line dividers, a centered vertical accent line, and a CTA box below: "See stories from students with profiles like yours"). Data from `content/employers.ts`, only `employerPermission: true`. It appears in addition to the marquee band: keep the band on the home page and use the grid on `/results`. Hide it if fewer than 8 permitted logos; placeholder grid otherwise.
- Replace the Testimonials section's quote grid header with a **Success Stories** row (same carousel as A2.2 #9) above the quote wall.

### A2.5 Header: Results dropdown like WSM's Testimonials menu
- Rename the "Results" nav item to "Testimonials". Dropdown: Student testimonials (`/results`), Parent testimonials (`/results/parents`), Case studies by student type (`/results/by-type`), Share your story (`/share-your-story`). No "secret" pages, and no review-platform link until real reviews exist (add a `reviewsUrl` field in `content/site.ts`, hidden while empty).
- `/results/by-type`: filter chips (Community college, No club, First-generation, Transfer, Freshman, Sophomore) over `content/stories.ts`, which needs a `studentTypes: string[]` field. Empty state: "Stories are being added. Book a call to hear from a student directly."
- `/results/parents`: the parent testimonials wall (permission-gated).

### A2.6 Footer: social tile grid
- Replace the social icons with WSM-style square tiles: 2 rows of 4, each 56px on desktop, `rgba(247,244,238,.1)` background, and a cream icon. Support instagram, linkedin, youtube, tiktok, facebook, reddit, spotify, and podcast in `content/site.ts`. Render only the ones with URLs, and show the grid only if at least one exists.
- Footer columns renamed to WSM's: Navigation · Program Details (How it works, the six parts, Our promise, Pricing, Compare options → `/program#compare`) · Contact.

### A2.7 Contact page: WSM form
- A centered cream card: Ornament, H1 "Contact", the line "Send a message if you have questions about the program or your student's search.", and a form with First name*, Last name, Email*, Phone* (prefilled "+1"), and an I am a (Student / Parent / School) select. An optional unchecked SMS consent checkbox with TCPA-style copy: "I agree to receive informational and promotional text messages from First Offer Academy. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply. Reply STOP to opt out." Then Privacy Policy | Terms links. Submit button "Book a Call": POST to `/api/contact` (the route is built in task 17; until then, use the same stubbed "not connected" pattern as ApplyForm), then redirect to `site.calendlyUrl` with name/email prefilled as Calendly query params (`?name=&email=`).
- Log for Tyler: SMS consent only matters once an SMS tool is connected, and the wording should be reviewed with the privacy policy.


---

## Phase B — Legal and trust (California business collecting student and parent data)

### 3. Legal page system
- Create a `LegalPage` layout component: page title, "Last updated" date, draft banner, a sticky table of contents on desktop, and anchor links on every heading.
- Store content as typed block arrays in `content/legal/*.ts` (same block format as `content/articles.ts`). Include `lastUpdated` and `contactEmail` (read from `site.email`).

### 4. Privacy Policy (`/privacy`)
Write a complete, plain-English policy covering:
- Who we are: "First Offer Academy", Irvine, California. Legal business entity name: TODO for Tyler.
- What we collect and why: application form fields, newsletter fields, contact form, Calendly booking data (processed by Calendly), payment data (processed by Stripe; we never store card numbers), and analytics (Vercel Analytics, cookieless, aggregate).
- How we use it: evaluating applications, running the program, parent progress reports (shared only with the parent/guardian the student lists), and program emails.
- Service providers: Vercel (hosting), Supabase (database), Stripe (payments), Calendly (scheduling), and the email provider. Keep the list in `content/site.ts` so it stays accurate.
- We do not sell or share personal information for cross-context behavioral advertising. Include a CCPA/CPRA-style rights section (know, delete, correct, opt out of sale/sharing, non-discrimination) and state how to exercise the rights by email. Include the CalOPPA items: Do Not Track response, how users are notified of changes, and the effective date.
- Student outcome data and testimonials: used publicly only with written permission, which can be withdrawn.
- Minors: the program is for college students. We do not knowingly collect data from children under 13. If a user is under 18, a parent/guardian contact is requested.
- Data retention periods (applications 2 years, subscribers until unsubscribe; log as a decision), security, and international users (US-hosted).
- Contact for privacy requests.

### 5. Terms of Service (`/terms`)
- Eligibility, what the program is (coaching and instruction), explicit no-outcome-guarantee language (phrase it as "we do not promise internship offers or any specific outcome"), student responsibilities (weekly minimums), code of conduct, intellectual property (curriculum and templates licensed for personal use), testimonials and consent, limitation of liability, governing law (California, Orange County), changes to terms, and contact.

### 6. Refund & Payment Policy (`/refunds`)
- Tuition, payment plan, and refundable deposit, with the refund window and deadlines read from `content/site.ts` (`refundTerms`, plus new fields `depositRefundDeadline` and `withdrawalPolicy`, left empty and logged for Tyler). Cover missed payments, withdrawal mid-program, and how to request a refund. Link it from the pricing page, apply page, price band, and FAQ.

### 7. Accessibility statement (`/accessibility`), Cookie notice, Code of conduct (`/code-of-conduct`)
- Accessibility: WCAG 2.1 AA target, known limitations, and a contact for issues.
- Cookie notice: short section inside the privacy policy stating that no advertising cookies are used and analytics is cookieless. No cookie banner unless a tracking cookie is added later.
- Code of conduct: respect, professionalism in outreach (never misrepresent yourself to professionals), attendance, and consequences.

### 8. Consent and forms
- `/share-your-story`: a testimonial submission form (name, school, year, track, employer, quote, optional video link, and separate checkboxes: "You may publish my quote", "You may publish my employer's name", "You may use my photo/video"). Posts to `/api/stories` (task 17). Submissions never render on the site automatically; Tyler flips `permission: true` manually after review.
- Add a required consent checkbox to the apply form: "I agree to the Terms and Privacy Policy," with links. Add an optional SMS/email consent line for program updates (CAN-SPAM friendly: unsubscribe in every email).
- Newsletter form: a small line under the button, "Unsubscribe anytime. See our Privacy Policy."
- `docs/templates/`: markdown templates for a testimonial & media release, a parent/guardian acknowledgment, and a student enrollment agreement. All marked DRAFT for attorney review.

### 9. Footer legal row
- Footer bottom row: Privacy · Terms · Refunds · Accessibility · Code of Conduct. Add "First Offer Academy is not affiliated with any employer, university, or student organization mentioned by students." (Keep it one line.)

---

## Phase C — Growth and depth

### 10. SEO and share previews
- `app/sitemap.ts` and `app/robots.ts` covering every route.
- `app/opengraph-image.tsx` with `next/og`: navy background, cream Young Serif headline "Your first internship shouldn't depend on which club lets you in.", and a sage label. A per-article OG image showing the title.
- `app/icon.tsx`: navy rounded square with a cream "F".
- A unique title and description on every page. JSON-LD: `EducationalOrganization` on home, `Article` on blog posts, `FAQPage` on /faq. No ratings in schema.

### 11. Syllabus accordion
- (Program page depth is now covered by Phase A2.) Add a week-by-week accordion to the bottom of `/program` from a new `content/syllabus.ts`, seeded only with known phase/week/level info. Per-week detail is TODO for Tyler.

### 12. For Parents (`/parents`)
- What your student does weekly; what you see (biweekly report, Week 12 family meeting); payment and deposit; what we don't promise, stated plainly; the parent FAQ; and a permission-gated parent testimonial slot. Add it to the header Results dropdown and the footer.

### 13. Student stories (`/results/[slug]`)
- If not already created in A2, create `content/stories.ts` in "How X landed Y" format: starting point, weekly numbers, outcome, quote. Every field permission-gated, seeded with zero stories. The Results page lists stories when they exist.

### 14. Lead magnet (`/timeline`)
- A landing page for a free "Freshman Recruiting Timeline" PDF with an email gate via `/api/subscribe` (task 17); on success, show the download link. Generate `public/downloads/freshman-recruiting-timeline.pdf` from the freshman timeline article with a script in `scripts/` (brand colors, one page). Link it from the hero pills, the Playbook page, and the footer.

### 15. Referral page
- (The contact form is covered by A2.7.)
- `/refer`: a parent/student referral page with the form structure only. The referral reward amount is empty in `content/site.ts` and hidden until set; log it for Tyler.

### 16. Chinese-language parent page (`/zh`)
- One page for Mandarin-speaking parents: a summary of the program, format, price, and how to book a call. Put the copy in `content/zh.ts`, with `lang="zh-Hans"` on the page wrapper. Add a banner at the top of the file: "Machine-drafted — must be reviewed by a native speaker before publishing." Keep the page `noindex` and out of the nav until `site.zhReviewed === true`. Log it for Tyler.

---

## Phase D — Backend

### 17. Supabase-backed forms
- `npm i @supabase/supabase-js zod`.
- `supabase/migrations/001_init.sql`: tables `applications`, `subscribers` (email unique), `contact_messages`, `story_submissions`, `referrals`, all with `created_at` and RLS enabled with no public policies.
- Route handlers under `app/api/{apply,subscribe,contact,stories,refer}/route.ts`: zod validation, a honeypot field, a basic rate limit (in-memory per IP per minute), and inserts via `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`. Missing env → 503, and the UI shows the existing "not connected yet" message.
- Point every form at its route. Add `.env.example`.

### 18. Email confirmations
- `npm i resend`. On apply, subscribe, and contact, send a plain branded confirmation email when `RESEND_API_KEY` and `EMAIL_FROM` are set (skip silently otherwise). Also notify `NOTIFY_EMAIL` on new applications. Put templates in `lib/emails/`.

### 19. Stripe deposit
- `npm i stripe`. `app/api/checkout/route.ts` creates a Checkout Session for the $1,000 refundable deposit (amount from `content/site.ts`, `STRIPE_SECRET_KEY` from env), plus `/deposit/success` and `/deposit/canceled` pages. The deposit button appears on `/apply` after submission and on `/pricing` only when the key exists. Don't build a full tuition flow.

### 20. Admin view
- `/admin` protected by HTTP Basic Auth via `middleware.ts` using `ADMIN_USER` / `ADMIN_PASSWORD` (disabled entirely if unset). It shows read-only tables of applications, subscribers, contact messages, and story submissions from Supabase, newest first, with CSV export per table. `noindex`.

### 21. Analytics
- `npm i @vercel/analytics`. Add `<Analytics />` to the layout and custom events for Apply submit, Book a parent call click, Subscribe, Deposit click, and Timeline download.

---

## Phase E — Finish

### 22. Polish
- `app/not-found.tsx` in brand style. Subtle scroll-reveal on section heads and cards (IntersectionObserver in one client component, off under `prefers-reduced-motion`). Consistent hover lift on cards and buttons. A "back to top" button on long pages.

### 23. Final QA
- Re-run screenshots at all widths and fix issues. Keyboard-test every form. Check color contrast of every text/background pair against WCAG AA. Make sure images have width/height and fonts swap.
- `grep -ri` for banned words and names; remove any hits.
- Update `README.md` with full setup for Supabase, Resend, Stripe, admin, Vercel env vars, and the domain.

### 24. Session report
- Write `docs/SESSION-REPORT.md`: what was built (by task, with routes), everything in `docs/TODO-TYLER.md` grouped by "Must do before parents see it", "Attorney review", "Keys and accounts", and "Content to collect", plus the decisions log. Commit.

## Done when
Every task (1–24 plus A2.1–A2.7) in `docs/PROGRESS.md` is `[x]` or skipped with a reason, build and lint pass, and `docs/SESSION-REPORT.md` exists.
