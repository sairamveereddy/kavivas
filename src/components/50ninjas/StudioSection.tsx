"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Video,
  Sparkles,
  ArrowRight,
  Film,
  Image as ImageIcon,
  FileText,
  MessageSquare,
  Download,
  Send,
  BookOpen,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

interface StudioSectionProps {
  onOpenStudio: () => void;
}

export default function StudioSection({ onOpenStudio }: StudioSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = FIFTY_NINJAS_DATA.studioSteps;
  const whatWeProvide = FIFTY_NINJAS_DATA.whatWeProvide;
  const flywheel = FIFTY_NINJAS_DATA.creatorFlywheel;

  const targetAudiences = [
    {
      title: "Existing Influencers",
      range: "500 – 20,000+ followers",
      description: "You know your audience but lack the 15+ hours weekly needed to research, script, generate, and edit high-retention Reels.",
    },
    {
      title: "Busy Professionals",
      range: "Advisors, Lawyers, Doctors, Engineers",
      description: "Build an authoritative personal brand in your industry without sacrificing your day job or learning video editing software.",
    },
    {
      title: "Founders & Builders",
      range: "Startups & Solopreneurs",
      description: "Turn your product milestones, technical insights, and founder journey into high-velocity build-in-public Reels.",
    },
    {
      title: "Camera-Shy Creators",
      range: "100% Camera-Free or Hybrid",
      description: "Publish consistently with your likeness and cloned voice without having to sit in front of studio lights or record retakes.",
    },
  ];

  const provideIconMap: Record<string, any> = {
    Film,
    Image: ImageIcon,
    FileText,
    MessageSquare,
  };

  const flywheelIconMap: Record<string, any> = {
    Download,
    Send,
    BookOpen,
  };

  return (
    <section id="studio" className="py-24 md:py-32 bg-black text-white border-b border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4 shadow-sm">
            <Video className="w-3.5 h-3.5 text-white" />
            <span>50ninjas.kavivas.tech &bull; PRODUCTION SUITE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08]">
            We Edit Your Videos The Best Way.{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-zinc-200 block sm:inline`}>
              Bring Any Creator Reference.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            A fully managed short-form video production service. You bring your expertise and creative direction; we clone your face and voice, write viral retention scripts, edit with kinetic subtitles, create custom thumbnails, and prepare auto-DM sequences.
          </p>

          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Our Formula: We Create &bull; You Post &amp; Build Your Substack</span>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 1. WHAT WE PROVIDE (4 Core Deliverables)                       */}
        {/* ------------------------------------------------------------- */}
        <div id="what-we-provide" className="mt-20 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-2.5">
              <Sparkles className="w-3 h-3 text-white" />
              <span>THE 4 CORE DELIVERABLES</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What We Provide for Every Reel
            </h3>
            <p className="mt-2.5 text-sm text-zinc-400 max-w-xl mx-auto">
              You receive a ready-to-post vertical production package. Zero editing, zero prompt-engineering, and zero guesswork required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeProvide.map((item) => {
              const IconComp = provideIconMap[item.icon] || Film;

              return (
                <div
                  key={item.id}
                  className="relative p-7 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {item.subtitle}
                    </p>

                    <p className="mt-3.5 text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-900 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Included in Starter, Growth &amp; Pro tiers</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. CREATOR FLYWHEEL (What You Have to Do)                    */}
        {/* ------------------------------------------------------------- */}
        <div id="creator-flywheel" className="mt-28 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-2.5">
              <Zap className="w-3 h-3 text-white" />
              <span>THE CREATOR FLYWHEEL</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What You Have to Do: 3 Simple Steps
            </h3>
            <p className="mt-2.5 text-sm text-zinc-400 max-w-2xl mx-auto">
              How our creators turn short-form Instagram views into owned, paying Substack community members using automated DMs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {flywheel.map((step, idx) => {
              const IconComp = flywheelIconMap[step.icon] || Download;

              return (
                <div
                  key={step.step}
                  className="relative p-7 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-bold text-zinc-500">
                        {step.step}
                      </span>
                      <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs font-mono text-zinc-300 mt-1">
                      {step.headline}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {idx === 1 && (
                    <div className="mt-6 p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                      <span className="font-semibold text-white">Pro Tip:</span> You can use any auto-DM software, but we strongly recommend <span className="underline font-bold text-white">Superprofile</span> for high deliverability.
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="mt-6 p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                      <span className="font-semibold text-white">Community Ownership:</span> Turn temporary viral views into your own paid or free Substack subscriber list.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. TARGET CREATORS (Who Studio is For)                         */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Audience Match
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Who 50Ninjas Studio is Built For
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
              From established creators to founders and licensed professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudiences.map((aud, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {aud.range}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3.5">{aud.title}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                    {aud.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. 10-STEP STUDIO PRODUCTION ENGINE (Interactive Stepper)       */}
        {/* ------------------------------------------------------------- */}
        <div id="workflow" className="mt-28 pt-16 border-t border-zinc-900 scroll-mt-24">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              End-to-End Execution
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The 10-Step Studio Production Engine
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
              See exactly how our production team takes your brand from onboarding to high-retention ready-to-post Reels.
            </p>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
            {steps.map((st, i) => (
              <button
                key={st.step}
                onClick={() => setActiveStep(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  activeStep === i
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {st.step} {st.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Step Feature Box */}
          <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                Stage {steps[activeStep].step} of 10
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                {steps[activeStep].title}
              </h4>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white disabled:opacity-30 cursor-pointer"
              >
                Previous
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-xs font-semibold text-black disabled:opacity-30 cursor-pointer"
              >
                Next Stage
              </button>
            </div>
          </div>
        </div>

        {/* Studio CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenStudio}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all shadow-xl hover:scale-105 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>Hire 50Ninjas Studio • Select Your Plan</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}