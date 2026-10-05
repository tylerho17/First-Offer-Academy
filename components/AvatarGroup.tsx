import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PILOT_LANDED, PILOT_STUDENTS } from "@/content/site";
import { croppedHeadshot, visibleStudents } from "@/content/students";

const has = (p: string | null) => !!p && existsSync(path.join(process.cwd(), "public", p));

// Five overlapping pilot-student headshots (public/images/students, cropped)
// and the pilot result, beside the main CTA. Alt text: first name only.
export default function AvatarGroup({ count = 5 }: { count?: number }) {
  const faces = visibleStudents()
    .map((s) => ({ name: s.firstName, src: has(croppedHeadshot(s)) ? croppedHeadshot(s) : has(s.headshot) ? s.headshot : null }))
    .filter((f): f is { name: string; src: string } => !!f.src)
    .slice(0, count);
  const pct = Math.round((PILOT_LANDED / PILOT_STUDENTS) * 100);
  return (
    <div className="avatar-group">
      {faces.length > 0 && (
        <span className="avatar-stack">
          {faces.map((f) => (
            <span className="avatar-face" key={f.name}>
              <Image src={f.src} alt={f.name} width={80} height={80} sizes="40px" />
            </span>
          ))}
        </span>
      )}
      <span className="avatar-line">{PILOT_STUDENTS} pilot students · {pct}% landed an internship or offer</span>
    </div>
  );
}
