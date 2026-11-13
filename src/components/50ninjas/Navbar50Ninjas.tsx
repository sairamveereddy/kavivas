"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo50Ninjas from "@/components/50ninjas/Logo50Ninjas";

interface Navbar50NinjasProps {
  onOpenApplication: () => void;
  onOpenStudio: () => void;
}

export default function Navbar50Ninjas({
  onOpenApplication,
  onOpenStudio,
}: Navbar50NinjasProps) {
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
    { label: "What We Provide", href: "#what-we-provide" },
    { label: "Creator Flywheel", href: "#creator-flywheel" },
    { label: "Pricing", href: "#pricing" },
    { label: "10-Step Workflow", href: "#workflow" },
    { label: "Free Cohort", href: "#community" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 px-4 sm:px-6 py-2.5 rounded-full ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/80"
            : "bg-black/60 backdrop-blur-md border border-zinc-800/80"
        }`}
      >
        {/* Brand Logo - Bespoke Logo, NO purple circle */}
        <Link href="/50ninjas" className="group">
          <Logo50Ninjas />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs: Paid Studio prioritized */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenApplication}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Free Cohort
          </button>

          <button
            onClick={onOpenStudio}
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span>Hire AI Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-black/95 backdrop-blur-2xl border border-zinc-800 p-6 shadow-2xl text-white">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudio();
              }}
              className="w-full py-3 rounded-full text-xs font-bold bg-white hover:bg-zinc-200 text-black transition-colors"
            >
              Hire 50Ninjas Studio (From $79/mo)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-2.5 rounded-full text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
            >
              Join Free Creator Cohort
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
