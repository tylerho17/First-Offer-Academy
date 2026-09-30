import Link from "next/link";
import { preWork, weekHref, weeks } from "@/content/curriculum";
import { runningThroughout } from "@/content/curriculum";

// The 8-week plan: one row per week (Week 0 first), full detail in a native,
// server-rendered <details>.
export default function WeekPlan() {
  return (
    <section className="section" id="curriculum" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>The 8-week plan</h2>
          <p className="lede">
            Four two-week phases after winter break pre-work. {runningThroughout.name} runs the whole way: {runningThroughout.summary[0].toLowerCase() + runningThroughout.summary.slice(1)}
          </p>
        </div>
        <ol className="week-rows">
          <li>
            <details className="week-row">
              <summary>
                <span className="week-row-n">{preWork.label}</span>
                <span className="week-row-title">{preWork.name}</span>
                <span className="week-row-sum">Starts the day you enroll, not in January.</span>
              </summary>
              <div className="week-row-body"><p>{preWork.summary}</p></div>
            </details>
          </li>
          {weeks.map((w) => (
            <li key={w.n}>
              <details className="week-row">
                <summary>
                  <span className="week-row-n">Week {w.n}</span>
                  <span className="week-row-title">{w.title}</span>
                  <span className="week-row-sum">{w.objective}</span>
                </summary>
                <div className="week-row-body">
                  <p className="week-row-phase">{w.phase}{w.split ? " · track split" : ""}</p>
                  <h4>What we teach</h4>
                  <ul>{w.teach.map((t) => <li key={t}>{t}</li>)}</ul>
                  {w.trackTeach && (
                    <>
                      <h4>By track</h4>
                      <ul>
                        {Object.entries(w.trackTeach).map(([track, items]) => (
                          <li key={track}><strong>{track}:</strong> {items.join(" ")}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <h4>Live reps</h4>
                  <p>{w.liveReps}</p>
                  <h4>The 1:1</h4>
                  <p>{w.oneOnOne}</p>
                  <h4>By the end of the week</h4>
                  <ul>{w.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
                  <h4>What parents see</h4>
                  <p>{w.parents}</p>
                  <p><Link href={weekHref(w.n)} className="link-arrow">Full Week {w.n} page →</Link></p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
