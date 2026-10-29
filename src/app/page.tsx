"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Thoughts from "@/components/Thoughts";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="bg-[#F3F0EC] min-h-screen">
        <Hero />
        <Statement />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Thoughts />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
