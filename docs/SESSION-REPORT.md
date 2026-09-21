# Session Report: Build Plan v3

**Date:** September 21, 2026 · **Branch:** `main` (not pushed) · **Result:** all 31 tasks complete (1–24 plus A2.1–A2.7), none skipped. `npm run build` and `npm run lint` pass, and all 34 routes pass the layout check at 375, 768, and 1440px.

Nothing on the site makes an outcome promise, invents a testimonial, stat, employer, or review, or names Barclays, Deloitte, or the Irvine Investment & Trading Group. Every slot that needs real proof is permission-gated and disappears when `showPlaceholders` is set to `false`.

## What was built

| Task | What | Routes / files |
|---|---|---|
| 1. Baseline | Clean build and lint (switched to the ESLint CLI); Playwright; screenshot + layout-check script | `scripts/screenshots.mjs`, `npm run screenshots` |
| 2. Visual QA | Fixed horizontal scroll on /contact, 2×2 timeline on tablet; keyboard dropdowns (open on focus, close on Escape); mobile menu closes on tap | `components/NavDropdown.tsx`, `components/MobileNav.tsx` |
| A2.1 Building blocks | Ornament, Highlight, ArchPhoto, VideoSlot, ProofSlot, IconTile | `components/*.tsx` |
| A2.2 Program overview | Ten-section long-form /program: hero + video, who it's for, Week 12 requirements, booking band, stats + six module tiles, why now + table of contents, six data-driven module sections with video and proof slots, put-it-together, success-stories carousel, promise CTA | `/program`, `content/programOverview.ts`, `content/stories.ts` |
| A2.3 Our promise | What we promise, what we don't and why, what we ask of students | `/our-promise`, `content/promise.ts` |
| A2.4 Home patterns | Mission section with arch photo; employer logo grid (on /results); Success Stories row above the home quote wall | `/`, `/results`, `content/home.ts` |
| A2.5 Testimonials menu | Header "Testimonials" dropdown; case studies filtered by student type; parent testimonial wall | `/results/by-type`, `/results/parents` |
| A2.6 Footer | Social tile grid (8 networks, hidden while empty); Navigation / Program Details / Contact columns | `components/Footer.tsx`, `components/Social.tsx` |
| A2.7 Contact | Centered form card with SMS consent; hands off to Calendly with name and email prefilled | `/contact` |
| 3. Legal system | LegalPage layout: draft banner, last-updated date, sticky table of contents, heading anchors | `components/LegalPage.tsx`, `content/legal/` |
| 4. Privacy | Full plain-English policy with CCPA/CPRA rights, CalOPPA, retention, minors, cookies | `/privacy` |
| 5. Terms | Eligibility, no-outcome language, responsibilities, IP, liability, California law | `/terms` |
| 6. Refunds | Tuition, plan, deposit, missed payments, withdrawal, how to request; linked from pricing, apply, price band, FAQ | `/refunds` |
| 7. More legal | Accessibility statement, code of conduct, cookie section in privacy | `/accessibility`, `/code-of-conduct` |
| 8. Consent | Story submission form with 3 separate permissions; Terms consent on apply; newsletter privacy line; 3 draft agreement templates | `/share-your-story`, `docs/templates/` |
| 9. Footer legal row | Five policy links + non-affiliation line | footer |
| 10. SEO | Sitemap (auto-discovers pages), robots, OG images (site + per article), favicon + apple icon, JSON-LD (EducationalOrganization, Article, FAQPage), a unique description on every page | `/sitemap.xml`, `/robots.txt`, `/opengraph-image` |
| 11. Syllabus | Week-by-week accordion by phase, with Standard levels | `/program#syllabus`, `content/syllabus.ts` |
| 12. For parents | Weekly routine, what parents see, payment, what we don't promise, parent FAQ | `/parents` |
| 13. Story pages | "How X landed Y" pages; only permitted stories get a page | `/results/[slug]` |
| 14. Lead magnet | Email-gated one-page PDF generated from the freshman timeline article | `/timeline`, `public/downloads/`, `npm run pdf` |
| 15. Referrals | Referral form; reward hidden until set | `/refer` |
| 16. Mandarin page | Parent summary in Simplified Chinese; noindex and unlinked until reviewed | `/zh`, `content/zh.ts` |
| 17. Supabase | 5 tables with RLS; 5 validated, rate-limited, honeypot-protected API routes | `supabase/migrations/001_init.sql`, `app/api/*` |
| 18. Email | Branded confirmations (apply, subscribe, contact) + new-application alert | `lib/emails/` |
| 19. Stripe | Deposit Checkout + success/canceled pages; button on /apply (after submit) and /pricing | `/api/checkout`, `/deposit/*` |
| 20. Admin | Basic-auth /admin with read-only tables and CSV export | `/admin`, `middleware.ts` |
| 21. Analytics | Vercel Analytics + 5 custom events | `components/AnalyticsEvents.tsx` |
| 22. Polish | Branded 404, scroll reveal (off with reduced motion), consistent hover lift, back-to-top | `app/not-found.tsx` |
| 23. Final QA | Automated WCAG contrast audit (all pass), keyboard test of all 7 forms, removed sage text, placeholders-off check, README setup guide | `README.md` |

