"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function AboutGrowthPartner() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>About Kavivas Tech</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Your AI product &amp; engineering{" "}
              <span className={`${instrumentSerif.className} font-normal italic`}>
                growth partner
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {KAVIVAS_DATA.company.mission}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              We design and build digital experiences that drive measurable outcomes by combining discovery, strategy, engineering, and delivery with human-centred design and deep technical expertise.
            </p>

            <div className="mt-8">
              <Link
                href="#contact"
                className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center shadow-md"
              >
                <span className="relative z-10 transition-all duration-500">
                  Partner With Us
                </span>
                <span className="absolute right-1 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: 4 High-Impact Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KAVIVAS_DATA.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-950 dark:text-white">
                  {stat.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{stat.label}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
