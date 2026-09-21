// Companies your students interned at. Renders only with employerPermission: true,
// and the whole bar stays hidden until at least 4 are permitted.

export type Employer = { name: string; logo?: string; employerPermission: boolean };

export const employers: Employer[] = [
  // { name: "Company Name", logo: "/images/logos/company.svg", employerPermission: true },
];

export const MIN_EMPLOYERS_FOR_GRID = 8; // "Where our students work" grid on /results
