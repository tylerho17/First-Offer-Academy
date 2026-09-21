import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReferForm from "@/components/ReferForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Refer a Student",
  description: "Know a first- or second-year college student who'd benefit from First Offer Academy? Refer them, and Tyler will reach out personally.",
};

export default function ReferPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer a student"
        title="Know a student who's starting from zero?"
        lede="Students and parents who've seen the program are the best judges of who it's for. Send us their contact, with their OK, and Tyler will reach out once, personally."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          {site.referralReward && (
            <div className="card refer-reward">
              <span className="eyebrow">Referral thank-you</span>
              <p>{site.referralReward}</p>
            </div>
          )}
          <div className="card form-card"><ReferForm /></div>
        </div>
      </section>
    </>
  );
}
