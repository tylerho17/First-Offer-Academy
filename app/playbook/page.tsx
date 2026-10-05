import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { leadMagnet as m } from "@/content/leadMagnet";
import Image from "next/image";
import PlaybookForm from "@/components/PlaybookForm";
import { captureConfigured } from "@/lib/capture";

export const metadata: Metadata = pageMeta({
  title: "Free Playbook: Land Your First Internship Before Junior Year",
  description: `The First Offer Playbook: a free ${m.pages}-page PDF on landing your first internship before junior year, with every template included.`,
});

export default function PlaybookPage() {
  // No Supabase keys: plain download, no email field.
  const capture = captureConfigured();
  return (
    <section className="section timeline-page">
      <div className="wrap two-col playbook-top">
        <div>
          <span className="eyebrow" style={{ display: "block" }}>
            {m.eyebrow} · {m.pages} pages{!m.reviewedByTyler && <span className="draft-chip">Draft</span>}
          </span>
          <h1>{m.title}</h1>
          <p className="playbook-sub">{m.subtitle}</p>
          <p className="lede">{m.lede}</p>
        </div>
        <div className="card timeline-card">
          {/* The real first page of the PDF (rendered from private/first-offer-playbook.pdf). */}
          <div className="pdf-cover-img">
            <Image src="/images/playbook-cover.webp" alt={`Cover of ${m.title}: ${m.subtitle}`} width={900} height={1165} sizes="(min-width: 900px) 320px, 70vw" priority />
          </div>
          <p className="pdf-cover-meta">{m.chapters.length} chapters · {m.pages} pages</p>
          {capture && <p className="timeline-note">{m.note}</p>}
          <PlaybookForm capture={capture} />
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 64 }}>
        <div className="section-head">
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
