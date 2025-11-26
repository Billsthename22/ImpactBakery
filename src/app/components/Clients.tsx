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

// ⭐ Custom Star component
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-7 h-7 transition-all duration-300 ${
      filled
        ? "text-[#e57a2a] drop-shadow-[0_0_8px_rgba(229,122,42,0.5)]"
        : "text-gray-300"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.01 4.077a.56.56 0 00.423.307l4.496.654c.484.07.678.665.327.998l-3.253 3.17a.56.56 0 00-.161.496l.768 4.476c.083.48-.422.848-.85.622L12.5 16.96a.56.56 0 00-.52 0l-4.027 2.118c-.429.226-.934-.142-.85-.622l.768-4.476a.56.56 0 00-.161-.496l-3.253-3.17a.56.56 0 01.327-.998l4.496-.654a.56.56 0 00.423-.307l2.01-4.077z"
    />
  </svg>
);

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0);

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < count} />);

  return (
    <section className="relative py-32 px-6 lg:px-20 bg-[#fff8f0] overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute -top-40 -left-20 w-[28rem] h-[28rem] bg-[#f3d3b5]/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#e57a2a]/20 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.25em] font-semibold text-[#e57a2a] mb-2">
          FROM OUR CLIENTS
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-[#5b3a29] mb-16">
          What Our Customers Say
        </h2>

        {/* Card Slider */}
        <div className="overflow-hidden h-[400px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ type: "spring", stiffness: 90, damping: 20 }}
              className="w-full flex justify-center"
            >
              <div className="relative bg-white rounded-3xl shadow-xl border border-[#f2e3d3] p-12 max-w-3xl
                backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.015]">
                
                {/* Stars */}
                <div className="flex justify-center mb-6">{renderStars(testimonials[current].rating)}</div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg sm:text-xl mb-10 leading-relaxed">
                  "{testimonials[current].text}"
                </p>

                {/* Customer Info */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#5b3a29]">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-500 text-sm tracking-wide">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-[#e57a2a] scale-125 shadow-md"
                  : "bg-gray-300 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
