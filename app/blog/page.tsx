import type { Metadata } from "next";
import { articles } from "@/content/articles";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = { title: "The Playbook" };

export default function BlogPage() {
  const cats = Array.from(new Set(articles.map((a) => a.category)));
  return (
    <>
      <section className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">Free recruiting guides</span>
          <h1>The First Offer Playbook</h1>
          <p className="lede">
            The recruiting playbook we use with our students: timelines, outreach templates, and interview
            guides for first- and second-year college students and their parents. Free, always.
          </p>
          <div className="pill-row" style={{ justifyContent: "center", marginTop: 24 }}>
            {cats.map((c) => <span key={c} className="topic-pill is-static">{c}</span>)}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <div className="grid grid-3">
            {articles.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
          <div className="card nl-inline">
            <div>
              <h2>Get the next guide in your inbox</h2>
              <p>One email every other week. Unsubscribe anytime.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
