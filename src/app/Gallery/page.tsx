"use client";

import Image from "next/image";
import { useState } from "react";
import { Montserrat, Playfair_Display, Quicksand } from 'next/font/google';
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '900'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '700'] });

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  const images = [
    "/ImpactBakeryimages/IMG_1285.JPG",
    "/ImpactBakeryimages/IMG_1286.JPG",
    "/ImpactBakeryimages/IMG_1287.JPG",
    "/ImpactBakeryimages/IMG_1288.JPG",
    "/ImpactBakeryimages/IMG_1289.JPG",
    "/ImpactBakeryimages/IMG_1290.JPG",
    "/ImpactBakeryimages/IMG_1291.JPG",
    "/ImpactBakeryimages/IMG_1292.JPG",
    "/ImpactBakeryimages/IMG_1293.JPG",
    "/ImpactBakeryimages/IMG_1294.JPG",
    "/ImpactBakeryimages/IMG_1295.JPG",
    "/ImpactBakeryimages/IMG_1296.JPG",
    "/ImpactBakeryimages/IMG_1297.JPG",
    "/ImpactBakeryimages/IMG_1298.JPG",
    "/ImpactBakeryimages/IMG_1299.JPG",
    "/ImpactBakeryimages/IMG_1300.JPG",
    "/ImpactBakeryimages/IMG_1301.JPG",
    "/ImpactBakeryimages/IMG_1302.JPG",
    "/ImpactBakeryimages/IMG_1303.JPG",
    "/ImpactBakeryimages/IMG_1304.JPG",
    "/ImpactBakeryimages/IMG_1305.JPG",
    "/ImpactBakeryimages/IMG_1306.JPG",
    "/ImpactBakeryimages/IMG_1307.JPG",
    "/ImpactBakeryimages/IMG_1308.JPG",
  ];

  return (
    <div className={`min-h-screen bg-[#fcfcfb] text-gray-900 antialiased ${montserrat.className}`}>
      <Navbar />

      {/* ARTISAN HERO */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#0A8A3A]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#f39c12]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <span className={`${quicksand.className} text-[#0A8A3A] font-bold tracking-[0.3em] uppercase text-xs mb-3 block`}>
            Baked with Purpose
          </span>
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-black text-gray-900`}>
            Our <span className="text-[#0A8A3A]">Gallery</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            A visual journey through our kitchen, from fresh dough to golden finishes.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0A8A3A]" />
            <div className="w-2 h-2 rounded-full bg-[#f39c12]" />
            <div className="w-2 h-2 rounded-full bg-[#0A8A3A]" />
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="pb-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => setActive(src)}
                className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <Image
                  src={src}
                  alt={`Impact Bakery Creation ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Bakery Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A8A3A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full text-[#0A8A3A] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <FaSearchPlus size={18} />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-white hover:text-[#0A8A3A] transition-colors p-2 bg-white/10 rounded-full"
          >
            <FaTimes size={24} />
          </button>
          
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <Image
              src={active}
              alt="Bakery Close-up"
              width={1200}
              height={1200}
              className="rounded-lg max-h-[85vh] object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      )}

      {/* FOOTER STRIP */}
      <footer className="py-12 bg-[#f7f7f6] text-center border-t border-gray-200">
        <p className={`${quicksand.className} text-gray-500 text-sm font-bold tracking-widest uppercase`}>
          Impact Bakery — Handcrafted Daily
        </p>
      </footer>
    </div>
  );
}