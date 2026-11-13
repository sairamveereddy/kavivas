"use client";

import { Marquee } from "@/components/ui/hero-01-utils/marquee";
import { motion } from "framer-motion";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function BrandSlider() {
  const capabilities = [
    "Autonomous Multi-Agent AI",
    "JobNinjas.ai",
    "50Ninjas Builder Mastermind",
    "VSRInsurancePlus.com",
    "KaviNote iOS App",
    "Full-Stack Web & Cloud",
    "Human-Centred UX Design",
    "0-to-1 Product Incubation",
    "EEOC & SOC2 Compliance",
    "FastAPI & LangGraph RAG",
    "Next.js App Router Architecture",
  ];

  return (
    <section className="border-b border-slate-100 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50">
      <div className="py-6 md:py-8">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-center text-center">
              <div className="flex items-center gap-4">
                <div className="hidden md:block h-px w-20 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
                <p className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  CORE ENGINEERING &amp; PRODUCT ECOSYSTEM
                </p>
                <div className="hidden md:block h-px w-20 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
              </div>
            </div>

            <div className="py-2">
              <Marquee pauseOnHover className="[--duration:28s] p-0">
                {capabilities.map((item, index) => (
                  <div key={index} className="flex items-center gap-8 px-4">
                    <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap">
                      {item}
                    </span>
                    <span className="text-xs text-slate-300 dark:text-slate-600 font-bold select-none">
                      ✦
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export { BrandSlider };
