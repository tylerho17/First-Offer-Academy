import { leavesWith } from "@/content/program";
import { modules } from "@/content/programOverview";
import ModuleIcon from "../../ModuleIcon";
import { Check } from "../../Icons";
import { videoAt, type VideoSpot } from "@/content/videoTestimonials";
import VideoCard from "../../VideoCard";

// Every part card has a clip between its one-line description and "How it
// works". Cards in a row share a height: the description grows to fill, so
// the clips line up. Card ids are the /program#<slug> anchors.
export default function SixParts() {
  return (
    <section className="section" id="modules" style={{ paddingTop: 16 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>{leavesWith.title}</h2>
          <p className="lede">{leavesWith.note}</p>
        </div>
        <ul className="part-grid-compact">
          {modules.map((m) => {
            const clip = videoAt(`program-${m.slug}` as VideoSpot);
            return (
              <li className="card part-compact" id={m.slug} key={m.slug}>
                <div className="part-compact-head">
                  <span className="icon-dot" aria-hidden="true"><ModuleIcon name={m.icon} /></span>
                  <h3>{m.title}</h3>
                </div>
                <p className="part-detail">{m.detail}</p>
                {clip && <div className="part-videos"><VideoCard video={clip} /></div>}
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
