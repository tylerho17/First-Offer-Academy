import type { Metadata } from "next";
import { leadMagnet as m } from "@/content/leadMagnet";
import Ornament from "@/components/Ornament";
import TimelineForm from "@/components/TimelineForm";
import { Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Free Freshman Recruiting Timeline",
  description: "A free one-page PDF: what a first-year college student should do each quarter to get ready for internship recruiting.",
};

export default function TimelinePage() {
  return (
    <section className="section timeline-page">
      <div className="wrap two-col" style={{ alignItems: "center" }}>
        <div>
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{m.eyebrow}</span>
          <h1>{m.title}</h1>
          <p className="lede">{m.lede}</p>
          <ul className="plan-list">
            {m.bullets.map((b) => <li key={b}><Check />{b}</li>)}
          </ul>
        </div>
        <div className="card timeline-card">
          <div className="pdf-preview" aria-hidden="true">
            <span>Free guide</span>
            <strong>The Freshman Recruiting Timeline</strong>
            <i /><i /><i />
          </div>
          <p className="timeline-note">{m.note}</p>
          <TimelineForm />
        </div>
      </div>
    </section>
  );
}
