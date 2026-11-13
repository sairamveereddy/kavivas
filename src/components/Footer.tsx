"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/kavivas-logo-white.png"
                alt={KAVIVAS_DATA.company.brandName}
                width={584}
                height={342}
                className="hidden dark:block h-12 sm:h-14 w-auto object-contain"
              />
              <Image
                src="/kavivas-logo-dark.png"
                alt={KAVIVAS_DATA.company.brandName}
                width={584}
                height={342}
                className="block dark:hidden h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              {KAVIVAS_DATA.company.mission}
            </p>

            <div className="mt-6 space-y-1 text-xs font-mono text-slate-400">
              <p>CIN: {KAVIVAS_DATA.company.cin}</p>
              <p>Registered in Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Studio
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-normal">
              <li>
                <Link href="#work" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Owned Platforms */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Owned Ventures
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-normal">
              {KAVIVAS_DATA.ownedWebsites.map((site) => (
                <li key={site.id}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-white transition-colors group"
                  >
                    <span>{site.name}</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {site.status}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </p>
            <div className="mt-4 space-y-2.5 text-sm font-normal">
              <a
                href={`mailto:${KAVIVAS_DATA.company.email}`}
                className="block text-slate-800 dark:text-slate-200 hover:underline transition-colors"
              >
                {KAVIVAS_DATA.company.email}
              </a>
              <a
                href={`tel:${KAVIVAS_DATA.company.phone}`}
                className="block text-slate-800 dark:text-slate-200 hover:underline transition-colors"
              >
                {KAVIVAS_DATA.company.phoneDisplay}
              </a>
              <p className="text-xs text-slate-400 mt-2 font-normal">Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {KAVIVAS_DATA.company.copyrightYear} Kavivas Tech Pvt Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Built for clarity, speed, and real-world outcomes</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
              title="Back to Top"
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
