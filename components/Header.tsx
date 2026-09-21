import Link from "next/link";
import Logo from "./Logo";
import { Menu } from "./Icons";
import { tracks } from "@/content/tracks";

type Item = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: Item[] = [
  {
    label: "Program",
    href: "/program",
    children: [
      { label: "How it works", href: "/program", note: "The 12-week plan" },
      ...tracks.map((t) => ({ label: `${t.name} track`, href: `/tracks/${t.slug}` })),
      { label: "Pricing", href: "/pricing", note: "Tuition and payment plans" },
    ],
  },
  {
    label: "Results",
    href: "/results",
    children: [
      { label: "Student results", href: "/results" },
      { label: "Parent stories", href: "/results#parents" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "The Playbook", href: "/blog", note: "Free recruiting guides" },
      { label: "Free events", href: "/events", note: "Info sessions and workshops" },
      { label: "School workshops", href: "/workshops", note: "For clubs, schools, PTSAs" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
);

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo"><Logo /></div>
        <nav className="nav" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div className="dd" key={item.label}>
                <Link href={item.href} className="nav-link">
                  {item.label}<Chevron />
                </Link>
                <div className="dd-menu">
                  {item.children.map((c) => (
                    <Link key={c.href + c.label} href={c.href}>
                      <span>{c.label}</span>
                      {c.note && <small>{c.note}</small>}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>
            )
          )}
        </nav>
        <div className="header-cta">
          <Link href="/apply" className="get-started">
            Get Started
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <details className="mobile-nav">
            <summary aria-label="Open menu"><Menu /></summary>
            <div className="mobile-panel">
              {nav.map((item) => (
                <div key={item.label} className="mobile-group">
                  <Link href={item.href} className="mobile-top">{item.label}</Link>
                  {item.children?.filter((c) => c.href !== item.href).map((c) => (
                    <Link key={c.href + c.label} href={c.href} className="mobile-sub">{c.label}</Link>
                  ))}
                </div>
              ))}
              <Link href="/apply" className="btn btn-primary" style={{ marginTop: 8 }}>Apply</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
