// Free workshops for clubs, high schools, PTSAs, and tutoring centers.

export const workshopTopics = [
  { title: "How internship recruiting actually works", body: "The timeline, the four fields, and what first-year students can do right now." },
  { title: "Cold outreach that gets replies", body: "Finding the right people, writing the email, and following up. Students leave with a draft." },
  { title: "Resume in an hour", body: "A live rubric review. Every student leaves with a stronger resume than they walked in with." },
  { title: "Tell me about yourself", body: "Building a 60-second story, practiced out loud in pairs." },
];

export const workshopAudiences = ["College clubs", "High schools & PTSAs", "Community college programs", "Tutoring centers"];

// Past workshops. Add a video (YouTube embed URL) or photo with permission.
export type PastWorkshop = { title: string; host: string; embedUrl?: string; photo?: string };
export const pastWorkshops: PastWorkshop[] = [];
