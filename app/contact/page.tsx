import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CallLink from "@/components/CallLink";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a real person." lede="Parents, students, and schools: reach Tyler directly." />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap grid grid-3">
          <div className="card">
            <span className="eyebrow">Parents &amp; students</span>
            <h3>Book a free call</h3>
            <p style={{ margin: "10px 0 20px" }}>Twenty minutes to talk through your student&apos;s situation and whether the program fits.</p>
            <CallLink className="btn btn-primary" />
          </div>
          <div className="card">
            <span className="eyebrow">Email</span>
            <h3>{site.email}</h3>
            <p style={{ marginTop: 10 }}>For questions about the program, payment, or anything else.</p>
          </div>
          <div className="card">
            <span className="eyebrow">Schools &amp; clubs</span>
            <h3>Free workshops</h3>
            <p style={{ margin: "10px 0 20px" }}>Bring a free recruiting workshop to your club, school, or PTSA.</p>
            <a href="/workshops" className="link-arrow">Learn more →</a>
          </div>
        </div>
      </section>
    </>
  );
}
