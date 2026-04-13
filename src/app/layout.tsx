import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

/** Used for absolute OG / Twitter image URLs (WhatsApp, iMessage, etc.). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://www.orlandotgroupinc.com";

const defaultTitle =
  "Orlando T Group Inc. | Hurricane & Solar Protection | South Florida";
const shortDescription =
  "Protect what matters most. Free in-home consultation. Licensed & insured since 2006.";
const longDescription =
  "Hurricane and solar protection for South Florida. Impact windows, doors, shutters, awnings, and more. Free in-home consultation. Licensed & insured since 2006.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: longDescription,
  keywords: [
    "hurricane protection",
    "impact windows",
    "impact doors",
    "South Florida",
    "solar protection",
    "rolldown shutters",
    "patio enclosures",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orlando T Group Inc.",
    title: "Orlando T Group Inc. | Hurricane & Solar Protection",
    description: shortDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/hero.png",
        width: 1500,
        height: 760,
        alt: "Orlando T Group — hurricane and solar protection for South Florida homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando T Group Inc. | Hurricane & Solar Protection",
    description: shortDescription,
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.variable} ${barlow.variable} font-body antialiased bg-white text-charcoal`}
      >
        <ThemeScript />
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen bg-background">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
