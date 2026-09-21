// Small constructors so each guide reads like prose. Shared by content/guides/*.

import type { Block } from "../blocks";

export const p = (text: string): Block => ({ type: "p", text });
export const h2 = (text: string): Block => ({ type: "h2", text });
export const h3 = (text: string): Block => ({ type: "h3", text });
export const ul = (...items: string[]): Block => ({ type: "ul", items });
export const ol = (...items: string[]): Block => ({ type: "ol", items });
export const check = (title: string, ...items: string[]): Block => ({ type: "checklist", title, items });
export const tyler = (text: string, title = "From Tyler"): Block => ({ type: "callout", tone: "tyler", title, text });
export const note = (title: string, text: string): Block => ({ type: "callout", tone: "note", title, text });
export const example = (title: string, text: string): Block => ({ type: "callout", tone: "example", title, text });
export const template = (title: string, text: string): Block => ({ type: "template", title, text });
export const table = (caption: string, head: string[], rows: string[][]): Block => ({ type: "table", caption, head, rows });
