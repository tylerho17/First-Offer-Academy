"use client";

import { useSyncExternalStore } from "react";

// Remembers, in this browser only, that the visitor already gave their email
// for a download, so later downloads skip the form. If storage is blocked
// (private mode, cleared site data), reads return false and we just ask again.

const KEY = "foa-subscribed";
const EVENT = "foa-subscribed";

export function isSubscribed(): boolean {
  try {
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function rememberSubscribed() {
  try {
    window.localStorage.setItem(KEY, "1");
    window.dispatchEvent(new Event(EVENT));
  } catch {
    // Storage unavailable: the next download asks again.
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

// false during server render and hydration, then the stored value.
export const useSubscribed = () => useSyncExternalStore(subscribe, isSubscribed, () => false);
