"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "360° Approach", href: "#methodology" },
    { label: "Why Kavivas", href: "#why-us" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center">
              <Image
                src="/kavivas-logo-white.png"
                alt={KAVIVAS_DATA.company.brandName}
                width={584}
                height={342}
                className="hidden dark:block h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <Image
                src="/kavivas-logo-dark.png"
                alt={KAVIVAS_DATA.company.brandName}
                width={584}
                height={342}
                className="block dark:hidden h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#3D4ADF] transition-colors group flex items-center gap-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D4ADF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Button - Signature Design In DC Blue Pill Button */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${KAVIVAS_DATA.company.phone}`}
              className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
            >
              {KAVIVAS_DATA.company.phoneDisplay}
            </a>

            <Link
              href="#contact"
              className="btn-ddc-primary px-6 py-2.5 text-sm font-semibold tracking-wide"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white border-b border-slate-200 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-900 hover:text-[#3D4ADF] py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-ddc-primary w-full py-3.5 text-center text-sm font-semibold"
                >
                  <span>Start A Project / Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="text-center text-xs text-slate-500 pt-2 font-mono">
                  {KAVIVAS_DATA.company.email} • {KAVIVAS_DATA.company.phoneDisplay}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
