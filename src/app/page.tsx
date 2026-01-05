"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaShoppingBasket,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

/* ---------------- TYPES ---------------- */
type Product = {
  id: number;
  name: string;
  desc: string;
  price?: string;
  img: string;
};

/* ---------------- DATA ---------------- */
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Impact Yummy Yummy",
    desc: "A tangy, chewy crusty loaf. Perfect for toasts and sandwiches.",
    price: "₦2,500",
    img: "/Bread/Impactyummyyummy.png",
  },
  {
    id: 2,
    name: "Impact Tea Mate",
    desc: "Nutty whole grain bread, healthy and hearty.",
    price: "₦2,000",
    img: "/bread2.jpg",
  },
  {
    id: 3,
    name: "Impact Jumbo",
    desc: "Crispy crust with a soft interior — classic loaf.",
    price: "₦1,800",
    img: "/bread3.jpg",
  },
  {
    id: 4,
    name: "Tea Mate Jumbo",
    desc: "Open crumb, great for paninis and dipping.",
    price: "₦2,200",
    img: "/bread4.jpg",
  },
  {
    id: 5,
    name: "Impact Mini",
    desc: "Dense and flavorful, perfect for snacks.",
    price: "₦2,300",
    img: "/bread5.jpg",
  },
];

/* ---------------- PAGE ---------------- */
export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    {
      name: "Aisha M.",
      text: "Impact Bakery's bread is my family's staple. Fresh every time!",
    },
    {
      name: "Chidi O.",
      text: "Fast delivery and the sourdough is unbeatable.",
    },
    {
      name: "Ngozi K.",
      text: "Crispy crust and soft crumb — perfect breakfast bread.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestiIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF6] text-slate-900">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/ImpactBakeryimages/background.JPG"
          alt="Bakery Background"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold mb-4">
              Baked Fresh at 4:00 AM Daily
            </span>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              THE ART OF <br />
              <span className="text-amber-400 italic font-light">
                Real Bread.
              </span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Experience handcrafted loaves baked fresh every morning.
            </p>

            <div className="flex gap-4">
              <a
                href="#products"
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2"
              >
                Shop Collection <FaShoppingBasket />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PRODUCTS ---------------- */}
      <section
        id="products"
        className="py-24 bg-[#043927] rounded-t-[5rem]"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -10 }}
              className="bg-[#054d35] rounded-[2.5rem] p-4"
            >
              <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {p.name}
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                {p.desc}
              </p>

              <button
                onClick={() => setActiveProduct(p)}
                className="w-full bg-amber-500 text-white py-3 rounded-2xl font-bold"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-[3rem] max-w-4xl w-full relative overflow-hidden"
            >
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"
              >
                <FaTimes size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-96">
                  <Image
                    src={activeProduct.img}
                    alt={activeProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-10">
                  <h2 className="text-4xl font-black mb-4">
                    {activeProduct.name}
                  </h2>
                  <p className="text-slate-600 mb-6">
                    {activeProduct.desc}
                  </p>
                  <p className="text-2xl font-black">
                    {activeProduct.price}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- ICON ---------------- */
const FaTimes = ({
  size,
  className = "",
}: {
  size: number;
  className?: string;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
