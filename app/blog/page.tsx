import type { Metadata } from "next";
import { articles, categories } from "@/content/articles";
import BlogFilter from "@/components/BlogFilter";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Playbook",
  description: `${articles.length} free, in-depth recruiting guides for college students and parents: timelines, resumes, target lists, cold email, networking calls, behavioral interviews, technicals by track, and advice for parents.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">Free recruiting guides</span>
          <h1>The First Offer Playbook</h1>
          <p className="lede">
            In-depth guides to the exact system we use with our students, from the first resume to the first interview. Written for first- and second-year college students and their parents. Free, always.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <Link href="/playbook-pdf" className="card timeline-promo">
            <span className="eyebrow">Free download</span>
            <strong>The First Offer Playbook: how to land your first internship before junior year.</strong>
            <span className="link-arrow">Get the PDF →</span>
          </Link>
          <BlogFilter
            articles={articles.map(({ slug, title, excerpt, category, author, readMinutes }) => ({ slug, title, excerpt, category, author, readMinutes }))}
            categories={categories}
          />
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
