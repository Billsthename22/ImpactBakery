"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    text: "Impact Bakery never fails to delight! Their sourdough loaves are perfectly crusty on the outside and soft on the inside. I’ve been a loyal customer for years, and every delivery exceeds my expectations.",
    location: "Lagos, Nigeria",
    rating: 5,
  },
  {
    name: "Michael O.",
    text: "I love their artisanal pastries! Every flavor feels like a new adventure. Delivery is timely and customer service is exceptionally friendly. Easily the best bakery in town.",
    location: "Abuja, Nigeria",
    rating: 4,
  },
  {
    name: "Emma K.",
    text: "Customer service at Impact Bakery is top-notch. Every pastry and loaf feels homemade and heartfelt. Highly recommended!",
    location: "Port Harcourt, Nigeria",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const [paused, setPaused] = useState(false);

  // Auto-swipe (pauses on hover)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total, paused]);

  const handleDragEnd = (_, info: any) => {
    if (info.offset.x < -80) {
      setCurrent((prev) => (prev + 1) % total);
    } else if (info.offset.x > 80) {
      setCurrent((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="relative py-32 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">

      {/* Background gradient blobs */}
      <div className="absolute -top-40 -left-24 w-[30rem] h-[30rem] bg-[#f4d9c0]/40 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#d8f2e2]/40 rounded-full blur-[130px]"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.25em] font-semibold text-[#d28a3d]">
          OUR CLIENTS SPEAK
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-16 leading-tight">
          What Our Customers Say
        </h2>

        {/* Testimonial Slider */}
        <div
          className="overflow-hidden h-[360px] flex justify-center items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="backdrop-blur-xl bg-white/70 shadow-xl border border-[#f0e7de] rounded-3xl p-10 max-w-3xl cursor-grab active:cursor-grabbing"
              >
                {/* Star Rating */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex justify-center mb-6 space-x-1"
                >
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#e57a2a] fill-[#e57a2a]"
                    />
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed"
                >
                  “{testimonials[current].text}”
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-500 text-sm tracking-wide">
                    {testimonials[current].location}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Premium dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${
                  idx === current
                    ? "bg-[#e57a2a] w-10 shadow-md"
                    : "bg-gray-300/70 w-3"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
