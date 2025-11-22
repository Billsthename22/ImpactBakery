"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    text: "Impact Bakery never fails to delight! Their sourdough loaves are perfectly crusty on the outside and soft on the inside. I’ve been a loyal customer for years, and every delivery exceeds my expectations. The care they put into each batch is evident from the first bite. Whether it's for breakfast or a special occasion, their bread always brings joy to our table.",
    location: "Lagos, Nigeria",
  },
  {
    name: "Michael O.",
    text: "I love their artisanal pastries! Every flavor feels like a new adventure. From the delicate fruit tarts to the rich chocolate croissants, each item is crafted with precision and passion. The team clearly understands the art of baking, and it shows. Delivery is always timely, and their customer service is exceptionally friendly and responsive.",
    location: "Abuja, Nigeria",
  },
  {
    name: "Emma K.",
    text: "Customer service at Impact Bakery is top-notch. The ordering process is smooth, and my deliveries always arrive fresh and on time. I especially appreciate their attention to detail and commitment to quality. Every pastry and loaf is made with care, and it truly feels like you’re getting something homemade and heartfelt. Highly recommend to anyone who loves quality baked goods!",
    location: "Port Harcourt, Nigeria",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-widest font-semibold text-[#e57a2a]">
          FROM OUR CLIENTS
        </p>
        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-12">
          What Our Customers Say
        </h2>

        <div className="overflow-hidden">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-shrink-0 justify-center"
          >
            <div className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl mx-4 text-center">
              <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonials[current].location}</p>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#e57a2a] scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
