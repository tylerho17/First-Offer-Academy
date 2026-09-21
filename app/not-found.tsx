import type { Metadata } from "next";
import Link from "next/link";
import Ornament from "@/components/Ornament";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const links = [
  { href: "/program", label: "How the program works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Free recruiting guides" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="wrap">
        <div className="card not-found-card">
          <Ornament className="is-center" />
          <p className="not-found-code">404</p>
          <h1>This page isn&apos;t here.</h1>
          <p className="lede center">The link may be old, or the address may have a typo. Here are a few places to pick up from.</p>
          <ul className="not-found-links">
            {links.map((l) => <li key={l.href}><Link href={l.href} className="topic-pill">{l.label}</Link></li>)}
          </ul>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn btn-primary">Back to home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
