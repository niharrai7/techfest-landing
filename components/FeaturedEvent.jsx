"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Shield, Flame, Crosshair, ChevronRight, Cpu } from "lucide-react";

export default function FeaturedEvent() {
  return (
    <section id="robowars" className="relative py-28 bg-[#030508] text-white overflow-hidden border-t border-white/5">
      {/* Red/Crimson Tactical Combat Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 font-mono text-xs tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>FLAGSHIP INTERNATIONAL ARENA</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-sans text-white leading-none">
              ENTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                ARENA.
              </span>
            </h2>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Robowars is Asia&apos;s premier international combat robotics championship. High-powered 120kg titanium hydraulic spinners, pneumatic flippers, and vertical crushers clash inside a bulletproof, high-impact steel enclosure.
            </p>

            {/* Tactical Spec Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-slate-500 block">WEIGHT CLASS</span>
                <span className="text-white font-bold text-sm">60 KG & 120 KG</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-slate-500 block">ARENA SHIELDING</span>
                <span className="text-red-400 font-bold text-sm">TITANIUM STEEL</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <MagneticButton
                href="#competitions"
                cursorText="BATTLE"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all border border-red-400/40"
              >
                <span className="flex items-center space-x-2">
                  <span>ENTER ROBOWARS ARENA</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Abstract 2D Robotics Target HUD Visual (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-gradient-to-b from-red-950/20 via-black to-black border border-red-500/30 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Background Geometric Tactical 2D Target SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r="220" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="10 15" />
                  <circle cx="250" cy="250" r="160" stroke="#00F0FF" strokeWidth="1" />
                  <circle cx="250" cy="250" r="100" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 8" />
                  <path d="M 250,10 L 250,490 M 10,250 L 490,250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                </svg>
              </div>

              {/* Top HUD Status Bar */}
              <div className="relative z-10 flex items-center justify-between font-mono text-xs text-red-400 border-b border-red-500/20 pb-3">
                <span className="flex items-center space-x-1.5">
                  <Crosshair className="w-4 h-4 text-red-500 animate-spin" />
                  <span>TARGET LOCK // ARENA 01</span>
                </span>
                <span className="px-2 py-0.5 rounded-xs bg-red-950/60 border border-red-500/40 text-red-300 text-[10px]">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Center Tactical Emblem */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-950/80 border-2 border-red-500 flex items-center justify-center text-red-400 shadow-[0_0_40px_rgba(239,68,68,0.6)] mb-4">
                  <Cpu className="w-10 h-10 animate-pulse" />
                </div>
                <div className="font-mono text-xs text-slate-400 tracking-widest uppercase">COMBAT MATRIX</div>
                <div className="text-2xl font-black text-white tracking-widest uppercase mt-1">TITANIUM COMBAT BOT</div>
                <div className="mt-2 text-[10px] font-mono text-red-400/90 tracking-widest">
                  IMPACT IMPACT SPECS // 12,000 RPM VERTICAL FLIPPER
                </div>
              </div>

              {/* Bottom Telemetry HUD */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-slate-400 pt-3 border-t border-red-500/20">
                <span>ARENA CAPACITY: 5,000+ SPECTATORS</span>
                <span className="text-red-400 font-bold">LIVE TELEMETRY STREAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
