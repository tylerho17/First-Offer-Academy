// Builds public/downloads/freshman-recruiting-timeline.pdf from the
// "freshman-internship-timeline" article in content/articles.ts.
//
// Usage: node --no-warnings scripts/build-timeline-pdf.mjs
// Re-run it whenever that article changes. One Letter-size page, brand colors.

import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const root = path.resolve(import.meta.dirname, "..");
const { articles } = await import(path.join(root, "content/articles.ts"));
const a = articles.find((x) => x.slug === "freshman-internship-timeline");
if (!a) throw new Error("freshman-internship-timeline article not found");

const font = async (f) => (await readFile(path.join(root, "assets/fonts", f))).toString("base64");
const [serif, sans6, sans7] = await Promise.all([font("young-serif-400.woff"), font("hanken-grotesk-600.woff"), font("hanken-grotesk-700.woff")]);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Group the article into quarters: each h2 + the list that follows it.
const quarters = [];
let intro = "";
let closing = "";
for (let i = 0; i < a.body.length; i++) {
  const b = a.body[i];
  if (b.type === "h2" && a.body[i + 1]?.type === "ul") {
    quarters.push({ title: b.text, items: a.body[i + 1].items });
    i++;
  } else if (b.type === "h2") {
    closing = a.body[i + 1]?.type === "p" ? a.body[i + 1].text : "";
    i++;
  } else if (b.type === "p" && !intro) {
    intro = b.text;
  }
}

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: "Young Serif"; src: url(data:font/woff;base64,${serif}) format("woff"); }
@font-face { font-family: "Hanken"; font-weight: 600; src: url(data:font/woff;base64,${sans6}) format("woff"); }
@font-face { font-family: "Hanken"; font-weight: 700; src: url(data:font/woff;base64,${sans7}) format("woff"); }
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { width: 8.5in; height: 11in; background: #E7EDF5; color: #000; font-family: "Hanken"; font-weight: 600; font-size: 10.5pt; line-height: 1.45; display: flex; flex-direction: column; }
header { background: #1A2B48; color: #F7F4EE; padding: 0.5in 0.6in 0.4in; }
.label { display: inline-block; background: #A8C4A4; color: #1A2B48; font-weight: 700; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; padding: 4px 10px; border-radius: 99px; }
h1 { font-family: "Young Serif"; font-weight: 400; font-size: 28pt; line-height: 1.1; margin-top: 12px; }
header p { margin-top: 10px; font-size: 10.5pt; opacity: .92; max-width: 6.6in; }
main { padding: 0.35in 0.6in 0; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.q { background: #F7F4EE; border-radius: 12px; padding: 14px 18px; display: grid; grid-template-columns: 1.35in 1fr; gap: 16px; }
.q h2 { font-family: "Young Serif"; font-weight: 400; color: #1A2B48; font-size: 13pt; line-height: 1.2; }
.q .n { display: block; font-family: "Hanken"; font-weight: 700; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; color: #3F6690; margin-bottom: 4px; }
ul { list-style: none; display: grid; gap: 5px; }
li { padding-left: 16px; position: relative; }
li::before { content: ""; position: absolute; left: 0; top: .5em; width: 7px; height: 7px; border-radius: 2px; background: #1A2B48; }
.closing { border-left: 3px solid #1A2B48; padding: 4px 0 4px 14px; font-family: "Young Serif"; color: #1A2B48; font-size: 11.5pt; line-height: 1.4; }
footer { padding: 0.25in 0.6in 0.4in; display: flex; justify-content: space-between; align-items: center; font-size: 9pt; color: #1A2B48; }
.mark { display: inline-flex; align-items: center; gap: 8px; font-family: "Young Serif"; font-size: 11pt; }
.mark i { font-style: normal; width: 22px; height: 22px; border-radius: 6px; background: #1A2B48; color: #F7F4EE; display: inline-grid; place-items: center; font-size: 12pt; }
</style></head><body>
<header>
  <span class="label">Free guide · First Offer Academy</span>
  <h1>The Freshman Recruiting Timeline</h1>
  <p>${esc(intro)}</p>
</header>
<main>
  ${quarters.map((q, i) => `<section class="q"><h2><span class="n">Step ${i + 1}</span>${esc(q.title)}</h2><ul>${q.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul></section>`).join("\n  ")}
  ${closing ? `<p class="closing">${esc(closing)}</p>` : ""}
</main>
<footer>
  <span class="mark"><i>F</i>First Offer Academy</span>
  <span>By ${esc(a.author)} · firstofferacademy.com/timeline</span>
</footer>
</body></html>`;

const out = path.join(root, "public/downloads/freshman-recruiting-timeline.pdf");
await mkdir(path.dirname(out), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
const overflow = await page.evaluate(() => document.body.scrollHeight > document.body.clientHeight + 2);
if (overflow) console.warn("Warning: content is taller than one page. Shorten the article or the layout.");
await page.pdf({ path: out, format: "Letter", printBackground: true, pageRanges: "1" });
await browser.close();
console.log("Wrote", path.relative(root, out));
