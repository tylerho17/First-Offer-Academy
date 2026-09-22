# First Offer Academy — website

Next.js 15 (App Router) + TypeScript + Tailwind 4, deployed on Vercel at firstofferacademy.com.
Brand and content rules: `CLAUDE.md`, `docs/brand-guide.md`, `docs/site-brief.md`.
Open items that need your input: `docs/TODO-TYLER.md`.

## Run it locally
```bash
npm install
cp .env.example .env.local   # optional: fill in only the services you want to test
npm run dev                  # http://localhost:3000
```

Every service is optional. With no env vars at all, the site works fully: forms show a friendly "not connected yet" notice, emails are skipped, the deposit button is hidden, and /admin returns 404.

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run lint` | ESLint |
| `npm run screenshots` | After `npm run build`: full-page screenshots of every route at 375/768/1440px into `screenshots/`, and a report of horizontal scroll, text within 16px of the edge, and broken images |
| `npm run pdf` | Rebuild `public/downloads/first-offer-playbook.pdf` from `content/playbook.ts` (run after editing the Playbook) |
| `npm run downloads` | Rebuild every template in `public/downloads/` from `content/downloads.ts` |

## Where content lives (no code changes needed)
| What | File |
|---|---|
| Links, price, deposit, dates, format, refund terms, socials, feature switches | `content/site.ts` |
| Stats row | `content/stats.ts` |
| Testimonials (student + parent) | `content/testimonials.ts` |
| Success stories + /results/[slug] pages | `content/stories.ts` |
| Employer names/logos | `content/employers.ts` |
| Phases, levels, weekly format, comparison table | `content/program.ts` |
| /program long-form copy, the six modules, videos, proof assets | `content/programOverview.ts` |
| Week-by-week syllabus | `content/syllabus.ts` |
| /our-promise | `content/promise.ts` |
| /parents | `content/parents.ts` |
| Home mission section | `content/home.ts` |
| Playbook PDF (/playbook-pdf) | `content/playbook.ts` (PDF content), `content/leadMagnet.ts` (page copy) |
| Free templates on /free-resources (all email-gated) | `content/downloads.ts`, content in `content/toolkit.ts` |
| Mandarin parent page (/zh) | `content/zh.ts` |
| Track pages | `content/tracks.ts` |
| Events, workshops, FAQ | `content/events.ts`, `content/workshops.ts`, `content/faq.ts` |
| Guides (/blog) and which templates each one offers | `content/guides/*.ts` (`downloads: []` = read-only), listed in `content/articles.ts` |
| Legal pages (privacy, terms, refunds, accessibility, code of conduct) | `content/legal/*.ts` |
| Email templates | `lib/emails/templates.ts` |
| Draft agreements (release, parent acknowledgment, enrollment) | `docs/templates/` |

Permission gates: a testimonial or story renders only with `permission: true`; an employer name only with `employerPermission: true`; story photos/videos only with `mediaPermission: true`. While `showPlaceholders: true`, empty slots show as labeled placeholders. **Set it to `false` before sharing the site.**

## Services setup

### 1. Supabase (stores every form submission)
1. Create a project at supabase.com (any region in the US).
2. SQL Editor → paste and run `supabase/migrations/001_init.sql`. It creates `applications`, `subscribers`, `contact_messages`, `story_submissions`, and `referrals`, all with Row Level Security on and no public policies (only the server can write).
3. Project Settings → API: copy the **Project URL** → `SUPABASE_URL`, and the **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`. The service role key is secret: never put it in client code or a `NEXT_PUBLIC_` variable.

Forms post to `/api/apply`, `/api/subscribe`, `/api/contact`, `/api/stories`, and `/api/refer`. Each route validates input, rejects bots (hidden honeypot field), and rate-limits to 5 requests per IP per minute.

### 2. Resend (confirmation emails)
1. Create an account at resend.com and verify the domain `firstofferacademy.com` (add the DNS records it gives you in your domain registrar or in Vercel DNS).
2. Create an API key → `RESEND_API_KEY`.
3. `EMAIL_FROM` = a sender on the verified domain, e.g. `First Offer Academy <hello@firstofferacademy.com>`.
4. `NOTIFY_EMAIL` = where new-application alerts go (your inbox).
5. Newsletter list: Audience → Segments → create a segment (e.g. "Newsletter") → Copy ID → `RESEND_SEGMENT_ID`. Every newsletter signup and download-gate signup is added to Resend as a contact in that segment, after it's saved in Supabase. If the key or segment ID is missing, the sync is skipped; a Resend error is logged and never fails the signup.

Applicants, subscribers, and contact-form senders get a confirmation; you get an alert for every application. Missing keys = emails skipped silently.

### 3. Stripe (refundable deposit)
1. Create a Stripe account. Start with **test mode**: Developers → API keys → Secret key (`sk_test_…`) → `STRIPE_SECRET_KEY`.
2. In `content/site.ts`, set `depositRefundDeadline` (and `withdrawalPolicy`). **The deposit button stays hidden until both the key and the refund deadline exist**, because /refunds promises terms in writing before anyone pays.
3. Redeploy (pages decide whether to show the button at build time).
4. Test with card `4242 4242 4242 4242`, then swap in the live key (`sk_live_…`).

The button appears on /pricing and after submitting /apply. It opens Stripe Checkout for `site.cohort.depositCents` (keep in sync with `site.cohort.deposit`) and returns to `/deposit/success` or `/deposit/canceled`. There is no tuition checkout on the site.

### 4. Admin (/admin)
Set `ADMIN_USER` and a long random `ADMIN_PASSWORD`. /admin then asks for them (HTTP Basic Auth) and shows read-only tables of submissions, newest first, with a CSV export per table. Leave either empty and /admin doesn't exist (404).

### 5. Analytics
Vercel project → Analytics → enable Web Analytics. It's cookieless. Custom events (`apply_submit`, `book_call`, `subscribe`, `deposit_click`, `timeline_download`) need a Vercel Pro plan to view.

## Deploy to Vercel
1. Push the repo to GitHub.
2. vercel.com → Add New → Project → import the repo → Framework: Next.js → Deploy.
3. Project → Settings → Environment Variables: add every key from `.env.example` you're using, for **Production** (and Preview if you want test keys there). Redeploy after changing them.
4. Project → Settings → Domains: add `firstofferacademy.com` and `www.firstofferacademy.com` (set one to redirect to the other). Follow Vercel's DNS instructions at your registrar (an A record for the apex and a CNAME for `www`, or switch nameservers to Vercel).
5. After the domain is live, check `https://firstofferacademy.com/sitemap.xml` and submit it in Google Search Console.

### Environment variables
| Key | Used for | Required? |
|---|---|---|
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Saving form submissions, /admin | For forms to work |
| `RESEND_API_KEY`, `EMAIL_FROM` | Confirmation emails | Optional |
| `NOTIFY_EMAIL` | New-application alerts | Optional |
| `RESEND_SEGMENT_ID` | Newsletter signups synced to a Resend segment (also needs `RESEND_API_KEY`) | Optional |
| `STRIPE_SECRET_KEY` | Deposit checkout (also needs `depositRefundDeadline`) | Optional |
| `ADMIN_USER`, `ADMIN_PASSWORD` | /admin | Optional |

## Before sending the site to parents
Work through `docs/TODO-TYLER.md` (the "Must do before parents see it" section first). The big ones: real testimonials with written permission, refund terms, the attorney review of every legal page, and `showPlaceholders: false`.
