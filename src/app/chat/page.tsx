import type { Metadata } from "next";
import { ChatSection } from "@/components/chat/ChatSection";

const title = "Ask Orlando | AI Assistant | Orlando T Group Inc.";
const description =
  "Chat or talk with Orlando, our AI assistant. Instant answers about impact windows, hurricane protection and financing, plus free consultation booking.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "hurricane protection questions",
    "impact windows chat",
    "free consultation",
    "South Florida",
    "AI assistant",
  ],
  openGraph: {
    title,
    description,
    url: "https://orlandotgroupinc.com/chat",
    siteName: "Orlando T Group Inc.",
    images: [{ url: "/images/hero.png", width: 1500, height: 760 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.png"],
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/chat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function ChatPage() {
  return <ChatSection />;
}
