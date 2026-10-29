"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-28 pb-8 overflow-hidden select-none"
    >
      {/* Top spacer to balance floating nav */}
      <div className="w-full h-4" />

      {/* Center Giant Typography (Clean, Minimalist) */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center my-auto">
        <div className="relative w-full flex flex-col items-center text-center">
          {/* SOFTWARE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5vw] font-black leading-[0.84] tracking-[-0.05em] text-[#111111] uppercase"
          >
            SOFTWARE
          </motion.h1>

          {/* ENGINEER */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5vw] font-black leading-[0.84] tracking-[-0.05em] text-[#111111] uppercase mt-1 sm:mt-2"
          >
            ENGINEER
          </motion.h1>
        </div>
      </div>

      {/* Bottom Footer Details of Hero */}
      <div className="w-full max-w-[1400px] mx-auto flex items-end justify-between pt-8 border-t border-[#111111]/10">
        {/* Left: (C)2026 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]"
        >
          &copy;2026
        </motion.div>

        {/* Right: /CREATING SINCE 2020 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#111111]"
        >
          /CREATING SINCE 2020
        </motion.div>
      </div>
    </section>
  );
}
