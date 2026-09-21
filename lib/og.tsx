import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

// Brand share images: navy ground, cream Young Serif headline, sage label.
// Fonts are bundled in assets/fonts (next/og can't read woff2).

export const ogSize = { width: 1200, height: 630 };

const NAVY = "#1A2B48";
const CREAM = "#F7F4EE";
const SAGE = "#A8C4A4";

async function fonts() {
  const dir = path.join(process.cwd(), "assets/fonts");
  const [serif, sans] = await Promise.all([
    readFile(path.join(dir, "young-serif-400.woff")),
    readFile(path.join(dir, "hanken-grotesk-700.woff")),
  ]);
  return [
    { name: "Young Serif", data: serif, weight: 400 as const, style: "normal" as const },
    { name: "Hanken Grotesk", data: sans, weight: 700 as const, style: "normal" as const },
  ];
}

export async function brandImage({ label, headline, footer = "firstofferacademy.com" }: { label: string; headline: string; footer?: string }) {
  const size = headline.length > 70 ? 60 : 68;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: NAVY, padding: "72px 80px", fontFamily: "Hanken Grotesk" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", background: SAGE, color: NAVY, fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "10px 22px", borderRadius: 999 }}>
            {label}
          </div>
        </div>
        <div style={{ display: "flex", fontFamily: "Young Serif", color: CREAM, fontSize: size, lineHeight: 1.15, maxWidth: 1000 }}>{headline}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: CREAM, fontSize: 26 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 14, background: CREAM, color: NAVY, fontFamily: "Young Serif", fontSize: 30 }}>F</div>
          <div style={{ display: "flex" }}>First Offer Academy · {footer}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

export async function iconImage(px: number) {
  const serif = await readFile(path.join(process.cwd(), "assets/fonts/young-serif-400.woff"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: NAVY, borderRadius: px * 0.22, color: CREAM, fontFamily: "Young Serif", fontSize: px * 0.62, paddingBottom: px * 0.04 }}>
        F
      </div>
    ),
    { width: px, height: px, fonts: [{ name: "Young Serif", data: serif, weight: 400, style: "normal" }] },
  );
}
