import { leavesWith } from "@/content/program";
import { modules } from "@/content/programOverview";
import ModuleIcon from "../../ModuleIcon";
import { Check } from "../../Icons";
import { videosFor, type VideoPlacement } from "@/content/videoTestimonials";
import VideoGroup from "../../VideoGroup";

// Each part's video placement.
const PART_VIDEOS: Record<string, VideoPlacement> = {
  "candidate-brand": "program-candidate-brand",
  "outreach-system": "program-outreach",
  "story-bank": "program-story-bank",
  "interview-reps": "program-interview-reps",
  "accountability-pods": "program-pods",
};

// The six parts as a compact grid. Each card's video sits in the always-visible
// area; the full write-up is in a collapsed <details>. Card ids are the
// /program#<slug> anchors.
export default function SixParts() {
  return (
    <section className="section" id="modules" style={{ paddingTop: 16 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>{leavesWith.title}</h2>
          <p className="lede">{leavesWith.note}</p>
        </div>
        <ul className="part-grid-compact">
          {modules.map((m) => (
            <li className="card part-compact" id={m.slug} key={m.slug}>
              <div className="part-compact-head">
                <span className="icon-dot" aria-hidden="true"><ModuleIcon name={m.icon} /></span>
                <h3>{m.title}</h3>
              </div>
              <p>{m.detail}</p>
              {PART_VIDEOS[m.slug] && (
                <div className="part-videos">
                  <VideoGroup videos={videosFor(PART_VIDEOS[m.slug])} columns={2} />
                </div>
              )}
              <details className="more">
                <summary>How it works</summary>
                <div className="more-body">
                  {m.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                  <ul className="more-checks">
                    {m.components.map((c) => <li key={c}><Check />{c}</li>)}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
