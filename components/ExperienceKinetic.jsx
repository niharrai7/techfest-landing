"use client";

import { motion } from "framer-motion";

const WORDS = [
  { word: "TECH", color: "from-cyan-400 to-blue-500", label: "CUTTING-EDGE INNOVATION" },
  { word: "PEOPLE", color: "from-purple-400 to-indigo-500", label: "GLOBAL INNOVATOR COMMUNITY" },
  { word: "ENERGY", color: "from-amber-400 to-red-500", label: "UNSTOPPABLE FESTIVAL SPIRIT" },
];

export default function ExperienceKinetic() {
  return (
    <section id="experience" className="relative py-32 bg-[#030508] text-white overflow-hidden border-t border-white/5">
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>THE TECHFEST EXPERIENCE</span>
        </div>

        <div className="space-y-8 sm:space-y-12 my-8">
          {WORDS.map((item, idx) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              data-cursor="EXPERIENCE"
              className="flex flex-col items-center justify-center group"
            >
              <h2 className={`text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.color} leading-none transition-transform duration-500 group-hover:scale-105 select-none drop-shadow-2xl`}>
                {item.word}
              </h2>
              <span className="mt-2 font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase">
                // {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
