import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import StoriesLibrary from "@/components/StoriesLibrary";
import VideoCard from "@/components/VideoCard";
import { libraryVideos, videoTestimonials } from "@/content/videoTestimonials";

export const metadata: Metadata = {
  title: { absolute: "Student & Parent Stories | First Offer Academy" },
  description: "Unscripted video clips from First Offer Academy pilot students and their parents: what changed, where they landed, and whether it was worth it. Filter by students, parents, or topic.",
};

// Before the filters hydrate (and for crawlers), the first 12 clips in
// library order.
function Fallback() {
  return (
    <ul className="video-group cols-3">
      {libraryVideos().slice(0, 12).map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
    </ul>
  );
}

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Hear it from them."
        lede={`${videoTestimonials.length} unscripted clips from pilot students and their parents.`}
      />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <Suspense fallback={<Fallback />}>
            <StoriesLibrary />
          </Suspense>
        </div>
      </section>
    </>
  );
}
