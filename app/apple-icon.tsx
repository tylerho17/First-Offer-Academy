import { iconImage } from "@/lib/og";

// 180px apple-touch-icon generated from public/logo.png, on cream.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return iconImage(180, { background: "#F7F4EE" });
}
