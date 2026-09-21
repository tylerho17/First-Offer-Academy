// Shared PDF pipeline for the Playbook (build-playbook-pdf.mjs) and the
// downloads (build-downloads.mjs): brand fonts and CSS, a renderer for
// content/blocks.ts blocks, and helpers that read page counts and chapter
// start pages back out of the generated PDF.

import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const font = async (f) => (await readFile(path.join(root, "assets/fonts", f))).toString("base64");
const [serif, sans6, sans7] = await Promise.all([font("source-serif-4-600.woff"), font("hanken-grotesk-600.woff"), font("hanken-grotesk-700.woff")]);

// Brand logo (public/logo.png) as an <img>, or nothing if the file is missing.
export const logoTag = (h = 24) => {
  const f = path.join(root, "public", "logo.png");
  return existsSync(f) ? `<img src="data:image/png;base64,${readFileSync(f).toString("base64")}" alt="" style="height:${h}px;width:auto">` : "";
};
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Brand tokens. No pure white: cream is the white.
export const C = { mist: "#E7EDF5", navy: "#1A2B48", ink: "#000000", cream: "#F7F4EE", sage: "#A8C4A4", dusty: "#3F6690" };

export const baseCss = (footerLeft) => `
@font-face { font-family: "Source Serif 4"; font-weight: 600; src: url(data:font/woff;base64,${serif}) format("woff"); }
@font-face { font-family: "Hanken"; font-weight: 600; src: url(data:font/woff;base64,${sans6}) format("woff"); }
@font-face { font-family: "Hanken"; font-weight: 700; src: url(data:font/woff;base64,${sans7}) format("woff"); }
@page {
  size: Letter;
  margin: 0.55in 0.5in 0.7in;
  background: ${C.mist};
  @bottom-left { content: "${footerLeft}"; font-family: "Hanken"; font-weight: 600; font-size: 8pt; color: ${C.navy}; }
  @bottom-right { content: counter(page); font-family: "Hanken"; font-weight: 700; font-size: 9pt; color: ${C.navy}; }
}
@page cover { margin: 0; background: ${C.navy}; @bottom-left { content: none; } @bottom-right { content: none; } }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: ${C.mist}; }
body { color: ${C.ink}; font-family: "Hanken"; font-weight: 600; font-size: 8.8pt; line-height: 1.38; }
h1, h2, h3 { font-family: "Source Serif 4"; font-weight: 600; color: ${C.navy}; line-height: 1.15; }
h2.ch { font-size: 21pt; margin: 2px 0 6px; break-after: avoid; }

.ch-n { break-after: avoid; font-weight: 700; font-size: 8.5pt; letter-spacing: .14em; text-transform: uppercase; color: ${C.dusty}; }
.ch-sum { font-size: 11pt; color: ${C.navy}; margin-bottom: 14px; }
h3 { font-size: 12pt; margin: 9px 0 4px; break-after: avoid; }
p { margin: 0 0 8px; orphans: 2; widows: 2; }
ul, ol { margin: 0 0 10px 18px; }
li { margin-bottom: 2px; }
li::marker { color: ${C.dusty}; font-weight: 700; }
.box { background: ${C.cream}; border-radius: 10px; padding: 8px 11px; margin: 0 0 7px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.box.keep, table.keep { break-inside: avoid; }
.box-title { break-after: avoid; }
.box-title { font-family: "Source Serif 4"; font-weight: 600; color: ${C.navy}; font-size: 11.5pt; margin-bottom: 5px; }
.check { list-style: none; margin: 0; }
.check.cols { columns: 2; column-gap: 20px; }
.check.cols li { break-inside: avoid; }
.grid2 .check.cols { columns: 1; }
.check li { padding-left: 20px; position: relative; }
.check li::before { content: ""; position: absolute; left: 0; top: 3px; width: 10px; height: 10px; border: 1.5px solid ${C.navy}; border-radius: 3px; }
.template { border-left: 4px solid ${C.navy}; }
.template pre { font-family: "Hanken"; font-weight: 600; white-space: pre-wrap; font-size: 8.8pt; line-height: 1.38; }
.callout-tyler { background: ${C.navy}; color: ${C.cream}; }
.callout-tyler .box-title { color: ${C.cream}; }
.callout-example { border: 1.5px dashed ${C.dusty}; }
.callout-example .box-title { font-family: "Hanken"; font-weight: 700; font-size: 8.5pt; letter-spacing: .08em; text-transform: uppercase; color: ${C.dusty}; }
table { width: 100%; border-collapse: collapse; background: ${C.cream}; border-radius: 10px; overflow: hidden; margin: 0 0 12px; font-size: 8.8pt; line-height: 1.38; }
.cap { font-family: "Source Serif 4"; font-weight: 600; color: ${C.navy}; font-size: 11pt; padding: 2px 0 5px; break-after: avoid; }
th, td { text-align: left; vertical-align: top; padding: 4px 7px; border-bottom: 1px solid rgba(26,43,72,.14); white-space: pre-wrap; }
thead th { background: ${C.navy}; color: ${C.cream}; font-weight: 700; font-size: 8pt; letter-spacing: .04em; text-transform: uppercase; }
tbody td:first-child { color: ${C.navy}; font-weight: 700; }
tr { break-inside: avoid; }
table.dense { font-size: 7.5pt; }
table.dense th, table.dense td { padding: 5px 4px; }
table.blank td { height: 20px; }
.chip { display: inline-block; background: ${C.sage}; color: ${C.navy}; font-weight: 700; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; padding: 4px 10px; border-radius: 99px; }
.draft { display: inline-block; border: 1.5px dashed ${C.cream}; color: ${C.cream}; font-weight: 700; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; padding: 3px 10px; border-radius: 99px; margin-left: 8px; }
.mark { display: inline-flex; align-items: center; gap: 8px; font-family: "Source Serif 4"; font-weight: 600; font-size: 12pt; }
.mark img { background: ${C.cream}; border-radius: 6px; padding: 2px; }
`;

