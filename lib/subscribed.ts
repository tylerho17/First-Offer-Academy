"use client";

import { useSyncExternalStore } from "react";

// Whether this browser already gave an email for a download: the readable
// foa_unlocked cookie (365 days) that /api/subscribe sets next to the signed
// httpOnly one the file routes check. Later downloads then skip the form.

const EVENT = "foa-subscribed";

export function isSubscribed(): boolean {
  try {
    return document.cookie.split("; ").includes("foa_unlocked=1");
  } catch {
    return false;
  }
}

// Called after a signup succeeds (the response already set the cookies), or
// when signup isn't connected (local dev), so the page re-renders unlocked.
let devUnlocked = false;
export function rememberSubscribed() {
  if (!isSubscribed()) devUnlocked = true;
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

// false during server render and hydration, then the cookie value.
export const useSubscribed = () => useSyncExternalStore(subscribe, () => isSubscribed() || devUnlocked, () => false);
