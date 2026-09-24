"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ChevronRight, Compass, ShieldAlert, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030508] text-white select-none"
    >
      {/* Subtle Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Futuristic 2D SVG Concentric Telemetry Rings & Vectors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-35">
        <svg
          className="w-[850px] h-[850px] animate-[spin_120s_linear_infinite]"
          viewBox="0 0 800 800"
          fill="none"
        >
          {/* Outer Ring */}
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="rgba(0, 240, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          {/* Middle Ring with crosshairs */}
          <circle
            cx="400"
            cy="400"
            r="280"
            stroke="rgba(139, 92, 246, 0.25)"
            strokeWidth="1.5"
          />
          <path
            d="M 400,20 L 400,60 M 400,740 L 400,780 M 20,400 L 60,400 M 740,400 L 780,400"
            stroke="rgba(0, 240, 255, 0.5)"
            strokeWidth="2"
          />
          {/* Inner Telemetry Hex/Ring */}
          <circle
            cx="400"
            cy="400"
            r="180"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 12"
          />
        </svg>

        {/* Opposite direction counter ring */}
        <svg
          className="absolute w-[600px] h-[600px] animate-[spin_90s_linear_infinite_reverse]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="260"
            stroke="rgba(0, 240, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray="20 40"
          />
        </svg>
      </div>

      {/* Animated Horizontal Telemetry Beam */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

      {/* Four Corner Micro-Labels */}
      <div className="absolute top-28 left-6 hidden lg:flex flex-col space-y-1 font-mono text-[10px] text-cyan-400/70 tracking-widest uppercase">
        <span className="flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>TECH / 01</span>
        </span>
        <span className="text-slate-500">SYSTEM ONLINE</span>
      </div>

      <div className="absolute top-28 right-6 hidden lg:flex flex-col items-end space-y-1 font-mono text-[10px] text-purple-400/70 tracking-widest uppercase">
        <span className="flex items-center space-x-1.5">
          <span>SCIENCE / 02</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </span>
        <span className="text-slate-500">28TH EDITION</span>
      </div>

      <div className="absolute bottom-10 left-6 hidden lg:flex flex-col space-y-1 font-mono text-[10px] text-slate-500 tracking-widest uppercase">
        <span className="text-cyan-400/80">INNOVATION / 03</span>
        <span>LAT 19.1334° N // LON 72.9133° E</span>
      </div>

      <div className="absolute bottom-10 right-6 hidden lg:flex flex-col items-end space-y-1 font-mono text-[10px] text-slate-500 tracking-widest uppercase">
        <span className="text-purple-400/80">IMPACT / 04</span>
        <span>PAN-ASIA GRAND ARENA</span>
      </div>

      {/* Central Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
        >
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>TECHFEST &bull; IIT BOMBAY</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] text-white font-sans drop-shadow-2xl"
        >
          THE FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-500">
            IS BUILT HERE.
          </span>
        </motion.h1>

        {/* Subhead Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-sans font-normal leading-relaxed"
        >
          Where science, technology and human imagination collide. Experience Asia&apos;s largest technology festival featuring high-stakes robotics, masterclasses, and global innovations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="#categories"
            cursorText="EXPLORE"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all duration-300 border border-cyan-200/50"
          >
            <span className="flex items-center space-x-2">
              <span>EXPLORE TECHFEST</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </MagneticButton>

          <MagneticButton
            href="#radar"
            cursorText="RADAR"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs tracking-widest uppercase border border-white/15 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xs"
          >
            <span className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>DISCOVER EVENTS</span>
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 font-mono text-[9px] text-slate-500 tracking-widest">
        <span>SCROLL TO DISCOVER</span>
        <div className="w-4 h-7 rounded-full border border-slate-700 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
