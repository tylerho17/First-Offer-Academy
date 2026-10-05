import { companyNamer, croppedHeadshot, isVisible, type Student } from "@/content/students";
import StudentAvatar from "./StudentAvatar";
import VideoCard from "./VideoCard";
import type { VideoTestimonial } from "@/content/videoTestimonials";

// A pilot student's quote card. `showAlso` adds their other companies
// (/results). `video`: the student's own clip, attached under their result.
// Renders nothing for an unapproved student in production.
export default function StudentCard({ s, showAlso = false, video }: { s: Student; showAlso?: boolean; video?: VideoTestimonial }) {
  if (!isVisible(s)) return null;
  const name = companyNamer();
  const companies = s.employerPermission;
  const line = [`${s.track} track`, companies ? name(s.headline) : null, s.label].filter(Boolean).join(" · ");
  return (
    <figure className="card student-card">
      {!s.approved && <span className="pending-badge">Pending permission</span>}
      <StudentAvatar name={s.firstName} cropped={croppedHeadshot(s)} original={s.headshot} />
      <blockquote>{s.quote}</blockquote>
      {/* Between the quote and the name, so names stay level across a row. */}
      {video && <div className="student-video"><VideoCard video={video} /></div>}
      <figcaption>
        <strong>{s.firstName}</strong>
        <span className="student-line">{line}</span>
        {showAlso &&
          (companies && s.otherCompanies.length > 0 ? (
            <span className="student-also">Also: {s.otherCompanies.map(name).join(", ")}</span>
          ) : (
            // Keeps the name at the same height as the rest of its row.
            <span className="student-also" aria-hidden="true">&nbsp;</span>
          ))}
      </figcaption>
    </figure>
  );
}
