import Link from "next/link";
import { phaseInfo, preWork, runningThroughout, weekHref, weeks } from "@/content/curriculum";
import LevelBadge from "./LevelBadge";

// /curriculum: Week 0 pre-work, then the four phases. The phases overlap by
// design (Outreach starts in Phase 1 and never stops; Track Technicals and
// Interview Reps share Weeks 5 and 6), so the rail spans real week ranges
// instead of tidy blocks. Accountability & Pods runs underneath all of it.
export default function PhaseMap() {
  return (
    <div className="phase-map">
      <section className="card prework-card" aria-labelledby="week-0">
        <span className="tag">{preWork.label}</span>
        <h2 id="week-0">{preWork.name}</h2>
        <p>{preWork.summary}</p>
      </section>

      <div className="phase-rail" aria-hidden="true">
        <div className="rail-weeks">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <span key={n}>{n}</span>)}
        </div>
        {phaseInfo.map((p) => (
          <div className="rail-row" key={p.name}>
            <span className="rail-bar" style={{ gridColumn: `${p.from} / ${p.to + 1}` }}>{p.name}</span>
          </div>
        ))}
        <div className="rail-row">
          <span className="rail-bar is-through" style={{ gridColumn: "1 / 9" }}>{runningThroughout.name}</span>
        </div>
      </div>

      <ol className="phase-cards">
        {phaseInfo.map((p, i) => (
          <li className="card phase-card" key={p.name}>
            <span className="tag">Phase {i + 1} · {p.weeks}</span>
            <h2>{p.name}</h2>
            <p className="phase-card-sub">{p.summary}</p>
            <ul className="phase-points">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="phase-weeks">
              {weeks.filter((w) => w.n >= p.from && w.n <= p.to).map((w) => (
                <li key={w.n}>
                  <Link href={weekHref(w.n)}>
                    <span className="week-num">Week {w.n}</span>
                    <span>{w.title}</span>
                    <LevelBadge n={w.level} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section className="band through-band" aria-labelledby="throughout">
        <span className="tag">{runningThroughout.label}</span>
        <h2 id="throughout">{runningThroughout.name}</h2>
        <p>{runningThroughout.summary}</p>
      </section>
    </div>
  );
}
