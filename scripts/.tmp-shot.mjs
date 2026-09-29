import { chromium } from "playwright";
const [,, S, path, name, ...widths] = process.argv;
const b = await chromium.launch();
for (const w of widths.map(Number)) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto("http://localhost:3123" + path, { waitUntil: "networkidle" });
  const H = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < H; y += 400) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(60); }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.addStyleTag({ content: ".header{position:static!important}" });
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${S}/${name}-${w}.png`, fullPage: true });
  console.log(w, path, "scrollW", await p.evaluate(() => document.documentElement.scrollWidth));
  await p.close();
}
await b.close();
