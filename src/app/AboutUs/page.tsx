"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEye, FaRocket, FaHandsHelping, FaCheckCircle, FaIndustry, FaTruckLoading, FaShieldVirus, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  const brandGreen = "#043927";
  const accentAmber = "#D97706";

  return (
    <div className="w-full bg-[#FDFCF6] text-slate-900 selection:bg-amber-200 overflow-hidden">
      
      {/* --- HERO --- */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bakery-hero.jpg" 
            alt="Bakery Hero" 
            fill 
            className="object-cover brightness-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFCF6]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            OUR <br /> 
            <span className="text-amber-500 italic font-light lowercase">legacy.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- SECTION 1: INDUSTRIAL EXCELLENCE (NEW) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#043927] tracking-tighter uppercase">
              Driven by <br/><span className="text-amber-600">Industrial Standards.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              As a proud subsidiary of <strong>Impact Manufacturers</strong>, we operate on a foundation of industrial excellence. Unlike traditional small-scale bakeries, we leverage modern production standards to ensure that every single loaf meets a strict profile of nutrition, taste, and consistency.
            </p>
            <div className="bg-amber-50 p-6 rounded-3xl border-l-4 border-amber-500 italic text-[#043927]">
              "At Impact Bakery, we don't just deliver freshly baked goods; we deliver reliability directly to your doorstep, baked with love and precision."
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-50 text-center">
              <FaIndustry className="text-amber-500 text-3xl mx-auto mb-4" />
              <h4 className="font-bold text-[#043927] uppercase text-xs tracking-widest">Modern Facility</h4>
            </div>
            <div className="bg-[#043927] p-8 rounded-[2rem] shadow-xl text-center text-white">
              <FaShieldVirus className="text-amber-400 text-3xl mx-auto mb-4" />
              <h4 className="font-bold uppercase text-xs tracking-widest">Strict Hygiene</h4>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-50 text-center">
              <FaTruckLoading className="text-amber-500 text-3xl mx-auto mb-4" />
              <h4 className="font-bold text-[#043927] uppercase text-xs tracking-widest">Swift Logistics</h4>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-50 text-center">
              <FaUsers className="text-amber-500 text-3xl mx-auto mb-4" />
              <h4 className="font-bold text-[#043927] uppercase text-xs tracking-widest">Expert Team</h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE WHO WE ARE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-black text-[#043927] uppercase tracking-tighter">Who We Are</h2>
          <div className="text-lg text-slate-600 leading-[1.8] space-y-6">
            <p>
              Impact Bakery is a committed provider of fresh, quality-driven bakery products designed to serve the daily needs of families, retailers, and businesses across Asaba and beyond. We specialize in producing soft, nutritious, and consistently fresh bread supported by efficient processes and reliable distribution.
            </p>
            <p>
              Our operations are powered by a skilled team dedicated to maintaining quality at every stage—from ingredient selection to baking, packaging, and delivery. We represent reliability, accessibility, and service, ensuring homes and businesses can depend on a steady supply of wholesome bread.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STRATEGIC PILLARS --- */}
      <section className="py-24 bg-[#043927] rounded-[3rem] md:rounded-[6rem] mx-4 md:mx-10 mb-12 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
              <FaEye className="text-amber-500 text-4xl mx-auto mb-6" />
              <h4 className="text-2xl font-black text-white uppercase mb-4">Vision</h4>
              <p className="text-emerald-100/60 leading-relaxed">
                To be the most trusted bakery known for creativity, warmth, and community impact.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
              <FaRocket className="text-emerald-400 text-4xl mx-auto mb-6" />
              <h4 className="text-2xl font-black text-white uppercase mb-4">Mission</h4>
              <p className="text-emerald-100/60 leading-relaxed">
                To bake with purpose, deliver excellence, and bring people together through flavor.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
              <FaHandsHelping className="text-amber-400 text-4xl mx-auto mb-6" />
              <h4 className="text-2xl font-black text-white uppercase mb-4">Values</h4>
              <p className="text-emerald-100/60 leading-relaxed">
                Integrity, passion, creativity, excellence, and community — these shape everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 text-center">
        <h2 className="text-[#043927] text-3xl font-black uppercase mb-6 italic">Enriching everyday living.</h2>
        <a href="/Shop" className="inline-block bg-amber-600 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#043927] transition-all">
          Explore Our Products
        </a>
      </section>
    </div>
  );
}