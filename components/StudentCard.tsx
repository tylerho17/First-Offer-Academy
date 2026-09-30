import { companyNamer, croppedHeadshot, isVisible, type Student } from "@/content/students";
import StudentAvatar from "./StudentAvatar";

// A pilot student's quote card. `showAlso` adds their other companies
// (/results). Renders nothing for an unapproved student in production.
export default function StudentCard({ s, showAlso = false }: { s: Student; showAlso?: boolean }) {
  if (!isVisible(s)) return null;
  const name = companyNamer();
  const companies = s.employerPermission;
  const line = [`${s.track} track`, companies ? name(s.headline) : null, s.label].filter(Boolean).join(" · ");
  return (
    <figure className="card student-card">
      {!s.approved && <span className="pending-badge">Pending permission</span>}
      <StudentAvatar name={s.firstName} cropped={croppedHeadshot(s)} original={s.headshot} />
      <blockquote>{s.quote}</blockquote>
      <figcaption>
        <strong>{s.firstName}</strong>
        <span className="student-line">{line}</span>
        {showAlso && companies && s.otherCompanies.length > 0 && (
          <span className="student-also">Also: {s.otherCompanies.map(name).join(", ")}</span>
        )}
      </figcaption>
    </figure>
  );
}
