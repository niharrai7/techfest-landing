"use client";

import { useRef } from "react";
import { COMPETITIONS } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Code2, Cpu, Wrench, ShieldCheck } from "lucide-react";

export default function CompetitionsSection() {
  const scrollRef = useRef(null);

  return (
    <section id="competitions" className="relative py-28 bg-[#030508] text-white overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-purple-400 tracking-widest uppercase mb-3">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span>HIGH STAKES COMPETITIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-sans leading-none">
              COMPETE. CREATE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
                CONQUER.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-sm text-slate-400 font-sans leading-relaxed">
            Test your engineering, algorithmic, and tactical capabilities in Techfest&apos;s pan-Asia competitive arenas.
          </p>
        </div>

        {/* Horizontal Card Track / Grid */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {COMPETITIONS.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-cursor="COMPETE"
              className="snap-start shrink-0 w-[310px] sm:w-[380px] p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black/80 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-2xl group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: comp.color }}
              />

              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-bold">
                    {comp.code}
                  </span>
                  <span className="text-[10px] text-purple-300 tracking-widest uppercase">
                    {comp.status}
                  </span>
                </div>

                {/* Title & Category */}
                <span className="font-mono text-xs text-slate-400 tracking-wider uppercase block">
                  {comp.category}
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  {comp.title}
                </h3>

                {/* Tagline */}
                <p className="mt-3 font-mono text-xs text-cyan-400/90 leading-snug">
                  {comp.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs text-slate-400 font-sans leading-relaxed">
                  {comp.description}
                </p>

                {/* Tech Specs */}
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
                  <span className="text-slate-500 block text-[10px] uppercase">TECH SPECS:</span>
                  <span className="text-slate-200">{comp.techSpecs}</span>
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-1 font-mono text-xs text-amber-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{comp.prize}</span>
                </div>

                <div className="flex items-center space-x-1 font-mono text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>DETAILS</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
