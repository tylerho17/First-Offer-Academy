import Image from "next/image";
import CallLink from "../CallLink";
import LinkedInLink from "../LinkedInLink";
import { PILOT_STUDENTS, site, spell } from "@/content/site";

export default function Founder() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="founder">
      <div className="wrap founder">
        <div className="founder-photo">
          {/* TODO: swap for a casual daylight photo at /images/tyler-casual.jpg */}
          <Image src="/images/tyler.jpg" alt="Tyler Ho" width={800} height={903} sizes="(min-width: 860px) 420px, 90vw" />
        </div>
        <div className="founder-copy">
          <span className="eyebrow">Why I built this</span>
          <h2>I learned recruiting the hard way. Your student doesn&apos;t have to.</h2>
          <p className="big">
            I&apos;m the son of Vietnamese parents who worked hard but
            couldn&apos;t show me how recruiting worked.
          </p>
          <p>
            So I figured it out myself: 7+ internships worked across investment banking, venture,
            consulting, FP&amp;A, and sales,{" "}
            {site.founder.offerCount ? `${site.founder.offerCount} internship offers` : "offers from many more"}, and an
            incoming investment banking offer. In college I led finance
            recruiting education for a student investing organization and coached {spell(PILOT_STUDENTS)} freshmen who all
            landed internships in their first year. The system kept producing after I stepped back.
          </p>
          <p>
            First Offer Academy is that system, built for every student, not just the ones who got
            into the right club.
          </p>
          <div className="signature">
            <strong>Tyler Ho, Founder</strong><br />
            Finance &amp; Computer Science
          </div>
          <div className="btn-row">
            <CallLink />
          </div>
          <p style={{ marginTop: 18 }}><LinkedInLink /></p>
        </div>
      </div>
    </section>
  );
}
