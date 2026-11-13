"use client";

import {
  Users,
  ArrowRight,
  MessageCircle,
  Video,
  Lightbulb,
  Share2,
} from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

interface CommunitySectionProps {
  onOpenApplication: () => void;
}

export default function CommunitySection({ onOpenApplication }: CommunitySectionProps) {
  const steps = FIFTY_NINJAS_DATA.communitySteps;
  const niches = [
    "Technology & AI",
    "Personal Finance",
    "Startup & Business",
    "Fitness & Habits",
    "Education & Career",
    "Food & Recipes",
    "Travel & Culture",
    "Creative Storytelling",
    "Lifestyle & Beauty",
    "Motivation & Mindset",
  ];

  return (
    <section id="community" className="py-24 md:py-32 bg-black text-white border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Eyebrow */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5 text-white" />
            <span>THE 50NINJAS EXPERIMENT • FREE COHORT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08]">
            50 People. 50 Personal Brands.{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-zinc-200`}>
              One Community.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            The 50Ninjas Experiment is a free creator cohort designed to bring together 50 aspiring creators who want to establish and grow their personal brands with AI. Zero previous video editing or followers required.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Zero Followers Needed</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                You do not need an existing audience or expensive cameras. Begin from ground zero and let practical AI workflows do the heavy lifting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              ✦ Accessible to everyone
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Camera Fear Eliminated</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                Not ready to be on camera? Create high-engagement Reels using authorized AI avatars, synthetic voices, motion graphics, and faceless formats.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              ✦ Faceless &amp; Avatar workflows
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-5">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Weekly Collab Post</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                Publish at least one original Reel per week and invite <strong className="text-white">@50ninjas.ai</strong> as a collaborator for shared audience reach.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              ✦ Reciprocal growth engine
            </div>
          </div>
        </div>

        {/* Supported Niches */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Choose Your Content Domain
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            AI is the Production Tool &mdash; You Choose the Topic
          </h3>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto mb-6">
            We do not require everyone to create AI videos. A finance creator talks about wealth; a food creator shares recipes; a tech builder talks about software. Individuality is celebrated.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {niches.map((niche) => (
              <span
                key={niche}
                className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
              >
                {niche}
              </span>
            ))}
          </div>
        </div>

        {/* 8-Step Community Roadmap */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Action Over Theory
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The 8-Step Community Journey
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
              Not a 40-hour lecture course. You start scripting, generating, and publishing from week one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className="text-2xl font-mono font-bold text-zinc-500 mb-2">
                  {st.step}
                </div>
                <h4 className="text-base font-semibold text-white tracking-tight">
                  {st.title}
                </h4>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Call to Action Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
              Limited to 50 Founding Creators
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Ready to build your personal brand with AI?
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl">
              Apply today to secure your spot in Cohort #1. Participation is 100% free for accepted founding creators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenApplication}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
            >
              <span>Submit Free Application</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <a
              href={FIFTY_NINJAS_DATA.brand.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors border border-zinc-800"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Group</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}