import { byPlacement, byRank, credit, videoTestimonials } from "@/content/videoTestimonials";
import VideoCard from "../VideoCard";

// /parents "Family stories": each parents-family clip next to that student's
// best clip (highest-ranked results-became or home-hero clip of the student
// the parent is credited with). A parent whose student has no clip shows alone.
export default function FamilyStories() {
  const rows = byPlacement("parents-family").map((parent) => {
    const student = videoTestimonials
      .filter((v) => v.kind === "student" && v.person === parent.parentOf && (v.placements.includes("results-became") || v.placements.includes("home-hero")))
      .sort(byRank)[0];
    return { parent, student };
  });
  if (rows.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="families-title" id="family-stories">
      <div className="wrap">
        <div className="section-head">
          <h2 id="families-title">From families and students</h2>
        </div>
        <ul className="family-rows">
          {rows.map(({ parent, student }) => (
            <li key={parent.youtubeId}>
              <p className="family-label">{student ? `${parent.parentOf} and ${parent.person}, on the same story` : credit(parent)}</p>
              <ul className="video-group cols-2">
                {student && <li><VideoCard video={student} /></li>}
                <li><VideoCard video={parent} /></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
