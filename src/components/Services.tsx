"use client";

import Reveal from "./Reveal";

const services = [
  {
    title: "Website Migration",
    tags: "Web Migration • Optimization • Framer Rebuild",
  },
  {
    title: "Framer Templates",
    tags: "Startup • Agency • SaaS",
  },
  {
    title: "Frontend Development",
    tags: "UI Dev • Responsive Layouts • Web Performance",
  },
  {
    title: "Full-Stack Development",
    tags: "Next.js • API Architecture • Database Design",
  },
  {
    title: "Product Consulting",
    tags: "Product Direction • Web Strategy • Technical Guidance",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Title */}
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] mb-16 md:mb-20">
            Services
          </h2>
        </Reveal>

        {/* Services Rows List */}
        <div className="border-t border-[#111111]/15">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-[#111111]/15 transition-all duration-300 hover:pl-2">
                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#111111] group-hover:opacity-75 transition-opacity mb-2 md:mb-0">
                  {service.title}
                </h3>

                {/* Sub-tags / Offerings */}
                <span className="text-xs sm:text-sm md:text-base text-[#666666] font-normal tracking-wide">
                  {service.tags}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
