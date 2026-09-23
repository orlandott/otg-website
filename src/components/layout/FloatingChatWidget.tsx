"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { DATAGRAN_AGENT_ID, DATAGRAN_WIDGET_SRC } from "@/lib/chatWidget";

export function FloatingChatWidget() {
  const pathname = usePathname();

  // /chat embeds the widget inline; loading the script there again would
  // boot the widget twice on the same page.
  if (pathname.startsWith("/chat")) return null;

  return (
    <Script
      src={DATAGRAN_WIDGET_SRC}
      data-agent={DATAGRAN_AGENT_ID}
      data-label="Orlando"
      strategy="lazyOnload"
    />
  );
}
