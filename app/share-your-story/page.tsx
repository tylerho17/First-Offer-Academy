import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StoryForm from "@/components/StoryForm";

export const metadata: Metadata = {
  title: "Share Your Story",
  description: "First Offer Academy students and alumni: share how your internship search went. Nothing is published without your written permission.",
};

export default function ShareYourStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Share your story"
        title="Tell us how your search went."
        lede="Your story can help a student who's starting where you started. Nothing you send is published automatically: we confirm every detail with you first, and only share what you give permission for."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="card form-card"><StoryForm /></div>
        </div>
      </section>
    </>
  );
}
