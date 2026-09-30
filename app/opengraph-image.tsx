import { brandImage, ogSize } from "@/lib/og";

export const alt = "First Offer Academy: Your first internship shouldn't depend on which club lets you in.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return brandImage({
    label: "Internship coaching for freshmen and sophomores",
    headline: "Coached until your first offer.",
  });
}
