import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Share Your Story" };

export default function ShareYourStoryPage() {
  return (
    <>
      <PageHero eyebrow="Share your story" title="Tell us how your search went." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p>The submission form is coming soon. In the meantime, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
