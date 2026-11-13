"use client";

import { motion } from "framer-motion";
import { Cpu, Target, Gauge, Layers, ShieldCheck, Check } from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function WhyKavivasSection() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case "Target":
        return <Target className="w-5 h-5 text-amber-500" />;
      case "Gauge":
        return <Gauge className="w-5 h-5 text-emerald-500" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-purple-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="why-us" className="py-24 md:py-32 px-6 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Studio Philosophy &amp; Standards</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              A smarter way to build{" "}
              <span className={`${instrumentSerif.className} font-normal italic`}>
                digital ventures
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              We cut through the noise of AI hype to build enduring products that drive measurable real-world outcomes.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Zero AI Gimmicks • Production Grade Only</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {KAVIVAS_DATA.differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
                    {getIcon(diff.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {diff.subtitle}
                </span>

                <h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-950 dark:text-white">
                  {diff.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Verified Studio Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
