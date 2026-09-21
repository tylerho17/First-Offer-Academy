import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplyForm from "@/components/ApplyForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Apply" };

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow={`${site.cohort.name} · ${site.cohort.start}`}
        title="Apply for one of 24 seats."
        lede="Ten minutes. After you apply, you'll book a short fit call with Tyler. No payment is taken on this page."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="card form-card">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
