"use client";

import { useEffect, useState, useRef } from "react";
import { STATS } from "@/lib/data";
import { motion, useInView } from "framer-motion";

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1200; // ms
    const stepTime = Math.max(Math.floor(duration / end), 16);

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-cursor="METRIC"
      className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group backdrop-blur-xs shadow-lg"
    >
      {/* Corner Telemetry Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Number Display */}
      <div className="font-mono text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 group-hover:to-cyan-400 transition-all">
        {count.toLocaleString()}
        <span className="text-cyan-400">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="mt-3 font-sans font-bold text-xs sm:text-sm tracking-widest text-slate-200 uppercase">
        {stat.label}
      </div>

      {/* Subtext */}
      <div className="mt-1 font-mono text-[11px] text-slate-400">
        {stat.subtext}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-[#030508] text-white border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
