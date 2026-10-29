"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Floating Pill (When closed) */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center justify-between gap-8 bg-[#0D0D0D] text-white px-5 py-2.5 rounded-b-2xl shadow-xl border-x border-b border-black min-w-[210px] md:min-w-[240px]"
        >
          {/* Brand Name */}
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-white hover:opacity-80 transition-opacity pl-1"
          >
            {siteConfig.name}
          </a>

          {/* Three-dots button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center bg-white text-black hover:bg-neutral-200 transition-colors px-3 py-1 rounded-full text-xs font-black tracking-widest cursor-pointer shadow-sm"
            aria-label="Open Navigation Menu"
          >
            •••
          </button>
        </motion.div>
      </div>

      {/* Expanded Mega-Menu Dropdown Overlay (Exact match to screenshot) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0E0E0E] text-white flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar with Seamless Connected Pill */}
            <div className="w-full flex justify-center pt-0 px-6">
              <div className="flex items-center justify-between gap-8 bg-[#0D0D0D] text-white px-5 py-2.5 rounded-b-2xl border-x border-b border-white/10 min-w-[210px] md:min-w-[240px]">
                <a
                  href="#hero"
                  onClick={handleLinkClick}
                  className="text-base font-semibold tracking-tight text-white hover:opacity-80 transition-opacity pl-1"
                >
                  {siteConfig.name}
                </a>

                {/* Close Button / Active dots */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-white text-black hover:bg-neutral-200 transition-colors px-3 py-1 rounded-full text-xs font-black tracking-widest cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  •••
                </button>
              </div>
            </div>

            {/* Main Content Area: 3 Columns (Scaling / Quick links / Contact) */}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-20 z-10 my-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Column 1: Scaling Start-ups for Growth. */}
                <div className="md:col-span-5 lg:col-span-5">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
                  >
                    Scaling
                    <br />
                    Start-ups
                    <br />
                    for Growth.
                  </motion.h2>
                </div>

                {/* Column 2: /Quick links with white pills */}
                <div className="md:col-span-4 lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    <span className="block text-sm sm:text-base font-medium text-[#888888] mb-6">
                      /Quick links
                    </span>

                    <div className="flex flex-wrap gap-2.5 max-w-sm">
                      {quickLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="inline-block bg-white text-[#111111] hover:bg-neutral-200 active:scale-95 px-5 py-2 rounded-full text-sm font-semibold tracking-tight transition-all shadow-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Column 3: /Contact with Email */}
                <div className="md:col-span-3 lg:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    <span className="block text-sm sm:text-base font-medium text-[#888888] mb-6">
                      /Contact
                    </span>

                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-base sm:text-lg font-medium text-white hover:text-neutral-300 transition-colors"
                    >
                      {siteConfig.social.email}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Giant Subtle Background Watermark ("MAJD" or "SHUBHAM") */}
            <div className="w-full overflow-hidden select-none pointer-events-none pb-2 flex justify-center">
              <span className="text-[18vw] font-black tracking-widest text-white/[0.04] leading-none uppercase whitespace-nowrap">
                {siteConfig.name}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
