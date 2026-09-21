# Decisions log

Ambiguous calls made during the autonomous build, and why.

- **Task 1:** Switched `npm run lint` from the deprecated `next lint` to `eslint .` (same flat config). Removes the deprecation warning; output is identical.
- **Task 1:** `scripts/screenshots.mjs` discovers routes from `.next/prerender-manifest.json` so new pages are picked up without editing the script, and prints pages with horizontal scroll, text within 16px of the edge, or broken images. Run `npm run build && npm run screenshots`.
- **Task 2:** Dropdown open state is now driven by a client component (`components/NavDropdown.tsx`) rather than CSS `:focus-within`, because CSS alone can't close a menu on Escape while focus is inside it. Hover still opens it.
- **Task 2:** The home testimonial video row leaves empty space at 1440px (3 × 280px cards). Not changed here because A2.4 replaces that header row with the Success Stories carousel.
