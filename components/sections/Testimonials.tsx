import Link from "next/link";
import { homepageStudents } from "@/content/students";
import { byPlacement } from "@/content/videoTestimonials";
import StudentCard from "../StudentCard";
import VideoGroup from "../VideoGroup";

// Homepage: two video cards (home-results), then three pilot students' quote
// cards. Hidden entirely when neither exists.
export default function Testimonials() {
  const cards = homepageStudents();
  const videos = byPlacement("home-results");
  if (cards.length === 0 && videos.length === 0) return null;

  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head row-head">
          <h2>What changed, in their words.</h2>
          <Link href="/results" className="link-arrow">See all results →</Link>
        </div>
        <VideoGroup videos={videos} columns={2} />
        {cards.length > 0 && (
          <div className="student-grid" style={{ marginTop: videos.length ? 20 : 0 }}>
            {cards.map((s) => <StudentCard key={s.firstName} s={s} />)}
          </div>
        )}
      </div>
    </section>
  );
}
