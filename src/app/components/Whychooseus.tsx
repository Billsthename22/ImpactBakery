"use client";

import { ShieldCheck, Wheat, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Ingredients",
    desc: "We believe the best creations begin with the finest ingredients. At Lovebite, we select only the highest-grade components to guarantee freshness, purity, and unforgettable flavor.",
  },
  {
    icon: Wheat,
    title: "Unrivaled Bakery Expertise",
    desc: "Lovebite Foods and Beverages is renowned for mastery in the art of baking. We blend tradition with innovation, creating fruit breads and pastries that stand out in taste and texture.",
  },
  {
    icon: Sparkles,
    title: "Artisanal Craft, Made With Heart",
    desc: "Every item at Impact Bakery is lovingly handcrafted. Our bakers infuse passion into every loaf, creating warm, comforting, homemade goodness in every bite.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">

      {/* TEXTURE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('/grain.png')] bg-repeat pointer-events-none"></div>

      {/* LEFT COLOR GRADIENT ACCENT */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-br from-[#8bb99d]/30 to-transparent blur-3xl"></div>

      {/* RIGHT ORANGE ACCENT */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-tl from-[#e57a2a]/20 to-transparent blur-3xl"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] font-semibold text-[#e57a2a]">
          WHY CHOOSE US
        </p>

        <div className="relative inline-block">
          <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-6 leading-tight">
            Excellence Baked Into Every Bite
          </h2>

          {/* Decor line */}
          <div className="w-24 h-1 bg-[#8bb99d] mx-auto rounded-full"></div>
        </div>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 mb-20 text-lg leading-relaxed">
          Lovebite Foods & Beverages stands out through unmatched craftsmanship,
          rich flavors, and a passion for creating the finest baked goods.
        </p>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group relative bg-white rounded-3xl p-10 text-left shadow-xl
                         ring-1 ring-gray-200/50 hover:ring-[#8bb99d]/30
                         transition-all duration-300 hover:-translate-y-3"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-3xl bg-gradient-to-br from-[#8bb99d]/20 to-[#e57a2a]/20 blur-lg"></div>

              {/* Icon bubble */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8bb99d]/10 mb-6
                              transition transform group-hover:scale-110">
                <item.icon className="w-8 h-8 text-[#e57a2a]" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
