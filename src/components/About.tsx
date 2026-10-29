"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function CenterPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[370px] md:max-w-[390px] mx-auto cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full aspect-[4/5] rounded-[2.2rem] overflow-hidden shadow-2xl relative select-none bg-[#1a0505]"
      >
        <Image
          src="/assets/about-portrait.png"
          alt="About portrait"
          width={400}
          height={500}
          priority
          className="w-full h-full object-cover pointer-events-none block"
        />

        {/* Subtle Specular Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hey! (Top) and Bio (Bottom) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-2">
            <Reveal delay={0.1}>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#111111] tracking-tight leading-none mb-12 lg:mb-24">
                Hey!
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-[#111111] font-normal max-w-sm">
                I&apos;m {siteConfig.name}, a builder based in India, currently
                working on high-quality digital products, scalable web apps,
                and modern interactive experiences.
              </p>
            </Reveal>
          </div>

          {/* Center Column: Portrait in center like attached image */}
          <div className="lg:col-span-4 w-full flex justify-center items-center">
            <Reveal delay={0.25} className="w-full flex justify-center">
              <CenterPortrait />
            </Reveal>
          </div>

          {/* Right Column: Narrative + Get Started CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-2">
            <div>
              <Reveal delay={0.3}>
                <p className="text-base sm:text-lg leading-relaxed text-[#111111] font-normal mb-6">
                  I&apos;m a software engineer and creator with a strong focus on
                  building modern, scalable, and conversion-driven web
                  experiences.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-base sm:text-lg leading-relaxed text-[#111111] font-normal mb-8">
                  Over the years, I&apos;ve created and shipped multiple SaaS
                  products and production applications used by global customers,
                  helping them move fast with structural simplicity.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-[#111111]/30 hover:border-[#111111] bg-transparent hover:bg-[#111111] text-[#111111] hover:text-[#F3F0EC] px-6 py-3 rounded-xl text-sm font-semibold transition-all w-fit shadow-sm"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
