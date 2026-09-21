import { chromium } from "@playwright/test";
const [,, from, to, out] = process.argv;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
let h = '<body style="margin:0;display:grid;grid-template-columns:repeat(5,1fr);gap:6px;background:#888">';
for (let i = +from; i <= +to; i++) h += '<div style="position:relative"><img style="width:100%" src="file:///private/tmp/claude-501/-Users-tylerho-Desktop-First-Offer-Academy/de3fa7a1-cfde-46fd-8381-2154b5114a5a/scratchpad/s' + i + '.png"><b style="position:absolute;top:2px;left:4px;background:yellow">' + i + '</b></div>';
await p.goto("file:///private/tmp/claude-501/-Users-tylerho-Desktop-First-Offer-Academy/de3fa7a1-cfde-46fd-8381-2154b5114a5a/scratchpad/blank.html").catch(()=>{});
await p.setContent(h); await p.waitForTimeout(500);
await p.screenshot({ path: out, fullPage: true }); await b.close();
