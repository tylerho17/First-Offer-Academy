"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/content/articles";
import ArticleCard, { type ArticleSummary } from "./ArticleCard";

// Category chips for /blog. The choice is mirrored in ?category= so a
// filtered view can be shared.
export default function BlogFilter({ articles, categories }: { articles: ArticleSummary[]; categories: readonly Category[] }) {
  const [active, setActive] = useState<Category | null>(null);

  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && (categories as readonly string[]).includes(c)) setActive(c as Category);
  }, [categories]);

  function choose(c: Category | null) {
    setActive(c);
    const url = new URL(window.location.href);
    if (c) url.searchParams.set("category", c);
    else url.searchParams.delete("category");
    window.history.replaceState(null, "", url);
  }

  const shown = active ? articles.filter((a) => a.category === active) : articles;
  const counts = (c: Category) => articles.filter((a) => a.category === c).length;

  return (
    <>
      <div className="chip-row blog-filter" role="group" aria-label="Filter guides by category">
        <button type="button" className="chip" aria-pressed={active === null} onClick={() => choose(null)}>All ({articles.length})</button>
        {categories.map((c) => (
          <button type="button" key={c} className="chip" aria-pressed={active === c} onClick={() => choose(c)}>
            {c} ({counts(c)})
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{shown.length} guides shown</p>
      <div className="grid grid-3" style={{ marginTop: 32 }}>
        {shown.map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>
      {shown.length === 0 && <p className="blog-empty">No guides in this category yet.</p>}
    </>
  );
}
