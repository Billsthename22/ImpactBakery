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

  // Helper to render stars
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < count ? "text-yellow-500" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="relative py-32 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#f9e4d0]/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#d6e8dd]/40 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-widest font-bold text-[#d28a3d]">
          FROM OUR CLIENTS
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-16 leading-tight">
          What Our Customers Say
        </h2>

        {/* Slider */}
        <div className="overflow-hidden h-[350px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="w-full flex justify-center"
            >
              <div className="bg-white rounded-3xl shadow-lg p-10 max-w-2xl border border-[#f1e4d8]">
                {/* Star Ratings */}
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
                  className="space-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[current].name}</h3>
                  <p className="text-gray-500 text-sm tracking-wide">{testimonials[current].location}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-10 space-x-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#e57a2a] scale-125 shadow-md" : "bg-gray-300 opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
