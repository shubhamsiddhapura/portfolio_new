"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[0.92]">
              Featured
              <br />
              Projects
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-[#111111]/30 hover:border-[#111111] bg-transparent hover:bg-[#111111] text-[#111111] hover:text-[#F3F0EC] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all w-fit shadow-sm"
            >
              <span>View All Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* 2-Column Mockup Cards Grid (Image 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {siteConfig.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.15}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-[#111111]/10 bg-[#ECE7E1]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Subtle hover overlay badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
