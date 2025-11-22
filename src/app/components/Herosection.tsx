"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] bg-[black] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bread-bg.jpg" // background bread image
          alt="Bakery background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-6 lg:px-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl text-center lg:text-left mt-24 lg:mt-0"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
            Freshly Baked <br /> Happiness Every Day
          </h1>
          <p className="text-lg font-light mb-8">
            Artisan Breads & Delicious Pastries — crafted with passion,
            perfected with tradition, delivered with delight.
          </p>
          <button className="bg-[#e67a2d] hover:bg-[#cc6925] text-white font-semibold px-6 py-3 rounded-md text-sm transition">
            ORDER NOW
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-[320px] lg:w-[400px] mt-10 lg:mt-0"
        >
          <Image
            src="/images/customer-bread.png" // woman holding bread
            alt="Happy customer holding bread"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
