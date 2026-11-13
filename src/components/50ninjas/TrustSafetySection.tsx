"use client";

import { ShieldCheck, Award, Lock, CheckCircle, AlertTriangle } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

export default function TrustSafetySection() {
  const principles = FIFTY_NINJAS_DATA.trustPrinciples;

  const iconMap: Record<string, any> = {
    ShieldCheck,
    Award,
    Lock,
    CheckCircle,
  };

  return (
    <section className="py-20 bg-black text-white border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            Trust, Safety &amp; Ethics
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built on Consent, Privacy &amp; Full IP Ownership
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            How we protect your likeness, ensure transparent AI usage, and respect creator sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pr, i) => {
            const IconComp = iconMap[pr.icon] || ShieldCheck;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pr.title}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                    {pr.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-4">
          <AlertTriangle className="w-5 h-5 text-zinc-400 shrink-0" />
          <p className="leading-relaxed font-normal">
            <strong className="text-white">Service Transparency:</strong> 50Ninjas makes no guarantees of synthetic virality, view numbers, or follower growth. Actual distribution on social platforms depends on original ideas, audience resonance, and consistency.
          </p>
        </div>
      </div>
    </section>
  );
}