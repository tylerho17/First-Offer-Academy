import { programOverview } from "@/content/programOverview";
import { videoAt } from "@/content/videoTestimonials";
import PayButton from "../../PayButton";
import PrimaryCTA from "../../PrimaryCTA";
import VideoCard from "../../VideoCard";

// /program hero: one CTA, and the program-hero clip on the right (stacked
// under the text on mobile).
export default function ProgramHero() {
  const h = programOverview.hero;
  const clip = videoAt("program-hero");
  return (
    <section className="page-hero program-hero">
      <div className={`wrap${clip ? " hero-split" : ""}`}>
        <div>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p className="lede">{h.lede} {h.sub} {programOverview.whoFor.callout}</p>
          <div className="cta-block">
            <PrimaryCTA location="program" />
          </div>
          <p className="hero-secondary"><PayButton className="link-arrow">Reserve a seat →</PayButton></p>
        </div>
        {clip && <VideoCard video={clip} size="hero" />}
      </div>
    </section>
  );
}
