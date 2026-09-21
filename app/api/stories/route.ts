import { z } from "zod";
import { bool, email, formRoute, optText, reqText } from "@/lib/formRoute";

// Submissions are stored for review only. Nothing here is ever published
// automatically; Tyler sets permission flags in content/ by hand.
const schema = z.object({
  name: reqText(),
  email: email(),
  school: reqText(),
  year: reqText(40),
  track: z.enum(["Finance", "Consulting", "Marketing", "Tech"]),
  employer: optText(200),
  quote: reqText(5000),
  videoUrl: z.union([z.url({ protocol: /^https?$/ }), z.literal("")]).optional().transform((v) => v || null),
  publishQuote: bool(),
  publishEmployer: bool(),
  publishMedia: bool(),
});

export const POST = formRoute({
  name: "stories",
  schema,
  table: "story_submissions",
  toRow: (d) => ({
    name: d.name,
    email: d.email,
    school: d.school,
    year: d.year,
    track: d.track,
    employer: d.employer,
    quote: d.quote,
    video_url: d.videoUrl,
    publish_quote: d.publishQuote,
    publish_employer: d.publishEmployer,
    publish_media: d.publishMedia,
  }),
});