### How it was verified
- Every task ended with a passing `npm run build` and `npm run lint` before its commit.
- Layout check: 34 routes × 3 widths; no horizontal scroll, no text within 16px of the edge, no broken images.
- Contrast: every visible text node on every route (accordions and tiles expanded) meets WCAG AA.
- Forms: all 7 are reachable and submittable by keyboard alone, with visible focus rings. API routes were tested live for 503 (not configured), 400 (invalid), honeypot, and 429 (rate limit).
- Tested with temporary data, then reverted: a sample story (permission gates), socials (tile grid), a fake Stripe key plus refund deadline (deposit flow), and admin credentials (401/200/404).
- **Not tested against real services:** Supabase inserts, Resend delivery, and live Stripe Checkout need your accounts. The SQL migration was reviewed but not executed (no local Postgres).

## TODO for Tyler

## Must do before parents see it
- **Review the three Playbook articles** in `content/articles.ts`. They were drafted earlier in your name; the timeline PDF is generated from one of them (`npm run pdf` after edits).
- **Real testimonials with written permission** (students and at least one parent) → `content/testimonials.ts`. The home quote wall, /results, /results/parents, and /parents fill from it. (From the site brief; still open.)
- **Email copy commitments** (`lib/emails/templates.ts`): contact confirmations promise a reply "within two business days", and subscribe confirmations offer unsubscribe-by-reply. CAN-SPAM requires honoring opt-outs within 10 business days. Once a newsletter tool is chosen, switch to its one-click unsubscribe link.
- **/zh Mandarin parent page** (`content/zh.ts`) is machine-drafted. Have a native speaker review it, then set `zhReviewed: true` in `content/site.ts`. That removes noindex, adds it to the sitemap, and adds a footer link. Until then it is reachable only by direct URL and shows a draft notice.
- **Confirm the default policies drafted on /refunds** (`content/legal/refunds.ts`): missed payments (email first; sessions may be paused if unresolved), full refund if we cancel the cohort or change the start date or format before it starts, and response times (2 business days to confirm a refund request).
- **Refund terms (required before taking deposits):** `content/site.ts` → `depositRefundDeadline`, `withdrawalPolicy`, and optionally `refundTerms`. Until they're set, /refunds, /pricing, and the FAQ say terms will be published before deposits open.
- **Legal business entity name** → `content/site.ts` `legalEntityName` (shows in the privacy policy and terms).
- Once the newsletter tool is chosen, add it to `content/site.ts` `serviceProviders` so the privacy policy lists it.
- Confirm the attendance policy stated on /program and /our-promise: "two missed weeks in a row triggers a call with the student and a parent" (`content/programOverview.ts`, `content/promise.ts`).
- Set `showPlaceholders: false` in `content/site.ts` before sharing the site. Every empty video/proof/testimonial slot then disappears.

