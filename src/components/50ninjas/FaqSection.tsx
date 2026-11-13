"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Users, Video } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<"community" | "studio">("studio");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FIFTY_NINJAS_DATA.faqs.filter((f) => f.category === activeTab);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-black text-white border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Got Questions?{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-zinc-200`}>
              We Have Answers.
            </span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Everything you need to know about joining the free community or hiring our managed studio.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 flex gap-2">
            <button
              onClick={() => {
                setActiveTab("studio");
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "studio"
                  ? "bg-white text-black shadow-md font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Studio FAQs</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("community");
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "community"
                  ? "bg-white text-black shadow-md font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Community FAQs</span>
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-zinc-900 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white text-black" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal border-t border-zinc-900/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}