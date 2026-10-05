import { leavesWith } from "@/content/program";
import { modules } from "@/content/programOverview";
import ModuleIcon from "../../ModuleIcon";
import { Check } from "../../Icons";
import { videoAt, type VideoSpot } from "@/content/videoTestimonials";
import VideoCard from "../../VideoCard";

// The two parts with a clip. Candidate Brand is featured full width: its copy
// explains the 60-second pitch and the clip shows a finished one.
const PART_VIDEOS: Record<string, { spot: VideoSpot; featured?: boolean }> = {
  "candidate-brand": { spot: "program-pitch", featured: true },
  "outreach-system": { spot: "program-outreach" },
};

// The six parts as a compact grid. The full write-up is in a collapsed
// <details>. Card ids are the /program#<slug> anchors.
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
            const spot = PART_VIDEOS[m.slug];
            const clip = spot ? videoAt(spot.spot) : undefined;
            const featured = !!(clip && spot?.featured);
            // Featured: the paragraph the clip illustrates stays visible.
            const shown = featured ? m.body.find((p) => p.includes("60-second")) : undefined;
            const copy = (
              <div>
                <div className="part-compact-head">
                  <span className="icon-dot" aria-hidden="true"><ModuleIcon name={m.icon} /></span>
                  <h3>{m.title}</h3>
                </div>
                <p>{m.detail}</p>
                {shown && <p>{shown}</p>}
                {clip && !featured && <div className="part-videos"><VideoCard video={clip} /></div>}
                <details className="more">
                  <summary>How it works</summary>
                  <div className="more-body">
                    {m.body.filter((p) => p !== shown).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                    <ul className="more-checks">
                      {m.components.map((c) => <li key={c}><Check />{c}</li>)}
                    </ul>
                  </div>
                </details>
              </div>
            );
            return (
              <li className={`card part-compact${featured ? " is-featured" : ""}`} id={m.slug} key={m.slug}>
                {featured && clip ? (
                  <div className="copy-video">
                    {copy}
                    <VideoCard video={clip} size="hero" />
                  </div>
                ) : (
                  copy
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
