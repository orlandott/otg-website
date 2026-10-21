import { LandingAgentProvider } from "@/components/landing/LandingAgentContext";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { GoogleAdsTag } from "@/components/landing/GoogleAdsTag";

// Paid-ads landings: no site navigation, and the Orlando agent (embedded in
// the page, not the floating launcher) as the one thing to do. The Google Ads
// tag loads here only, so ad visits are measured on the pages ads point to.
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LandingAgentProvider>
      <LandingHeader />
      <main className="bg-background">{children}</main>
      <LandingFooter />
      <GoogleAdsTag />
    </LandingAgentProvider>
  );
}
