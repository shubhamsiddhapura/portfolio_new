"use client";

import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-28 md:py-44 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto text-center">
        <Reveal duration={0.9}>
          <p className="text-2xl sm:text-3xl md:text-[2.2rem] font-medium leading-[1.4] text-[#111111] tracking-tight">
            From idea to launch. Clean, scalable digital products built to move
            fast, stay simple, and perform in real-world use, driven by clarity,
            structured systems, and intentional design.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
