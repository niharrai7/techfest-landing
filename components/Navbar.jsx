"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030508]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          data-cursor="HOME"
          className="group flex items-center space-x-3 text-white"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/20 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75" />
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-widest text-sm uppercase font-sans text-white group-hover:text-cyan-400 transition-colors">
              TECHFEST
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
              IIT BOMBAY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="NAVIGATE"
              className="relative text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 transition-colors py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <MagneticButton
            href="#cta"
            cursorText="REGISTER"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 border border-cyan-300/40"
          >
            REGISTER
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-mono tracking-widest text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              ))}

              <div className="pt-4">
                <a
                  href="#cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 rounded-md bg-cyan-500 text-black font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
