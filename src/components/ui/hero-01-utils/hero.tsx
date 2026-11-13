"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

type HeroSectionProps = {
  title?: React.ReactNode;
  subtitle?: string;
};

export default function HeroSection({
  title,
  subtitle,
}: HeroSectionProps) {
  return (
    <section>
      <div className="w-full h-full relative">
        <div className="relative w-full pt-6 md:pt-16 pb-8 md:pb-14 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-20 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium tracking-tight leading-[1.08] text-slate-950 dark:text-white"
                >
                  {title || (
                    <>
                      Building bold AI products with{" "}
                      <span className={`${instrumentSerif.className} tracking-tight font-normal italic`}>
                        real outcomes
                      </span>
                    </>
                  )}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
                  className="text-base sm:text-lg font-normal max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {subtitle ||
                    "At Kavivas Tech, we help founders and enterprises build digital experiences that drive measurable outcomes by combining discovery, strategy, engineering, and delivery with human-centred design."}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center flex-col sm:flex-row justify-center gap-4 pt-2"
              >
                <Button
                  asChild
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-slate-900 text-white hover:bg-slate-800 shadow-md"
                >
                  <Link href="#work">
                    <span className="relative z-10 transition-all duration-500">
                      Explore Our Work
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-12 px-7 text-sm font-medium border border-slate-300 dark:border-slate-700 bg-transparent dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/90 text-slate-900 dark:text-white cursor-pointer transition-colors"
                >
                  <Link href="#contact">
                    <span>Start a Project</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Genuine Studio Credentials Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center pt-2"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Hyderabad, India • AI-First Product Studio • CIN: {KAVIVAS_DATA.company.cin}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
