"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react"; 
import { FaWhatsapp, FaBreadSlice } from "react-icons/fa";
import Navbar from "../components/Navbar"; // Importing Navbar

// --- PRODUCT DATA ---
const CATEGORIES = ["All", "Premium", "Signature", "Daily"];

const PRODUCTS = [
  { id: 1, name: "Tea Mate Jumbo", category: "Premium", price: "₦2,200", img: "/teamatejumbo.jpg", desc: "Our top-tier jumbo loaf, baked with extra milk and honey for a rich, velvety texture. Perfect for family breakfasts and gourmet French toast." },
  { id: 2, name: "Jumbo", category: "Signature", price: "₦1,850", img: "/jumbo.jpg", desc: "The classic Impact Bakery Jumbo. Famous for its incredible softness and impressive size. A staple for every household." },
  { id: 3, name: "Tea Mate Special", category: "Premium", price: "₦1,500", img: "/teamatespecial.jpg", desc: "A special blend optimized for the perfect tea-dipping experience. It holds its shape perfectly even when soaked." },
  { id: 4, name: "Superloaf", category: "Signature", price: "₦1,400", img: "/superloaf.jpg", desc: "The powerhouse loaf. Dense, nutritious, and incredibly filling. One slice is enough to power your morning." },
  { id: 5, name: "Yummy Yummy", category: "Signature", price: "₦1,300", img: "/yummy.jpg", desc: "A slightly sweeter dough that kids and adults absolutely love. Soft, airy, and delicious even without butter." },
  { id: 7, name: "Medium Loaf", category: "Daily", price: "₦870", img: "/medium.jpg", desc: "The ideal mid-sized loaf for everyday meals. Freshly baked every morning to ensure peak fluffiness." },
  { id: 8, name: "Small Loaf", category: "Daily", price: "₦360", img: "/small.jpg", desc: "Personal sized loaf, baked fresh daily. Great for a single serving or a small snack." },
  { id: 9, name: "Mini Loaf", category: "Daily", price: "₦300", img: "/mini.jpg", desc: "Our smallest treat, perfect for a quick snack on the go. Small in size, big on flavor." },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = `Hello Impact Bakery, I would like to order: ${productName}`;
    // Replace with your actual WhatsApp number
    window.open(`https://wa.me/2348050552109?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fafaf9]">
        
        {/* --- PAGE HEADER --- */}
        <header className="bg-[#043927] pt-32 pb-16 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[10px]">Bakery Menu</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter leading-tight">Our Products</h1>
            <p className="text-emerald-100/60 mt-4 max-w-lg mx-auto text-sm">Freshly baked in Asaba every morning at 4:00 AM. Select a loaf to view details or order.</p>
          </motion.div>
        </header>

        {/* --- FILTER BAR --- */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
          <div className="flex justify-center gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-[#12966b] text-white shadow-lg" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID --- */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={p.id} 
                  onClick={() => setSelectedProduct(p)}
                  className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-2xl hover:border-emerald-100 transition-all group"
                >
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 bg-[#fcfcfc] flex items-center justify-center border border-gray-50">
                    {p.img ? (
                      <Image 
                        src={p.img} 
                        alt={p.name} 
                        fill 
                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="flex flex-col items-center opacity-10">
                        <FaBreadSlice size={60} />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-black shadow-lg">
                      {p.price}
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-2xl font-black text-[#043927] mt-1 flex items-center justify-between">
                      {p.name} <Info size={18} className="text-gray-200 group-hover:text-amber-500 transition-colors" />
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>

        {/* --- PRODUCT MODAL --- */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-[#043927]/95 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-10 bg-gray-100 p-2 rounded-full hover:bg-rose-50 hover:text-rose-500 transition-all">
                  <X size={20} />
                </button>

                <div className="relative h-80 w-full bg-[#f9f9f9] flex items-center justify-center">
                  {selectedProduct.img ? (
                    <Image src={selectedProduct.img} alt={selectedProduct.name} fill className="object-contain p-12" />
                  ) : (
                    <FaBreadSlice size={100} className="text-emerald-800/5" />
                  )}
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">{selectedProduct.category} Collection</span>
                      <h2 className="text-4xl font-black text-[#043927] uppercase tracking-tighter mt-1">{selectedProduct.name}</h2>
                    </div>
                    <div className="text-2xl font-black text-amber-600">{selectedProduct.price}</div>
                  </div>
                  
                  <p className="text-gray-500 leading-relaxed mb-10">
                    {selectedProduct.desc}
                  </p>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleOrder(selectedProduct.name)}
                      className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#043927] transition-all shadow-xl shadow-emerald-200 active:scale-95"
                    >
                      ORDER VIA WHATSAPP <FaWhatsapp size={22} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}