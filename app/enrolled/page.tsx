import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import Ornament from "@/components/Ornament";

// Stripe sends people here after a successful payment. No nav link, no
// conversion pixel, no auto-redirect: a dead end on purpose. noindex, because
// the only way in is checkout.
export const metadata: Metadata = {
  title: "You're in",
  description: "Your seat in the founding cohort is held. What happens next.",
  robots: { index: false, follow: false },
};

const steps = [
  "A confirmation email is on its way, within the hour. If it hasn't landed, check spam, then email us.",
  "Your winter break pre-work arrives within 2 business days: the resume template, the target list worksheet, and the Candidate Brand module. You start now, not in January.",
  "We'll send a link to book your first 1:1 in the first week of December.",
];

export default function EnrolledPage() {
  return (
    <section className="section enrolled">
      <div className="wrap">
        <Ornament />
        <h1>You&apos;re in.</h1>
        <p className="lede">Your seat in the {site.cohort.start} {site.cohort.name.toLowerCase()} is held.</p>

        <div className="card enrolled-card">
          <h2>What happens next</h2>
          <ol className="enrolled-steps">
            {steps.map((s, i) => (
              <li key={i}>
                <span className="enrolled-num" aria-hidden="true">{i + 1}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="enrolled-refund">
          Changed your mind? Your deposit is fully refundable until {site.depositRefundDeadline} — just email us.{" "}
          <Link href="/terms">Read the enrollment terms →</Link>
        </p>

        <p className="enrolled-foot">
          Something look wrong? Email <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll sort it out.
        </p>
      </div>
    </section>
  );
}
