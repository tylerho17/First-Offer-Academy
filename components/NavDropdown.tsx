"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type Child = { label: string; href: string; note?: string };

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
);

// Desktop header dropdown. Opens on hover or keyboard focus, closes on
// Escape (focus returns to the trigger), on blur out, and after a click.
export default function NavDropdown({ label, href, items }: { label: string; href: string; items: Child[] }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const suppressFocus = useRef(false);

  return (
    <div
      ref={root}
      className={`dd${open ? " is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => {
        if (suppressFocus.current) {
          suppressFocus.current = false;
          return;
        }
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          // Returning focus to the trigger fires onFocus; keep the menu closed.
          if (document.activeElement !== trigger.current) {
            suppressFocus.current = true;
            trigger.current?.focus();
          }
        }
      }}
    >
      <Link ref={trigger} href={href} className="nav-link" aria-expanded={open} onClick={() => setOpen(false)}>
        {label}<Chevron />
      </Link>
      <div className="dd-menu">
        {items.map((c) => (
          <Link key={c.href + c.label} href={c.href} onClick={() => setOpen(false)}>
            <span>{c.label}</span>
            {c.note && <small>{c.note}</small>}
          </Link>
        ))}
      </div>
    </div>
  );
}
