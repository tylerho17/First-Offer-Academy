import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StoryFilter from "@/components/StoryFilter";
import { permittedStories, studentTypes } from "@/content/stories";

export const metadata: Metadata = {
  title: "Case Studies by Student Type",
  description: "Student stories filtered by starting point: community college, no club, first-generation, transfer, freshman, and sophomore.",
};

export default function ByTypePage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Stories from students who started where yours is."
        lede="Filter by starting point. Every story is shared with the student's written permission."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <StoryFilter stories={permittedStories()} types={studentTypes} />
        </div>
      </section>
    </>
  );
}
