import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";
import { downloadFile, downloads, stages } from "@/content/downloads";
import TemplateLibrary from "@/components/TemplateLibrary";
import { leadMagnet as m } from "@/content/leadMagnet";
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
            These are the same templates students use in the program, week by week. Enter your
            email once and every download opens right away.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }} aria-labelledby="download">
        <div className="wrap">
          <div className="section-head"><h2 id="download">Download</h2></div>

          <TemplateLibrary
            templates={downloads.map((d) => ({ slug: d.slug, title: d.title, what: d.what, format: d.format, week: d.week, stage: d.stage, href: downloadFile(d) }))}
            stages={stages}
            playbook={{ href: m.file, title: m.title, subtitle: m.subtitle, pages: m.pages, chapters: m.chapters.length }}
          />
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
