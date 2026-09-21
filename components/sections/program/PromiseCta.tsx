import Link from "next/link";
import CallLink from "../../CallLink";

export default function PromiseCta() {
  return (
    <section className="section promise-cta" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Link href="/our-promise" className="card promise-link">
          <span>Read what we promise and what we don&apos;t</span>
          <span aria-hidden="true">→</span>
        </Link>
        <div className="promise-call">
          <CallLink className="btn btn-primary">Schedule a call with Tyler to apply</CallLink>
        </div>
      </div>
    </section>
  );
}
