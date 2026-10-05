import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/sections/LogoMarquee";
import StudentCard from "@/components/StudentCard";
import VideoCard from "@/components/VideoCard";
import { videosAt } from "@/content/videoTestimonials";
import FinalCta from "@/components/sections/FinalCta";
import { visibleStudents } from "@/content/students";

export const metadata: Metadata = {
  title: "Results",
  description: "Pilot results, student testimonials, and parent videos from First Offer Academy, each shared with written permission.",
};

export default function ResultsPage() {
  const students = visibleStudents();
  // One row below the quote cards; the cards themselves stay text only.
  const clips = videosAt("results-1", "results-2", "results-3", "results-4");
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Real students. Their words, with their permission."
        lede="Every card on this page is from a student or parent who agreed in writing to share it. First names only."
      />
      <LogoMarquee />
      <Stats />
      {students.length > 0 && (
        <section className="section" style={{ paddingTop: 24 }} aria-labelledby="students-title">
          <div className="wrap">
            <h2 id="students-title" className="sr-only">Pilot students</h2>
            <div className="student-grid">
              {students.map((s) => <StudentCard key={s.firstName} s={s} showAlso />)}
            </div>
          </div>
        </section>
      )}
      {clips.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="in-their-words">
          <div className="wrap">
            <h2 id="in-their-words">In their words</h2>
            <ul className="worth-grid cols-4 results-clips">
              {clips.map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
            </ul>
          </div>
        </section>
      )}
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
