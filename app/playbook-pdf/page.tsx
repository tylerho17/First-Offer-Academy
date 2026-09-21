import type { Metadata } from "next";
import { leadMagnet as m } from "@/content/leadMagnet";
import Ornament from "@/components/Ornament";
import PlaybookForm from "@/components/PlaybookForm";

export const metadata: Metadata = {
  title: "Free Playbook: Land Your First Internship Before Junior Year",
  description: `The First Offer Playbook: a free ${m.pages}-page PDF on landing your first internship before junior year, with every template included.`,
};

export default function PlaybookPdfPage() {
  return (
    <section className="section timeline-page">
      <div className="wrap two-col playbook-top">
        <div>
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>
            {m.eyebrow} · {m.pages} pages{!m.reviewedByTyler && <span className="draft-chip">Draft</span>}
          </span>
          <h1>{m.title}</h1>
          <p className="playbook-sub">{m.subtitle}</p>
          <p className="lede">{m.lede}</p>
        </div>
        <div className="card timeline-card">
          <div className="pdf-cover" aria-hidden="true">
            <span>Free guide</span>
            <strong>{m.title}</strong>
            <em>{m.subtitle}</em>
            <small>{m.chapters.length} chapters · {m.pages} pages</small>
          </div>
          <p className="timeline-note">{m.note}</p>
          <PlaybookForm />
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 64 }}>
        <div className="section-head">
          <Ornament />
          <h2>What&apos;s inside</h2>
        </div>
        <ol className="chapter-list">
          {m.chapters.map((c) => (
            <li className="card" key={c.n}>
              <span className="pain-n">{String(c.n).padStart(2, "0")}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
