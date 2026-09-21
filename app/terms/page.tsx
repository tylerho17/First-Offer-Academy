import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and refund policy" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p className="draft-note">Draft. Fill in refund dates and have this reviewed before taking deposits.</p>
          <h2>The program</h2>
          <p>First Offer Academy provides coaching, instruction, and feedback for a student&apos;s internship search. We do not guarantee internship offers or any specific outcome.</p>
          <h2>Payment</h2>
          <p>Tuition is {site.cohort.price}, or {site.cohort.plan}. A {site.cohort.deposit} refundable deposit holds a seat.</p>
          <h2>Refunds</h2>
          <p>{site.refundTerms || "Refund terms will be published here before deposits open."}</p>
        </div>
      </section>
    </>
  );
}
