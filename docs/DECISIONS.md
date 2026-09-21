# Decisions log

Ambiguous calls made during the autonomous build, and why.

- **Task 1:** Switched `npm run lint` from the deprecated `next lint` to `eslint .` (same flat config). Removes the deprecation warning; output is identical.
- **Task 1:** `scripts/screenshots.mjs` discovers routes from `.next/prerender-manifest.json` so new pages are picked up without editing the script, and prints pages with horizontal scroll, text within 16px of the edge, or broken images. Run `npm run build && npm run screenshots`.
