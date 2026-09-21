import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ParentWall from "@/components/sections/ParentWall";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Parent Testimonials",
  description: "What parents say about First Offer Academy, shared with their written permission.",
};

export default function ParentsTestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Parent testimonials"
        title="From the parents who made the decision."
        lede="Every quote here is from a parent who agreed in writing to share it."
      />
      <ParentWall />
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
