import { programOverview } from "@/content/programOverview";
import CallLink from "../../CallLink";
import Ornament from "../../Ornament";
import { LeavesWithList } from "../LeavesWith";

export default function Together() {
  const t = programOverview.together;
  return (
    <section className="section" id="together">
      <div className="wrap">
        <div className="card together">
          <Ornament />
          <h2>{t.title}</h2>
          <p className="together-note">{t.note}</p>
          <LeavesWithList compact />
          <div className="btn-row">
            <CallLink className="btn btn-primary">Book a free call</CallLink>
          </div>
        </div>
      </div>
    </section>
  );
}
