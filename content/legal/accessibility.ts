import { legalContact, type LegalDoc } from "./types";

export const accessibility: LegalDoc = {
  slug: "accessibility",
  title: "Accessibility Statement",
  description: "First Offer Academy's commitment to an accessible website, known limitations, and how to report a problem.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  intro: "We want every student and parent to be able to use this website, including people who use screen readers, keyboard navigation, magnification, or other assistive technology.",
  body: [
    { type: "h2", text: "Our target" },
    { type: "p", text: "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA across the whole site." },
    { type: "h2", text: "What we've done" },
    { type: "ul", items: [
      "Text and background colors are chosen to meet or exceed a 4.5:1 contrast ratio. Most pairs on the site are above 7:1.",
      "Every page can be used with a keyboard alone, with a visible focus outline on links, buttons, and form fields.",
      "Menus open on keyboard focus and close with the Escape key.",
      "Headings follow a logical order so screen reader users can skim a page.",
      "Every image has alternative text, and form fields have visible labels.",
      "Animations are turned off when your device is set to reduce motion.",
      "Pages work on small phone screens without sideways scrolling, and text can be zoomed to 200%.",
    ] },
    { type: "h2", text: "Known limitations" },
    { type: "ul", items: [
      "Embedded videos are hosted by YouTube or Vimeo. We will caption our own videos, but the player controls are provided by those services.",
      "Some older PDFs or downloads may not be fully tagged for screen readers. If you need a document in another format, ask and we'll send it.",
      "Student-submitted videos may not have captions when first posted. We will add them as quickly as we can.",
    ] },
    { type: "h2", text: "Report a problem" },
    { type: "p", text: `If something on this site is hard to use, email ${legalContact} with the page and what happened. We'll reply within 5 business days, and we'll get you the information you need in another way in the meantime.` },
    { type: "h2", text: "Accessibility in the program" },
    { type: "p", text: "If a student needs an accommodation in sessions, 1:1s, or mock interviews (captions, extra time, a different format, anything else), tell us when you apply or at any point in the program. We'll work it out with you." },
  ],
};
