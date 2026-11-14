"use client";

import { Check, ArrowRight, Lock, Zap, Globe } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const tiers = FIFTY_NINJAS_DATA.pricingTiers;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-black text-white border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>PRICING &bull; ZERO AGENCY OVERHEAD</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08]">
            Simple, Transparent{" "}
            <span className={`${instrumentSerif.className} font-normal italic text-zinc-200`}>
              Monthly Plans
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            High-velocity AI short-form video production without traditional agency costs. Use promo code{" "}
            <span className="font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
              FOUNDER
            </span>{" "}
            for 25% off all monthly plans.
          </p>

          {/* Region Availability Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              Available only for <strong className="text-white font-semibold">USA / AUS / UK</strong> &bull;{" "}
              <span className="text-zinc-400">Rest of the countries coming soon</span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "bg-zinc-900/90 border-2 border-white shadow-2xl shadow-black scale-100 lg:-translate-y-2"
                  : "bg-zinc-950 border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {tier.frequency}
                  </span>
                </div>

                <p className="mt-2 text-xs text-zinc-400 font-normal leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <div className="flex items-baseline">
                      <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        ${tier.monthlyIntro}
                      </span>
                      <span className="text-sm text-zinc-400 font-medium ml-1.5">/month</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500 line-through font-mono">
                        ${tier.monthlyRegular}/mo
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        Regular price
                      </span>
                    </div>
                  </div>

                  {/* 25% OFF with code FOUNDER callout */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] w-fit">
                    <span className="font-bold text-emerald-400">25% OFF</span>
                    <span className="text-zinc-600">&bull;</span>
                    <span>with code <strong className="font-mono text-white bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">FOUNDER</strong></span>
                  </div>
                </div>

                {/* Revisions, Duration & Priority */}
                <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-1.5 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center justify-between">
                    <span>Revisions: {tier.revisions} round{tier.revisions > 1 ? "s" : ""}/video</span>
                    <span>Queue: {tier.priority}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-300">
                    <span>Duration: <strong>30s – 60s per video</strong></span>
                    <span className="text-zinc-500 font-sans">Based on requirements</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-normal leading-relaxed">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <button
                  onClick={() => onSelectPlan(tier.id)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.popular
                      ? "bg-white hover:bg-zinc-200 text-black shadow-lg hover:scale-105"
                      : "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800"
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-2 text-[10px] text-center text-zinc-500">
                  Ideal for: {tier.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Subscription & Password Policy Box */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row gap-8 items-start">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shrink-0">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight">
              Customer-Provided AI Subscriptions &amp; Security Policy
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              To keep production packages highly accessible, our service operates with clients utilizing an eligible AI video generation subscription (such as Google AI Pro) or authorized agency seats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Zero password sharing: We never ask for your Google login or private credentials.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Transparent billing: No surprise fees or hidden generation surcharges.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Introductory rate locked for your entire initial billing cohort.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Client ownership of all delivered vertical MP4s, scripts, and thumbnails.</span>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2 pt-1 border-t border-zinc-800/60">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Geographic availability: Currently accepting clients in <strong className="text-white">USA, Australia, and UK</strong>. Rest of the countries coming soon.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}