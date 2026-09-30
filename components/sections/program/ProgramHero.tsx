import { programOverview } from "@/content/programOverview";
import { videosFor } from "@/content/videoTestimonials";
import PayButton from "../../PayButton";
import VideoTestimonial from "../../VideoTestimonial";

// /program hero: one CTA, and the program-hero video on the right (stacked
// under the text on mobile).
export default function ProgramHero() {
  const h = programOverview.hero;
  const video = videosFor("program-hero")[0];
  return (
    <section className="page-hero program-hero">
      <div className={`wrap${video ? " hero-split" : ""}`}>
        <div>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p className="lede">{h.lede} {h.sub} {programOverview.whoFor.callout}</p>
          <div className="btn-row">
            <PayButton />
          </div>
        </div>
        {video && <VideoTestimonial video={video} />}
      </div>
    </section>
  );
}
