import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplyForm from "@/components/ApplyForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for one of ${site.cohort.seats} seats in the ${site.cohort.start} founding cohort. A short form, then a 20-minute call with Tyler and Kenji. Applying costs nothing.`,
};

// /apply?deposit=1 is the Stripe success URL for the deposit link. A family
// that just paid goes straight to the "You're in." page (/enrolled), never back
// to the form and the thanks page that offers the deposit again.
export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ deposit?: string }> }) {
  if ((await searchParams).deposit === "1") redirect("/enrolled");
  const c = site.cohort;
  return (
    <>
      <PageHero
        eyebrow={`${c.name} · ${c.start}`}
        title={`Apply for one of ${c.seats} seats.`}
        lede="A short form, and applying costs nothing. The next step is a 20-minute call with Tyler and Kenji."
      />
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
