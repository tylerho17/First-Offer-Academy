import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

// 72px headshot circle (56px on mobile) with a navy ring. If the file is
// missing, a navy circle with the first initial in cream.
export default function StudentAvatar({ name, src }: { name: string; src: string | null }) {
  const exists = !!src && existsSync(path.join(process.cwd(), "public", src));
  return exists ? (
    <span className="student-avatar">
      <Image src={src!} alt={`Headshot of ${name}`} width={144} height={144} sizes="72px" />
    </span>
  ) : (
    <span className="student-avatar is-initial" role="img" aria-label={`${name} (no photo)`}>
      {name[0]}
    </span>
  );
}
