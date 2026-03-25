import { Hero } from "@/components/home/Hero";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { OrderTrackingBanner } from "@/components/home/OrderTrackingBanner";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { WhyUs } from "@/components/home/WhyUs";
import { TrustBar } from "@/components/home/TrustBar";
import { ProjectsSection } from "@/components/home/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <ConsultationForm />
      <OrderTrackingBanner />
      <InstagramFeed />
      <WhyUs />
      <TrustBar />
      <ProjectsSection />
    </>
  );
}
