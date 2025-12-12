"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";

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
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="w-full bg-[#f7f7f6]">
        <Navbar />

        {/* HERO */}
        <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bakery-hero.jpg')" }}
          />

          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/0" />

          {/* Centered Text */}
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A8A3A]">
              Our Gallery
            </h1>
            <p className="text-gray-700 text-lg mt-2">
              A collection of our favorite moments
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-6xl">

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setActive(src)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group shadow-md bg-gray-100"
                >
                  <Image
                    src={src}
                    alt="Gallery Image"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        {active && (
          <div
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Image
                src={active}
                alt="Expanded Photo"
                width={1200}
                height={1200}
                className="rounded-lg max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 bg-white text-black px-4 py-1 rounded-md shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
