import { site } from "@/content/site";

// Plain, branded email shell. Inline styles only (email clients ignore
// <style>), brand colors, no images, so it looks right everywhere.

export const esc = (s: unknown) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const NAVY = "#1A2B48";
const MIST = "#E7EDF5";
const CREAM = "#F7F4EE";
const DUSTY = "#3F6690";

export function button(label: string, href: string) {
  return `<p style="margin:28px 0 8px"><a href="${esc(href)}" style="display:inline-block;background:${NAVY};color:${CREAM};text-decoration:none;font-weight:600;font-size:16px;padding:14px 26px;border-radius:999px">${esc(label)}</a></p>`;
}

export function layout({ preheader, heading, body, footerNote }: { preheader: string; heading: string; body: string; footerNote?: string }) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:${MIST}">
<span style="display:none;max-height:0;overflow:hidden">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${MIST};padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${CREAM};border-radius:16px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;color:#000;font-size:16px;line-height:1.6">
<tr><td style="background:${NAVY};padding:20px 28px;color:${CREAM};font-family:Georgia,serif;font-size:20px">${esc(site.name)}</td></tr>
<tr><td style="padding:32px 28px">
<h1 style="margin:0 0 16px;font-family:Georgia,serif;font-weight:400;font-size:26px;line-height:1.2;color:${NAVY}">${esc(heading)}</h1>
${body}
</td></tr>
<tr><td style="padding:20px 28px;border-top:1px solid rgba(26,43,72,.14);font-size:13px;color:${NAVY}">
${footerNote ? `<p style="margin:0 0 8px">${footerNote}</p>` : ""}
<p style="margin:0">${esc(site.name)} · ${esc(site.city)} · <a href="mailto:${esc(site.email)}" style="color:${DUSTY}">${esc(site.email)}</a></p>
</td></tr></table></td></tr></table></body></html>`;
}

export const p = (html: string) => `<p style="margin:0 0 14px">${html}</p>`;
