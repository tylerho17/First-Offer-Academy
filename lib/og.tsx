import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { logoDataUrl } from "./logo";

// Brand share images: navy ground, cream Source Serif 4 headline, sage label.
// Fonts are bundled in assets/fonts (next/og can't read woff2).

export const ogSize = { width: 1200, height: 630 };

const NAVY = "#1A2B48";
const CREAM = "#F7F4EE";
const SAGE = "#A8C4A4";

async function fonts() {
  const dir = path.join(process.cwd(), "assets/fonts");
  const [serif, sans] = await Promise.all([
    readFile(path.join(dir, "source-serif-4-600.woff")),
    readFile(path.join(dir, "hanken-grotesk-700.woff")),
  ]);
  return [
    { name: "Source Serif 4", data: serif, weight: 600 as const, style: "normal" as const },
    { name: "Hanken Grotesk", data: sans, weight: 700 as const, style: "normal" as const },
  ];
}

export async function brandImage({ label, headline, footer = "firstofferacademy.com" }: { label: string; headline: string; footer?: string }) {
  const size = headline.length > 70 ? 60 : 68;
  const logo = logoDataUrl();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: NAVY, padding: "72px 80px", fontFamily: "Hanken Grotesk" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", background: SAGE, color: NAVY, fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "10px 22px", borderRadius: 999 }}>
            {label}
          </div>
        </div>
        <div style={{ display: "flex", fontFamily: "Source Serif 4", color: CREAM, fontSize: size, lineHeight: 1.15, letterSpacing: "-0.01em", maxWidth: 1000 }}>{headline}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: CREAM, fontSize: 26 }}>
          {logo && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 14, background: CREAM, padding: 6 }}>
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src={logo} width={44} height={44} style={{ objectFit: "contain" }} />
            </div>
          )}
          <div style={{ display: "flex" }}>First Offer Academy · {footer}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

// Favicons from public/logo.png. The 32px favicon keeps the logo's
// transparency; the 180px apple-touch-icon sits on cream because iOS fills
// transparent areas with black. If the logo file is missing, a temporary
// navy "F" square is drawn instead so the build still succeeds.
export async function iconImage(px: number, { background }: { background?: string } = {}) {
  const logo = logoDataUrl();
  if (logo) {
    const pad = background ? Math.round(px * 0.12) : 0;
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: background ?? "transparent", padding: pad }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logo} width={px - pad * 2} height={px - pad * 2} style={{ objectFit: "contain" }} />
        </div>
      ),
      { width: px, height: px },
    );
  }
  const serif = await readFile(path.join(process.cwd(), "assets/fonts/source-serif-4-600.woff"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: NAVY, borderRadius: px * 0.22, color: CREAM, fontFamily: "Source Serif 4", fontSize: px * 0.62, paddingBottom: px * 0.04 }}>
        F
      </div>
    ),
    { width: px, height: px, fonts: [{ name: "Source Serif 4", data: serif, weight: 600, style: "normal" }] },
  );
}
