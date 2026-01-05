"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaShoppingBasket, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

type Product = {
  id: number;
  name: string;
  desc: string;
  price?: string;
  img: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Impact Yummy Yummy", desc: "A tangy, chewy crusty loaf. Perfect for toasts and sandwiches.", price: "₦2,500", img: "/Bread/Impactyummyyummy.png" },
  { id: 2, name: "Impact Tea Mate", desc: "Nutty whole grain bread, healthy and hearty.", price: "₦2,000", img: "/bread2.jpg" },
  { id: 3, name: "Impact Jumbo", desc: "Crispy crust with a soft interior — classic loaf.", price: "₦1,800", img: "/bread3.jpg" },
  { id: 4, name: "Tea Mate Jumbo", desc: "Open crumb, great for paninis and dipping.", price: "₦2,200", img: "/bread4.jpg" },
  { id: 5, name: "Impact Mini", desc: "Dense and flavorful, perfect for snacks.", price: "₦2,300", img: "/bread5.jpg" },
];

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    { name: "Aisha M.", text: "Impact Bakery's bread is my family's staple. Fresh every time!" },
    { name: "Chidi O.", text: "Fast delivery and the sourdough is unbeatable." },
    { name: "Ngozi K.", text: "Crispy crust and soft crumb — perfect breakfast bread." },
  ];

  useEffect(() => {
    const t = setInterval(() => setTestiIndex((s) => (s + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF6] text-slate-900 selection:bg-amber-200">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/ImpactBakeryimages/background.JPG" 
            alt="Bakery Background" 
            fill 
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest mb-4">
              Baked Fresh at 4:00 AM Daily
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              THE ART OF <br/> <span className="text-amber-400 italic font-light">Real Bread.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Experience the crunch of the crust and the cloud-like softness of our handcrafted loaves, delivered from our oven to your table.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                Shop Collection <FaShoppingBasket />
              </a>
              <a href="#about" className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/ImpactBakeryimages/About.JPG" alt="Baker at work" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#043927] p-10 rounded-[2rem] hidden lg:block">
                <p className="text-amber-400 text-5xl font-black italic">100%</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Natural Ingredients</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#043927] leading-tight">
                WE BELIEVE IN THE <br/> <span className="text-amber-600 italic">Slow Rise.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>Impact Bakery began with a simple mission: to rescue bread from the era of mass production. Every loaf we bake undergoes a long fermentation process, giving it that unmistakable depth of flavor.</p>
                <p>We don't use shortcuts. Just flour, water, salt, and a passion for the perfect crumb. It's bread the way it was meant to be eaten.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-bold text-[#043927]">Wholesale</h4>
                  <p className="text-sm text-slate-500">Partnering with Asaba's finest restaurants and cafes.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#043927]">Retail</h4>
                  <p className="text-sm text-slate-500">Warm loaves available daily at our Specialist Hospital Road location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section id="products" className="py-24 bg-[#043927] rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">The Bakery Shop</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mt-2 uppercase tracking-tighter">Our Signatures</h2>
            </div>
            <p className="text-emerald-200 max-w-xs mt-4 md:mt-0 italic opacity-80">
              Freshly baked every morning. Please order early to ensure availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((p) => (
              <motion.div 
                key={p.id}
                whileHover={{ y: -10 }}
                className="bg-[#054d35] rounded-[2.5rem] p-4 border border-emerald-800 transition-all group"
              >
                <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-bold text-[#043927] shadow-lg">
                    {p.price}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-black text-white mb-2">{p.name}</h3>
                  <p className="text-emerald-100/60 text-sm mb-6 line-clamp-2 leading-relaxed">{p.desc}</p>
                  <button 
                    onClick={() => setActiveProduct(p)}
                    className="w-full bg-amber-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-amber-600 transition-all"
                  >
                    View Bread Details <FaArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-amber-50 rounded-[4rem] p-12 md:p-20 grid md:grid-cols-3 gap-12">
             <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0 shadow-lg shadow-amber-200">🌾</div>
                <h4 className="text-2xl font-black text-[#043927] mb-4">Premium Flour</h4>
                <p className="text-slate-600">We source only the finest grains, ensuring a high protein content for that perfect rise and texture.</p>
             </div>
             <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-[#043927] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0 shadow-lg shadow-emerald-100">🔥</div>
                <h4 className="text-2xl font-black text-[#043927] mb-4">Stone Baked</h4>
                <p className="text-slate-600">Our ovens use traditional stone hearths to give our bread its signature thick, crunchy crust.</p>
             </div>
             <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0 shadow-lg shadow-amber-200">🚚</div>
                <h4 className="text-2xl font-black text-[#043927] mb-4">Local Delivery</h4>
                <p className="text-slate-600">Operating within Asaba limits to ensure the loaf in your hand is as fresh as if you were in the bakery.</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-amber-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Real Reviews</h3>
            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testiIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="py-10"
                >
                  <FaStar className="text-amber-400 text-4xl mx-auto mb-6" />
                  <p className="text-3xl md:text-4xl font-black text-[#043927] leading-tight italic">"{testimonials[testiIndex].text}"</p>
                  <p className="mt-8 font-bold text-slate-400 uppercase tracking-widest">— {testimonials[testiIndex].name}</p>
                </motion.div>
              </AnimatePresence>
            </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contact" className="bg-[#043927] pt-24 pb-12 text-white rounded-t-[5rem]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">Get It While <br/> It's <span className="text-amber-500 italic">Warm.</span></h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center group-hover:bg-amber-500 transition-colors"><FaMapMarkerAlt /></div>
                  <p className="text-lg text-emerald-100">0 Asaba Specialist Hospital Road, Delta State</p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center group-hover:bg-amber-500 transition-colors"><FaPhoneAlt /></div>
                  <p className="text-lg text-emerald-100">+234 800 000 0000</p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center group-hover:bg-amber-500 transition-colors"><FaEnvelope /></div>
                  <p className="text-lg text-emerald-100">impactbakeryasb@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <input className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none focus:border-amber-500 transition-all" placeholder="Name" />
                   <input className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none focus:border-amber-500 transition-all" placeholder="Phone" />
                </div>
                <textarea className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none focus:border-amber-500 transition-all h-32" placeholder="Message" />
                <button className="w-full bg-amber-600 text-white font-black py-4 rounded-2xl hover:bg-amber-700 transition-all">SEND MESSAGE</button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-emerald-900 flex flex-col md:row justify-between items-center gap-6">
            <p className="text-emerald-700 font-bold text-sm uppercase tracking-widest italic">IMPACT BAKERY — HANDCRAFTED DAILY</p>
            <div className="flex gap-8 text-sm font-bold opacity-60">
              <a href="#" className="hover:text-amber-500">INSTAGRAM</a>
              <a href="#" className="hover:text-amber-500">FACEBOOK</a>
              <a href="#" className="hover:text-amber-500">WHATSAPP</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- PRODUCT MODAL --- */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setActiveProduct(null)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500 z-10"><FaTimes size={24} /></button>
              <div className="grid md:grid-cols-2">
                <div className="relative h-96 md:h-full min-h-[400px]">
                  <Image src={activeProduct.img} alt={activeProduct.name} fill className="object-cover" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-amber-500 font-bold text-sm tracking-[0.3em] uppercase mb-2">Premium Selection</span>
                  <h2 className="text-4xl font-black text-[#043927] mb-6 tracking-tighter uppercase">{activeProduct.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{activeProduct.desc}</p>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black text-[#043927]">{activeProduct.price}</span>
                    <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold">In Stock</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-amber-600 text-white font-black py-4 rounded-2xl hover:bg-amber-700 transition-all">ORDER ON WHATSAPP</button>
                    <button onClick={() => setActiveProduct(null)} className="px-6 py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FaTimes = ({ size, className }: { size: number, className: string }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);