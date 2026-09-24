"use client";

import { CATEGORIES } from "@/lib/data";
import { motion } from "framer-motion";
import { Trophy, Cpu, Globe, Mic, Swords, Sparkles, ArrowUpRight } from "lucide-react";

const ICON_MAP = {
  Trophy,
  Cpu,
  Globe,
  Mic,
  Swords,
  Sparkles,
};

export default function EventCategories() {
  return (
    <section id="categories" className="relative py-24 bg-[#030508] text-white overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>FESTIVAL VERTICALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans leading-none">
              ONE FESTIVAL. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                COUNTLESS WORLDS.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-sm text-slate-400 font-sans leading-relaxed">
            Techfest brings together high-stakes robotics competitions, hands-on masterclasses, cutting-edge international exhibitions, and legendary keynote speakers.
          </p>
        </div>

        {/* Categories 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => {
            const IconComponent = ICON_MAP[cat.icon] || Trophy;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-cursor="VIEW"
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Background Hover Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-cyan-400/80 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20">
                      {cat.id} // {cat.tag}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400/90 font-medium">
                    {cat.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs text-slate-400 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Bar: Metric & Arrow */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">{cat.metrics}</span>
                  <div className="flex items-center space-x-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
