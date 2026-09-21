import Link from "next/link";
import { Calendar, Report, Users, Compass } from "../Icons";
import { downloads } from "@/content/downloads";

const items = [
  { n: "01", icon: <Calendar />, title: "Join a free event", body: "Parent info sessions and student workshops on how recruiting works now.", href: "/events", cta: "See upcoming events" },
  { n: "02", icon: <Compass />, title: "Enroll in the 12-week program", body: "A weekly session, a 1:1 with your coach, and a pod that keeps you accountable.", href: "/program", cta: "How the program works" },
  { n: "03", icon: <Users />, title: "Work 1:1 with your coach", body: "Every week, your coach reviews your tracker and fixes the biggest bottleneck.", href: "/about", cta: "Meet the founder" },
  { n: "04", icon: <Report />, title: "Use the free templates", body: `The Playbook PDF plus ${downloads.length} free templates: resume rubric, outreach tracker, email pack, and more.`, href: "/free-resources", cta: "Get the free resources" },
];

export default function Offerings() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Everything in one place</span>
          <h2>Everything a first-year student needs to land the first internship.</h2>
        </div>
        <div className="grid grid-4">
          {items.map((i) => (
            <Link href={i.href} className="card offer-card" key={i.n}>
              <div className="offer-top">
                <div className="icon-dot">{i.icon}</div>
                <span className="offer-n">{i.n}</span>
              </div>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
              <span className="link-arrow">{i.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
