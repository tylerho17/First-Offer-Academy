import Link from "next/link";
import { homepageStudents } from "@/content/students";
import { permittedResults } from "@/content/results";
import StudentCard from "../StudentCard";
import ResultCard from "../ResultCard";

// Homepage: three pilot students' quote cards, then Tom's before-and-after
// video as a wide tile beneath them. Hidden entirely when nothing is visible.
export default function Testimonials() {
  const cards = homepageStudents();
  const tom = permittedResults().find((r) => r.id === "tom-before-after");
  if (cards.length === 0 && !tom) return null;

  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head row-head">
          <h2>What changed, in their words.</h2>
          <Link href="/results" className="link-arrow">See all results →</Link>
        </div>
        {cards.length > 0 && (
          <div className="student-grid">
            {cards.map((s) => <StudentCard key={s.firstName} s={s} />)}
          </div>
        )}
        {tom && (
          <div className="result-grid is-single" style={{ marginTop: cards.length ? 20 : 0 }}>
            <ResultCard r={tom} wide />
          </div>
        )}
      </div>
    </section>
  );
}
