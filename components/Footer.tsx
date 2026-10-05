import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { site } from "@/content/site";
import { tracks } from "@/content/tracks";

const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Program",
    links: [
      { label: "How it works", href: "/program" },
      ...tracks.map((t) => ({ label: t.name, href: `/tracks/${t.slug}` })),
      { label: "Pricing", href: "/pricing" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    title: "Free resources",
    links: [
      { label: "Playbook guides", href: "/blog" },
      { label: "Playbook PDF", href: "/playbook-pdf" },
      { label: "Templates", href: "/free-resources" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Results", href: "/results" },
      { label: "For parents", href: "/parents" },
      { label: site.email, href: `mailto:${site.email}`, external: true },
      { label: "Book a parent call", href: site.calendlyUrl, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-brand">
            <Logo tone="cream" />
            <p className="tagline">{site.tagline}</p>
            <Social />
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        {...(l.href === site.calendlyUrl ? { "data-event": "cta_click", "data-event-location": "footer" } : {})}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
                {col.title === "Company" && site.zhReviewed && <li><Link href="/zh" lang="zh-Hans">中文（家长）</Link></li>}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <nav aria-label="Legal" className="footer-legal">
            <span>© 2026 {site.name}</span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refunds">Refunds</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/code-of-conduct">Code of Conduct</Link>
          </nav>
          <p className="footer-disclaimer">First Offer Academy is not affiliated with any employer, university, or student organization mentioned by students.</p>
        </div>
      </div>
    </footer>
  );
}
