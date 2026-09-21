// Builds public/downloads/first-offer-playbook.pdf from content/playbook.ts.
//
// Usage: npm run pdf
//
// Two passes: the first renders the book and reads each chapter's start page
// out of the PDF's named destinations; the second fills those page numbers
// into the table of contents. Fails if the PDF is under playbook.minPages.

import { register } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

register("./lib/ts-resolve.mjs", import.meta.url);
const { root, esc, baseCss, renderBlocks, countPages, destPages, C } = await import("./lib/pdf.mjs");
const { playbook: pb, chapters } = await import(path.join(root, "content/playbook.ts"));
const { site } = await import(path.join(root, "content/site.ts"));

const footer = `${pb.title} · ${site.domain}/playbook-pdf${pb.reviewedByTyler ? "" : " · Draft"}`;

const css = `${baseCss(footer)}
.cover { page: cover; height: 11in; margin-bottom: -2px; background: ${C.navy}; color: ${C.cream}; padding: 0.9in 0.85in 0.8in; display: flex; flex-direction: column; }
.cover h1 { color: ${C.cream}; font-size: 44pt; line-height: 1.05; margin-top: 1.1in; }
.cover .sub { font-family: "Young Serif"; font-size: 19pt; line-height: 1.25; margin-top: 18px; max-width: 5.6in; }
.cover .intro { font-size: 11.5pt; margin-top: 28px; max-width: 5.4in; opacity: .92; }
.cover .price-box { margin-top: 36px; background: ${C.sage}; color: ${C.navy}; border-radius: 14px; padding: 16px 20px; max-width: 5.4in; font-size: 10.5pt; }
.cover .price-box strong { font-family: "Young Serif"; font-weight: 400; font-size: 14pt; display: block; margin-bottom: 4px; }
.cover .foot { margin-top: auto; display: flex; flex-direction: column; gap: 10px; font-size: 9.5pt; }
.toc h2 { font-size: 24pt; margin-bottom: 10px; }
.toc ol { list-style: none; margin: 0; }
.toc li { display: grid; grid-template-columns: 30px 1fr auto; gap: 8px; align-items: baseline; padding: 4px 0; border-bottom: 1px solid rgba(26,43,72,.14); }
.toc .n { font-family: "Young Serif"; color: ${C.dusty}; font-size: 12pt; }
.toc a { color: ${C.navy}; text-decoration: none; font-family: "Young Serif"; font-size: 11pt; }
.toc small { display: block; font-family: "Hanken"; font-size: 8pt; color: ${C.ink}; margin-top: 1px; }
.toc .pg { font-weight: 700; color: ${C.navy}; }
.chapter { margin-top: 14px; }
.chapter.first { break-before: page; margin-top: 0; }
.chapter > .ch-n { display: block; padding-top: 14px; border-top: 2px solid ${C.navy}; }
.chapter.first > .ch-n { border-top: 0; padding-top: 0; }
.cta { break-inside: avoid; }
.pair { display: flex; gap: 10px; break-inside: avoid; }
.pair > .box { flex: 1 1 0; min-width: 0; }
.grid2 .template pre { font-size: 8.2pt; }
ul.cols, ol.cols { columns: 2; column-gap: 24px; }
ul.cols li, ol.cols li { break-inside: avoid; }
.cta { margin-top: 18px; background: ${C.navy}; color: ${C.cream}; border-radius: 14px; padding: 22px 24px; }
.cta h3 { color: ${C.cream}; font-size: 17pt; margin: 0 0 8px; }
.cta .btn { display: inline-block; margin-top: 12px; margin-right: 10px; background: ${C.sage}; color: ${C.navy}; font-weight: 700; padding: 8px 16px; border-radius: 99px; font-size: 10pt; text-decoration: none; }
.cta .btn.alt { background: transparent; color: ${C.cream}; border: 1.5px solid ${C.cream}; }
.big-quote { font-family: "Young Serif"; color: ${C.navy}; font-size: 22pt; line-height: 1.2; margin: 6px 0 16px; }
`;

