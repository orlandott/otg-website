import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CHAT_WIDGET_AGENT,
  CHAT_WIDGET_LABEL,
  CHAT_WIDGET_SRC,
} from "@/lib/chatWidget";

/** Main-site chrome: full navigation, footer, and the default chat launcher. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
      <Script
        src={CHAT_WIDGET_SRC}
        data-agent={CHAT_WIDGET_AGENT}
        data-label={CHAT_WIDGET_LABEL}
        strategy="lazyOnload"
      />
    </>
  );
}
