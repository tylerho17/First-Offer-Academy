import { employers, MIN_EMPLOYERS_FOR_GRID } from "@/content/employers";
import { site } from "@/content/site";
import Ornament from "../Ornament";

// "Where our students work": a 4-column logo grid (WSM style). Only
// employers with employerPermission: true. Hidden until 8 are permitted;
// a labeled placeholder grid shows pre-launch.
export default function EmployerGrid() {
  const shown = employers.filter((e) => e.employerPermission);
  const ready = shown.length >= MIN_EMPLOYERS_FOR_GRID;
  if (!ready && !site.showPlaceholders) return null;

  return (
    <section className="section" aria-labelledby="employers-title">
      <div className="wrap">
        <div className="section-head center">
          <Ornament />
          <h2 id="employers-title">Where our students work</h2>
          {!ready && <p className="lede">Placeholder: needs {MIN_EMPLOYERS_FOR_GRID}+ employers with written permission in <code>content/employers.ts</code>.</p>}
        </div>
        <div className="logo-grid">
          <span className="logo-grid-accent" aria-hidden="true" />
          {ready
            ? shown.map((e) => (
                <div className="logo-cell" key={e.name}>
                  {e.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={e.logo} alt={e.name} width={160} height={56} loading="lazy" />
                  ) : (
                    <span>{e.name}</span>
                  )}
                </div>
              ))
            : Array.from({ length: 8 }, (_, i) => (
                <div className="logo-cell is-placeholder" key={i}><span>Employer {i + 1}</span></div>
              ))}
        </div>
      </div>
    </section>
  );
}
