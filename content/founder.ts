// The founder, in one place: the homepage founder card, the coach card, the
// FAQ, and /about read this. Nothing here is invented: an empty field renders
// nothing in production and a labeled placeholder in development.

export const founder = {
  name: "Tyler Ho",
  // TODO(Tyler): 10+ internships. Confirm the exact wording before merge (internships worked vs. offers).
  internships: "10+ internships",
  // A 2027 summer role.
  role: "Incoming investment banking summer analyst",

  // /about hero subhead.
  // TODO(Tyler): one-line why.
  why: "",

  // /about "Where I've worked": only firms Tyler approves naming. CLAUDE.md
  // currently says not to name his employers on the site.
  // TODO(Tyler): firm list (approve which to name).
  firms: [] as string[],

  // /about "My story": three short paragraphs. Paragraphs 1 and 3 start from
  // the existing founder bio; paragraph 2 is new and stays empty until written.
  story: [
    {
      // Prompt: growing up in Garden Grove in a humble family, figuring recruiting out with no roadmap.
      // TODO(Tyler): paragraph 1. Prefilled from the existing bio; expand or replace.
      text: "I'm the son of Vietnamese parents who worked hard but couldn't show me how recruiting worked.",
    },
    {
      // Prompt: how many coffee chats, emails and rejections it took.
      // TODO(Tyler): paragraph 2.
      text: "",
    },
    {
      // Prompt: why I built First Offer Academy, to give students the roadmap I didn't have.
      // TODO(Tyler): paragraph 3. Prefilled from the existing bio; expand or replace.
      text: "First Offer Academy is that system, built for every student, not just the ones who got into the right club.",
    },
  ],

  // /about intro video. Nothing renders until a real YouTube id is set.
  // TODO(Tyler): Tyler intro video YouTube id.
  introVideoId: null as string | null,
};
