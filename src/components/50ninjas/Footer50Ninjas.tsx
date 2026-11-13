"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";
import Logo50Ninjas from "@/components/50ninjas/Logo50Ninjas";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer50Ninjas() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Logo50Ninjas />

            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              An AI-powered creator ecosystem designed to help individuals build and scale their personal brands with less complexity and more creative freedom.
            </p>

            <div className="mt-5 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <a
                href={FIFTY_NINJAS_DATA.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-zinc-300" />
                <span>{FIFTY_NINJAS_DATA.brand.instagramHandle}</span>
              </a>

              <a
                href={FIFTY_NINJAS_DATA.brand.founderInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
              >
                <span>Founder: {FIFTY_NINJAS_DATA.brand.founderHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium">
              <li>
                <Link href="#what-we-provide" className="hover:text-white transition-colors">
                  What We Provide (Deliverables)
                </Link>
              </li>
              <li>
                <Link href="#creator-flywheel" className="hover:text-white transition-colors">
                  Creator Flywheel (Growth &amp; Superprofile)
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Monthly Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#workflow" className="hover:text-white transition-colors">
                  10-Step Studio Workflow
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-white transition-colors">
                  The 50Ninjas Experiment (Free)
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Community Channels */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Official Channels
            </p>
            <div className="mt-4 space-y-3 text-xs">
              <a
                href={FIFTY_NINJAS_DATA.brand.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Official WhatsApp Cohort</p>
                  <p className="text-[11px] text-zinc-400">Join accepted creators for weekly sprints</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-zinc-500" />
              </a>

              <Link
                href="/"
                className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300 hover:text-white"
              >
                <div className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center text-[10px] font-bold">
                  K
                </div>
                <div>
                  <p className="font-semibold text-white">Kavivas Tech Pvt Ltd</p>
                  <p className="text-[11px] text-zinc-400">Parent AI Product Studio &amp; Engineering</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-zinc-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 50Ninjas • <a href="https://50ninjas.kavivas.tech" className="hover:text-white transition-colors underline underline-offset-2">50ninjas.kavivas.tech</a> • A brand by Kavivas Tech Pvt Ltd (CIN: U63122TS2026PTC210753)</p>

          <div className="flex items-center gap-4">
            <span>Hyderabad, India • Remote-First</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}