const cols = (b) => b.head.length;

export function renderBlock(b) {
  switch (b.type) {
    case "p": return `<p>${esc(b.text)}</p>`;
    case "h2": return `<h3>${esc(b.text)}</h3>`;
    case "h3": return `<h3>${esc(b.text)}</h3>`;
    case "ul": return `<ul${b.items.length >= 8 ? ' class="cols"' : ""}>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    case "ol": return `<ol${b.items.length >= 8 ? ' class="cols"' : ""}>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`;
    case "checklist": return `<div class="box${b.items.length <= 8 ? " keep" : ""}">${b.title ? `<div class="box-title">${esc(b.title)}</div>` : ""}<ul class="check${b.items.length >= 3 && b.items.every((i) => i.length < 75) ? " cols" : ""}">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
    case "template": return `<div class="box template"><div class="box-title">${esc(b.title)}</div><pre>${esc(b.text)}</pre></div>`;
    case "callout": return `<div class="box keep callout-${b.tone ?? "note"}">${b.title ? `<div class="box-title">${esc(b.title)}</div>` : ""}<p style="margin:0">${esc(b.text)}</p></div>`;
    case "table": {
      const blank = b.rows.every((r) => r.slice(1).every((c) => c === ""));
      const cls = [cols(b) > 6 ? "dense" : "", blank ? "blank" : "", b.rows.length <= 2 ? "keep" : ""].filter(Boolean).join(" ");
      return `${b.caption ? `<div class="cap">${esc(b.caption)}</div>` : ""}<table${cls ? ` class="${cls}"` : ""}><thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    }
    default: throw new Error(`Unknown block type: ${b.type}`);
  }
}

export const renderBlocks = (blocks) => blocks.map(renderBlock).join("\n");

// ---- reading the PDF back

export const countPages = (buf) => (buf.toString("latin1").match(/\/Type\s*\/Page\b(?!s)/g) || []).length;

// Page object ids in reading order, walking the (possibly nested) page tree.
function pageOrder(s) {
  const objs = new Map();
  for (const m of s.matchAll(/(?:^|\n)(\d+) 0 obj\s*([\s\S]*?)endobj/g)) objs.set(m[1], m[2]);
  const kidsOf = (body) => [...(body.match(/\/Kids\s*\[([^\]]*)\]/)?.[1] ?? "").matchAll(/(\d+)\s+0\s+R/g)].map((m) => m[1]);
  const isTree = (body) => /\/Type\s*\/Pages\b/.test(body);
  const rootId = [...objs].find(([, b]) => isTree(b) && !/\/Parent\s/.test(b))?.[0];
  const walk = (id) => (isTree(objs.get(id) ?? "") ? kidsOf(objs.get(id)).flatMap(walk) : [id]);
  return rootId ? walk(rootId) : [];
}

// Maps each named destination (an element id with an internal link to it) to
// its 1-based page number.
export function destPages(buf) {
  const s = buf.toString("latin1");
  const order = pageOrder(s);
  const out = {};
  for (const m of s.matchAll(/\/([A-Za-z0-9_-]+)\s*\[(\d+)\s+0\s+R\s*\/XYZ/g)) {
    const i = order.indexOf(m[2]);
    if (i >= 0) out[m[1]] = i + 1;
  }
  return out;
}
