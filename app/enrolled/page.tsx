import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { enrolled } from "@/content/enrolled";

// Stripe sends people here after a successful payment. No nav link, no
// conversion pixel, no auto-redirect: a dead end on purpose. noindex, because
// the only way in is checkout.
export const metadata: Metadata = {
  title: "You're in",
  description: "Your seat in the founding cohort is held. What happens next.",
  robots: { index: false, follow: false },
};

// Shared with the deposit confirmation email (content/enrolled.ts).
const steps = enrolled.steps;

export default function EnrolledPage() {
  return (
    <section className="section enrolled">
      <div className="wrap">
        <h1>You&apos;re in.</h1>
        <p className="lede">{enrolled.held}</p>

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
          {enrolled.refund}{" "}
          <Link href={enrolled.terms.href}>{enrolled.terms.label}</Link>
        </p>

        <p className="enrolled-foot">
          Something look wrong? Email <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll sort it out.
        </p>
      </div>
    </section>
  );
}
