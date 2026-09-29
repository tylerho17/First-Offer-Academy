import Link from "next/link";
import { headingId, relatedArticles, type Article } from "@/content/articles";
import { getDownload, templateAnchor } from "@/content/downloads";
import ArticleCard from "./ArticleCard";
import Blocks from "./Blocks";
import GatedDownload from "./GatedDownload";
import { leadMagnet } from "@/content/leadMagnet";
import { site } from "@/content/site";

export default function ArticleView({ article: a }: { article: Article }) {
  const related = relatedArticles(a);
  const toc = a.body.filter((b) => b.type === "h2").map((b) => (b as { text: string }).text);
  const files = a.downloads.map(getDownload).filter((d) => !!d);
  const date = new Date(a.date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <>
      <article className="section article" style={{ paddingTop: 56 }}>
        <div className="wrap article-wrap">
          <Link href="/blog" className="link-arrow">← The Playbook</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 28 }}>
            {a.category}{!a.reviewedByTyler && <span className="draft-chip">Draft</span>}
          </span>
          <h1>{a.title}</h1>
          <p className="article-byline">{a.author} · {date} · {a.readMinutes} min read</p>

          {files.length > 0 && (
            <div className="card article-download" id="templates">
              <div>
                <span className="eyebrow">{files.length > 1 ? "Free templates" : "Free template"}</span>
                <p>{files.map((d) => `${d.title} (${d.format})`).join(" · ")}</p>
              </div>
              <div className="btn-row">
                {files.map((d) => (
                  <Link key={d.slug} href={templateAnchor(d)} className="btn btn-secondary">Get the template<span className="sr-only">: {d.title}</span></Link>
                ))}
              </div>
            </div>
          )}

          {toc.length > 2 && (
            <nav className="card article-toc" aria-label="In this guide">
              <p className="block-title">In this guide</p>
              <ol>{toc.map((t) => <li key={t}><a href={`#${headingId(t)}`}>{t}</a></li>)}</ol>
            </nav>
          )}

          <div className="article-body">
            <Blocks blocks={a.body} />
          </div>

          {/* Every guide ends with its template (or the Playbook), then a next step by audience. */}
          <div className="card article-download article-end">
            <div>
              <span className="eyebrow">{files.length ? (files.length > 1 ? "The templates for this guide" : "The template for this guide") : "Free download"}</span>
              <p>{files.length ? files.map((d) => `${d.title} (${d.format})`).join(" · ") : `${leadMagnet.title} (${leadMagnet.pages}-page PDF)`}</p>
            </div>
            <div className="btn-row">
              {files.length ? (
                files.map((d) => <Link key={d.slug} href={templateAnchor(d)} className="btn btn-secondary">Get the template<span className="sr-only">: {d.title}</span></Link>)
              ) : (
                <GatedDownload slug="playbook" href={leadMagnet.file} label="Download the Playbook (PDF)" event="playbook_download" />
              )}
            </div>
          </div>

          <div className="audience-cta">
            <div className="card">
              <span className="eyebrow">Students</span>
              <h3>Join the next free workshop</h3>
              <p>Resumes, cold email, networking calls, and interview reps, live.</p>
              <Link href="/events" className="link-arrow">See free workshops →</Link>
            </div>
            <div className="card">
              <span className="eyebrow">Parents</span>
              <h3>Book a 20-minute call</h3>
              <p>Talk through your student&apos;s situation with Tyler and whether the program fits.</p>
              <a href={site.calendlyUrl} className="link-arrow" target="_blank" rel="noopener noreferrer">Book a parent call →</a>
            </div>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head"><h2>Related guides</h2></div>
            <div className="grid grid-3">{related.map((m) => <ArticleCard key={m.slug} a={m} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
