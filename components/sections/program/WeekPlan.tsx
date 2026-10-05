import Link from "next/link";
import { preWork, weekHref, weeks } from "@/content/curriculum";
import { runningThroughout } from "@/content/curriculum";
import { afterProgram, offerSprint } from "@/content/program";

// The plan: Week 0, one row per core-teaching week (1–8) with full detail in a
// native, server-rendered <details>, then the Offer Sprint and check-ins.
export default function WeekPlan() {
  return (
    <section className="section" id="curriculum" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>The plan, week by week</h2>
          <p className="lede">
            Winter break pre-work, then a 12-week program: core teaching in Weeks 1–8 in four two-week phases, then the
            Offer Sprint in Weeks 9–12, and weekly check-ins until an offer. {runningThroughout.name} runs through training: {runningThroughout.summary[0].toLowerCase() + runningThroughout.summary.slice(1)}
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
          <li>
            <details className="week-row">
              <summary>
                <span className="week-row-n">{offerSprint.weeks}</span>
                <span className="week-row-title">{offerSprint.name}</span>
                <span className="week-row-sum">{offerSprint.summary}</span>
              </summary>
              <div className="week-row-body">
                <p>Four weeks of technical mocks and behavioral mocks, plus prep before and a debrief after every networking call your student lands.</p>
              </div>
            </details>
          </li>
          <li>
            <details className="week-row">
              <summary>
                <span className="week-row-n">After Week 12</span>
                <span className="week-row-title">Until your offer</span>
                <span className="week-row-sum">A 20-minute weekly check-in and a mock interview every other week.</span>
              </summary>
              <div className="week-row-body">
                <p>{afterProgram.full}</p>
                <p><a href="/faq#offer-or-refund" className="link-arrow">Offer-or-refund terms →</a></p>
              </div>
            </details>
          </li>
        </ol>
      </div>
    </section>
  );
}
