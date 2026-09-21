import { articles, getArticle } from "@/content/articles";
import { brandImage, ogSize } from "@/lib/og";

export const alt = "An article from The Playbook by First Offer Academy";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return brandImage({ label: `The Playbook · ${a?.category ?? "Guide"}`, headline: a?.title ?? "The Playbook" });
}
