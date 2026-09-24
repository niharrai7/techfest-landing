"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Check touch or reduced motion
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchCheck || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hover targets
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer telemetry ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-950/20 text-cyan-300 backdrop-blur-xs font-mono text-[10px] tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        style={{
          x: mouseX,
          y: mouseY,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 44) : 28,
          height: isHovered ? (cursorText ? 80 : 44) : 28,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-1 text-center font-bold text-[9px] leading-tight"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Central focus dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]"
        style={{
          x: mouseX,
          y: mouseY,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