const html = (pages) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(pb.title)}</title><style>${css}</style></head><body>
<section class="cover">
  <div><span class="chip">Free guide · ${esc(site.name)}</span>${pb.reviewedByTyler ? "" : `<span class="draft">Draft</span>`}</div>
  <h1>${esc(pb.title)}</h1>
  <p class="sub">${esc(pb.subtitle)}</p>
  <p class="intro">${esc(pb.intro)}</p>
  <div class="price-box"><strong>16 chapters, every template included</strong>The resume rubric, the target list, the AI outreach system, 5 cold email templates, the call framework, the referral close, the story map, technicals by track, and a 12-week calendar to 500 emails.</div>
  <div class="foot">
    <span class="mark"><i>F</i>${esc(site.name)}</span>
    <span>${esc(pb.authorLine)}</span>
  </div>
</section>
<section class="toc">
  <span class="ch-n">Inside</span>
  <h2>Contents</h2>
  <ol>
    ${chapters.map((c) => `<li><span class="n">${c.n}</span><span><a href="#ch-${c.slug}">${esc(c.title)}</a><small>${esc(c.summary)}</small></span><span class="pg">${pages[`ch-${c.slug}`] ?? "00"}</span></li>`).join("\n    ")}
  </ol>
</section>
${chapters.map((c) => `<section class="chapter${c.n === 1 ? " first" : ""}${c.n === chapters.length ? " closing" : ""}" id="ch-${c.slug}">
  <span class="ch-n">Chapter ${c.n}</span>
  <h2 class="ch">${esc(c.title)}</h2>
  ${c.n === chapters.length ? "" : `<p class="ch-sum">${esc(c.summary)}</p>`}
  ${renderChapter(c.blocks)}
  ${c.n === chapters.length ? closingCta() : ""}
</section>`).join("\n")}
</body></html>`;

// Runs of checklists (the resume rubric) or templates (emails, prompts) sit in a two-column grid.
function renderChapter(blocks) {
  const out = [];
  for (let i = 0; i < blocks.length; i++) {
    const t = blocks[i].type;
    if ((t === "checklist" || t === "template") && blocks[i + 1]?.type === t) {
      const run = [];
      while (blocks[i]?.type === t) run.push(blocks[i++]);
      i--;
      for (let k = 0; k < run.length; k += 2) out.push(`<div class="pair grid2">${renderBlocks(run.slice(k, k + 2))}</div>`);
    } else out.push(renderBlocks([blocks[i]]));
  }
  return out.join("\n");
}

function closingCta() {
  const c = site.cohort;
  return `<div class="cta">
    <h3>Want someone making sure it actually gets done?</h3>
    <p>${esc(site.name)} is a 12-week program for first- and second-year college students in Orange County. ${esc(c.name)} starts ${esc(c.start)}: ${c.seats} seats, ${esc(c.price)} or ${esc(c.plan)}.</p>
    <a class="btn" href="https://${site.domain}/apply">Apply at ${site.domain}/apply</a>
    <a class="btn alt" href="https://${site.domain}/parents">For parents: ${site.domain}/parents</a>
  </div>`;
}

const browser = await chromium.launch();
const page = await browser.newPage();
const render = async (pages) => {
  await page.setContent(html(pages), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  return page.pdf({ preferCSSPageSize: true, printBackground: true, outline: true, tagged: true });
};

const first = await render({});
const pages = destPages(first);
const missing = chapters.filter((c) => !pages[`ch-${c.slug}`]);
if (missing.length) throw new Error(`Couldn't find start pages for: ${missing.map((c) => c.slug).join(", ")}`);
const pdf = await render(pages);
await browser.close();

const total = countPages(pdf);
// The /playbook-pdf page reads the real page count and chapter pages from here.
await writeFile(path.join(root, "content/playbook-meta.json"), JSON.stringify({ pages: total, chapterPages: pages }, null, 2) + "\n");
const out = path.join(root, "public", pb.file);
await mkdir(path.dirname(out), { recursive: true });
await writeFile(out, pdf);
console.log(`Wrote ${path.relative(root, out)}: ${total} pages`);
for (const c of chapters) console.log(`  p.${String(pages[`ch-${c.slug}`]).padStart(2)}  ${c.n}. ${c.title}`);
if (total < pb.minPages) {
  console.error(`FAILED: the Playbook is ${total} pages; it must be at least ${pb.minPages}.`);
  process.exit(1);
}
