import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Ornament from "@/components/Ornament";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about First Offer Academy or your student's internship search? Send a message and book a call with Tyler.",
};

export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="wrap">
        <div className="card contact-card">
          <div className="contact-head">
            <Ornament className="is-center" />
            <h1>Contact</h1>
            <p>Send a message if you have questions about the program or your student&apos;s search.</p>
          </div>
          <ContactForm />
        </div>
        <p className="contact-alt">
          Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a> · Schools and clubs: <Link href="/workshops">free workshops</Link>
        </p>
      </div>
    </section>
  );
}
