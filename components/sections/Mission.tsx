import Link from "next/link";
import { mission } from "@/content/home";
import ArchPhoto from "../ArchPhoto";
import Highlight from "../Highlight";
import Ornament from "../Ornament";

export default function Mission() {
  return (
    <section className="section" id="mission" style={{ paddingTop: 0 }}>
      <div className="wrap mission">
        <div className="mission-copy">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{mission.eyebrow}</span>
          <p className="mission-line"><Highlight>{mission.highlight}</Highlight></p>
          <p className="mission-body">{mission.body}</p>
          <div className="btn-row">
            <Link href={mission.cta.href} className="btn btn-secondary">{mission.cta.label}</Link>
          </div>
        </div>
        <ArchPhoto />
      </div>
    </section>
  );
}
