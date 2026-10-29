"use client";

import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] mb-16 md:mb-20">
            What people
            <br />
            are saying
          </h2>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {siteConfig.testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="h-full flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-[#ECE7E1] border border-[#111111]/10 hover:border-[#111111]/25 transition-all duration-300">
                <p className="text-base sm:text-lg leading-relaxed text-[#111111] mb-8 font-normal">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[#111111]/10">
                  <div className="w-10 h-10 rounded-full bg-[#111111] text-[#F3F0EC] flex items-center justify-center font-bold text-xs tracking-wider">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#111111]">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#666666]">{item.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
