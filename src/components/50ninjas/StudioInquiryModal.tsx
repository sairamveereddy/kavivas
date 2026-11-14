"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, ShieldCheck, ExternalLink, MessageCircle, Check, Zap, Globe } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

interface StudioInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export default function StudioInquiryModal({
  isOpen,
  onClose,
  selectedPlanId = "growth",
}: StudioInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(selectedPlanId);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    whatsapp: "",
    style: "AI Avatar & Voice Clone (Your Face & Voice)",
    aiSubscription: "Google Gemini / Veo",
    references: "",
    notes: "",
  });

  const tiers = FIFTY_NINJAS_DATA.pricingTiers;
  const activePlanObj = tiers.find((t) => t.id === currentPlan) || tiers[1];

  // API & Google Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        plan: `${activePlanObj.name} ($${activePlanObj.monthlyIntro}/mo)`,
        fullName: formData.name,
        email: formData.email,
        instagram: formData.instagram,
        whatsapp: formData.whatsapp,
        contentStyle: formData.style,
        aiSubscription: formData.aiSubscription,
        creatorReferences: formData.references,
        projectGoals: formData.notes,
        source: "studio_checkout_modal",
      };

      // 1. Submit to Next.js API route (saves lead to database)
      await fetch("/api/50ninjas/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 500);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const getWhatsAppConfirmationUrl = () => {
    const text = encodeURIComponent(
      `Hi 50Ninjas Studio! I just submitted my onboarding brief for the ${activePlanObj.name} plan ($${activePlanObj.monthlyIntro}/mo with code FOUNDER).\n\nName: ${formData.name}\nInstagram: ${formData.instagram}\nEmail: ${formData.email}\nService: ${formData.aiSubscription}\nStyle: ${formData.style}\nNotes: ${formData.notes || "Ready to get started"}`
    );
    return `https://wa.me/919912664800?text=${text}`;
  };

  const getGoogleFormFallbackUrl = () => {
    return `https://docs.google.com/forms/d/e/1FAIpQLScUqJbNqG7Z-50ninjas/viewform?usp=pp_url&entry.1000001=${encodeURIComponent(
      activePlanObj.name
    )}&entry.1000002=${encodeURIComponent(formData.name)}&entry.1000003=${encodeURIComponent(
      formData.email
    )}&entry.1000004=${encodeURIComponent(formData.instagram)}&entry.1000005=${encodeURIComponent(
      formData.whatsapp
    )}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Modal Card - Ultra Clean Luxury Monochrome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="relative w-full max-w-xl rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-white z-10 my-8 overflow-hidden"
          >
            {/* Top Close button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Connected &amp; Recorded in Google Sheets!
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
                  Your onboarding brief for <strong className="text-white">{activePlanObj.name}</strong> ($
                  {activePlanObj.monthlyIntro}/mo with code FOUNDER) has been synced directly into our Google Sheet. A creative director will reach out within 24 hours.
                </p>

                {/* Submitted Data Summary Box */}
                <div className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2.5">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-400">Selected Plan:</span>
                    <span className="font-bold text-white">
                      {activePlanObj.name} (${activePlanObj.monthlyIntro}/mo &bull; 25% off with code FOUNDER)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Creator:</span>
                    <span className="text-white font-medium">{formData.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Instagram:</span>
                    <span className="text-white font-mono">{formData.instagram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">WhatsApp:</span>
                    <span className="text-white font-mono">{formData.whatsapp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Video Style:</span>
                    <span className="text-zinc-300">{formData.style}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Video Service:</span>
                    <span className="text-zinc-300">{formData.aiSubscription}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={getWhatsAppConfirmationUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm Onboarding via WhatsApp</span>
                  </a>

                  <a
                    href={getGoogleFormFallbackUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-zinc-800"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View in Google Forms</span>
                  </a>
                </div>

                <button
                  onClick={resetAndClose}
                  className="mt-6 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  Close &amp; Back to Website
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-2">
                  <Zap className="w-3 h-3 text-white" />
                  <span>50NINJAS STUDIO CHECKOUT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Hire Your AI Content Team
                </h3>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Done-for-you short-form video production with your face and voice.
                </p>

                {/* Region Availability Pill */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                  <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Available only for <strong>USA / AUS / UK</strong> &bull; <span className="text-zinc-500">Rest coming soon</span></span>
                </div>

                {/* Plan Selector Tabs (Monochrome High Contrast) */}
                <div className="mt-5 grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  {tiers.map((tier) => {
                    const isSelected = currentPlan === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setCurrentPlan(tier.id)}
                        className={`py-2.5 px-2 rounded-xl text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white text-black font-bold shadow-md"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        <p className="text-xs font-bold leading-tight">{tier.name}</p>
                        <p className="text-[11px] opacity-80 mt-0.5">${tier.monthlyIntro}/mo</p>
                        <p className="text-[9px] opacity-70 mt-0.5">{tier.reelsPerMonth} Reels</p>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Plan Deliverables Box */}
                <div className="mt-4 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-xs">
                  <div className="flex items-center justify-between font-medium text-white mb-2 pb-2 border-b border-zinc-800">
                    <span className="font-semibold text-zinc-300">Plan Summary:</span>
                    <span className="font-bold text-white">
                      {activePlanObj.name} &bull; ${activePlanObj.monthlyIntro}/mo ({activePlanObj.frequency})
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{activePlanObj.reelsPerMonth} Vertical Reels (30s – 60s per video)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{activePlanObj.reelsPerMonth} Custom Cover Thumbnails</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Viral Captions &amp; SEO Keywords</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Auto-DM Copy &amp; Automation</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">
                      Regular: <span className="line-through font-mono">${activePlanObj.monthlyRegular}/mo</span>
                    </span>
                    <span className="font-mono text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                      25% OFF with code FOUNDER
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Instagram Handle *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="@yourhandle"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 99126 64800"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Content Style Preference
                      </label>
                      <select
                        value={formData.style}
                        onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        <option value="AI Avatar & Voice Clone (Your Face & Voice)">
                          AI Avatar &amp; Voice Clone (Your Face &amp; Voice)
                        </option>
                        <option value="Faceless B-Roll & Synthetic Voice">
                          Faceless B-Roll &amp; Synthetic Voice
                        </option>
                        <option value="Hybrid (Personal Raw Footage + AI Polish)">
                          Hybrid (Personal Footage + AI Polish)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Preferred Video Service
                      </label>
                      <select
                        value={formData.aiSubscription}
                        onChange={(e) => setFormData({ ...formData, aiSubscription: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        <option value="Google Gemini / Veo">Google Gemini / Veo</option>
                        <option value="HeyGen (Avatar & Voice Clone)">HeyGen (Avatar &amp; Voice Clone)</option>
                        <option value="Runway (Gen-3 / Gen-2)">Runway (Gen-3 / Gen-2)</option>
                        <option value="ElevenLabs + B-Roll Engine">ElevenLabs + Voice Engine</option>
                        <option value="Kling AI / Luma Dream Machine">Kling AI / Luma Dream Machine</option>
                        <option value="Synthesia (AI Video & Avatars)">Synthesia (AI Video &amp; Avatars)</option>
                        <option value="Pika / Midjourney Video">Pika / Midjourney Video</option>
                        <option value="50Ninjas Agency Seat (Recommend for me)">50Ninjas Agency Seat (Recommend for me)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Creator References &amp; Editing Style Inspirations (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Handles or links of creators whose editing you love..."
                      value={formData.references}
                      onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Project Goals &amp; Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your brand, topic niche, or initial Reel ideas..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Primary High-Contrast White Checkout Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
                  >
                    {loading ? (
                      <span>Syncing with 50Ninjas Google Form...</span>
                    ) : (
                      <>
                        <span>Lock In {activePlanObj.name} (${activePlanObj.monthlyIntro}/mo &bull; Code FOUNDER applied) &rarr;</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                      100% IP Ownership
                    </span>
                    <span>&bull;</span>
                    <span>Zero Password Sharing</span>
                    <span>&bull;</span>
                    <span>Cancel Anytime</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}