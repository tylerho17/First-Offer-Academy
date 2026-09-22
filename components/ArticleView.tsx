import Link from "next/link";
import { headingId, relatedArticles, type Article } from "@/content/articles";
import { downloadFile, getDownload } from "@/content/downloads";
import ArticleCard from "./ArticleCard";
import Blocks from "./Blocks";
import CallLink from "./CallLink";
import GatedDownload from "./GatedDownload";

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
                  <GatedDownload key={d.slug} slug={d.slug} href={downloadFile(d)} label={`Download: ${d.title}`} />
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

          {files.length > 0 && (
            <p className="article-download-line">
              <a href="#templates">{files.length > 1 ? "Get the templates for this guide" : "Get the template for this guide"}</a>
              {" "}· <Link href="/free-resources">All free resources</Link>
            </p>
          )}

          <div className="card article-cta">
            <h3>Want someone to run this with your student every week?</h3>
            <p>The tactics are free. The 12-week program adds execution and accountability: weekly numbers, a 60-minute 1:1, and a coach checking the work.</p>
            <div className="btn-row">
              <Link href="/program" className="btn btn-primary">See the program</Link>
              <CallLink />
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
