import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplyForm from "@/components/ApplyForm";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for one of ${site.cohort.seats} seats in the ${site.cohort.start} founding cohort. A short form, then a 20-minute call with Tyler. Applying costs nothing.`,
};

// /apply?deposit=1 is the Stripe success URL for the deposit link: the family
// has paid and now tells us about the student, on the same form.
export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ deposit?: string }> }) {
  const paid = (await searchParams).deposit === "1";
  const c = site.cohort;
  return (
    <>
      {paid ? (
        <>
          <p className="deposit-received" role="status">Deposit received.</p>
          <PageHero
            eyebrow={`${c.name} · ${c.start}`}
            title="Your seat is held."
            lede="Tell us about the student, then pick a time for the call. If the call shows it isn't a fit, your deposit is refunded in full."
          />
        </>
      ) : (
        <PageHero
          eyebrow={`${c.name} · ${c.start}`}
          title={`Apply for one of ${c.seats} seats.`}
          lede="A short form, and applying costs nothing. The next step is a 20-minute call with Tyler."
        />
      )}
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="card form-card">
            <ApplyForm />
          </div>
          <p className="apply-note">
            Cost a concern? Read about <Link href="/scholarship">the scholarship seat</Link> and the <Link href="/refunds">Refund &amp; Payment Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
