import Link from "next/link";
import { articles } from "@/content/articles";
import ArticleCard from "../ArticleCard";

export default function LatestArticles({ track, title = "Free guides from the Playbook" }: { track?: string; title?: string }) {
  const list = articles.filter((a) => !track || !a.track || a.track === track).slice(0, 3);
  if (list.length === 0) return null;
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <span className="eyebrow">The Playbook</span>
            <h2>{title}</h2>
          </div>
          <Link href="/blog" className="link-arrow">All guides →</Link>
        </div>
        <div className="grid grid-3">
          {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
    </section>
  );
}
