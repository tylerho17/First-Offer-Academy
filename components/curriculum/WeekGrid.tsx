import Link from "next/link";
import { phaseInfo, weekHref, weeks } from "@/content/curriculum";
import LevelBadge from "./LevelBadge";

// Overview of all 12 weeks, grouped into phase bands.
export default function WeekGrid() {
  return (
    <div className="phase-bands">
      {phaseInfo.map((p) => (
        <section className="phase-band" key={p.name} aria-labelledby={`phase-${p.weeks}`}>
          <div className="phase-band-head">
            <span className="tag">{p.weeks}</span>
            <h2 id={`phase-${p.weeks}`}>{p.name}</h2>
            <p>{p.summary}</p>
          </div>
          <ul className="week-grid">
            {weeks.filter((w) => w.phase === p.name).map((w) => (
              <li key={w.n}>
                <Link href={weekHref(w.n)} className="card week-card">
                  <span className="week-num">Week {w.n}{w.split ? " · track split" : ""}</span>
                  <h3>{w.title}</h3>
                  <p>{w.objective}</p>
                  <span className="week-card-foot">
                    <LevelBadge n={w.level} />
                    <span className="link-arrow">Open week →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
