// Rich content blocks shared by the Playbook PDF, the downloads, and the
// Playbook guides. Plain data only, so Node scripts can import it too.

// A one-page resume, rendered as a sheet of paper. Entries with `line` render
// as "Label: text" (skills, interests); the rest as org / role / bullets.
export type ResumeEntry = { org: string; place?: string; role?: string; dates?: string; bullets?: string[]; line?: string };
export type ResumeDoc = { name: string; contact: string; sections: { title: string; entries: ResumeEntry[] }[] };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "template"; title: string; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; tone?: "note" | "example" | "tyler"; title?: string; text: string; link?: { label: string; href: string } }
  | { type: "resume"; label: string; note?: string; doc: ResumeDoc }
  | { type: "links"; title?: string; source?: string; more?: { label: string; href: string }; items: { label: string; note?: string; href: string }[] };
