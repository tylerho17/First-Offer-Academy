import CallLink from "../CallLink";

export default function Founder() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="founder">
      <div className="wrap founder">
        <div className="founder-photo">
          {/* TODO: swap for a casual daylight photo at /images/tyler-casual.jpg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tyler.jpg" alt="Tyler Ho" width={800} height={903} />
        </div>
        <div className="founder-copy">
          <span className="eyebrow">Why I built this</span>
          <h2>I learned recruiting the hard way. Your student doesn&apos;t have to.</h2>
          <p className="big">
            I grew up in Garden Grove, the son of Vietnamese parents who worked hard but
            couldn&apos;t show me how recruiting worked.
          </p>
          <p>
            So I figured it out myself: seven internships across investment banking, venture,
            consulting, and finance, and an incoming investment banking offer. At UCI I led finance
            recruiting education for a student investing organization and coached eight freshmen who
            landed internships in their first year. The system kept producing after I stepped back.
          </p>
          <p>
            First Offer Academy is that system, built for every student, not just the ones who got
            into the right club.
          </p>
          <div className="signature">
            <strong>Tyler Ho, Founder</strong><br />
            UC Irvine, Finance &amp; Computer Science
          </div>
          <div className="btn-row">
            <CallLink>Book a call with Tyler</CallLink>
          </div>
        </div>
      </div>
    </section>
  );
}
