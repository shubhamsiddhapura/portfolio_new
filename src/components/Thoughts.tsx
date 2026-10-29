"use client";

import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Thoughts() {
  return (
    <section
      id="thoughts"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] mb-16 md:mb-20">
            Thoughts
          </h2>
        </Reveal>

        <div className="border-t border-[#111111]/15">
          {siteConfig.thoughts.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <a
                href="#"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-[#111111]/15 transition-all duration-300 hover:pl-2"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] group-hover:opacity-75 transition-opacity">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 mt-2 md:mt-0 text-sm text-[#666666]">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
