// Full-page screenshots of every route at 375, 768, and 1440px.
//
// Usage: npm run build && node scripts/screenshots.mjs [--only=/program,/faq]
//
// Starts the production server, finds every prerendered page in the build
// manifest, and saves PNGs to screenshots/<width>/<route>.png. It also prints
// any page that scrolls horizontally or has text closer than 16px to the edge.

import { spawn } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const PORT = 3123;
const BASE = `http://localhost:${PORT}`;
const WIDTHS = [375, 768, 1440];
const OUT = "screenshots";

const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");

async function routes() {
  const manifest = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
  const all = Object.keys(manifest.routes).filter(
    (r) => !/\.(xml|txt|png|ico|jpg|svg|webmanifest)$/.test(r) && !r.includes("opengraph-image") && !r.startsWith("/icon") && !r.startsWith("/apple-icon") && r !== "/_not-found",
  );
  all.push("/this-page-does-not-exist");
  return (only ?? all).sort();
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server did not start");
}

const server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore" });
const issues = [];

try {
  await waitForServer();
  const list = await routes();
  const browser = await chromium.launch();

  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await mkdir(path.join(OUT, String(width)), { recursive: true });

    for (const route of list) {
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      // Reveal-on-scroll content: show everything before capturing.
      await page.addStyleTag({ content: ".reveal.reveal{opacity:1!important;transform:none!important}" });

      const found = await page.evaluate(() => {
        const out = [];
        const vw = document.documentElement.clientWidth;
        if (document.documentElement.scrollWidth > vw) out.push(`horizontal scroll (${document.documentElement.scrollWidth}px > ${vw}px)`);
        // Text nodes hugging the viewport edge (outside intentional scrollers).
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let n;
        let edge = 0;
        while ((n = walker.nextNode())) {
          if (!n.textContent.trim()) continue;
          const el = n.parentElement;
          if (!el || el.closest("[data-scroller], .marquee, .table-scroll, .videos, .sr-only, .footer-nl, .announce")) continue;
          const style = getComputedStyle(el);
          if (style.visibility === "hidden" || style.display === "none") continue;
          const range = document.createRange();
          range.selectNodeContents(n);
          for (const r of range.getClientRects()) {
            if (r.width === 0) continue;
            if (r.left < 15.5 || r.right > vw - 15.5) edge++;
          }
        }
        if (edge) out.push(`${edge} text fragment(s) within 16px of the edge`);
        const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src);
        if (broken.length) out.push(`broken images: ${broken.join(", ")}`);
        return out;
      });
      for (const f of found) issues.push(`${width}px ${route}: ${f}`);

      const file = route === "/" ? "home" : route.slice(1).replaceAll("/", "__");
      await page.screenshot({ path: path.join(OUT, String(width), `${file}.png`), fullPage: true });
    }
    await page.close();
  }
  await browser.close();
  console.log(`Saved ${list.length} routes × ${WIDTHS.length} widths to ${OUT}/`);
  if (issues.length) {
    console.log(`\n${issues.length} issue(s):`);
    for (const i of issues) console.log("  - " + i);
  } else {
    console.log("No layout issues detected.");
  }
} finally {
  server.kill();
}
