import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/sections/FaqList";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions parents and students ask" lede="Don't see yours? Book a call and ask Tyler directly." />
      <FaqList all />
      <FinalCta />
    </>
  );
}
