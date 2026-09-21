// Shared client-side form submit. Every form on the site posts JSON to its
// own /api route. The routes answer 503 when their backend isn't configured
// (and a route that doesn't exist yet answers 404); both mean "not connected
// yet", which the form shows as a friendly notice instead of an error.

export type SubmitResult = "ok" | "unconnected" | "error";

export async function postForm(url: string, payload: Record<string, unknown>): Promise<SubmitResult> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return "ok";
    if (res.status === 503 || res.status === 404) return "unconnected";
    return "error";
  } catch {
    return "error";
  }
}
