"use client";

import { useState } from "react";
import Navbar50Ninjas from "@/components/50ninjas/Navbar50Ninjas";
import Hero50Ninjas from "@/components/50ninjas/Hero50Ninjas";
import StudioSection from "@/components/50ninjas/StudioSection";
import PricingSection from "@/components/50ninjas/PricingSection";
import TrustSafetySection from "@/components/50ninjas/TrustSafetySection";
import CommunitySection from "@/components/50ninjas/CommunitySection";
import FaqSection from "@/components/50ninjas/FaqSection";
import Footer50Ninjas from "@/components/50ninjas/Footer50Ninjas";
import ApplicationModal from "@/components/50ninjas/ApplicationModal";
import StudioInquiryModal from "@/components/50ninjas/StudioInquiryModal";

export default function FiftyNinjasPage() {
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [studioModalOpen, setStudioModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("growth");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setStudioModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation with new bespoke logo (no purple circle) */}
      <Navbar50Ninjas
        onOpenApplication={() => setAppModalOpen(true)}
        onOpenStudio={() => {
          setSelectedPlan("growth");
          setStudioModalOpen(true);
        }}
      />

      {/* Main Content: Paid Studio on Top, Free Cohort on Bottom */}
      <main>
        {/* 1. Paid Hero with 3D Fanned Reel Cards (Centerpiece 92.2k views video) */}
        <Hero50Ninjas
          onOpenApplication={() => setAppModalOpen(true)}
          onOpenStudio={() => {
            setSelectedPlan("growth");
            setStudioModalOpen(true);
          }}
        />

        {/* 2. Paid Studio Deliverables & Target Creators */}
        <StudioSection
          onOpenStudio={() => {
            setSelectedPlan("growth");
            setStudioModalOpen(true);
          }}
        />

        {/* 3. Paid Studio Pricing Plans ($74, $149, $299 with code FOUNDER) */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 4. Trust, Likeness Consent & Full IP Ownership */}
        <TrustSafetySection />

        {/* 6. The 50Ninjas Experiment (Free Creator Cohort) - In the bottom */}
        <CommunitySection
          onOpenApplication={() => setAppModalOpen(true)}
        />

        {/* 7. Dual Frequently Asked Questions (Studio first, then Community) */}
        <FaqSection />
      </main>

      {/* Footer with new bespoke logo */}
      <Footer50Ninjas />

      {/* Interactive Modals connected with Google Form & WhatsApp */}
      <ApplicationModal
        isOpen={appModalOpen}
        onClose={() => setAppModalOpen(false)}
      />

      <StudioInquiryModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        selectedPlanId={selectedPlan}
      />
    </div>
  );
}
