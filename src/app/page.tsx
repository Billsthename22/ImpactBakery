"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaShoppingBasket, 
  FaStar, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaTimes,
  FaCheckCircle,
  FaWhatsapp 
} from "react-icons/fa";
import { Wheat, Flame, MapPin } from "lucide-react";
import Navbar from "@/app/components/Navbar";

type Product = {
  id: number;
  name: string;
  desc: string;
  price?: string;
  img: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Impact Yummy Yummy", desc: "A tangy, chewy crusty loaf. Perfect for toasts and sandwiches.", price: "₦1,300", img: "/yummy.jpg" },
  { id: 2, name: "Impact Tea Mate", desc: "Nutty whole grain bread, healthy and hearty.", price: "₦2,200", img: "/teamatespecial.jpg" },
  { id: 3, name: "Impact Jumbo", desc: "Crispy crust with a soft interior — classic loaf.", price: "₦1,500", img: "/teamatejumbo.jpg" },
  { id: 4, name: "Tea Mate Jumbo", desc: "Open crumb, great for paninis and dipping.", price: "₦2,200", img: "/bread4.jpg" },
  { id: 5, name: "Impact Mini", desc: "Dense and flavorful, perfect for snacks.", price: "₦2,300", img: "/Bread/ImpactMini.png" },
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
  }, [testimonials.length]);

  const handleOrder = (productName: string) => {
    const message = `Hello Impact Bakery, I would like to order: ${productName}`;
    window.open(`https://wa.me/2348050552109?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDFCF6] text-slate-900 selection:bg-amber-200">
      <Navbar />

    {/* --- HERO SECTION --- */}
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#043927]">
        {/* Background Image with Zoom Animation */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/ImpactBakeryimages/background.JPG" 
            alt="Bakery Background" 
            fill 
            className="object-cover brightness-[0.5] contrast-[1.1]"
            priority
          />
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#043927]/90 via-[#043927]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#043927] via-transparent to-transparent opacity-60" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Baked Fresh in Asaba at 4:00 AM
            </motion.div>

            <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-8 uppercase">
              De&apos; <span className="text-amber-500 italic font-serif font-light lowercase">Impact</span> <br/> 
              <span className="relative">
                Crust
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-emerald-50/80 mb-10 max-w-xl leading-relaxed font-medium">
              Handcrafted with patience, baked on stone, and delivered with a passion for the perfect crumb. 
              <span className="text-amber-400"> Experience bread the way it was meant to be.</span>
            </p>

            <div className="flex flex-wrap gap-5">
              <Link 
                href="#products" 
                className="group bg-amber-500 hover:bg-amber-600 text-[#043927] px-10 py-5 rounded-2xl font-black transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(245,158,11,0.2)] active:scale-95"
              >
                SHOP COLLECTION 
                <FaShoppingBasket className="group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link 
                href="#about" 
                className="group backdrop-blur-xl bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all flex items-center gap-3"
              >
                OUR STORY 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-amber-500" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <Image src="/ImpactBakeryimages/About.JPG" alt="Baker at work" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#043927] p-10 rounded-[2rem] hidden lg:block shadow-xl">
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
                <p>We don&apos;t use shortcuts. Just flour, water, salt, and a passion for the perfect crumb.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-bold text-[#043927]">Wholesale</h4>
                  <p className="text-sm text-slate-500">Partnering with Asaba&apos;s finest restaurants and cafes.</p>
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
<section id="products" className="py-24 bg-[#043927] rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 relative z-20 shadow-2xl">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
      <div>
        <span className="text-amber-400 font-bold uppercase tracking-widest text-sm underline decoration-amber-400/30 underline-offset-8">The Bakery Shop</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">Our Signatures</h2>
      </div>
      <p className="text-emerald-200 max-w-xs mt-4 md:mt-0 italic opacity-80 leading-relaxed">
        Freshly baked every morning. Please order early to ensure availability.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PRODUCTS.slice(0, 3).map((p) => (
        <motion.div 
          key={p.id}
          whileHover={{ y: -10 }}
          className="bg-[#054d35] rounded-[2.5rem] p-4 border border-emerald-800/50 transition-all group cursor-pointer hover:bg-[#065a3e]"
          onClick={() => setActiveProduct(p)}
        >
          {/* IMAGE BOX - Adjusted to "fit" better */}
          <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-6 bg-emerald-900/50 shadow-inner">
            <Image 
              src={p.img} 
              alt={p.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            {/* Subtle Overlay to make the image "sit" in the card */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />

            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-[#043927] shadow-xl text-sm">
              {p.price}
            </div>
          </div>

          <div className="px-4 pb-4">
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors uppercase tracking-tight">
              {p.name}
            </h3>
            <p className="text-emerald-100/70 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
              {p.desc}
            </p>
            <button className="w-full bg-amber-500 text-[#043927] py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white hover:text-amber-600 transition-all group-hover:shadow-lg group-hover:shadow-amber-500/20">
              VIEW BREAD DETAILS <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-20 flex justify-center">
      <Link href="/Products" className="group">
        <div className="bg-white/5 hover:bg-white/10 border border-emerald-700/50 px-10 py-5 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center gap-4">
          <span className="text-white font-black tracking-[0.2em] text-xs">
            VIEW ALL PRODUCTS 
          </span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform text-amber-500" />
        </div>
      </Link>
    </div>
  </div>
</section>
      {/* --- REDESIGNED WHY US SECTION --- */}
      <section className="py-24 bg-[#FDFCF6] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-amber-500"></div>
              <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px]">The Impact Difference</span>
              <div className="h-px w-8 bg-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#043927] text-center uppercase tracking-tighter">
              WHAT MAKES OUR <br /> BREAD <span className="text-amber-600 italic">different?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                <Wheat className="text-amber-600 group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-black text-[#043927] mb-4 uppercase">Premium Flour</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Unbleached, high-protein flour for that signature Impact &quot;bounce&quot;.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-auto">
                <FaCheckCircle /> 100% Natural Grains
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -20 }} className="bg-[#043927] p-10 rounded-[3rem] shadow-2xl md:-translate-y-8 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                <Flame className="text-amber-500 group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase">Stone Baked</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">Traditional hearth process creating a deep, caramelized crust.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-auto">
                <FaCheckCircle /> Old-World Methods
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#12966b] transition-colors">
                <MapPin className="text-[#12966b] group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-black text-[#043927] mb-4 uppercase">Asaba Fresh</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Straight from our oven in Asaba to your hands in record time.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-auto">
                <FaCheckCircle /> Locally Handcrafted
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-amber-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Real Reviews</h3>
            <div className="relative max-w-3xl mx-auto h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testiIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="py-10"
                >
                  <FaStar className="text-amber-400 text-4xl mx-auto mb-6" />
                  <p className="text-3xl md:text-4xl font-black text-[#043927] leading-tight italic">&quot;{testimonials[testiIndex].text}&quot;</p>
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
              <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-none">Get It While <br/> It&apos;s <span className="text-amber-500 italic font-serif">Warm.</span></h2>
              <div className="space-y-6 text-emerald-100">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-transparent transition-all"><FaMapMarkerAlt /></div>
                  <p className="text-lg">Specialist Hospital Road, Asaba, Delta State</p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-emerald-700 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-transparent transition-all"><FaPhoneAlt /></div>
                  <p className="text-lg">+234 800 000 0000</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <input className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none" placeholder="Name" />
                   <input className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none" placeholder="Phone" />
                </div>
                <textarea className="w-full bg-emerald-950/50 border border-emerald-800 p-4 rounded-2xl outline-none h-32" placeholder="Message" />
                <button className="w-full bg-amber-600 text-white font-black py-4 rounded-2xl hover:bg-amber-700 transition-all">SEND MESSAGE</button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-xs font-bold tracking-widest">
          <p className="uppercase">IMPACT BAKERY — HANDCRAFTED DAILY</p>
            <div className="flex gap-8">
              <a href="#">INSTAGRAM</a>
              <a href="#">FACEBOOK</a>
              <a href="#">WHATSAPP</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- PRODUCT MODAL --- */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} 
              className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setActiveProduct(null)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500 z-[110]">
                <FaTimes size={24} />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="relative h-96 md:h-full min-h-[400px]">
                  <Image src={activeProduct.img} alt={activeProduct.name} fill className="object-cover" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-amber-500 font-bold text-sm tracking-[0.3em] uppercase mb-2">Premium Selection</span>
                  <h2 className="text-4xl font-black text-[#043927] mb-6 uppercase tracking-tighter leading-tight">{activeProduct.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{activeProduct.desc}</p>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black text-[#043927]">{activeProduct.price}</span>
                    <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold">In Stock</span>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleOrder(activeProduct.name)}
                      className="flex-1 bg-amber-600 text-white font-black py-4 rounded-2xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2"
                    >
                      ORDER ON WHATSAPP <FaWhatsapp />
                    </button>
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