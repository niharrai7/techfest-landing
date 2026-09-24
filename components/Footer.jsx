"use client";

import { Terminal } from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#020305] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-cyan-500/30 bg-cyan-950/30">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold tracking-widest text-sm uppercase font-sans text-white">
                  TECHFEST
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  IIT BOMBAY
                </p>
              </div>
            </div>

            <p className="max-w-md text-xs text-slate-400 font-sans leading-relaxed">
              Techfest is Asia&apos;s largest annual science and technology festival, organized independently by the student body of IIT Bombay.
            </p>

            <div className="font-mono text-[11px] text-slate-500 space-y-1">
              <div>LOCATION // {SITE_METADATA.location}</div>
              <div>COORDINATES // {SITE_METADATA.coordinates}</div>
            </div>
          </div>

          {/* Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-cyan-400 font-bold tracking-widest uppercase mb-4">
              VERTICALS
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#competitions" className="hover:text-cyan-300 transition-colors">
                  COMPETITIONS
                </a>
              </li>
              <li>
                <a href="#radar" className="hover:text-cyan-300 transition-colors">
                  WORKSHOPS
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-cyan-300 transition-colors">
                  EXHIBITIONS
                </a>
              </li>
              <li>
                <a href="#robowars" className="hover:text-cyan-300 transition-colors">
                  ROBOWARS ARENA
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">
                  TECHNOHOLIX
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Metadata (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-purple-400 font-bold tracking-widest uppercase mb-4">
              INFORMATION
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://techfest.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  OFFICIAL PORTAL
                </a>
              </li>
              <li>
                <span className="text-slate-500">28TH EDITION</span>
              </li>
              <li>
                <span className="text-slate-500">ESTABLISHED 1998</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Techfest, IIT Bombay. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 text-cyan-400/70 text-[11px]">
            THE FUTURE IS BUILT HERE.
          </div>
        </div>
      </div>
    </footer>
  );
}
