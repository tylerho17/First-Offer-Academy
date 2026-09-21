// Rich content blocks shared by the Playbook PDF, the downloads, and the
// Playbook guides. Plain data only, so Node scripts can import it too.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "template"; title: string; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; tone?: "note" | "example" | "tyler"; title?: string; text: string };
