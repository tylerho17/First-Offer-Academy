import { modules, programOverview } from "@/content/programOverview";
import StatsRow from "../../StatsRow";
import IconTile from "../../IconTile";
import ModuleIcon from "../../ModuleIcon";
import Ornament from "../../Ornament";
import { ArrowDown } from "../../Icons";

export default function Helps() {
  const h = programOverview.helps;
  return (
    <section className="section" id="how-it-helps">
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{h.eyebrow}</span>
          <h2>{h.title}</h2>
        </div>
        <StatsRow />
        <p className="tile-hint">{h.hint}</p>
        <div className="tile-grid">
          {modules.map((m) => (
            <IconTile
              key={m.slug}
              icon={<ModuleIcon name={m.icon} />}
              title={m.title}
              bullets={m.components}
              detail={m.detail}
              href={`#${m.slug}`}
            />
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <a href="#modules" className="link-arrow">Learn more about the 6 parts <ArrowDown className="inline-icon" /></a>
        </p>
      </div>
    </section>
  );
}
