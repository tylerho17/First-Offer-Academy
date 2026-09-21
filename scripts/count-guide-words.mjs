// Prints the word count of every guide in content/guides/ (must be 1,800–3,500).
// Usage: node --no-warnings scripts/count-guide-words.mjs

import { register } from "node:module";
import { readdirSync } from "node:fs";
import path from "node:path";

register("./lib/ts-resolve.mjs", import.meta.url);
const root = path.resolve(import.meta.dirname, "..");
const { blockWords } = await import(path.join(root, "content/wordCount.ts"));
let bad = 0;
for (const f of readdirSync(path.join(root, "content/guides")).filter((f) => !f.startsWith("_") && f !== "types.ts" && f !== "index.ts")) {
  const { guide } = await import(path.join(root, "content/guides", f));
  const n = guide.body.reduce((a, b) => a + blockWords(b), 0);
  const ok = n >= 1800 && n <= 3500;
  if (!ok) bad++;
  console.log(`${ok ? "  " : "!!"} ${String(n).padStart(5)}  ${guide.slug}`);
}
if (bad) process.exit(1);
