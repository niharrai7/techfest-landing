"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 bg-[#030508] text-white overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[170px] pointer-events-none" />

      {/* Animated 2D Circular Radar Vector Backdrop Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <svg
          className="w-[700px] h-[700px] animate-[spin_80s_linear_infinite]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle cx="350" cy="350" r="330" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1.5" strokeDasharray="12 16" />
          <circle cx="350" cy="350" r="240" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
          <circle cx="350" cy="350" r="150" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-6"
        >
          <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>JOIN THE 28TH EDITION</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans leading-none"
        >
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
            ENTER THE FUTURE?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl text-sm sm:text-base text-slate-300 font-sans leading-relaxed"
        >
          Be part of Asia&apos;s largest science and technology festival. Register now to compete, learn, and witness the next era of innovation at IIT Bombay.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="https://techfest.org"
            target="_blank"
            rel="noopener noreferrer"
            cursorText="REGISTER"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-bold text-xs tracking-widest uppercase shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:shadow-[0_0_60px_rgba(0,240,255,0.8)] transition-all duration-300 border border-cyan-200/50"
          >
            <span className="flex items-center space-x-2">
              <span>REGISTER FOR TECHFEST</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </MagneticButton>

          <MagneticButton
            href="#categories"
            cursorText="EXPLORE"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs tracking-widest uppercase border border-white/15 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xs"
          >
            VIEW ALL VERTICALS
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
