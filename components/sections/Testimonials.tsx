import Link from "next/link";
import { homepageStudents } from "@/content/students";
import { videoAt } from "@/content/videoTestimonials";
import StudentCard from "../StudentCard";
import VideoCard from "../VideoCard";

// Homepage "What changed": the transformation clip beside the heading, then
// three pilot students' quote cards. Hidden entirely when neither exists.
export default function Testimonials() {
  const cards = homepageStudents();
  const clip = videoAt("home-transformation");
  if (cards.length === 0 && !clip) return null;

  const head = (
    <div className="section-head">
      <h2>What changed, in their words.</h2>
      <p style={{ marginTop: 12 }}><Link href="/results" className="link-arrow">See all results →</Link></p>
    </div>
  );
  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        {clip ? (
          <div className="copy-video">
            {head}
            <VideoCard video={clip} />
          </div>
        ) : (
          head
        )}
        {cards.length > 0 && (
          <div className="student-grid" style={{ marginTop: 24 }}>
            {cards.map((s) => <StudentCard key={s.firstName} s={s} />)}
          </div>
        )}
      </div>
    </section>
  );
}
