"use client";

import { useId, useState } from "react";
import { ArrowDown, Check } from "./Icons";

// WSM-style module tile. Hover (desktop) or tap (mobile) reveals a one-line
// detail and a "Read more" anchor to the module section.
export default function IconTile({
  icon,
  title,
  bullets,
  detail,
  href,
}: { icon: React.ReactNode; title: string; bullets: string[]; detail: string; href: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`icon-tile${open ? " is-open" : ""}`}>
      <span className="icon-tile-badge" aria-hidden="true">{icon}</span>
      <h3>
        <button type="button" className="icon-tile-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          {title}
        </button>
      </h3>
      <ul className="icon-tile-list">
        {bullets.map((b) => <li key={b}><Check />{b}</li>)}
      </ul>
      <div className="icon-tile-detail" id={id}>
        <div>
          <p>{detail}</p>
          <a href={href} className="link-arrow">Read more <ArrowDown className="inline-icon" /></a>
        </div>
      </div>
    </div>
  );
}
