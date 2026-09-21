"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu } from "./Icons";

type Item = { label: string; href: string; children?: { label: string; href: string }[] };

// Mobile menu. Closes when a link is tapped, on route change, and on Escape.
export default function MobileNav({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => ref.current?.removeAttribute("open");

  useEffect(close, [pathname]);

  return (
    <details
      ref={ref}
      className="mobile-nav"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          ref.current?.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Menu"><Menu /></summary>
      <div className="mobile-panel">
        {items.map((item) => (
          <div key={item.label} className="mobile-group">
            <Link href={item.href} className="mobile-top" onClick={close}>{item.label}</Link>
            {item.children?.filter((c) => c.href !== item.href).map((c) => (
              <Link key={c.href + c.label} href={c.href} className="mobile-sub" onClick={close}>{c.label}</Link>
            ))}
          </div>
        ))}
        <Link href="/apply" className="btn btn-primary" style={{ marginTop: 8 }} onClick={close}>Apply</Link>
      </div>
    </details>
  );
}
