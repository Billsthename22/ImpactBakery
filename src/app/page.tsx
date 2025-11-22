"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import OurProducts from "./components/Products";
import WhyChooseUs from "./components/Whychooseus";
import ContactUs from "./components/ContactUs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      {/* NAVBAR & HERO SECTION */}
      <Navbar />
      <HeroSection />

      {/* ABOUT SECTION CONTENT */}
      <section className="relative bg-[#faf9f7] py-28 px-6 lg:px-28 overflow-hidden">
        {/* SLANTED DOUBLE OVAL BACKGROUND CENTERED */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Bottom Peach Oval */}
          <div
            className="absolute w-[600px] h-[380px] bg-[#f8d8c4] rounded-[50%] rotate-[25deg] opacity-90"
            style={{ boxShadow: "0 0 60px rgba(248, 216, 196, 0.7)" }}
          ></div>

          {/* Top Green Outline Oval */}
          <div
            className="absolute w-[560px] h-[320px] border-[3px] border-[#8bb99d] rounded-[50%] rotate-[20deg] opacity-80 translate-x-[-40px] translate-y-[-50px]"
            style={{ boxShadow: "0 0 25px rgba(139, 185, 157, 0.4)" }}
          ></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-center text-[#e57a2a] font-bold text-lg tracking-widest mb-4">
            -ABOUT US-
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-4xl font-serif text-[#0f1720] leading-tight mb-6">
                Freshly Baked
                <br />
                Happiness Every
                <br />
                Day
              </h2>

              {/* Stacked Images */}
              <div className="relative w-full max-w-sm mt-10">
                <div className="absolute -left-6 -top-6 w-44 h-28 rounded-md overflow-hidden shadow-lg rotate-[-8deg]">
                  <img
                    src="/bread.png"
                    alt="Bakery photo 1"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute left-8 top-20 w-52 h-36 rounded-md overflow-hidden shadow-lg rotate-[6deg]">
                  <img
                    src="/impact.png"
                    alt="Bakery photo 2"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="relative pt-60">
                  <button className="mx-auto block mt-6 border-2 border-[#f0a35a] text-[#f07a2a] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#f07a2a] hover:text-white transition">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 relative">
              {/* Decorative SVGs */}
              <svg
                viewBox="0 0 800 520"
                className="absolute -left-24 -top-12 w-[850px] h-[520px] pointer-events-none"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M120 380 C240 300, 420 120, 560 210"
                  stroke="#8bb99d"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                />
                <circle cx="690" cy="340" r="12" fill="#cfe9dc" opacity="0.9" />
                <circle cx="720" cy="300" r="8" fill="#f6d7c1" opacity="0.9" />
                <circle cx="620" cy="420" r="6" fill="#cfe9dc" opacity="0.9" />
              </svg>

              <div className="relative z-10 space-y-10 max-w-xl ml-auto">
                {/* WHO WE ARE */}
                <article className="space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute right-0 top-2 w-[84px] h-[34px] bg-[#12966b] rounded-sm translate-x-1 translate-y-1 z-0" />
                    <button className="relative z-10 bg-[#e67a2d] text-white px-4 py-2 rounded-sm font-semibold text-sm">
                      WHO WE ARE
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Impact Bakery, a proud subsidiary of Impact Manufacturers Ltd., stands at the forefront of modern baking in Africa. With a commitment to innovation, consistency, and customer-centered excellence, we specialize in producing premium baked goods — breads, pastries, cakes, and specialty desserts — in line with the highest standards of hygiene and artistry.
                  </p>
                </article>

                {/* OUR VISION */}
                <article className="space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute right-0 top-2 w-[84px] h-[34px] bg-[#12966b] rounded-sm translate-x-1 translate-y-1 z-0" />
                    <button className="relative z-10 bg-[#e67a2d] text-white px-4 py-2 rounded-sm font-semibold text-sm">
                      OUR VISION
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To become Africa’s most trusted and innovative bakery brand, setting global standards for quality, creativity, and sustainable impact.
                  </p>
                </article>

                {/* OUR MISSION */}
                <article className="space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute right-0 top-2 w-[84px] h-[34px] bg-[#12966b] rounded-sm translate-x-1 translate-y-1 z-0" />
                    <button className="relative z-10 bg-[#e67a2d] text-white px-4 py-2 rounded-sm font-semibold text-sm">
                      OUR MISSION
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To delight our customers daily with products that blend artisan excellence and industrial precision, creating moments of joy while contributing to our community and environment.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <OurProducts />
      <WhyChooseUs />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  );
}
