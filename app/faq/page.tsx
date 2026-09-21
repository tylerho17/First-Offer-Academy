import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/sections/FaqList";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers for parents and students: timing, cost, the payment plan, the refundable deposit, time commitment, and what we do and don't promise.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <PageHero eyebrow="FAQ" title="Questions parents and students ask" lede="Don't see yours? Book a call and ask Tyler directly." />
      <FaqList all />
      <FinalCta />
    </>
  );
}
