import { LandingAgentProvider } from "@/components/landing/LandingAgentContext";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";

// Paid-ads landings: no site navigation, and the Orlando agent (embedded in
// the page, not the floating launcher) as the one thing to do.
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
    </LandingAgentProvider>
  );
}
