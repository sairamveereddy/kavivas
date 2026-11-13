"use client";

import { motion } from "framer-motion";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function StatsSection() {
  return (
    <section className="relative py-20 px-6 md:px-10 border-b border-white/10 bg-[#0d0f12]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {KAVIVAS_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight group-hover:text-[#b8e8dc] transition-colors">
                {stat.number}
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-100 uppercase tracking-wider">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
