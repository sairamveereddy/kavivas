"use client";

import { motion } from "framer-motion";
import { Users, Video, Sparkles, ArrowDown } from "lucide-react";

interface JourneySelectorProps {
  activeTab: "community" | "studio";
  onChangeTab: (tab: "community" | "studio") => void;
}

export default function JourneySelector({
  activeTab,
  onChangeTab,
}: JourneySelectorProps) {
  return (
    <section className="py-12 bg-black border-y border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
          Choose Your 50Ninjas Track
        </p>

        <div className="inline-flex p-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl max-w-full overflow-x-auto">
          <button
            onClick={() => onChangeTab("community")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "community"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>50Ninjas Community (100% Free Cohort)</span>
          </button>

          <button
            onClick={() => onChangeTab("studio")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "studio"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>50Ninjas Studio (Done-For-You Production)</span>
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-400 max-w-md mx-auto">
          {activeTab === "community"
            ? "Learn practical AI workflows, conquer camera fear, and build your brand with 50 dedicated creators."
            : "We handle research, scripts, AI generation, editing, thumbnails, and auto-DM copy. You review and post."}
        </p>
      </div>
    </section>
  );
}
