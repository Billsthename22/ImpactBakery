"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaEye, 
  FaRocket, 
  FaHandsHelping, 
  FaIndustry, 
  FaTruckLoading, 
  FaShieldVirus, 
  FaUsers,
  FaArrowRight 
} from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  const brandGreen = "#043927";
  const accentAmber = "#D97706";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <> {/* <--- Wrap everything in a Fragment */}
      <Navbar />
      <div className="w-full bg-[#FDFCF6] text-slate-900 selection:bg-amber-200 overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full h-[70vh] flex items-center overflow-hidden bg-[#043927]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/bakery-hero.jpg" 
              alt="Bakery Hero" 
              fill 
              className="object-cover opacity-60 grayscale-[20%]" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#043927] via-[#043927]/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
                Established Excellence
              </span>
              <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                OUR <br /> 
                <span className="text-amber-500 italic font-serif lowercase font-light">Legacy.</span>
              </h1>
              <p className="text-emerald-50/70 text-lg md:text-xl max-w-xl leading-relaxed">
                From the industrial heart of Impact Manufacturers to your breakfast table—defining the new standard of bakery logistics in Asaba.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 1: THE INDUSTRIAL EDGE --- */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-5 sticky top-32">
                <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-4 block">The Impact Parentage</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#043927] tracking-tighter uppercase leading-none mb-8">
                  Industrial <br/><span className="text-amber-600">Precision.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  As a proud subsidiary of <strong>Impact Manufacturers</strong>, we operate on a foundation of industrial excellence. Unlike traditional bakeries, we leverage modern production standards to ensure consistency in every loaf.
                </p>
                <div className="flex items-center gap-4 text-[#043927] font-bold group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#043927] flex items-center justify-center group-hover:bg-[#043927] group-hover:text-white transition-all">
                    <FaArrowRight />
                  </div>
                  <span className="uppercase tracking-widest text-sm">Our Manufacturing Roots</span>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <FaIndustry />, title: "Modern Facility", desc: "Scale-ready infrastructure designed for high-volume, high-quality production.", bg: "bg-white" },
                  { icon: <FaShieldVirus />, title: "Strict Hygiene", desc: "Clinical grade safety protocols at every stage of the baking process.", bg: "bg-[#043927]", dark: true },
                  { icon: <FaTruckLoading />, title: "Swift Logistics", desc: "Optimized distribution networks reaching every corner of Asaba daily.", bg: "bg-white" },
                  { icon: <FaUsers />, title: "Expert Team", desc: "A synergy of master bakers and industrial engineers.", bg: "bg-amber-500", dark: true }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className={`${item.bg} p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 flex flex-col justify-between min-h-[280px] border border-slate-100 transition-all`}
                  >
                    <div className={`${item.dark ? "text-white" : "text-amber-600"} text-4xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-black uppercase text-lg mb-2 ${item.dark ? "text-white" : "text-[#043927]"}`}>{item.title}</h4>
                      <p className={`text-sm leading-relaxed ${item.dark ? "text-emerald-50/70" : "text-slate-500"}`}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: IDENTITY --- */}
        <section className="py-32 bg-[#043927] relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs mb-6">Who We Are</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                Reliability in <br /> <span className="text-amber-500 italic font-serif lowercase">Every Grain.</span>
              </h3>
              <div className="text-emerald-50/80 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                <p>
                  Impact Bakery is a committed provider of fresh, quality-driven bakery products designed to serve the daily needs of families, retailers, and businesses across Asaba.
                </p>
                <p>
                  We represent reliability and accessibility. Powered by a skilled team, we ensure homes and businesses can depend on a steady supply of wholesome, soft, and nutritious bread.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: PILLARS --- */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                { icon: <FaEye />, title: "Vision", text: "To be the most trusted bakery known for creativity, warmth, and community impact.", color: "text-amber-600" },
                { icon: <FaRocket />, title: "Mission", text: "To bake with purpose, deliver excellence, and bring people together through flavor.", color: "text-emerald-600" },
                { icon: <FaHandsHelping />, title: "Values", text: "Integrity, passion, and excellence—the ingredients that shape everything we create.", color: "text-amber-500" }
              ].map((pillar, i) => (
                <motion.div key={i} variants={itemVariants} className="space-y-6 group">
                  <div className={`${pillar.color} text-5xl transition-transform group-hover:scale-110 duration-500`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-3xl font-black text-[#043927] uppercase tracking-tighter">{pillar.title}</h4>
                  <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-amber-500 transition-all duration-700" />
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-40 bg-[#FDFCF6] relative">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[4rem] p-16 md:p-24 shadow-2xl shadow-emerald-900/5 border border-slate-100 overflow-hidden relative"
            >
               {/* Background Text */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-slate-50 opacity-50 z-0 pointer-events-none">
                  ENRICH
               </div>

               <div className="relative z-10">
                  <h2 className="text-[#043927] text-4xl md:text-6xl font-black uppercase mb-10 leading-none">
                    Enriching <br /> <span className="text-amber-600 italic font-serif lowercase">Everyday living.</span>
                  </h2>
                  <Link href="/Products" className="inline-flex items-center gap-4 bg-amber-600 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#043927] transition-all shadow-xl shadow-amber-600/20 active:scale-95">
                    Explore Our Products <FaArrowRight />
                  </Link>
               </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}