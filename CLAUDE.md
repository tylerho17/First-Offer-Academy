# First Offer Academy — Website

Marketing site for First Offer Academy: a 12-week recruiting program that teaches first- and second-year college students in Orange County (UCI, community colleges, nearby schools) how to land internships in Finance, Consulting, Marketing, and Tech. Buyers are parents; users are students. Solo founder: Tyler Ho.

Read `docs/brand-guide.md` and `docs/site-brief.md` before any UI or copy work. They are the source of truth. If this file and those docs disagree, the docs win.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Fonts via `next/font/google`: Young Serif (display), Hanken Grotesk (body/UI)
- Deploy: Vercel. Domain: firstofferacademy.com
- No component library. Hand-built components in `components/`.
- All editable content (testimonials, stats, employers, FAQ, program, tracks, events, articles, workshops, site settings) lives in typed files under `content/`, never hard-coded in components.
- Design references: Wall Street Mastermind (announcement bar, header with dropdowns + Get Started, school workshops split hero, blog hero, footer with newsletter panel), StreetSmart (pricing hero with tabs, employer logo marquee band), Leland (offerings grid, topic pills, track category pages, coach card, event cards). Structure only; never their claims.

## Design tokens (Tailwind theme + CSS variables)
| Token | Hex | Use |
|---|---|---|
| mist | #E7EDF5 | page background |
| navy | #1A2B48 | headlines, dark bands, footer, primary buttons, all dark shapes |
| ink | #000000 | body text on light ground only |
| cream | #F7F4EE | cards, panels, quote blocks; text on navy |
| sage | #A8C4A4 | one accent per screen: price box, CTA on navy bands |
| dusty | #3F6690 | links, small labels, icons, focus rings |

Hard rules:
- No pure white anywhere. Cream is the white.
- Headlines navy (Young Serif). Body black (Hanken Grotesk) on mist/cream, cream on navy.
- Never black text on navy. Never sage text, and never sage on mist without navy text inside a filled shape.
- Black is text only: no black fills, borders, or buttons.
- Cream appears as raised cards on mist, not as alternating full-width bands.
- Primary button: navy pill, cream text, once per screen. On navy bands: sage pill, navy text. Secondary: 1.5px navy border.
- Type scale: H1 56/38px (desktop/mobile), H2 36px, body 18px, buttons 16px/600.
- Mobile-first. Every section must work at 375px with a 16px side gutter and no horizontal scroll.

## Content integrity (non-negotiable)
This site sells a $5,000 program to parents. Every claim must be true and checkable.
- NEVER invent testimonials, names, quotes, stats, employer names, or logos. Use the data in `content/`; if a field is empty, render nothing (or a clearly marked TODO in dev only).
- A testimonial renders only if `permission: true`. An employer name/logo renders only if `employerPermission: true`.
- Banned words: "guaranteed", "guarantee", "elite", "top 1%". No outcome promises. The program promises a fully executed internship search, not an offer.
- Do not name Tyler's employers (Barclays, Deloitte) or the Irvine Investment & Trading Group anywhere on the site.
- Say "internships", not "paid internships" (some student internships were unpaid).
- No stock photos of fake students. No AI-generated people presented as real. Use placeholders labeled as such.

## Conventions
- Components small and single-purpose. One section = one component in `components/sections/`.
- Links out (Calendly, Stripe deposit, apply form) come from `content/site.ts`, never inline.
- Accessibility: semantic headings in order, alt text on every image, visible focus rings (dusty), 4.5:1 minimum contrast.
- Before finishing any task: run `npm run build` and `npm run lint`, and check the page at 375px and 1440px.
