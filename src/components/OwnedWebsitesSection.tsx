"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2, X, Cpu, ShieldCheck } from "lucide-react";
import { KAVIVAS_DATA, OwnedWebsite } from "@/data/kavivas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function OwnedWebsitesSection() {
  const [filter, setFilter] = useState<"all" | "Live" | "Coming Soon">("all");
  const [activeModal, setActiveModal] = useState<OwnedWebsite | null>(null);

  const tabCounts = {
    all: KAVIVAS_DATA.ownedWebsites.length,
    Live: KAVIVAS_DATA.ownedWebsites.filter((s) => s.status === "Live").length,
    "Coming Soon": KAVIVAS_DATA.ownedWebsites.filter((s) => s.status === "Coming Soon").length,
  };

  const filteredWebsites = KAVIVAS_DATA.ownedWebsites.filter((site) => {
    if (filter === "all") return true;
    return site.status === filter;
  });

  return (
    <section id="work" className="py-24 md:py-32 px-6 relative bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Proprietary Ecosystem</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              Websites &amp; platforms we{" "}
              <span className={`${instrumentSerif.className} font-normal italic`}>
                own &amp; operate
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Explore the autonomous AI ecosystems, builder masterminds, and advisory platforms conceived, engineered, and operated directly by Kavivas Tech.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 self-start md:self-auto">
            {(["all", "Live", "Coming Soon"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  filter === tab
                    ? "bg-white dark:bg-slate-950 text-slate-950 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {tab === "all" ? `All Platforms (${tabCounts.all})` : tab === "Live" ? `Live (${tabCounts.Live})` : `Coming Soon (${tabCounts["Coming Soon"]})`}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Showcase Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWebsites.map((site) => (
              <motion.article
                layout
                key={site.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xs border border-slate-200/80 dark:border-slate-700">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        site.status === "Live"
                          ? "bg-emerald-500 animate-pulse"
                          : "bg-sky-500 animate-ping"
                      }`}
                    />
                    <span className="text-[11px] font-medium tracking-wide text-slate-800 dark:text-slate-200">
                      {site.status === "Coming Soon" ? "Coming Soon / Beta" : site.status}
                    </span>
                  </div>

                  {/* External Outbound Link */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md hover:scale-110 transition-transform duration-300"
                    title={`Open ${site.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Image Graphic */}
                  <div className="relative w-full h-full">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      unoptimized={site.image.endsWith(".svg")}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {site.category}
                    </span>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-950 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        {site.name}
                      </a>
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {site.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {site.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModal(site)}
                      className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white underline underline-offset-4 hover:no-underline transition-colors cursor-pointer"
                    >
                      Architecture &amp; Features
                    </button>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:underline transition-colors"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep-Dive Interactive Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-2xl z-10 border border-slate-200 dark:border-slate-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  {activeModal.status === "Coming Soon" ? "Coming Soon / In Active Beta" : activeModal.status}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {activeModal.category}
                </span>
              </div>

              <h3 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-950 dark:text-white">
                {activeModal.name}
              </h3>
              <p className="mt-2 text-base font-normal text-slate-600 dark:text-slate-300">
                {activeModal.tagline}
              </p>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {activeModal.description}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>Key Systems &amp; Technical Capabilities</span>
                </h4>
                <div className="space-y-3">
                  {activeModal.deepDive.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>Proprietary Ecosystem • Kavivas Tech Pvt Ltd</span>
                </div>

                <a
                  href={activeModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium rounded-full h-11 p-1 ps-6 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Launch {activeModal.name}
                  </span>
                  <span className="absolute right-1 w-9 h-9 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
