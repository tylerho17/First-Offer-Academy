import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplyForm from "@/components/ApplyForm";
import PayButton, { DepositNote } from "@/components/PayButton";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for one of ${site.cohort.seats} seats in the ${site.cohort.start} founding cohort. Ten minutes, then a short fit call with Tyler. No payment to apply.`,
};

// /apply?deposit=1 is the Stripe success URL for the deposit link: the family
// has paid and now tells us about the student, on the same form.
export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ deposit?: string }> }) {
  const paid = (await searchParams).deposit === "1";
  return (
    <>
      <PageHero
        eyebrow={`${site.cohort.name} · ${site.cohort.start}`}
        title={`Apply for one of ${site.cohort.seats} seats.`}
        lede="Ten minutes, and applying costs nothing. After you apply, you'll book a short fit call with Tyler."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          {paid ? (
            <div className="card deposit-banner" role="status">
              <h2>Deposit received — tell us about the student</h2>
              <p>Thank you. Fill in the form below and book the fit call. {site.refundTerms}</p>
            </div>
          ) : (
            <div className="card deposit-banner">
              <p>
                <strong>Ready now?</strong> Reserve your seat with a {site.cohort.deposit} refundable deposit, then fill this in.
              </p>
              <div className="btn-row" style={{ marginTop: 16 }}>
                <PayButton />
              </div>
              <DepositNote />
            </div>
          )}
          <div className="card form-card">
            <ApplyForm />
          </div>
          <p className="apply-note">
            Questions about cost? See <Link href="/pricing">pricing</Link> and the <Link href="/refunds">Refund &amp; Payment Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
