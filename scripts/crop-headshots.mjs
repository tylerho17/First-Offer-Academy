// One-time (re-runnable) headshot cropper. For each student in
// content/students.ts, reads public/images/students/<name>.png and writes a
// 400×400 webp to public/images/students/cropped/<name>.webp.
//
// The source files are screenshots of a round photo on a dark background, some
// with strips of screen UI. So instead of a plain border trim, this finds the
// photo circle (ignoring full-width UI rows/columns), then crops a square from
// inside it, biased toward the upper third so the face fills most of the
// circle. Per-student headshotZoom / headshotPosition tweak the crop.
//
// Usage: node scripts/crop-headshots.mjs

import path from "node:path";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const { students } = await import(path.join(root, "content/students.ts"));
const outDir = path.join(root, "public/images/students/cropped");
await mkdir(outDir, { recursive: true });

const BASE = 0.62; // crop side as a fraction of the circle's diameter
const LIFT = -0.1; // default vertical bias (up), as a fraction of the diameter
const SIZE = 400;

// Bounding box of the photo circle, or null if the image has no dark frame.
async function findCircle(file) {
  const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => { const i = (y * w + x) * 3; return [data[i], data[i + 1], data[i + 2]]; };
  // Background: the darkest common corner-ish color.
  const samples = [[2, h >> 1], [w - 3, h >> 1], [w >> 2, h - 3], [w >> 2, 2]].map(([x, y]) => px(x, y));
  const bg = samples.reduce((a, b) => (a[0] + a[1] + a[2] <= b[0] + b[1] + b[2] ? a : b));
  if (bg[0] + bg[1] + bg[2] > 3 * 90) return null; // no dark frame: already a tight crop
  const isBg = (x, y) => { const [r, g, b] = px(x, y); return Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]) < 40; };

  const rowFg = Array.from({ length: h }, (_, y) => { let n = 0; for (let x = 0; x < w; x++) if (!isBg(x, y)) n++; return n / w; });
  const colFg = Array.from({ length: w }, (_, x) => { let n = 0; for (let y = 0; y < h; y++) if (!isBg(x, y)) n++; return n / h; });
  // Photo rows/cols: some foreground, but not a full-width UI strip.
  const inside = (v) => v > 0.05 && v < 0.97;
  const ys = rowFg.map((v, y) => (inside(v) ? y : -1)).filter((y) => y >= 0);
  const xs = colFg.map((v, x) => (inside(v) ? x : -1)).filter((x) => x >= 0);
  if (!ys.length || !xs.length) return null;
  const top = ys[0], bottom = ys[ys.length - 1], left = xs[0], right = xs[xs.length - 1];
  const d = Math.min(right - left, bottom - top);
  return { cx: (left + right) / 2, cy: (top + bottom) / 2, d, w, h };
}

for (const s of students) {
  if (!s.headshot) continue;
  const src = path.join(root, "public", s.headshot);
  if (!existsSync(src)) { console.log(`skip ${s.firstName}: ${s.headshot} missing`); continue; }
  const meta = await sharp(src).metadata();
  const c = (await findCircle(src)) ?? { cx: meta.width / 2, cy: meta.height / 2, d: Math.min(meta.width, meta.height) / BASE, w: meta.width, h: meta.height, whole: true };
  const zoom = s.headshotZoom ?? 1;
  const side = Math.round((c.d * BASE) / zoom);
  const cx = c.cx + (s.headshotPosition?.x ?? 0) * c.d;
  const cy = c.cy + ((s.headshotPosition?.y ?? (c.whole ? 0 : LIFT)) * c.d);
  const left = Math.max(0, Math.min(c.w - side, Math.round(cx - side / 2)));
  const top = Math.max(0, Math.min(c.h - side, Math.round(cy - side / 2)));
  const name = path.basename(s.headshot).replace(/\.\w+$/, "");
  await sharp(src)
    .extract({ left, top, width: Math.min(side, c.w), height: Math.min(side, c.h) })
    .resize(SIZE, SIZE, { fit: "cover" })
    .webp({ quality: 86 })
    .toFile(path.join(outDir, `${name}.webp`));
  console.log(`${s.firstName.padEnd(10)} circle d=${Math.round(c.d)}${c.whole ? " (whole image)" : ""} crop ${side}px at ${left},${top}`);
}
