"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ====== TYPES ======
interface Testimonial {
  name: string;
  text: string;
  location: string;
  rating: number;
}

// ====== DATA ======
const testimonials: Testimonial[] = [
  {
    name: "Sarah J.",
    text: "Impact Bakery never fails to delight! Their sourdough loaves are perfectly crusty and soft. Every delivery exceeds expectations.",
    location: "Lagos, Nigeria",
    rating: 5,
  },
  {
    name: "Michael O.",
    text: "I love their artisanal pastries! Delivery is always timely, and their customer service is exceptionally friendly.",
    location: "Abuja, Nigeria",
    rating: 4,
  },
  {
    name: "Emma K.",
    text: "Customer service is top-notch. Everything feels homemade and filled with care. Highly recommend!",
    location: "Port Harcourt, Nigeria",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0);

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < count ? "text-yellow-400 drop-shadow-md" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  return (
    <section className="relative py-32 px-6 lg:px-20 bg-gradient-to-br from-[#fffdf9] to-[#fef7f0] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-40 -left-28 w-[28rem] h-[28rem] bg-[#f9e4d0]/40 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[34rem] h-[34rem] bg-[#d6e8dd]/40 rounded-full blur-[140px]"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.25em] font-semibold text-[#d28a3d] mb-3">
          FROM OUR CLIENTS
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mb-16 leading-tight">
          What Our Customers Say
        </h2>

        {/* Slider */}
        <div className="overflow-hidden h-[380px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full flex justify-center"
            >
              <motion.div
                className="bg-white backdrop-blur-sm/50 shadow-2xl border border-[#f1e4d8] rounded-3xl p-12 max-w-3xl cursor-default hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-6">{renderStars(testimonials[current].rating)}</div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed"
                >
                  "{testimonials[current].text}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-1"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-500 text-sm tracking-wide">{testimonials[current].location}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-[#e57a2a] scale-125 shadow-md"
                  : "bg-gray-300 opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
