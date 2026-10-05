import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import PayButton from "./PayButton";

type Item = { label: string; href: string };

// Six items. Events lives inside /resources (and the footer and homepage).
export const nav: Item[] = [
  { label: "Program", href: "/program" },
  { label: "Results", href: "/results" },
  { label: "Parents", href: "/parents" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo"><Logo oneLine /></div>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        <div className="header-cta">
          <PayButton className="btn btn-primary header-reserve">Reserve a seat</PayButton>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
