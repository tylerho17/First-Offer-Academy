import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";
import { downloadFile, downloads, stages } from "@/content/downloads";
import { leadMagnet as m } from "@/content/leadMagnet";
import GatedDownload from "@/components/GatedDownload";
import Ornament from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Free Recruiting Templates and Guides",
  description: `Free internship recruiting templates (outreach tracker, target list, cold email pack, AI prompt pack, call framework, question banks, interview scorecard), a ${m.pages}-page Playbook, and ${articles.length} in-depth guides.`,
};

export default function FreeResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Free resources</span>
          <h1>Every template we use. Free.</h1>
          <p className="lede">
            The tactics are free. These are the same templates students use in the program, week by week. Enter your
            email once and every download opens right away after that.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }} aria-labelledby="download">
        <div className="wrap">
          <div className="section-head"><h2 id="download">Download</h2></div>

          <div className="card featured-download">
            <div className="pdf-cover is-small" aria-hidden="true">
              <span>Free guide</span>
              <strong>{m.title}</strong>
            </div>
            <div>
              <span className="eyebrow">Featured · PDF · {m.pages} pages</span>
              <h3 className="featured-title">{m.title}</h3>
              <p className="playbook-sub">{m.subtitle}</p>
              <p style={{ marginTop: 12 }}>
                {m.chapters.length} chapters with every template included. <Link href="/playbook-pdf">See what&apos;s inside</Link>
              </p>
              <div style={{ marginTop: 20 }}>
                <GatedDownload slug="playbook" href={m.file} label="Download: The First Offer Playbook (PDF)" className="btn btn-primary" event="playbook_download" />
              </div>
            </div>
          </div>

          {stages.map((stage) => {
            const items = downloads.filter((d) => d.stage === stage);
            if (!items.length) return null;
            const id = `stage-${stage.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <section className="download-stage" key={stage} aria-labelledby={id}>
                <h3 id={id} className="download-stage-title">{stage}</h3>
                <ul className="download-grid">
                  {items.map((d) => (
                    <li className="card download-card" key={d.slug}>
                      <span className="download-format">{d.format}{d.format === "CSV" ? " · opens in Sheets or Excel" : " · 1 page"}</span>
                      <h4>{d.title}</h4>
                      <p>{d.what}</p>
                      <p className="download-week">Used in <Link href={`/curriculum/week-${d.week}`}>Week {d.week}</Link></p>
                      <GatedDownload slug={d.slug} href={downloadFile(d)} label={`Download: ${d.title}`} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="read">
        <div className="wrap">
          <div className="section-head">
            <h2 id="read">Read</h2>
            <p className="lede">In-depth guides from the Playbook. No email needed.</p>
          </div>
          <ul className="download-grid">
            {articles.map((a) => (
              <li className="card download-card read-card" key={a.slug}>
                <span className="download-format">{a.category} · {a.readMinutes} min read</span>
                <h3 className="read-title"><Link href={`/blog/${a.slug}`}>{a.title}</Link></h3>
                <p>{a.oneLine}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
