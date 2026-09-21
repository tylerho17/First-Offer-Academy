import { levelName, syllabus } from "@/content/syllabus";
import Ornament from "../../Ornament";
import { Plus } from "../../Icons";

export default function Syllabus() {
  return (
    <section className="section" id="syllabus" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Syllabus</span>
          <h2>Week by week</h2>
          <p className="lede">The twelve weeks, phase by phase. Exact session topics are shared with the cohort before it starts.</p>
        </div>
        <div className="syllabus">
          {syllabus.map((p) => (
            <div className="syllabus-phase" key={p.name}>
              <div className="syllabus-phase-head">
                <span className="tag">{p.weeks}</span>
                <h3>{p.name}</h3>
                {p.levels.length > 0 && (
                  <p className="syllabus-levels">Works toward: {p.levels.map((n) => `Level ${n}, ${levelName(n)}`).join(" · ")}</p>
                )}
              </div>
              <div className="faq-list" style={{ maxWidth: "none" }}>
                {p.items.map((w) => (
                  <details className="faq-item" key={w.week}>
                    <summary>
                      <span>Week {w.week}<span className="syllabus-sub"> · {p.name}</span></span>
                      <span className="plus" aria-hidden="true"><Plus /></span>
                    </summary>
                    <p className="answer">{w.detail || p.summary}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
