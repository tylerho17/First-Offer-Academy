// Builds every file in content/downloads.ts into public/downloads/:
// CSVs for sheets and branded single-page PDFs for documents.
//
// Usage: npm run downloads
//
// Each PDF must fit on one Letter page. If it doesn't, the script scales it
// down a step at a time (not below 75%) and fails if it still doesn't fit.

import { register } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

register("./lib/ts-resolve.mjs", import.meta.url);
const { root, esc, baseCss, renderBlocks, countPages, C } = await import("./lib/pdf.mjs");
const { downloads, downloadFile, downloadsReviewedByTyler } = await import(path.join(root, "content/downloads.ts"));
const { site } = await import(path.join(root, "content/site.ts"));
const t = await import(path.join(root, "content/toolkit.ts"));

const outDir = path.join(root, "public/downloads");
await mkdir(outDir, { recursive: true });

// ---- CSV (RFC 4180, UTF-8 BOM so Excel opens it cleanly)
const cell = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = (d) => "﻿" + [d.head, ...d.rows].map((r) => r.map(cell).join(",")).join("\r\n") + "\r\n";

// ---- PDF
const footer = `${site.name} · Free template · ${site.domain}/free-resources${downloadsReviewedByTyler ? "" : " · Draft"}`;
const css = `${baseCss(footer)}
body { zoom: var(--z, 1); }
.head { background: ${C.navy}; color: ${C.cream}; border-radius: 12px; padding: 14px 18px; margin-bottom: 14px; display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; }
.head h1 { color: ${C.cream}; font-size: 20pt; line-height: 1.1; }
.head p { margin: 4px 0 0; font-size: 9.5pt; opacity: .92; }
.head .chip { flex: none; }
.pair { display: flex; gap: 8px; break-inside: avoid; }
.pair > .box { flex: 1 1 0; min-width: 0; }
.pair .template pre { font-size: 8pt; }
.paper { background: ${C.cream}; border-radius: 10px; padding: 26px 34px; font-size: 9.5pt; }
.paper .name { text-align: center; font-family: "Source Serif 4"; font-weight: 600; color: ${C.navy}; font-size: 18pt; }
.paper .contact { text-align: center; font-size: 9pt; margin-bottom: 10px; }
.paper h3 { font-family: "Hanken"; font-weight: 700; font-size: 9.5pt; letter-spacing: .08em; text-transform: uppercase; border-bottom: 1.5px solid ${C.navy}; margin: 12px 0 5px; padding-bottom: 2px; }
.paper p { margin: 0 0 2px; }
.paper .hint { color: ${C.dusty}; font-size: 8.5pt; }
.notes { margin-top: 12px; }
table.blank td { height: 56px; }
`;

function resumeHtml() {
  const [header, ...sections] = t.resumeTemplate;
  return `<div class="paper">
    <div class="name">${esc(header.lines[0])}</div>
    <div class="contact">${esc(header.lines[1])}</div>
    ${sections.map((s) => `<h3>${esc(s.section)}</h3>${s.lines.map((l) => `<p>${esc(l)}</p>`).join("")}`).join("")}
  </div>
  <div class="box notes"><div class="box-title">Rules that matter most</div><ul class="check cols">
    ${["One page. Standard font, 10–12 pt.", "Every bullet: verb + what you did + result.", "Numbers in at least half your bullets.", "Nothing you can't talk about for two minutes.", "High school counts in freshman year.", "Save as Firstname-Lastname-Resume.pdf."].map((r) => `<li>${esc(r)}</li>`).join("")}
  </ul></div>`;
}

// Runs of templates render as side-by-side pairs to save space.
function body(blocks) {
  const out = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].type === "template" && blocks[i + 1]?.type === "template") {
      const run = [];
      while (blocks[i]?.type === "template") run.push(blocks[i++]);
      i--;
      for (let k = 0; k < run.length; k += 2) out.push(`<div class="pair">${renderBlocks(run.slice(k, k + 2))}</div>`);
    } else out.push(renderBlocks([blocks[i]]));
  }
  return out.join("\n");
}

const pdfHtml = (d, z) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(d.title)} · ${esc(site.name)}</title><style>${css}</style></head>
<body style="--z:${z}">
  <div class="head"><div><h1>${esc(d.title)}</h1><p>${esc(d.subtitle)}</p></div><span class="chip">Free template</span></div>
  ${d.layout === "resume" ? resumeHtml() : body(d.blocks)}
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
let failed = 0;

for (const d of downloads) {
  const out = path.join(root, "public", downloadFile(d));
  if (d.format === "CSV") {
    await writeFile(out, csv(d));
    console.log(`Wrote ${path.relative(root, out)} (${d.rows.length} rows)`);
    continue;
  }
  let done = false;
  for (let z = 1; z >= 0.749; z -= 0.05) {
    await page.setContent(pdfHtml(d, z.toFixed(2)), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true });
    if (countPages(pdf) === 1) {
      await writeFile(out, pdf);
      console.log(`Wrote ${path.relative(root, out)}${z < 0.999 ? ` (scaled to ${Math.round(z * 100)}%)` : ""}`);
      done = true;
      break;
    }
  }
  if (!done) {
    console.error(`FAILED: ${d.slug} doesn't fit on one page even at 75%. Shorten its content.`);
    failed++;
  }
}

await browser.close();
if (failed) process.exit(1);
