import Link from "next/link";
import { PILOT_STUDENTS, site } from "@/content/site";
import CallLink from "../CallLink";
import FounderLine from "./FounderLine";
import { Building, Calendar, Users } from "../Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">8-week internship program · Freshmen and sophomores</span>
        <h1>Your first internship shouldn&apos;t depend on which club lets you in.</h1>
        <p className="lede">
          An 8-week internship program for college freshmen and sophomores in finance, consulting,
          and marketing.
        </p>
        <div className="btn-row">
          <Link href="/apply" className="btn btn-primary">Apply for the January cohort</Link>
          <CallLink />
        </div>
        <div className="proof-row">
          <span><Users />{PILOT_STUDENTS} students coached to internships in their first year</span>
          <span><Building />7+ internships worked by the founder</span>
          <span><Calendar />{site.cohort.seats} seats, {site.cohort.start}</span>
        </div>
        <FounderLine />
      </div>
    </section>
  );
}
