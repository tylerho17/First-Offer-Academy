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
      { label: "How it works", href: "/program", note: "The 8-week plan" },
      { label: "Curriculum", href: "/curriculum", note: "Week 0 plus four phases" },
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
      { label: "For parents", href: "/parents", note: "Reports, payment, what we promise" },
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
      { label: "Free resources", href: "/free-resources", note: "Templates, trackers, and the Playbook PDF" },
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
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
