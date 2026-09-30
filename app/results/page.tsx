import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/sections/LogoMarquee";
import StudentCard from "@/components/StudentCard";
import StudentVideosGrid from "@/components/sections/StudentVideosGrid";
import FinalCta from "@/components/sections/FinalCta";
import { visibleStudents } from "@/content/students";

export const metadata: Metadata = {
  title: "Results",
  description: "Pilot results, student testimonials, and parent videos from First Offer Academy, each shared with written permission.",
};

export default function ResultsPage() {
  const students = visibleStudents();
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
      <StudentVideosGrid />
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
