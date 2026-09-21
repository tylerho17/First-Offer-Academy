# Decisions log

Ambiguous calls made during the autonomous build, and why.

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