## Attorney review
- **Apply form consent lines** (`components/ApplyForm.tsx`): required Terms/Privacy checkbox and optional email + SMS updates consent.
- **Templates** in `docs/templates/`: testimonial & media release, parent/guardian acknowledgment, student enrollment agreement. All marked DRAFT; fill the blanks (entity name, refund deadline, schedule) and have them reviewed before anyone signs.
- **Cookie section** inside the Privacy Policy (`content/legal/privacy.ts`): accurate as long as no tracking cookies are added. Revisit if any ad pixel or cookie-based tool is ever installed.
- **Code of Conduct** (`/code-of-conduct`, `content/legal/codeOfConduct.ts`): consequences and removal language.
- **Accessibility Statement** (`/accessibility`, `content/legal/accessibility.ts`): confirm the 5-business-day response commitment.
- **Refund & Payment Policy** (`/refunds`, content in `content/legal/refunds.ts`), especially the withdrawal and missed-payment sections.
- **Terms of Service** (`/terms`, content in `content/legal/terms.ts`): limitation of liability, disclaimers, dispute venue (Orange County courts; no arbitration clause was added), IP license, minors agreeing via parent.
- **Privacy Policy** (`/privacy`, content in `content/legal/privacy.ts`): CCPA/CPRA rights section, CalOPPA items, retention periods, minors section.
- **SMS consent wording** on /contact (`components/ContactForm.tsx`). It only matters once an SMS tool is connected. Review it together with the privacy policy before sending any texts.

## Keys and accounts
- **Vercel Analytics:** enable Web Analytics in the Vercel project (Analytics tab). Custom events (`apply_submit`, `book_call`, `subscribe`, `deposit_click`, `timeline_download`) require a Vercel Pro plan to view; page views work on all plans.
- **Admin:** set `ADMIN_USER` and a long random `ADMIN_PASSWORD` in Vercel to turn on /admin (read-only submissions + CSV export). Leave either empty and /admin returns 404.
- **Stripe:** set `STRIPE_SECRET_KEY` (start with a test key) **and** `depositRefundDeadline` in `content/site.ts`, then redeploy. The deposit button stays hidden until both exist. `site.cohort.depositCents` must match `site.cohort.deposit`.
- **Resend:** verify firstofferacademy.com in Resend, then set `RESEND_API_KEY`, `EMAIL_FROM` (e.g. `First Offer Academy <hello@firstofferacademy.com>`), and `NOTIFY_EMAIL` (where new-application alerts go). Emails are skipped silently until set.
- **Supabase:** create a project, run `supabase/migrations/001_init.sql` in the SQL editor, then set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in Vercel (see `.env.example`). Until then, every form shows "not connected yet".

## Content to collect
- **Photos:** transparent headshot at `public/images/tyler.png` and a casual daylight photo at `public/images/tyler-casual.jpg` (founder section, arch photo).
- **Dedicated Calendly "Parent call" event link** → `content/site.ts` `calendlyUrl` (currently your general Calendly page).
- **Info-session dates** → `content/events.ts`.
- **Session format, day/time, weekly hours, application deadline** → `content/site.ts` `format`, `weeklyHours`, `applicationDeadline`. Also used by the FAQ and /zh.
- **Employer names each student permits** → `content/employers.ts` (`employerPermission: true`). The marquee needs 4; the /results grid needs 8.
- **Total internships landed by the 8 students** → `content/stats.ts` (the empty stat renders once filled).
- **Referral reward** (if you offer one) → `content/site.ts` `referralReward`. Hidden on /refer until set. If it involves a tuition discount, add it to the Refund & Payment Policy too.
- **Week-by-week syllabus detail** → `content/syllabus.ts` (`detail` for each of the 12 weeks). Empty weeks show their phase summary on /program.
- **Social profile URLs** (Instagram, LinkedIn, YouTube, TikTok, Facebook, Reddit, Spotify, podcast) → `content/site.ts` `socials`. The footer tile grid appears once at least one is set.
- **Review platform link** (once real reviews exist) → `content/site.ts` `reviewsUrl`. Adds "Reviews" to the Testimonials menu.
- **Program overview video** ("Program overview from Tyler", 2–3 min): YouTube/Vimeo URL → `content/programOverview.ts` (`hero.videoUrl`).
- **12 module videos** ("Hear from Tyler" + "Hear from a student" for each of the 6 parts) → `content/programOverview.ts` (`modules[].videos`). Student videos need written permission.
- **Module proof assets** → `content/programOverview.ts` (`modules[].proof`): 3 resume before/after images (names removed, permission), outreach tracker screenshot, Week 1 vs Week 12 "Tell me about yourself" recordings, a sample technical session video, a mock interview recording, and a real pod photo.
- **Success stories** in "How [Name] landed [role]" format → `content/stories.ts` (`permission: true` only after written consent; `employerPermission` separately).

