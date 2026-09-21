import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import ArticleView from "@/components/ArticleView";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: a.title, description: a.excerpt, openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date, authors: [a.author] } } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          dateModified: article.date,
          author: { "@type": "Person", name: article.author },
          publisher: { "@type": "Organization", name: "First Offer Academy", logo: { "@type": "ImageObject", url: "https://firstofferacademy.com/apple-icon" } },
          image: `https://firstofferacademy.com/blog/${article.slug}/opengraph-image`,
          mainEntityOfPage: `https://firstofferacademy.com/blog/${article.slug}`,
        }}
      />
      <ArticleView article={article} />
    </>
  );
}
