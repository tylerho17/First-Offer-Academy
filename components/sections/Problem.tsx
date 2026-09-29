import Link from "next/link";
import { Building, Clock, Lock } from "../Icons";

const items = [
  {
    icon: <Lock />,
    title: "Access is gated.",
    body: "The best recruiting help sits inside selective campus clubs, and most freshmen don't get in.",
  },
  {
    icon: <Clock />,
    title: "The timeline is earlier than anyone says.",
    body: "Recruiting for many internships starts sophomore year or earlier, and most students find out too late.",
  },
  {
    icon: <Building />,
    title: "Career centers are built for everyone.",
    body: "One advisor for thousands of students can't review every email or mock-interview you each week.",
  },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The problem</span>
          <h2>College teaches the major. Nobody teaches the job search.</h2>
        </div>
        <div className="grid grid-3">
          {items.map((i) => (
            <div className="card" key={i.title}>
              <div className="icon-dot">{i.icon}</div>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link href="/program" className="link-arrow">View program details →</Link>
        </p>
      </div>
    </section>
  );
}
