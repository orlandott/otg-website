"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

/** Counts each client-side navigation as a ChatGPT Ads page view. The first
 * page view is sent by ChatGptAdsPixel in <head>, before hydration. */
export function ChatGptAdsPageViews() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.oaiq?.("measure", "page_viewed", {
      type: "contents",
      contents: [{ id: pathname, content_type: "page" }],
    });
  }, [pathname]);
  return null;
}
