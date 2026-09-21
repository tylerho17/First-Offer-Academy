import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import SuccessStories from "@/components/sections/SuccessStories";
import EmployerGrid from "@/components/sections/EmployerGrid";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description: "Student and parent testimonials for First Offer Academy, each shared with written permission.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Real students. Their words, with their permission."
        lede="Every quote on this page is from a student or parent who agreed in writing to share it."
      />
      <Stats />
      <SuccessStories eyebrow="Case studies" title="How our students ran their searches" />
      <Testimonials full />
      <EmployerGrid />
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
