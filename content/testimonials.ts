// Every testimonial needs WRITTEN permission from the student (or parent).
// A card renders only when permission: true.
// The employer name renders only when employerPermission: true.
// videoUrl: link to an .mp4 in /public/videos or a hosted file. The first 3
// with a videoUrl show as vertical video cards.

export type Testimonial = {
  name: string; // "Jamie L." (first name + last initial)
  school: string;
  year: string; // "Freshman year"
  track: "Finance" | "Consulting" | "Marketing" | "Tech";
  quote: string;
  employer?: string;
  employerPermission: boolean;
  photo?: string; // "/images/students/jamie.jpg"
  videoUrl?: string;
  role: "student" | "parent";
  permission: boolean;
  featured?: boolean; // one parent quote shown large
};

export const testimonials: Testimonial[] = [
  // Example shape. Replace with real entries and set permission: true.
  {
    name: "TODO Student",
    school: "UC Irvine",
    year: "Freshman year",
    track: "Finance",
    quote: "TODO: real quote from a real student.",
    employerPermission: false,
    role: "student",
    permission: false,
  },
];
