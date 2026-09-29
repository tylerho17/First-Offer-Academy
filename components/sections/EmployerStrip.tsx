import { existsSync } from "node:fs";
import path from "node:path";
import { employers, MAX_LOGOS } from "@/content/employers";

// "Where pilot students interned": one row of navy monotone logos. Only
// permitted entries whose logo file exists; nothing renders when none qualify.
export default function EmployerStrip() {
  const shown = employers
    .filter((e) => e.permissionConfirmed && existsSync(path.join(process.cwd(), "public", e.logoPath)))
    .slice(0, MAX_LOGOS);
  if (shown.length === 0) return null;

  return (
    <section className="section-tight" aria-labelledby="employers-title">
      <div className="wrap">
        <h2 id="employers-title" className="employer-title">Where pilot students interned</h2>
        <ul className="employer-strip">
          {shown.map((e) => (
            <li key={e.name}>
              <span
                className="employer-logo"
                role="img"
                aria-label={e.name}
                style={{ WebkitMaskImage: `url(${e.logoPath})`, maskImage: `url(${e.logoPath})` }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
