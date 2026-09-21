import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";
import { tracks } from "@/content/tracks";
import { site } from "@/content/site";

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
    label: "Testimonials",
    href: "/results",
    children: [
      { label: "Student testimonials", href: "/results" },
      { label: "Parent testimonials", href: "/results/parents" },
      { label: "Case studies by student type", href: "/results/by-type", note: "Community college, no club, and more" },
      { label: "Share your story", href: "/share-your-story", note: "For current students and alumni" },
      // A review-platform link appears only once real reviews exist.
      ...(site.reviewsUrl ? [{ label: "Reviews", href: site.reviewsUrl }] : []),
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

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo"><Logo /></div>
        <nav className="nav" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} href={item.href} items={item.children} />
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
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
