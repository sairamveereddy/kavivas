"use client";

import { motion } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight, ArrowDown, Zap } from "lucide-react";
import ReelCardsFan from "@/components/50ninjas/ReelCardsFan";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

interface Hero50NinjasProps {
  onOpenApplication: () => void;
  onOpenStudio: () => void;
}

export default function Hero50Ninjas({
  onOpenApplication,
  onOpenStudio,
}: Hero50NinjasProps) {
  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>★ 50ninjas.kavivas.tech &bull; Managed AI Content Studio</span>
          </div>
        </motion.div>

        {/* Main Headline Focused on Paid Studio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mt-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.06] text-white">
            Scale Your Personal Brand.{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-zinc-200 block sm:inline`}>
              With Your AI Avatar.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails &mdash; <span className="text-white font-semibold">We create. You post.</span>
          </p>
        </motion.div>

        {/* Action Buttons: Monochrome High-Contrast Styling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Primary Paid Studio CTA (Solid White, Black Text) */}
          <button
            onClick={onOpenStudio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all shadow-xl hover:scale-105 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>Hire 50Ninjas Studio • From $79/mo</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>

          {/* Secondary Scroll to Pricing (Dark Zinc) */}
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium text-sm transition-all hover:scale-105 cursor-pointer"
          >
            <span>View Monthly Plans</span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </button>
        </motion.div>

        {/* 3D Fanned Reel Cards with First Video in Center */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6"
        >
          <ReelCardsFan />
        </motion.div>

        {/* 4 Studio Value Stats */}
        <div className="mt-8 pt-10 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
            <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              92.2K
            </div>
            <div className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Peak Organic Views
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-normal leading-tight">
              Over 1,582 likes on flagship viral Reels
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
            <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Your Face
            </div>
            <div className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              &amp; Voice Cloned
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-normal leading-tight">
              Custom AI avatars with natural speech &amp; expressions
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
            <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Amazing
            </div>
            <div className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Video Editing
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-normal leading-tight">
              Kinetic word-by-word subtitles, sound design &amp; B-roll
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
            <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Any Style
            </div>
            <div className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Creator References
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-normal leading-tight">
              Share references of creators you love &mdash; we match it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}