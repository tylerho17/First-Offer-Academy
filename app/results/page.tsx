import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
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
      <Testimonials full />
      <EmployerGrid />
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
