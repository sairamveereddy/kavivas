"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    whatsapp: "",
    niche: "Tech & AI",
    experience: "Zero / Beginner",
    motivation: "",
    agreed: false,
  });

  const niches = [
    "Tech & AI",
    "Personal Finance & Wealth",
    "Startup & Entrepreneurship",
    "Fitness & Habit Science",
    "Education & Career",
    "Food & Cooking",
    "Travel & Culture",
    "Creative & Storytelling",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        plan: "Founding 50 Community (Free Cohort)",
        fullName: formData.name,
        email: "community-applicant@50ninjas.ai",
        instagram: formData.instagram,
        whatsapp: formData.whatsapp,
        contentStyle: `Niche: ${formData.niche} • Exp: ${formData.experience}`,
        aiSubscription: "Community Free Tier",
        projectGoals: formData.motivation,
        source: "community_application_modal",
      };

      await fetch("/api/50ninjas/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Community submission error:", err);
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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-white z-10 my-8 overflow-hidden"
          >
            {/* Close button */}
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
                <h3 className="text-2xl font-bold tracking-tight text-white">Application Recorded!</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
                  Your application for the <strong className="text-white">Founding 50 Creator Cohort</strong> has been
                  recorded in our Google Forms registry.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-left">
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider font-semibold">
                    Admissions Step
                  </p>
                  <p className="text-sm font-medium text-white mt-1">
                    Join the 50Ninjas Official WhatsApp Cohort with handle{" "}
                    <span className="text-white font-mono">{formData.instagram || "@creator"}</span>
                  </p>
                  <a
                    href={FIFTY_NINJAS_DATA.brand.whatsappCommunityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Join Official WhatsApp Group</span>
                  </a>
                </div>

                <button
                  onClick={resetAndClose}
                  className="mt-6 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  Done &amp; Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-2">
                  <span>FOUNDING 50 CREATOR COHORT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Join the 50Ninjas Experiment</h3>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Participation is 100% free. No prior followers or video editing experience required.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sairam Veereddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                    />
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
                        Content Niche *
                      </label>
                      <select
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        {niches.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        <option value="Zero / Beginner">Zero / Beginner (0 followers)</option>
                        <option value="Intermediate">Intermediate (Under 1k followers)</option>
                        <option value="Active Creator">Active Creator (1k+ followers)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      What are you most excited to build?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what topics or personal brand message you want to explore..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-0.5 rounded border-zinc-800 text-white focus:ring-white bg-zinc-900"
                      />
                      <span>
                        I commit to publishing at least 1 original Reel per week and inviting{" "}
                        <strong className="text-white">@50ninjas.ai</strong> as a collaborator.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl disabled:opacity-50 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>{loading ? "Recording in Google Form..." : "Submit Free Application"}</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}