import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="First Offer Academy home">
      <span className="logo-mark" aria-hidden="true"><span>F</span></span>
      <span className="logo-word">First Offer<br />Academy</span>
    </Link>
  );
}
