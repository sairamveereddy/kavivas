"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  PenTool,
  Rocket,
  Zap,
  CheckCircle2,
  Clock,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function ServicesSection() {
  const [activeStepId, setActiveStepId] = useState(KAVIVAS_DATA.services[0].id);

  const activeService =
    KAVIVAS_DATA.services.find((s) => s.id === activeStepId) || KAVIVAS_DATA.services[0];

  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-5 h-5 text-sky-500" />;
      case "PenTool":
        return <PenTool className="w-5 h-5 text-amber-500" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-emerald-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-purple-500" />;
      default:
        return <Layers className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-500" />
            <span>Studio Delivery Methodology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 dark:text-white leading-[1.1]">
            A full 360° approach to{" "}
            <span className={`${instrumentSerif.className} font-normal italic`}>
              product elevation
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            From initial validation to category leadership. We combine discovery, strategy, engineering, and delivery with human-centred design and deep technical expertise.
          </p>
        </div>

        {/* 4 Stage Selector Tabs */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {KAVIVAS_DATA.services.map((service) => {
            const isActive = service.id === activeStepId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveStepId(service.id)}
                className={`relative text-left p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none"
                    : "bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-medium ${isActive ? "text-slate-950 dark:text-white font-bold" : "text-slate-400"}`}>
                    STAGE {service.number}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-medium text-slate-950 dark:text-white">{service.title}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                  {service.headline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Details Card */}
        <div className="mt-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Scope & Deliverables */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                    Phase {activeService.number}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Estimated Velocity: {activeService.timeline}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 dark:text-white">
                  {activeService.headline}
                </h3>

                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {activeService.description}
                </p>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Key Deliverables &amp; Outcomes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-normal text-slate-800 dark:text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Standards */}
              <div className="lg:col-span-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                      {getIcon(activeService.icon)}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-slate-400">Stage Pipeline</p>
                      <h4 className="text-lg font-medium text-slate-950 dark:text-white">{activeService.title} Focus</h4>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic font-normal">
                    &ldquo;{activeService.summary}&rdquo;
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <p className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                      <span>Methodology</span>
                      <span className="font-semibold text-slate-900 dark:text-white">Human-Centred AI</span>
                    </p>
                    <p className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                      <span>Engineering Quality</span>
                      <span className="font-semibold text-slate-900 dark:text-white">SOC2 &amp; Production Grade</span>
                    </p>
                    <p className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                      <span>Delivery Cycle</span>
                      <span className="font-semibold text-slate-900 dark:text-white">Weekly Rapid Iteration</span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Link
                    href="#contact"
                    className="relative text-sm font-medium rounded-full h-11 p-1 ps-6 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-6 w-full overflow-hidden cursor-pointer bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-between"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Consult On This Phase
                    </span>
                    <span className="absolute right-1 w-9 h-9 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
