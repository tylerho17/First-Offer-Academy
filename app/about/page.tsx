import type { Metadata } from "next";
import Founder from "@/components/sections/Founder";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div style={{ paddingTop: 72 }}><Founder /></div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="card">
            <span className="eyebrow">What I believe</span>
            <h3>Recruiting rewards persistence, not pedigree.</h3>
            <p style={{ marginTop: 12 }}>
              The students who land internships early aren&apos;t always the smartest in the room. They
              send more emails, follow up on time, and practice their stories out loud. That can be taught.
            </p>
          </div>
          <div className="card">
            <span className="eyebrow">How I coach</span>
            <h3>High standards, high touch.</h3>
            <p style={{ marginTop: 12 }}>
              Every student gets a weekly 1:1, a clear number to hit, and honest feedback on the work
              itself: the resume line, the email, the answer to &ldquo;tell me about yourself.&rdquo;
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
