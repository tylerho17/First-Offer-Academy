import Link from "next/link";
import type { Article } from "@/content/articles";

export type ArticleSummary = Pick<Article, "slug" | "title" | "excerpt" | "category" | "author" | "readMinutes">;

export default function ArticleCard({ a }: { a: ArticleSummary }) {
  return (
    <Link href={`/blog/${a.slug}`} className="card article-card">
      <div className="article-cover" aria-hidden="true">
        <span>{a.category}</span>
        <strong>The Playbook</strong>
      </div>
      <div className="article-meta">
        <span>{a.author}</span>
        <span>{a.readMinutes} min read</span>
      </div>
      <h3>{a.title}</h3>
      <p>{a.excerpt}</p>
    </Link>
  );
}
