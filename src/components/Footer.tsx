"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0E0E0E] text-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] pt-0 overflow-hidden shadow-2xl mt-12">
      {/* Top Center Signature Pill (Click to scroll to top) */}
      <div className="w-full flex justify-center">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-between gap-8 bg-[#0D0D0D] text-white px-5 py-2.5 rounded-b-2xl border-x border-b border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-lg min-w-[210px] md:min-w-[240px]"
          title="Back to top"
        >
          <span className="text-base font-semibold tracking-tight text-white pl-1">
            {siteConfig.name}
          </span>
          <span className="flex items-center justify-center bg-white text-black px-3 py-1 rounded-full text-xs font-black tracking-widest">
            •••
          </span>
        </button>
      </div>

      {/* Main Content Area: 3 Columns matching the image */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Scaling Start-ups for Growth. */}
          <div className="md:col-span-5 lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Scaling
                <br />
                Start-ups
                <br />
                for Growth.
              </h2>
            </Reveal>
          </div>

          {/* Column 2: /Quick links with white pill buttons */}
          <div className="md:col-span-4 lg:col-span-4">
            <Reveal delay={0.15}>
              <span className="block text-sm sm:text-base font-medium text-[#888888] mb-6">
                /Quick links
              </span>

              <div className="flex flex-wrap gap-2.5 max-w-sm">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-block bg-white text-[#111111] hover:bg-neutral-200 active:scale-95 px-5 py-2 rounded-full text-sm font-semibold tracking-tight transition-all shadow-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Column 3: /Contact with Email */}
          <div className="md:col-span-3 lg:col-span-3">
            <Reveal delay={0.25}>
              <span className="block text-sm sm:text-base font-medium text-[#888888] mb-6">
                /Contact
              </span>

              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-base sm:text-lg font-medium text-white hover:text-neutral-300 transition-colors block break-all"
              >
                {siteConfig.social.email}
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Giant Subtle Background Watermark ("MAJD" or "SHUBHAM") */}
      <div className="w-full overflow-hidden select-none pointer-events-none pb-4 flex justify-center">
        <span className="text-[18vw] font-black tracking-widest text-white/[0.04] leading-none uppercase whitespace-nowrap">
          {siteConfig.name}
        </span>
      </div>

      {/* Bottom Sub-row with Copyright and Socials */}
      <div className="w-full border-t border-white/[0.08] px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] font-medium z-10 relative">
        <div>
          &copy;{currentYear} {siteConfig.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter / X
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div>Built with Next.js</div>
      </div>
    </footer>
  );
}
