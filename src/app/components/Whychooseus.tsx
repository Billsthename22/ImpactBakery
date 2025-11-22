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
    <section className="relative py-28 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">

      {/* SUBTLE BLURRED OVAL ACCENTS */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#f8d8c4]/40 rounded-full blur-3xl pointer-events-none
                      sm:w-60 sm:h-60 sm:-top-12 sm:-left-12"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8bb99d]/20 rounded-full blur-3xl pointer-events-none
                      sm:w-64 sm:h-64"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-widest font-semibold text-[#b97a41]">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-20 leading-tight">
          Excellence Baked Into Every Bite
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl p-10 text-left shadow-[0_8px_20px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                         transition-all duration-300 hover:-translate-y-2"
            >
              <item.icon className="w-12 h-12 text-[#c08649] mb-6 group-hover:scale-110 transition" />

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