## Decisions log

- **Task 1:** Switched `npm run lint` from the deprecated `next lint` to `eslint .` (same flat config). Removes the deprecation warning; output is identical.
- **Task 1:** `scripts/screenshots.mjs` discovers routes from `.next/prerender-manifest.json` so new pages are picked up without editing the script, and prints pages with horizontal scroll, text within 16px of the edge, or broken images. Run `npm run build && npm run screenshots`.
- **Task 2:** Dropdown open state is now driven by a client component (`components/NavDropdown.tsx`) rather than CSS `:focus-within`, because CSS alone can't close a menu on Escape while focus is inside it. Hover still opens it.
- **Task 2:** The home testimonial video row leaves empty space at 1440px (3 × 280px cards). Not changed here because A2.4 replaces that header row with the Success Stories carousel.
- **A2.1:** Ornament = three dots (sage, navy, sage). The sage dots get a thin navy ring so sage never sits alone on mist (brand guide: on mist, sage is a filled shape with a navy border).
- **A2.1:** `VideoSlot` embeds YouTube via `youtube-nocookie.com` (no tracking cookies until play), matching the privacy policy's "no advertising cookies" line.
- **A2.1:** `IconTile` reveals details on hover only on devices that support hover (`@media (hover: hover)`); touch devices use tap via a real `<button aria-expanded>`, stretched over the card.
- **A2.2:** Added the existing Comparison table to /program (with `id="compare"`) between the success stories and the final CTA pair, because A2.6 links the footer's "Compare options" to `/program#compare`.
- **A2.2:** The previous /program content (phase timeline, tracks grid, Standard ladder, price band) was replaced by the ten-section long form. The phase timeline and Standard still appear on the home page; the syllabus accordion (task 11) restores week-level detail at the bottom of /program.
- **A2.2:** "By Week 12" items are framed as "What the program requires", with a note that they describe the work, not an outcome. "100+ emails" and "5+ calls" come from Standard levels 3–4; "graded mocks" from level 5.
- **A2.2:** Module copy is built only from `content/program.ts`, `content/tracks.ts`, the FAQ, and the three Playbook articles. The positioning lines are new phrasing but make no claims.
- **A2.2:** "Two missed weeks in a row triggers a student + parent call" comes from the build plan's A2.3 spec; Tyler should confirm it's the actual policy (logged in TODO-TYLER).
- **A2.3:** /our-promise copy lives in `content/promise.ts`. The "What we don't promise" block sits on a navy band so it reads as a serious, deliberate statement, not fine print.
- **A2.3:** Added a global `:where(p, li, dd, td) a { text-decoration: underline }` because Tailwind's preflight removes link underlines and the brand guide requires underlined text links. `:where()` has zero specificity, so nav, button, and card links keep their own styles.
- **A2.4:** Mission copy lives in `content/home.ts`. The "View program details →" button is secondary (navy outline) because the hero's Apply is the page's primary button.
- **A2.4:** On the home page, the Success Stories carousel replaces both the old "What students say" header and the 3 vertical video slots (the carousel cards carry the video). /results keeps the full wall with video slots.
- **A2.4:** Employer grid threshold is a new constant `MIN_EMPLOYERS_FOR_GRID = 8` in `content/employers.ts`; the marquee keeps its own threshold of 4.
- **A2.5:** `/results/by-type` filter is single-select ("All" plus one type) with `aria-pressed` chips and a live count for screen readers. Multi-select would return near-empty results with a small story set.
- **A2.5:** `/results/parents` shows labeled placeholder slots pre-launch; after `showPlaceholders` is off and with zero parent quotes, it shows an honest "being added" card with a call link rather than an empty page.
- **A2.5:** Created a minimal `/share-your-story` stub so the new nav link doesn't 404; task 8 replaces it with the real form.
- **A2.6:** Footer "Navigation" keeps an Apply link (the old Program column had one) since the new "Program Details" column is fixed to five items. Track links moved out of the footer; they remain in the header Program dropdown.
- **A2.6:** Social tiles are 48px on mobile (4 × 48 + gaps fits the 375px column) and 56px from 768px up.
- **A2.7:** Added an optional "Message" textarea to the contact form. The spec's field list had none, but the page copy invites people to "send a message", so a form with nowhere to write one would be confusing.
- **A2.7:** New `lib/submit.ts` posts every form's JSON to its `/api/*` route and treats 404 (route not built yet) and 503 (backend env not set) as "not connected yet". All forms share this pattern from here on.
- **Task 3:** Legal content reuses the article `Block` type unchanged. For links inside legal text, `LegalPage` renders `[label](/path)` as a link and bare email addresses as mailto links, so `content/legal/*.ts` stays plain strings.
- **Task 3:** On mobile the table of contents is an open `<details>` ("On this page") above the text; on desktop (≥1000px) it's a sticky sidebar.
- **Task 4:** Retention periods: applications and contact messages 2 years; subscribers until unsubscribe; enrolled students' program records for the program plus 2 years; payment records as tax law requires; testimonials while permission stands. (The plan specified the first two; the rest fill obvious gaps.)
- **Task 4:** The policy offers CCPA/CPRA-style rights to everyone, not just Californians, and doesn't claim the CCPA legally applies (a new small business likely falls under its thresholds). That's accurate whichever way the attorney reads it.
- **Task 4:** Listed Resend as the email provider (task 18 uses it) and YouTube/Vimeo for embedded videos. The newsletter tool isn't chosen yet; add it to `site.serviceProviders` when it is.
- **Task 4:** Restored bullet markers on legal, article, and prose lists; Tailwind's preflight had silently removed them.
- **Task 5:** Terms use courts in Orange County for disputes, with no arbitration clause. Adding arbitration is a legal call for the attorney, not a default to invent.
- **Task 6:** /refunds never states a refund deadline or withdrawal refund amount it doesn't have. Empty fields render as "Exact terms will be published here before deposits open". The cancellation-by-us full refund and the missed-payment process are drafted as consumer-friendly defaults and flagged for Tyler to confirm.
- **Task 6:** FAQ entries can now carry an optional `link`; the deposit and payment-plan answers link to /refunds.
- **Task 7:** Accessibility statement and code of conduct use the LegalPage layout (draft banner, TOC) like the other legal pages. No cookie banner, per the plan, since there are no tracking cookies.
- **Task 8:** The story form also asks for an email (not in the spec's field list) so Tyler can confirm details and permission before publishing anything. The three publish permissions are separate, unchecked, optional checkboxes.
- **Task 8:** The apply form's optional consent covers both email and text updates in one line, as the plan asked for "an optional SMS/email consent line".
- **Task 8:** The testimonial release template includes an FTC endorsement-disclosure note in case any discount or payment is ever given for a testimonial.
- **Task 9:** Pre-existing sage *text* (footer column headings, eyebrows on navy bands, event-date month, plan-featured eyebrow) conflicts with CLAUDE.md's "never sage text" rule. Queued for the task 23 contrast/brand pass rather than changed mid-phase.
- **Task 10:** OG and icon fonts (Young Serif 400, Hanken Grotesk 600/700, OFL) are bundled as .woff in `assets/fonts/` because `next/og` can't read woff2 and builds shouldn't depend on network access.
- **Task 10:** The sitemap finds static routes by scanning `app/` for `page.tsx` files (`lib/routes.ts`), so new pages are included automatically. /admin, /deposit/*, and /zh are excluded by `PRIVATE_ROUTES`. Dynamic routes come from content (articles, tracks, permitted stories).
- **Task 10:** Also added `app/apple-icon.tsx` (180px) alongside the favicon. JSON-LD has no rating or review fields anywhere.
- **Task 10:** Renamed the /results page title to "Student Testimonials" to match the new nav label.
- **Task 11:** The syllabus sits after the comparison table and before the final CTA pair, so /program still ends on a call to action. Each phase shows the Standard levels its deliverables map to (Foundation → levels 1–2, Outreach → 3–4, Interview-ready → 5), matching the phase text to the level gates in `content/program.ts`. Level 6 (Offer) is deliberately not mapped to any week.
- **Task 12:** /parents reuses the weekly-format items from `content/program.ts` and a new `parent: true` flag on 8 FAQ entries (the parent FAQ). The primary button is "Book a parent call" rather than Apply, since parents are the page's reader. Linked from the header Testimonials dropdown ("For parents") and the footer Navigation column.
- **Task 13:** Stories gate three things separately: `permission` (story exists at all), `employerPermission` (employer name), and a new `mediaPermission` (photo/video). `/results/[slug]` uses `dynamicParams = false`, so only permitted stories have pages and every other slug 404s. Each story page carries a line that it's one student's experience, not a promise of results. Verified with a temporary test story (since removed).
- **Task 14:** The timeline PDF is rendered from branded HTML with Playwright (already a dev dependency) instead of adding a PDF library. Run `npm run pdf` after editing the freshman timeline article; the script warns if content spills past one page.
- **Task 14:** If `/api/subscribe` isn't connected (503/404), /timeline still shows the download link with a note that nothing was saved, rather than blocking the download. Once Supabase is connected, the email is captured first.
- **Task 14:** The hero "Freshman timeline" pill now points to /timeline ("Free timeline PDF"); the article is still linked from the Playbook.
- **Task 15:** /refer requires a checkbox confirming the person being referred knows their contact is being shared (so the first outreach isn't unsolicited). Linked from the footer Contact column.
- **Task 16:** Besides the file-top banner, /zh shows a visible bilingual draft notice while `zhReviewed` is false, since the page is reachable by direct URL. The CTA notes the call is in English (true today; edit if Tyler offers Mandarin/Vietnamese calls). Chinese text uses system CJK fonts (Young Serif has no CJK glyphs).
- **Task 17:** All five routes share `lib/formRoute.ts` (rate limit → honeypot → zod → insert). Limit is 5 requests per IP per route per minute, in memory, so it resets on cold starts and isn't shared across serverless instances. That's enough for casual abuse; upgrade to a shared store if spam shows up.
- **Task 17:** Honeypot field is named `website`. A filled honeypot gets a fake `{ ok: true }` so bots can't tell they were caught.
- **Task 17:** Subscribers upsert on email (ignore duplicates), so re-subscribing is a silent success. Emails use `citext` so case differences don't create duplicates.
- **Task 17:** Removed `applyEndpoint` and `newsletterEndpoint` from `content/site.ts`; forms now post to their own `/api/*` routes. `server-only` isn't installed (no extra packages allowed), so the server libs rely on only being imported from route handlers.
- **Task 17:** No local Postgres was available, so `001_init.sql` was reviewed but not executed. Route behavior was tested live: 503 without env, 400 on invalid input, fake 200 on honeypot, 429 after 5/min.
- **Task 18:** Emails are hand-written table HTML with inline styles and a plain-text version (no React Email dependency). Georgia/Helvetica stand in for the brand fonts, since email clients can't load them reliably. All user input is HTML-escaped (verified with a script-tag test).
- **Task 18:** Email sending runs in the route's `after` hook: a failed email is logged but never turns a saved submission into an error for the user. Application confirmation and Tyler's alert go out in parallel; the alert's reply-to is the applicant.
- **Task 18:** The /timeline subscribe confirmation includes the PDF link.
- **Task 19:** The deposit button (and `/api/checkout`) requires BOTH `STRIPE_SECRET_KEY` and a published `depositRefundDeadline`. The plan said "only when the key exists", but /refunds promises refund terms are in writing before anyone pays, so taking money without them would break that promise.
- **Task 19:** Removed the unused `depositUrl` (payment link) from `content/site.ts`; Checkout Sessions replace it. The deposit amount lives in `site.cohort.depositCents`.
- **Task 19:** /apply no longer auto-redirects to Calendly after submit. It shows an "Application received" panel with "Book my fit call" (primary) and, when enabled, the deposit button, so the plan's "deposit button on /apply after submission" has somewhere to live.
- **Task 19:** Pages decide whether to show the button at build time; redeploy after adding the key. Verified with a fake key and a temporary deadline (both reverted).
- **Task 20:** /admin is guarded twice: `middleware.ts` (Basic Auth; 404 when env unset) and a check inside the page and export route. Credential comparison is constant-time, and both parts are always compared. Responses are `no-store` and `noindex`.
- **Task 20:** Tables are tabs (`/admin?table=…`), showing the latest 1,000 rows; CSV export (`/admin/export/<table>`) returns up to 100,000 rows with a UTF-8 BOM (so Excel opens it cleanly) and spreadsheet formula-injection protection.
- **Task 21:** Event names: `apply_submit`, `book_call`, `subscribe` (with `source`: newsletter/timeline), `deposit_click`, `timeline_download`. Form events fire only after the server accepts the submission. `book_call` catches every link to the Calendly URL site-wide through one capture-phase listener (`components/AnalyticsEvents.tsx`), so new "Book a call" buttons are tracked automatically. No personal data is sent with any event.
- **Task 22:** Scroll-reveal only hides elements that start below the fold, and only after JS runs, so nothing is ever invisible without JS or on first paint. Its helper classes are removed after 700ms so each card's own hover transition still applies. Everything is disabled under `prefers-reduced-motion`, including hover lifts and smooth scrolling.
- **Task 22:** Hover lift is standardized: buttons, chips, tabs, and pills rise 1px; clickable cards (link cards, story cards, module tiles) rise 3px with a deeper shadow. Static, non-clickable cards don't lift, so they don't falsely look clickable.
- **Task 22:** The back-to-top button appears on pages taller than 3 screens after scrolling 1.5 screens, and moves focus to `<main>` for keyboard users.
- **Task 23:** Removed all sage *text* (footer headings, eyebrows on navy, event-date month, article-cover label → cream; decorative quote mark → dusty). Sage remains only as fills and icons, per CLAUDE.md's "never sage text".
- **Task 23:** Automated WCAG audit of every visible text node on every route (with accordions and tiles expanded): all pass AA. Keyboard test of all 7 forms: every field reachable by Tab with a visible focus ring; every form submits by keyboard alone. Strengthened focus rings on inputs (the newsletter inputs previously signaled focus with a border color only).
- **Task 23:** With `showPlaceholders: false`, the /program hero had an empty right column (no video yet); it now falls back to the arch photo. All pages were checked in placeholders-off mode.
- **Task 23:** Added width/height to the last three `<img>` tags. Banned-word and banned-name sweep across app/, components/, content/, lib/, scripts/, templates, and README: no hits.
