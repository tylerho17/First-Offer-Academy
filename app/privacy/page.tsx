import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p className="draft-note">Draft. Have this reviewed before launch.</p>
          <p>First Offer Academy collects the information you submit through our application and contact forms (such as name, email, phone, school, and your answers) to evaluate applications and communicate with you about the program.</p>
          <p>We do not sell your information. We share it only with service providers that help us run the program (for example, scheduling and payment tools), and only as needed.</p>
          <p>To request access to or deletion of your information, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
