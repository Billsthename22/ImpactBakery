"use client";

import { ShieldCheck, Wheat, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Ingredients",
    desc: "We believe that the best creations start with the finest ingredients. At Lovebite, we source only the highest quality components to ensure the integrity and taste of our products.",
  },
  {
    icon: Wheat,
    title: "Unrivaled Bakery Expertise",
    desc: "Lovebite Foods and Beverages is renowned for its mastery in the art of baking, especially fruit bread. Our team blends tradition with innovation to create baked goods that delight every sense.",
  },
  {
    icon: Sparkles,
    title: "Artisanal Craft, Made With Heart",
    desc: "At Impact Bakery, every loaf and pastry is shaped with passion. Our baking goes beyond recipes — each item is crafted by hand to deliver warmth, comfort, and a truly homemade taste.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#fff8f0] overflow-hidden">

      {/* Enhanced background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f5c78b]/40 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 right-1/4 w-72 h-72 bg-[#f2e2c4]/50 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#d6f2e2]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-1/3 w-80 h-80 bg-[#fdd6b2]/30 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-widest font-semibold text-[#e57a2a] mb-2">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mb-12 leading-tight">
          Excellence Baked Into Every Bite
        </h2>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-white rounded-3xl p-10 text-left shadow-lg
                         ring-1 ring-gray-200/50 hover:ring-[#e57a2a]/30
                         transition-all duration-300 hover:-translate-y-3"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-gradient-to-br from-[#fbe8d3] to-[#d6f2e2] rounded-3xl blur-xl transition-all"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#e57a2a] group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
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
