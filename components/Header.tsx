import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";
import PayButton from "./PayButton";
import { tracks } from "@/content/tracks";

type Item = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: Item[] = [
  {
    label: "Program",
    href: "/program",
    children: [
      { label: "How it works", href: "/program", note: "The 8-week plan" },
      ...tracks.map((t) => ({ label: t.name, href: `/tracks/${t.slug}` })),
    ],
  },
  { label: "Results", href: "/results" },
  { label: "For parents", href: "/parents" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Free resources",
    href: "/free-resources",
    children: [
      { label: "Playbook guides", href: "/blog", note: "Free recruiting guides" },
      { label: "Templates", href: "/free-resources", note: "Trackers, email packs, and the Playbook PDF" },
      { label: "Events", href: "/events", note: "Free sessions for parents and students" },
    ],
  },
  { label: "About", href: "/about" },
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
          <PayButton className="btn btn-primary header-reserve">Reserve a seat</PayButton>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
