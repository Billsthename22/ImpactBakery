"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Playfair_Display, Quicksand } from 'next/font/google';
import { FaTimes, FaExpandAlt } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '900'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '700'] });

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  const images = [
     "/ImpactBakeryimages/IMG_1286.JPG","/ImpactBakeryimages/IMG_1314.JPG",
    "/ImpactBakeryimages/IMG_1287.JPG", "/ImpactBakeryimages/IMG_1288.JPG",
    "/ImpactBakeryimages/IMG_1289.JPG", "/ImpactBakeryimages/IMG_1290.JPG",
  , "/ImpactBakeryimages/IMG_1298.JPG","/ImpactBakeryimages/IMG_1310.JPG",
    "/ImpactBakeryimages/IMG_1301.JPG","/ImpactBakeryimages/IMG_1314.JPG",
    "/ImpactBakeryimages/IMG_1307.JPG", "/ImpactBakeryimages/IMG_1308.JPG",
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-[#FDFCF6] text-gray-900 antialiased ${montserrat.className}`}>
        
        {/* --- ARTISAN HERO --- */}
        <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-[#043927]/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <span className={`${quicksand.className} text-amber-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block`}>
              Visual Textures
            </span>
            <h1 className={`${playfair.className} text-6xl md:text-8xl font-black text-[#043927] tracking-tighter`}>
              The <span className="italic font-light text-amber-600">Gallery.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
              A behind-the-scenes look at the craftsmanship, heat, and flour that defines the <span className="text-[#043927] font-bold">Impact Standard.</span>
            </p>
          </motion.div>
        </section>

        {/* --- INTERACTIVE GRID --- */}
        <section className="pb-32 px-6">
          <div className="mx-auto max-w-[1400px]">
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActive(src)}
                  className={`relative overflow-hidden rounded-[2rem] cursor-pointer group bg-white border border-slate-100
                    ${index % 7 === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"}
                  `}
                >
                  <Image
                    src={src}
                    alt={`Impact Bakery Selection ${index + 1}`}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043927]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex items-center gap-3 text-white">
                        <div className="p-3 bg-amber-500 rounded-2xl shadow-xl">
                          <FaExpandAlt size={16} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">View Details</span>
                      </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#043927]/98 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12"
              onClick={() => setActive(null)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors z-[110]"
              >
                <FaTimes size={32} />
              </motion.button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
              >
                <Image
                  src={active}
                  alt="Bakery Close-up"
                  width={1400}
                  height={1400}
                  className="rounded-[2.5rem] max-h-[80vh] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
                  priority
                />
              </motion.div>
              
              <div className="absolute bottom-10 text-center">
                <p className={`${quicksand.className} text-amber-500/60 font-bold tracking-[0.4em] text-[10px] uppercase`}>
                  Handcrafted in Asaba • Fresh Daily
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- FOOTER --- */}
        <footer className="py-20 bg-white text-center border-t border-slate-50">
          <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              ))}
          </div>
          <p className={`${quicksand.className} text-slate-400 text-[10px] font-black tracking-[0.5em] uppercase`}>
            Impact Bakery — Est. 2024
          </p>
        </footer>
      </div>
    </>
  );
}