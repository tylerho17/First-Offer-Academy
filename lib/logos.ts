import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

// Official logo SVGs (public/logos/<slug>.svg) turned into one-color inline
// SVGs: every ink shape becomes currentColor and white knockouts become mist,
// so the strip can set one muted color without CSS filters. Read at build
// time on the server. Returns null when the file is missing.
const WHITE = /^(#fff|#ffffff|#fefefe|white)$/i;
const MIST = "#E7EDF5";

const cache = new Map<string, { svg: string; ratio: number } | null>();

export function monoLogo(slug: string) {
  if (cache.has(slug)) return cache.get(slug)!;
  const file = path.join(process.cwd(), "public", "logos", `${slug}.svg`);
  if (!existsSync(file)) {
    cache.set(slug, null);
    return null;
  }
  let svg = readFileSync(file, "utf8")
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .trim();

  const root = svg.match(/<svg\b[^>]*>/)![0];
  const num = (attr: string) => Number(root.match(new RegExp(`\\s${attr}="([\\d.]+)`))?.[1] ?? 0);
  const vb = root.match(/viewBox="([^"]+)"/)?.[1] ?? `0 0 ${num("width")} ${num("height")}`;
  const [, , w, h] = vb.trim().split(/[\s,]+/).map(Number);

  const color = (v: string) => (v === "none" ? v : WHITE.test(v.trim()) ? MIST : "currentColor");
  svg = svg
    .replace(/fill="([^"]*)"/g, (_, v) => `fill="${color(v)}"`)
    .replace(/fill:\s*([^;"]+)/g, (_, v) => `fill:${color(v)}`)
    .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');
  const newRoot = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="currentColor" aria-hidden="true" focusable="false">`;
  svg = svg.replace(/<svg\b[^>]*>/, newRoot);

  const out = { svg, ratio: w / h };
  cache.set(slug, out);
  return out;
}
