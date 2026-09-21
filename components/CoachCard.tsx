import CallLink from "./CallLink";
import LinkedInLink from "./LinkedInLink";
import { founderInternships } from "@/content/site";

// Leland-style coach card. No ratings or review counts until real reviews exist.
export default function CoachCard({ focus }: { focus?: string }) {
  return (
    <article className="card coach-card">
      <div className="coach-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/tyler.jpg" alt="Tyler Ho" width={800} height={903} />
      </div>
      <div className="coach-body">
        <div className="coach-head">
          <h3>Tyler Ho</h3>
          <span className="badge">Founder &amp; head coach</span>
        </div>
        <p className="coach-headline">{founderInternships()} across investment banking, venture, consulting, FP&amp;A, and sales · UC Irvine, Finance &amp; CS</p>
        <p>
          Coached eight first-year students to internships.{focus ? ` Leads ${focus} prep for the founding cohort.` : " Leads every track in the founding cohort."}
        </p>
        <div className="coach-tags">
          <span>Networking</span><span>Resumes</span><span>Behaviorals</span><span>Finance technicals</span>
        </div>
        <div className="btn-row" style={{ marginTop: 20 }}>
          <CallLink className="btn btn-primary">Free intro call</CallLink>
        </div>
        <p style={{ marginTop: 16 }}><LinkedInLink /></p>
      </div>
    </article>
  );
}
