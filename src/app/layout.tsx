import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";

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

export const metadata: Metadata = {
  title: "Orlando T Group Inc. | Hurricane & Solar Protection | South Florida",
  description:
    "Hurricane and solar protection for South Florida. Impact windows, doors, shutters, awnings, and more. Free in-home consultation. Licensed & insured since 2006.",
  keywords: [
    "hurricane protection",
    "impact windows",
    "impact doors",
    "South Florida",
    "solar protection",
    "rolldown shutters",
    "patio enclosures",
  ],
  openGraph: {
    title: "Orlando T Group Inc. | Hurricane & Solar Protection",
    description: "Protect what matters most. Free in-home consultation.",
    url: "https://www.orlandotgroupinc.com",
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
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-white">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
