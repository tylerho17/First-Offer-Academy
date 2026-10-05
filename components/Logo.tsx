import Image from "next/image";
import Link from "next/link";
import { hasLogo, LOGO_SRC, logoSize } from "@/lib/logo";

// Logo image (public/logo.png, ~36px tall) plus the wordmark, linked home.
// If the file is missing, only the wordmark shows (never a broken image).
// tone="cream": the mark is drawn in cream through a CSS mask (for navy
// grounds), so it needs no tile behind it.
// oneLine: the wordmark on a single line (the header).
export default function Logo({ tone = "navy", oneLine = false }: { tone?: "navy" | "cream"; oneLine?: boolean }) {
  const { width, height } = logoSize();
  return (
    <Link href="/" className={`logo${tone === "cream" ? " is-cream" : ""}`} aria-label="First Offer Academy home">
      {hasLogo() &&
        (tone === "cream" ? (
          <span className="logo-mask" aria-hidden="true" style={{ width: Math.round((36 * width) / height) }} />
        ) : (
          <span className="logo-img">
            <Image src={LOGO_SRC} alt="" width={Math.round((36 * width) / height)} height={36} priority />
          </span>
        ))}
      <span className="logo-word">{oneLine ? "First Offer Academy" : <>First Offer<br />Academy</>}</span>
    </Link>
  );
}
