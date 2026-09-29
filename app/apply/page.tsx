import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplyForm from "@/components/ApplyForm";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for one of ${site.cohort.seats} seats in the ${site.cohort.start} founding cohort. Ten minutes, then a short fit call with Tyler. No payment to apply.`,
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow={`${site.cohort.name} · ${site.cohort.start}`}
        title={`Apply for one of ${site.cohort.seats} seats.`}
        lede="Ten minutes, and applying costs nothing. After you apply, you'll book a short fit call with Tyler."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="card form-card">
            <ApplyForm />
          </div>
          <p className="apply-note">
            Questions about cost? See pricing and the <Link href="/refunds">Refund &amp; Payment Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
