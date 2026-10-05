import { site } from "@/content/site";
import PrimaryCTA, { type CtaLocation } from "../PrimaryCTA";
import PayButton from "@/components/PayButton";

export default function FinalCta({ location = "final" }: { location?: CtaLocation }) {
  return (
    <section className="section final" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <span className="eyebrow">{site.cohort.name}</span>
        <h2>{site.cohort.seats} seats. January starts sooner than it sounds.</h2>
        <p className="lede center">Reserve a seat now, or talk it through with Tyler first.</p>
        <div className="btn-row">
          <PrimaryCTA location={location} />
        </div>
        <p className="final-secondary"><PayButton className="link-arrow">Reserve a seat · {site.cohort.deposit} →</PayButton></p>
      </div>
    </section>
  );
}
