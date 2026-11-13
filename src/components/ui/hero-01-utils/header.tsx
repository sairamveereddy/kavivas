"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

export const CollaborateButton = ({ className }: { className?: string }) => (
  <Button
    asChild
    className={cn(
      "relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden bg-slate-900 text-white hover:bg-slate-800 cursor-pointer",
      className
    )}
  >
    <Link href="#contact">
      <span className="relative z-10 transition-all duration-500">
        Let&apos;s Collaborate
      </span>
      <span className="absolute right-1 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  </Button>
);

export default function Header({ navigationData, className }: HeaderProps) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={cn(
        "inset-x-0 z-50 px-4 sm:px-6 flex items-center justify-center sticky top-0 min-h-20 py-3",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
          sticky
            ? "px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800 shadow-xl rounded-full"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <div className="pl-2">
          <Link href="/">
            <Logo className="gap-3" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
          <ul className="flex items-center gap-1">
            {navigationData.map((navItem) => (
              <li key={navItem.title}>
                <Link
                  href={navItem.href}
                  className={cn(
                    "px-3.5 lg:px-4 py-1.5 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition tracking-normal",
                    navItem.isActive ? "bg-white dark:bg-slate-950 text-slate-950 dark:text-white shadow-xs" : ""
                  )}
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <CollaborateButton className="hidden sm:inline-flex" />

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navigationData.map((navItem) => (
                <Link
                  key={navItem.title}
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-between"
                >
                  <span>{navItem.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <CollaborateButton className="w-full justify-between" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
