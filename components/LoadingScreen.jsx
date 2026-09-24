"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 12;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate ASCII progress bar
  const totalBlocks = 20;
 const filledBlocks = Math.max(
  0,
  Math.min(totalBlocks, Math.floor((progress / 100) * totalBlocks))
);
const emptyBlocks = Math.max(0, totalBlocks - filledBlocks);
const progressBarAscii = `[${"█".repeat(filledBlocks)}${"░".repeat(emptyBlocks)}]`;
  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030508] text-white selection:bg-cyan-500 selection:text-black"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
            {/* Logo Mark / Sci-fi Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-3 h-3 bg-cyan-400 rotate-45 shadow-[0_0_12px_#00F0FF]" />
              <div className="w-2 h-2 bg-purple-500 rotate-45 shadow-[0_0_10px_#8B5CF6]" />
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-3xl md:text-5xl font-black tracking-widest text-white uppercase font-sans">
                TECHFEST
              </h1>
              <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-cyan-400/80 uppercase">
                IIT BOMBAY
              </p>
            </motion.div>

            {/* ASCII Progress Bar & Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2 font-mono text-xs text-slate-400"
            >
              <div className="text-cyan-400 tracking-wider text-[11px] md:text-xs">
                {progressBarAscii}
              </div>
              <div className="flex items-center justify-between px-1 text-[10px] text-slate-500 tracking-widest">
                <span>INITIALIZING TELEMETRY...</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Telemetry Mark */}
          <div className="absolute bottom-8 font-mono text-[10px] text-slate-600 tracking-widest uppercase">
            ASIA&apos;S LARGEST SCIENCE & TECH FESTIVAL // 28TH EDITION
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
