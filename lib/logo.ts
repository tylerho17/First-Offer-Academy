import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

// The brand logo lives at public/logo.png (navy "F" with an upward arrow).
// Everything that shows a logo reads it from there at build time, so adding or
// replacing the file (then rebuilding) updates the header, footer, favicons,
// and share images at once.

export const LOGO_SRC = "/logo.png";
const LOGO_FILE = path.join(process.cwd(), "public", "logo.png");

export const hasLogo = () => existsSync(LOGO_FILE);

// data: URL for next/og images (they can't fetch /logo.png during the build).
export const logoDataUrl = () => (hasLogo() ? `data:image/png;base64,${readFileSync(LOGO_FILE).toString("base64")}` : null);

// Pixel size from the PNG header, so <img> gets correct width/height.
export function logoSize(): { width: number; height: number } {
  if (!hasLogo()) return { width: 1, height: 1 };
  const buf = readFileSync(LOGO_FILE);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}
