"use client";

import { useState } from "react";
import { RADAR_NODES } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  Swords,
  Cpu,
  Globe,
  Mic,
  Trophy,
  Sparkles,
  Radio,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";

const RADAR_ICON_MAP = {
  Swords,
  Cpu,
  Globe,
  Mic,
  Trophy,
  Sparkles,
};

export default function EventRadar() {
  const [selectedNode, setSelectedNode] = useState(RADAR_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeNode = hoveredNode || selectedNode;

  return (
    <section id="radar" className="relative py-24 bg-[#030508] text-white overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>INTERACTIVE RADAR TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
            TECHFEST <span className="text-cyan-400">EVENT RADAR</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans">
            Explore the interconnected nodes of Asia&apos;s largest technology ecosystem. Hover or click any node to access telemetry details.
          </p>
        </div>

        {/* Main Radar Workspace (Grid layout: Radar Diagram + Telemetry Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Top: Interactive 2D Radar Canvas/SVG (8 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] rounded-3xl bg-gradient-to-b from-white/[0.03] to-black/60 border border-white/10 p-6 shadow-2xl overflow-hidden">
            {/* Background Radar Rings & Sweep Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Radial Circles */}
              <div className="w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-cyan-500/20" />
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/10" />
              <div className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full border border-cyan-500/30" />

              {/* Crosshair Lines */}
              <div className="absolute w-full h-px bg-white/10" />
              <div className="absolute h-full w-px bg-white/10" />

              {/* 360-degree Sweeping Beam Line */}
              <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full overflow-hidden animate-[spin_8s_linear_infinite]">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/25 via-cyan-500/5 to-transparent origin-bottom-right transform -rotate-45" />
              </div>
            </div>

            {/* Connecting Vector Lines to Center Node */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {RADAR_NODES.map((node) => {
                const isActive = activeNode.id === node.id;
                return (
                  <line
                    key={node.id}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + node.x * 1.1}%`}
                    y2={`${50 + node.y * 1.1}%`}
                    stroke={isActive ? "#00F0FF" : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={isActive ? "2" : "1"}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Center Core Node */}
            <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-cyan-950/80 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.4)] backdrop-blur-md">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping mb-1" />
              <span className="font-bold text-xs tracking-widest text-white uppercase">TECHFEST</span>
              <span className="font-mono text-[9px] text-cyan-300">IIT BOMBAY</span>
            </div>

            {/* Node Pins around Center */}
            {RADAR_NODES.map((node) => {
              const IconComp = RADAR_ICON_MAP[node.icon] || Zap;
              const isActive = activeNode.id === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${50 + node.x * 1.1}%`,
                    top: `${50 + node.y * 1.1}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  data-cursor="TELEMETRY"
                  className={`absolute z-20 flex flex-col items-center group focus:outline-hidden transition-transform duration-300 ${
                    isActive ? "scale-115" : "scale-100 hover:scale-105"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 text-black border-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.7)]"
                        : "bg-black/70 text-cyan-400 border-white/20 group-hover:border-cyan-400"
                    }`}
                  >
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span
                    className={`mt-1.5 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-md backdrop-blur-xs transition-colors ${
                      isActive
                        ? "bg-cyan-400 text-black shadow-md"
                        : "bg-black/80 text-slate-300 border border-white/10 group-hover:text-cyan-300"
                    }`}
                  >
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right / Bottom: Selected Node Telemetry Panel (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-3xl bg-gradient-to-b from-cyan-950/30 via-black/80 to-black border border-cyan-500/30 backdrop-blur-xl shadow-2xl"
              >
                {/* Telemetry Corner Badges */}
                <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-4 border-b border-white/10">
                  <span className="flex items-center space-x-1.5">
                    <Target className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span>TARGET LOCKED // {activeNode.id.toUpperCase()}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-300 text-[10px]">
                    VERIFIED DATA
                  </span>
                </div>

                {/* Node Title & Category */}
                <div className="mt-6">
                  <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                    {activeNode.category}
                  </span>
                  <h3 className="text-3xl font-black uppercase text-white tracking-tight mt-1">
                    {activeNode.label}
                  </h3>
                </div>

                {/* Stat Pill */}
                <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeNode.stats}</span>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm text-slate-300 leading-relaxed font-sans">
                  {activeNode.description}
                </p>

                {/* Highlight Badge */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">KEY HIGHLIGHT:</span>
                  <span className="text-purple-300 font-bold">{activeNode.highlight}</span>
                </div>

                {/* Launch Button */}
                <div className="mt-8">
                  <a
                    href="#competitions"
                    data-cursor="LAUNCH"
                    className="group flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  >
                    <span>ENTER {activeNode.label} VERTICAL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
