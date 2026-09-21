import Link from "next/link";
import type { Article } from "@/content/articles";
import { articles } from "@/content/articles";
import ArticleCard from "./ArticleCard";
import CallLink from "./CallLink";

export default function ArticleView({ article: a }: { article: Article }) {
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  const date = new Date(a.date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <>
      <article className="section article" style={{ paddingTop: 56 }}>
        <div className="wrap article-wrap">
          <Link href="/blog" className="link-arrow">← The Playbook</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 28 }}>{a.category}</span>
          <h1>{a.title}</h1>
          <p className="article-byline">{a.author} · {date} · {a.readMinutes} min read</p>
          <div className="article-body">
            {a.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "ul") return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
              if (b.type === "template")
                return (
                  <div className="card template" key={i}>
                    <span className="eyebrow">{b.title}</span>
                    <pre>{b.text}</pre>
                  </div>
                );
              return <p key={i}>{b.text}</p>;
            })}
          </div>
          <div className="card article-cta">
            <h3>Want someone to run this with your student every week?</h3>
            <p>The 12-week program turns this guide into weekly numbers, feedback, and a coach checking the work.</p>
            <div className="btn-row">
              <Link href="/program" className="btn btn-primary">See the program</Link>
              <CallLink />
            </div>
          </div>
        </div>
      </article>
      {more.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head"><h2>Keep reading</h2></div>
            <div className="grid grid-3">{more.map((m) => <ArticleCard key={m.slug} a={m} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
