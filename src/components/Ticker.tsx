"use client";

import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function Ticker() {
  const items = KAVIVAS_DATA.tickerItems;

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-white py-5">
      {/* Edge Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Infinite Horizontal Marquee */}
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.18em] text-slate-800 hover:text-[#3D4ADF] transition-colors">
              {item}
            </span>
            <span className="text-xs text-[#3D4ADF] font-bold select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
