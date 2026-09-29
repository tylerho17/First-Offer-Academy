import { site } from "@/content/site";
import CallLink from "../CallLink";
import PayButton from "@/components/PayButton";

export default function FinalCta() {
  return (
    <section className="section final" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <span className="eyebrow">{site.cohort.name}</span>
        <h2>{site.cohort.seats} seats. January starts sooner than it sounds.</h2>
        <p className="lede center">Reserve a seat now, or talk it through with Tyler first.</p>
        <div className="btn-row">
          <PayButton />
          <CallLink />
        </div>
      </div>
    </section>
  );
}
