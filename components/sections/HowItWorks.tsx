import { afterProgram, offerSprint } from "@/content/program";

// Homepage "How it works": the four stages of the offer, as cream cards.
const steps = [
  { when: "Week 0", title: "Get ahead.", body: "Pre-work over winter break, starting the day you enroll." },
  { when: "Weeks 1–8", title: "Build.", body: "Your Candidate Brand, Outreach System, Story Bank, Track Technicals, Interview Reps, and Accountability Pod." },
  { when: offerSprint.weeks, title: `${offerSprint.name}.`, body: offerSprint.summary },
  { when: "Until your offer", title: "Keep going.", body: `A 20-minute weekly check-in and a mock interview every other week until you receive an internship offer or ${afterProgram.until}, while you keep up ${afterProgram.maintenance}.` },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From Week 0 to your first offer.</h2>
        </div>
        <ol className="how-grid">
          {steps.map((s, i) => (
            <li className="card how-card" key={s.when}>
              <span className="how-n">{i + 1}</span>
              <span className="how-when">{s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
