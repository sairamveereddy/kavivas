import AgencyHeroSection from "@/components/ui/hero-01";
import OwnedWebsitesSection from "@/components/OwnedWebsitesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutGrowthPartner from "@/components/AboutGrowthPartner";
import WhyKavivasSection from "@/components/WhyKavivasSection";
import PhilosophyBanner from "@/components/PhilosophyBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white antialiased">
      <AgencyHeroSection />
      <main className="flex-1">
        <OwnedWebsitesSection />
        <ServicesSection />
        <AboutGrowthPartner />
        <WhyKavivasSection />
        <PhilosophyBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
