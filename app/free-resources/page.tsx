import type { Metadata } from "next";
import Link from "next/link";
import { downloadFile, downloads, downloadsReviewedByTyler, stages } from "@/content/downloads";
import { leadMagnet as m } from "@/content/leadMagnet";
import Ornament from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Free Recruiting Templates",
  description: `Free internship recruiting templates: resume rubric, outreach tracker, target list, cold email pack, AI prompt pack, call framework, question banks, interview scorecard, and a ${m.pages}-page Playbook.`,
};

export default function FreeResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>
            Free resources{!downloadsReviewedByTyler && <span className="draft-chip">Draft</span>}
          </span>
          <h1>Every template we use. Free.</h1>
          <p className="lede">
            The tactics are free. These are the same templates students use in the program, week by week. No email
            needed; only the Playbook PDF asks for one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <Link href="/playbook-pdf" className="card featured-download">
            <div className="pdf-cover is-small" aria-hidden="true">
              <span>Free guide</span>
              <strong>{m.title}</strong>
            </div>
            <div>
              <span className="eyebrow">Featured · PDF · {m.pages} pages</span>
              <h2>{m.title}</h2>
              <p className="playbook-sub">{m.subtitle}</p>
              <p style={{ marginTop: 12 }}>{m.chapters.length} chapters with every template included. Free with your email.</p>
              <span className="btn btn-primary" style={{ marginTop: 20 }}>Get the Playbook</span>
            </div>
          </Link>

          {stages.map((stage) => {
            const items = downloads.filter((d) => d.stage === stage);
            if (!items.length) return null;
            return (
              <section className="download-stage" key={stage} aria-labelledby={`stage-${stage}`}>
                <h2 id={`stage-${stage}`}>{stage}</h2>
                <ul className="download-grid">
                  {items.map((d) => (
                    <li className="card download-card" key={d.slug}>
                      <span className="download-format">{d.format}{d.format === "CSV" ? " · opens in Sheets or Excel" : " · 1 page"}</span>
                      <h3>{d.title}</h3>
                      <p>{d.what}</p>
                      <p className="download-week">Used in <Link href={`/curriculum/week-${d.week}`}>Week {d.week}</Link></p>
                      <a href={downloadFile(d)} className="btn btn-secondary" download data-event="template_download">
                        Download <span className="sr-only">{d.title} ({d.format})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
