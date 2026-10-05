import { programOverview } from "@/content/programOverview";
import PayButton from "../../PayButton";

// /program hero: one CTA.
export default function ProgramHero() {
  const h = programOverview.hero;
  return (
    <section className="page-hero program-hero">
      <div className="wrap">
        <div>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p className="lede">{h.lede} {h.sub} {programOverview.whoFor.callout}</p>
          <div className="btn-row">
            <PayButton />
          </div>
        </div>
      </div>
    </section>
  );
}
