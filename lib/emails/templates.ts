import { site } from "@/content/site";
import { leadMagnet } from "@/content/leadMagnet";
import { button, esc, layout, p } from "./layout";

const url = `https://${site.domain}`;
const first = (name?: string | null) => (name ? name.trim().split(/\s+/)[0] : "");
const hi = (name?: string | null) => (first(name) ? `Hi ${esc(first(name))},` : "Hi,");

export function applyConfirmation(d: { name: string }) {
  const subject = "We received your application";
  const text = `${hi(d.name)}

Thanks for applying to ${site.name}'s ${site.cohort.name.toLowerCase()} (${site.cohort.start}). Tyler reads every application personally.

Next step: book a short fit call if you haven't already: ${site.calendlyUrl}

No payment has been taken. If you have questions, reply to this email.

${site.name}`;
  const html = layout({
    preheader: "Tyler reads every application personally. Next step: a short fit call.",
    heading: "We received your application.",
    body:
      p(hi(d.name)) +
      p(`Thanks for applying to the ${esc(site.cohort.name.toLowerCase())} (${esc(site.cohort.start)}). Tyler reads every application personally.`) +
      p("Next step: book a short fit call if you haven't already.") +
      button("Book your fit call", site.calendlyUrl) +
      p("No payment has been taken. Questions? Just reply to this email."),
  });
  return { subject, text, html };
}

export function applyNotify(d: Record<string, unknown>) {
  const rows = Object.entries(d)
    .filter(([, v]) => v !== null && v !== undefined && v !== "" && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : String(v)] as const);
  const subject = `New application: ${String(d.name ?? "")} (${String(d.school ?? "")})`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = layout({
    preheader: subject,
    heading: "New application",
    body: `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:14px">${rows
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#3F6690;font-weight:600;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0">${esc(v)}</td></tr>`)
      .join("")}</table>`,
  });
  return { subject, text, html };
}

export function subscribeConfirmation(d: { firstName?: string | null; source?: string | null }) {
  const playbook = d.source === "playbook";
  const pdf = `${url}${leadMagnet.file}`;
  const subject = playbook ? `Your copy of ${leadMagnet.title}` : "You're subscribed to the First Offer newsletter";
  const text = `${hi(d.firstName)}

${playbook ? `Here's your copy of ${leadMagnet.title}: ${pdf}\n\n` : ""}You're on the list for the First Offer newsletter: recruiting timelines, outreach templates, and interview tips, every other week.

Unsubscribe anytime by replying "unsubscribe".

${site.name}`;
  const html = layout({
    preheader: playbook ? `Your ${leadMagnet.pages}-page Playbook is inside.` : "Recruiting guides every other week.",
    heading: playbook ? "Here's your Playbook." : "You're subscribed.",
    body:
      p(hi(d.firstName)) +
      (playbook ? p(`Here's your copy of ${leadMagnet.title}.`) + button("Download the PDF", pdf) : "") +
      p("You're on the list for the First Offer newsletter: recruiting timelines, outreach templates, and interview tips, every other week.") +
      p(`While you wait for the next issue, <a href="${url}/blog" style="color:#3F6690">the Playbook</a> has free guides you can use today.`),
    footerNote: 'Don\'t want these emails? Reply with "unsubscribe" and we\'ll remove you.',
  });
  return { subject, text, html };
}

export function contactConfirmation(d: { firstName: string }) {
  const subject = "We got your message";
  const text = `${hi(d.firstName)}

Thanks for reaching out to ${site.name}. Tyler will reply within two business days.

If you'd like to talk sooner, book a call: ${site.calendlyUrl}

${site.name}`;
  const html = layout({
    preheader: "Tyler will reply within two business days.",
    heading: "We got your message.",
    body:
      p(hi(d.firstName)) +
      p(`Thanks for reaching out to ${esc(site.name)}. Tyler will reply within two business days.`) +
      p("If you'd like to talk sooner, book a call:") +
      button("Book a call", site.calendlyUrl),
  });
  return { subject, text, html };
}
