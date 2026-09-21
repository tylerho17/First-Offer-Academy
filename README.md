# First Offer Academy — website

Next.js 15 + Tailwind 4. Brand rules: `CLAUDE.md` and `docs/`.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
```

## Where content lives (no code changes needed)
| What | File |
|---|---|
| Links, price, dates, format, refund terms, placeholder switch | `content/site.ts` |
| Stats row | `content/stats.ts` |
| Testimonials (student + parent, video) | `content/testimonials.ts` |
| Employer names/logos | `content/employers.ts` |
| Phases, levels, comparison table | `content/program.ts` |
| Track pages (/tracks/finance etc.) | `content/tracks.ts` |
| Free events (home schedule, /events, announcement bar) | `content/events.ts` |
| Playbook articles (/blog) | `content/articles.ts` |
| School workshops (/workshops) | `content/workshops.ts` |
| FAQ | `content/faq.ts` |
| Photos | `public/images/` |

## Before sending to parents
- Fill every `TODO` in `content/`
- Review the three Playbook articles in `content/articles.ts` (drafted in your name)
- Set `showPlaceholders: false` in `content/site.ts`
- Connect the apply form (`applyEndpoint`) and the Stripe deposit link
- Replace `/images/tyler.jpg` in the founder section with a casual daylight photo

## Deploy
Push to GitHub → vercel.com → Add New Project → import `first-offer-academy` → Deploy.
Then add the domain `firstofferacademy.com` under Project → Settings → Domains.
