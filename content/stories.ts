// Student success stories in "How [Name] landed [role]…" format.
// Every story needs WRITTEN permission (see docs/templates/testimonial-media-release.md).
// A story renders only when permission: true. The employer name renders only
// when employerPermission: true. Photo and video render only when
// mediaPermission: true.
// Seeded with zero stories on purpose. Add real ones as students agree.

export type Story = {
  slug: string; // /results/<slug>
  name: string; // first name + last initial: "Jamie L."
  school: string;
  year: string; // "Freshman year"
  track: "Finance" | "Consulting" | "Marketing" | "Tech";
  headline: string; // "How Jamie landed a marketing internship as a freshman"
  role: string; // "Marketing intern"
  employer?: string;
  employerPermission: boolean;
  startingPoint: string; // where they started, in plain words
  weeklyNumbers: string; // e.g. "50 emails a week, 6 calls in Weeks 4–8"
  outcome: string; // what actually happened
  quote: string;
  videoUrl?: string; // YouTube or Vimeo
  photo?: string; // /images/students/jamie.jpg
  mediaPermission: boolean; // photo/video may be shown
  permission: boolean;
};

export const stories: Story[] = [];

export const permittedStories = () => stories.filter((s) => s.permission);
// Display helpers that apply the per-field permissions.
export const storyEmployer = (s: Story) => (s.employerPermission && s.employer ? s.employer : undefined);
export const storyVideo = (s: Story) => (s.mediaPermission ? s.videoUrl : undefined);
export const storyPhoto = (s: Story) => (s.mediaPermission ? s.photo : undefined);

export const getStory = (slug: string) => permittedStories().find((s) => s.slug === slug);
