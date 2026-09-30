import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

// Headshot circle: 88px (64px on mobile), a 2px navy ring with 3px of cream
// between ring and photo. Uses the 400px crop from scripts/crop-headshots.mjs,
// then the original, then a navy circle with the first initial in cream.
const has = (p: string | null) => !!p && existsSync(path.join(process.cwd(), "public", p));

export default function StudentAvatar({ name, cropped, original }: { name: string; cropped: string | null; original: string | null }) {
  const src = has(cropped) ? cropped : has(original) ? original : null;
  return src ? (
    <span className="student-avatar">
      <Image src={src} alt={`Headshot of ${name}`} width={176} height={176} sizes="(min-width: 768px) 88px, 64px" />
    </span>
  ) : (
    <span className="student-avatar is-initial" role="img" aria-label={`${name} (no photo)`}>
      <span>{name[0]}</span>
    </span>
  );
}
