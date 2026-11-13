"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, Cpu, ExternalLink } from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200">
      {/* Subtle Background Glow Accent (Design In DC Blue Glow) */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#3D4ADF]/5 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#3D4ADF]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Content */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF0FD] border border-[#3D4ADF]/20 text-[#3D4ADF] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D4ADF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D4ADF]" />
              </span>
              <span>AI-First Product Studio • Hyderabad, India</span>
            </motion.div>

            {/* Main Editorial Headline (Matching Design In DC scale & weight) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.05]"
            >
              Elevating Digital Products Through{" "}
              <span className="text-[#3D4ADF]">Creative Strategy</span> &amp; Real Outcomes.
            </motion.h1>

            {/* Subtext from kavivas.tech */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              {KAVIVAS_DATA.company.heroSubtext}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-3 text-sm text-slate-500 font-medium"
            >
              No AI theatre — only focused software people actually stick with.
            </motion.p>

            {/* Dual CTAs in Design In DC Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="btn-ddc-primary px-8 py-4 text-sm font-semibold tracking-wide"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#services"
                className="btn-ddc-outline px-8 py-4 text-sm font-semibold tracking-wide"
              >
                <span>What We Do</span>
              </Link>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D4ADF]" />
                <span>15+ Autonomous Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D4ADF]" />
                <span>25+ Yrs Industry Heritage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D4ADF]" />
                <span>CIN: {KAVIVAS_DATA.company.cin}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Venture Showcase Cards (Design In DC Vertical Card Style) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative space-y-4"
            >
              {KAVIVAS_DATA.ownedWebsites.map((site, index) => (
                <div
                  key={site.id}
                  className={`group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm ddc-card-hover ${
                    index === 0 ? "border-[#3D4ADF]/40 shadow-md shadow-[#3D4ADF]/5" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          site.status === "Live"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {site.status}
                      </span>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#3D4ADF] transition-colors p-1"
                        title={`Open ${site.name}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#3D4ADF] transition-colors truncate">
                      {site.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                      {site.tagline}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#3D4ADF]">
                        {site.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom Card Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#3D4ADF]" />
                  100% In-House Conceived &amp; Engineered
                </span>
                <Link href="#work" className="text-[#3D4ADF] font-bold hover:underline">
                  View Case Details →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
