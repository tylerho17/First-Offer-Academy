import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

// One line under the hero proof row. The only founder photo on the homepage;
// the full-size one lives on /about.
export default function FounderLine() {
  return (
    <p className="founder-line">
      <span className="founder-line-photo">
        <Image src="/images/tyler.jpg" alt="" width={48} height={48} sizes="48px" />
      </span>
      <span>
        Built by <Link href="/about">{site.founder.name}</Link> — 7+ internships, incoming investment banking analyst.
      </span>
    </p>
  );
}
