"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO */}
      <section className="relative w-full h-[45vh] bg-[url('/images/bakery-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0" style={{ backgroundColor: "#12966b", opacity: 0.45 }} />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-white text-4xl md:text-6xl font-extrabold"
        >
          About Impact Bakery
        </motion.h1>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#12966b" }}
            >
              Who We Are
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
            Impact Bakery is a committed provider of fresh, quality-driven bakery products designed to serve the daily needs of families, retailers, and businesses across Asaba and beyond. As a subsidiary of Impact Manufacturers, we operate on a foundation of industrial excellence, modern production standards, and a passion for delivering superior value with every loaf.
We specialize in producing soft, nutritious, and consistently fresh bread supported by efficient processes, reliable distribution, and strict hygiene practices. Our operations are powered by a skilled team dedicated to maintaining quality at every stagefrom ingredient selection to baking, packaging, and delivery.
At our core, we represent reliability, accessibility, and service. We exist to ensure that homes and businesses can depend on a steady supply of wholesome bread crafted with care, expertise, and attention to detail. Guided by innovation and customer-focused values, Impact Bakery continues to build a reputation for products that are trusted, affordable, and made to enrich everyday living. at impact bakery we dont just delivere freshly baked goods and we deliver to your doorstep. Baked witgh love and 
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Built on creativity and excellence, we aim to bring warmth and joy to every home 
              we serve.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/bakery-who.jpg"
              alt="Impact Bakery"
              width={700}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
              style={{ border: "4px solid #12966b30" }}
            />
          </motion.div>

        </div>
      </section>

      {/* VISION + MISSION + VALUES */}
      <section className="py-20 px-6 md:px-24" style={{ backgroundColor: "#f2fbf7" }}>
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#12966b" }}
          >
            What Drives Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md"
            style={{ border: "1px solid #12966b40" }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#12966b" }}>
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most trusted bakery known for creativity, warmth, and community impact.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-md"
            style={{ border: "1px solid #12966b40" }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#12966b" }}>
              Our Mission
            </h3>
            <p className="text-gray-600">
              To bake with purpose, deliver excellence, and bring people together through flavor.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-md"
            style={{ border: "1px solid #12966b40" }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#12966b" }}>
              Our Core Values
            </h3>
            <p className="text-gray-600">
              Integrity, passion, creativity, excellence, and community — these shape everything 
              we create.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
