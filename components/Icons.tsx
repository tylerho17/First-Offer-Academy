type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const Check = (p: P) => (<svg {...base} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>);
export const Plus = (p: P) => (<svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const Minus = (p: P) => (<svg {...base} {...p}><path d="M6 12h12" /></svg>);
export const Menu = (p: P) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const Lock = (p: P) => (<svg {...base} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 118 0v3" /></svg>);
export const Clock = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>);
export const Building = (p: P) => (<svg {...base} {...p}><path d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-4h4v4M9.5 11h.01M14.5 11h.01" /></svg>);
export const Chart = (p: P) => (<svg {...base} {...p}><path d="M4 19h16M7 16V11M12 16V6M17 16v-3" /></svg>);
export const Compass = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></svg>);
export const Megaphone = (p: P) => (<svg {...base} {...p}><path d="M4 10v4h3l8 4V6L7 10H4zM18 9.5a3.5 3.5 0 010 5" /></svg>);
export const Code = (p: P) => (<svg {...base} {...p}><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></svg>);
export const Report = (p: P) => (<svg {...base} {...p}><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>);
export const Pin = (p: P) => (<svg {...base} {...p}><path d="M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0113 0c0 5.5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></svg>);
export const Calendar = (p: P) => (<svg {...base} {...p}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></svg>);
export const Users = (p: P) => (<svg {...base} {...p}><circle cx="9" cy="9" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0111 0M16 6.3a3 3 0 010 5.6M17.5 14a5 5 0 013 5" /></svg>);
