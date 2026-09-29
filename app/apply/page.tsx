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
  const c = site.cohort;
  return (
    <>
      {paid ? (
        <>
          <p className="deposit-received" role="status">Deposit received.</p>
          <PageHero
            eyebrow={`${c.name} · ${c.start}`}
            title="Your seat is held."
            lede={`Tell us about the student, then pick a time for the fit call. If the call shows it isn't a fit, your ${c.deposit} is refunded in full.`}
          />
        </>
      ) : (
        <PageHero
          eyebrow={`${c.name} · ${c.start}`}
          title={`Apply for one of ${c.seats} seats.`}
          lede="Ten minutes, and applying costs nothing. After you apply, you'll book a short fit call with Tyler."
        />
      )}
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          {!paid && (
            <div className="card deposit-banner">
              <p>
                <strong>Ready now?</strong> Reserve your seat with a {c.deposit} refundable deposit, then fill this in.
              </p>
              <div className="btn-row" style={{ marginTop: 16 }}>
                <PayButton />
              </div>
              <DepositNote />
            </div>
          )}
          <div className="card form-card">
            <ApplyForm paid={paid} />
          </div>
          <p className="apply-note">
            Questions about cost? See <Link href="/pricing">pricing</Link> and the <Link href="/refunds">Refund &amp; Payment Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
