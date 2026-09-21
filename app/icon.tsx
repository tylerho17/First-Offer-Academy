import { iconImage } from "@/lib/og";

// 32px favicon generated from public/logo.png.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return iconImage(32);
}
