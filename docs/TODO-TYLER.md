# TODO for Tyler

Things that need your real input. Each line names the file to edit.

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
- **Terms of Service** (`/terms`, content in `content/legal/terms.ts`): limitation of liability, disclaimers, dispute venue (state or federal courts in California, with no county named per the no-geography rule; confirm this works; no arbitration clause was added), IP license, minors agreeing via parent.
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
- **Social profile URLs** (Instagram, LinkedIn, YouTube, TikTok, Facebook, Reddit, Spotify, podcast) → `content/site.ts` `socials`. The footer tile grid appears once at least one is set.
- **Review platform link** (once real reviews exist) → `content/site.ts` `reviewsUrl`. Adds "Reviews" to the Testimonials menu.
- **Program overview video** ("Program overview from Tyler", 2–3 min): YouTube/Vimeo URL → `content/programOverview.ts` (`hero.videoUrl`).
- **12 module videos** ("Hear from Tyler" + "Hear from a student" for each of the 6 parts) → `content/programOverview.ts` (`modules[].videos`). Student videos need written permission.
- **Module proof assets** → `content/programOverview.ts` (`modules[].proof`): 3 resume before/after images (names removed, permission), outreach tracker screenshot, Week 1 vs Week 12 "Tell me about yourself" recordings, a sample technical session video, a mock interview recording, and a real pod photo.
- **Success stories** in "How [Name] landed [role]" format → `content/stories.ts` (`permission: true` only after written consent; `employerPermission` separately).


## Build Plan v4
- **Externships:** no longer listed as a program deliverable anywhere on the site (the "what the student leaves with" list is now the six parts). If externships stay in the program, decide which of the six parts they belong to. The `/blog/externships` guide still exists.
- **Internship offer count:** set `content/site.ts` → `founder.offerCount` (e.g. "12"). Until then the site says "7+ internships worked, and offers from many more"; once set, it says "[N] internship offers" in the stats row, founder section, and coach card.
- **LinkedIn:** the footer social grid now shows your personal LinkedIn. If you create a First Offer Academy company page, put it in `socials.linkedin`; `founder.linkedin` stays your personal profile.
- **Review the curriculum expansion:** `content/curriculum.ts` expands each week in `docs/CURRICULUM-SOURCE.md` into 4–6 teaching bullets, a 1:1 focus, coach questions, and a parent line. Anything beyond the source is my wording; check it matches how you'll actually run each week. It powers /curriculum, the 12 week pages, and the /program syllabus.
- **Review the Playbook PDF** (`content/playbook.ts` + `content/toolkit.ts`, built to `public/downloads/first-offer-playbook.pdf`): it's written in your voice from the curriculum source. Check every tactic, template, question, and the recruiting calendar by track (dates vary by firm, and I kept them general). When you're happy, set `playbook.reviewedByTyler: true` and run `npm run pdf`; that removes the "Draft" chip from the cover, footer, and /playbook-pdf.
- **Review the free templates** (`content/toolkit.ts` → `content/downloads.ts`, built to `public/downloads/`): resume rubric, resume template, target list and tracker CSVs, the AI prompt pack, the cold email pack, the call framework, the self-questions, the "why" worksheet, the 4 technical question banks, the scorecard, and the game plan. Then set `downloadsReviewedByTyler: true` and run `npm run downloads`.
- **Review all 15 Playbook guides** (`content/guides/*.ts`), each marked `reviewedByTyler: false` with a "Draft" chip on its page: freshman-internship-timeline, resume-with-zero-experience, target-list-of-50, ai-cold-email-system, cold-email-template, networking-call-framework, call-to-referral, behavioral-stories, tell-me-about-yourself, why-this-industry-why-this-firm, finance-technicals-for-beginners, consulting-case-interviews-from-zero, marketing-and-tech-internships-freshman, externships, parents-support-without-taking-over. Check especially: the finance technical explanations, the recruiting-calendar generalizations, and anything written as "I" in your voice. Flip each guide to `true` as you approve it.
