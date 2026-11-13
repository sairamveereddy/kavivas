"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function PhilosophyBanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 bg-slate-900 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-amber-500/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Studio Manifesto</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08]">
            We&apos;re building{" "}
            <span className={`${instrumentSerif.className} font-normal italic`}>
              people-first AI
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We&apos;re designing AI-enabled experiences, whilst leveraging AI in our toolkit and processes, for the benefit of both users and project teams alike.
          </p>

          <p className="mt-3 text-sm text-slate-400 font-normal">
            Zero AI theatre. Engineered for clarity, speed, and real-world outcomes.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="shrink-0"
        >
          <Link
            href="#contact"
            className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-white text-slate-900 hover:bg-slate-100 inline-flex items-center shadow-xl"
          >
            <span className="relative z-10 transition-all duration-500 font-semibold">
              Start Building With Us
            </span>
            <span className="absolute right-1 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
