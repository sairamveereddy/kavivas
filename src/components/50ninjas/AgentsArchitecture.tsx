"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  PenTool,
  Sparkles,
  Video,
  Scissors,
  Layout,
  PackageCheck,
  BarChart3,
  Cpu,
  Layers,
  Bot
} from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function AgentsArchitecture() {
  const [selectedAgent, setSelectedAgent] = useState<number>(0);
  const agents = FIFTY_NINJAS_DATA.agents;

  const iconMap: Record<string, any> = {
    Search,
    Calendar,
    PenTool,
    Sparkles,
    Video,
    Scissors,
    Layout,
    PackageCheck,
    BarChart3,
    Cpu,
  };

  return (
    <section id="agents" className="py-24 md:py-32 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-300 mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>PART IV • 50Ninjas OS Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08]">
            10 Specialized{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-purple-300`}>
              AI Production Agents
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Our upcoming operating system coordinates 10 autonomous agents across research, storytelling, automated video rendering, and delivery while retaining human creative direction.
          </p>
        </div>

        {/* 10 Agent Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map((agent, i) => {
            const IconComp = iconMap[agent.icon] || Cpu;
            const isSelected = selectedAgent === i;

            return (
              <button
                key={agent.name}
                type="button"
                onClick={() => setSelectedAgent(i)}
                className={`p-5 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-purple-950/60 border-2 border-purple-500 shadow-xl shadow-purple-900/30 -translate-y-1"
                    : "bg-slate-900/40 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight">{agent.name}</h3>
                  <p className="text-[11px] font-medium text-purple-300 mt-0.5">
                    {agent.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1">
                  {agent.tools.slice(0, 2).map((tool) => (
                    <span
                      key={tool}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Agent Spotlight */}
        <div className="mt-8 p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <span>Agent 0{selectedAgent + 1} Spotlight</span>
              <span>•</span>
              <span>Autonomous Workflow</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {agents[selectedAgent].name} — {agents[selectedAgent].role}
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              {agents[selectedAgent].description}
            </p>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-medium">Underlying Technologies:</span>
              {agents[selectedAgent].tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 shrink-0">
            <p className="text-emerald-400 font-bold mb-1">● Human-in-the-Loop</p>
            <p className="text-slate-400 max-w-[200px] leading-tight">
              AI automates repetitive production; our creative directors verify quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
