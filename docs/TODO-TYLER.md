# TODO for Tyler

Things that need your real input. Each line names the file to edit.

## Must do before parents see it
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
- **Referral reward** (if you offer one) → `content/site.ts` `referralReward`. Hidden on /refer until set. If it involves a tuition discount, add it to the Refund & Payment Policy too.
- **Week-by-week syllabus detail** → `content/syllabus.ts` (`detail` for each of the 12 weeks). Empty weeks show their phase summary on /program.
- **Social profile URLs** (Instagram, LinkedIn, YouTube, TikTok, Facebook, Reddit, Spotify, podcast) → `content/site.ts` `socials`. The footer tile grid appears once at least one is set.
- **Review platform link** (once real reviews exist) → `content/site.ts` `reviewsUrl`. Adds "Reviews" to the Testimonials menu.
- **Program overview video** ("Program overview from Tyler", 2–3 min): YouTube/Vimeo URL → `content/programOverview.ts` (`hero.videoUrl`).
- **12 module videos** ("Hear from Tyler" + "Hear from a student" for each of the 6 parts) → `content/programOverview.ts` (`modules[].videos`). Student videos need written permission.
- **Module proof assets** → `content/programOverview.ts` (`modules[].proof`): 3 resume before/after images (names removed, permission), outreach tracker screenshot, Week 1 vs Week 12 "Tell me about yourself" recordings, a sample technical session video, a mock interview recording, and a real pod photo.
- **Success stories** in "How [Name] landed [role]" format → `content/stories.ts` (`permission: true` only after written consent; `employerPermission` separately).

