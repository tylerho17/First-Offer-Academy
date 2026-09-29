// Where pilot students interned. An entry renders only when
// permissionConfirmed is true (the student gave written permission to name
// the employer) AND the logo file exists under /public. With none, the strip
// renders nothing at all. Logos show in navy monotone, so any single-color or
// transparent PNG/SVG works.

export type Employer = {
  name: string;
  logoPath: string; // e.g. "/images/logos/company.svg"
  permissionConfirmed: boolean;
  track: "finance" | "marketing" | "accounting";
};

export const employers: Employer[] = [
  // { name: "Company Name", logoPath: "/images/logos/company.svg", permissionConfirmed: true, track: "finance" },
];

export const MAX_LOGOS = 8;
