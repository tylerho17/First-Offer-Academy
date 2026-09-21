import Link from "next/link";
import { hasLogo, LOGO_SRC, logoSize } from "@/lib/logo";

// Logo image (public/logo.png, ~36px tall) plus the wordmark, linked home.
// If the file is missing, only the wordmark shows (never a broken image).
export default function Logo() {
  const { width, height } = logoSize();
  return (
    <Link href="/" className="logo" aria-label="First Offer Academy home">
      {hasLogo() && (
        <span className="logo-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt="" width={Math.round((36 * width) / height)} height={36} />
        </span>
      )}
      <span className="logo-word">First Offer<br />Academy</span>
    </Link>
  );
}
