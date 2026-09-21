import Link from "next/link";
import { phaseInfo, weekHref, weeks } from "@/content/curriculum";
import Ornament from "../../Ornament";
import LevelBadge from "../../curriculum/LevelBadge";
import { Check } from "../../Icons";

// Week-by-week panels built from content/curriculum.ts. Each links to its week page.
export default function Syllabus() {
  return (
    <section className="section" id="syllabus" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Syllabus</span>
          <h2>Week by week</h2>
          <p className="lede">
            The twelve weeks, phase by phase. Open any week for the full plan: what we teach, the live reps, the 1:1 focus,
            and what parents see. <Link href="/curriculum">See the full curriculum</Link>.
          </p>
        </div>
        <div className="syllabus">
          {phaseInfo.map((p) => (
            <div className="syllabus-phase" key={p.name}>
              <div className="syllabus-phase-head">
                <span className="tag">{p.weeks}</span>
                <h3>{p.name}</h3>
                <p className="syllabus-levels">{p.summary}</p>
              </div>
              <ol className="syllabus-panels" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {weeks.filter((w) => w.phase === p.name).map((w) => (
                  <li className="card syllabus-panel" key={w.n}>
                    <div className="syllabus-panel-meta">
                      <span className="week-num">Week {w.n}{w.split ? " · track split" : ""}</span>
                      <LevelBadge n={w.level} />
                    </div>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.objective}</p>
                      <ul className="week-list">
                        {w.deliverables.map((d) => <li key={d}><Check />{d}</li>)}
                      </ul>
                    </div>
                    <Link href={weekHref(w.n)} className="link-arrow" aria-label={`Open Week ${w.n}: ${w.title}`}>Open week →</Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
