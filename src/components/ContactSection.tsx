"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Check,
  Copy,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Autonomous AI Agents",
  ]);

  const serviceOptions = [
    "Autonomous AI Agents",
    "0-to-1 Web Platform",
    "Human-Centered UI/UX",
    "AI Strategy & Advisory",
    "Founder Mastermind / 50Ninjas",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(KAVIVAS_DATA.company.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Column: Direct Credentials & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Let&apos;s Build Together</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 dark:text-white leading-[1.08]">
                Start a project or{" "}
                <span className={`${instrumentSerif.className} font-normal italic`}>
                  consult with us
                </span>
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Whether you need custom autonomous AI agents, an end-to-end 0-to-1 web platform, or senior product advisory, we&apos;re ready to turn your problem space into production software.
              </p>

              {/* Direct Info Cards */}
              <div className="mt-10 space-y-3.5">
                {/* Email with 1-click copy */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Email</p>
                      <a
                        href={`mailto:${KAVIVAS_DATA.company.email}`}
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:underline transition-colors"
                      >
                        {KAVIVAS_DATA.company.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Phone</p>
                    <a
                      href={`tel:${KAVIVAS_DATA.company.phone}`}
                      className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:underline transition-colors"
                    >
                      {KAVIVAS_DATA.company.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Headquarters Address & CIN */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Studio Headquarters</p>
                    <p className="text-sm font-normal text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">
                      {KAVIVAS_DATA.company.address}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>CIN: {KAVIVAS_DATA.company.cin}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA indicator */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Direct response guaranteed within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Project Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-950 dark:text-white">Inquiry Received!</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed font-normal">
                    Thank you for reaching out to Kavivas Tech. A principal engineer will review your brief and contact you at your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                      Services Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const selected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                              selected
                                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Your company or venture name"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Estimated Timeline
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                      >
                        <option value="immediate">Immediate / Next 2 weeks</option>
                        <option value="1month">Within 1 month</option>
                        <option value="q1q2">Q1 - Q2 2026</option>
                        <option value="exploratory">Exploratory / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Project Goals &amp; Problem Space *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what you want to build or solve. Include any context regarding AI agents, workflows, or target outcomes..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden cursor-pointer bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-between shadow-md disabled:opacity-50"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      {loading ? "Sending inquiry..." : "Submit Project Brief"}
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                    Strict confidentiality guaranteed. Non-Disclosure Agreements (NDAs) available upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
