"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { id: 2, name: "Impat Tea Mate Bread", desc: "Nutty whole grain bread, healthy and hearty.", price: "₦2,000", img: "/bread2.jpg" },
  { id: 3, name: "Impact Jumbo Bread", desc: "Crispy crust with a soft interior — classic.", price: "₦1,800", img: "/bread3.jpg" },
  { id: 4, name: "Impact Tea Mate Jumbo Bread", desc: "Open crumb, great for paninis and dipping.", price: "₦2,200", img: "/bread4.jpg" },
  { id: 5, name: "Impact Mini Bread", desc: "Dense and flavorful, perfect for sandwiches with strong cheeses.", price: "₦2,300", img: "/bread5.jpg" },
  { id: 6, name: "Impact Small Bread", desc: "Soft, slightly sweet bread, ideal for breakfast or desserts.", price: "₦2,800", img: "/bread6.jpg" },
  { id: 7, name: "Impact Medium Bread", desc: "Soft, slightly sweet bread, ideal for breakfast or desserts.", price: "₦2,800", img: "/bread6.jpg" },
];

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    { name: "Aisha M.", text: "Impact Bakery's bread is my family's staple. Fresh every time!" },
    { name: "Chidi O.", text: "Fast delivery and the sourdough is unbeatable." },
    { name: "Ngozi K.", text: "Crispy crust and soft crumb — perfect breakfast bread." },
  ];

  useEffect(() => {
    const t = setInterval(() => setTestiIndex((s) => (s + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Outer rounded mock device container */}
      <div className="w-full bg-[#f7f7f6]">

<Navbar/>
        {/* HERO */}
        <section id="home" className="relative h-[150vh] md:h-[100vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/ImpactBakeryimages/background.JPG')",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-white/0" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                Impact Bakery
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-sm md:text-lg text-gray-100 max-w-xl">
                Freshly baked bread daily — handcrafted by skilled bakers using the finest grains. Taste the difference in every slice.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 flex gap-3">
                <a href="#products" className="inline-flex items-center gap-2 bg-[#0A8A3A] text-white px-5 py-3 rounded-lg font-semibold shadow hover:translate-y-[-2px] transition">
                  Order Bread
                </a>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/5 transition">
                  Learn More
                </button>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 text-xs text-gray-200">
                <span className="inline-block bg-white/10 px-3 py-1 rounded-full">Fresh Daily</span>
                <span className="ml-2 inline-block bg-white/10 px-3 py-1 rounded-full">Local Ingredients</span>
              </motion.div>
            </div>
          </div>
        </section>

  {/* ABOUT – Refined UI */}
<section id="about" className="py-20 px-6 bg-[#043927]">
  <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">

{/* Image */}
<div className="relative max-w-lg">
  {/* Decorative border */}


  <div className="relative z-10 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
    <Image
      src="/ImpactBakeryimages/About.JPG"
      alt="About Impact Bakery"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      priority
    />
  </div>
</div>


    {/* Content */}
    <div className="text-green-50">
      <h3 className="text-4xl font-bold text-white">
        About Impact Bakery
      </h3>

      <div className="mt-6 space-y-4 text-green-200 leading-relaxed">
        <p>
          Impact Bakery began as a small family bakery with one mission —
          to bring premium-quality bread to our community.
        </p>

        <p>
          We blend traditional baking techniques with modern quality standards,
          creating bread with exceptional flavor, texture, and consistency.
        </p>

        <p>
          Every loaf is baked fresh daily using wholesome ingredients
          and a passion for excellence.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => setIsAboutOpen(true)}
          className="px-6 py-3 rounded-full bg-[#FF6D2D] text-white font-semibold shadow-md hover:scale-105 transition"
        >
          Read Our Story
        </button>

        <a
          href="#products"
          className="px-6 py-3 rounded-full border border-green-400 text-green-100 hover:bg-green-800 transition"
        >
          Explore Products
        </a>
      </div>
    </div>
  </div>
</section>

    {/* Products – New Showcase UI */}
<section id="products" className="py-20 px-6 bg-[#043927]">
  <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="text-4xl font-bold text-[#0A8A3A]">
        Our Bread Collection
      </h3>
      <p className="mt-4 text-green-800">
        Handcrafted loaves baked fresh daily — quality you can taste.
      </p>
    </div>

    {/* Products Grid */}
    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
        >
          {/* Image */}
          <div className="relative h-[320px] overflow-hidden">
            
            <img
              src={p.img}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-[#0A8A3A] text-white px-4 py-2 rounded-full font-bold shadow-md">
              {p.price}
            </div>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition">
            <h4 className="text-xl font-semibold text-white">
              {p.name}
            </h4>
            <p className="mt-2 text-sm text-green-100">
              {p.desc}
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setActiveProduct(p)}
                className="px-4 py-2 rounded-full bg-[#FF8A00] text-white text-sm font-semibold hover:brightness-95"
              >
                View Details
              </button>

              <button
                className="px-4 py-2 rounded-full border border-white text-white text-sm hover:bg-white hover:text-[#0A8A3A] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


  {/* Why Choose Us & What We Do */}
<section id="why" className="py-16 px-6 bg-green-50">
  <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
    {/* Why Choose Us */}
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-[#0A8A3A]">Why Choose Impact Bakery</h3>
      <div className="grid gap-4">
        {[
          { icon: "✓", title: "Fresh Every Day", desc: "We bake daily to ensure freshness in every bite." },
          { icon: "⏱", title: "Fast Delivery", desc: "Timely deliveries so your bread arrives warm and fresh." },
          { icon: "🌾", title: "Quality Ingredients", desc: "We use carefully sourced grains and no unnecessary additives." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#0A8A3A] text-white flex items-center justify-center text-xl font-bold">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-[#0A8A3A]">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* What We Do */}
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-[#0A8A3A]">What We Do</h3>
      <div className="grid gap-4">
        {[
          { icon: "B", title: "Baking", desc: "Crafting a range of bread styles to suit every taste." },
          { icon: "W", title: "Wholesale", desc: "Supplying cafés, restaurants and stores with fresh bread." },
          { icon: "D", title: "Delivery", desc: "Local delivery available within city limits." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 bg-[#D6F5E1] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#FF8A00] text-white flex items-center justify-center text-xl font-bold">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-[#0A8A3A]">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



        {/* Testimonials */}
        <section id="testimonials" className="py-16 px-6 bg-gray-50">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-[#0A8A3A]">Hear From Our Customers</h3>
            <div className="mt-8 relative h-40">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testiIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow text-gray-800 mx-auto max-w-3xl h-full flex flex-col justify-center"
                >
                  <p className="text-lg">“{testimonials[testiIndex].text}”</p>
                  <cite className="mt-4 block text-sm text-gray-600">— {testimonials[testiIndex].name}</cite>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestiIndex(i)} className={`w-2 h-2 rounded-full ${i === testiIndex ? "bg-[#0A8A3A]" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="py-12 px-6 bg-white">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-[#0A8A3A]">Get In Touch</h3>
              <p className="mt-3 text-gray-600">Order enquiries, wholesale or any questions — reach out and we'll respond promptly.</p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div>📍 0 Asaba Specialist Hospital Road Asaba, Delta State </div>
                <div>📞 +234 800 000 0000</div>
                <div>✉️ impactbakeryasb@gmail.com</div>
              </div>

              <div className="mt-6 flex gap-3">
                <a className="inline-flex items-center gap-2 bg-[#0A8A3A] text-white px-4 py-2 rounded-md" href="#">Order Now</a>
                <a className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md" href="#">Visit Us</a>
              </div>
            </div>

            <div>
              <form className="space-y-3 bg-white border rounded-xl p-4 shadow-sm">
                <input className="w-full p-3 border rounded-md" placeholder="Name" />
                <input className="w-full p-3 border rounded-md" placeholder="Phone" />
                <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Message" />
                <div className="flex items-center justify-between">
                  <button className="bg-[#FF8A00] text-white px-4 py-2 rounded-lg">Send Message</button>
                  <div className="text-xs text-gray-500">We will get back within 24 hours</div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-[#0A8A3A] text-white py-6">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm">© {new Date().getFullYear()} Impact Bakery — Fresh Daily</div>
            <div className="flex gap-4 mt-3 md:mt-0">
              <a className="text-white/90 hover:text-white" href="#" aria-label="instagram">IG</a>
              <a className="text-white/90 hover:text-white" href="#" aria-label="facebook">FB</a>
              <a className="text-white/90 hover:text-white" href="#" aria-label="twitter">TW</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-xl max-w-2xl w-full overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src={activeProduct.img} alt={activeProduct.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#0A8A3A]">{activeProduct.name}</h4>
                  <p className="mt-2 text-gray-700">{activeProduct.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-bold">{activeProduct.price}</div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg">Buy Now</button>
                      <button onClick={() => setActiveProduct(null)} className="px-4 py-2 border rounded-lg">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About read more modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} className="bg-white rounded-xl max-w-3xl w-full p-8">
              <h4 className="text-2xl font-bold text-[#0A8A3A]">Our Story</h4>
              <p className="mt-4 text-gray-700">
                Impact Bakery was founded with a passion for wholesome bread. Over the years we refined recipes, sourced high-quality grains and built a small team of passionate bakers.
                Our goal is to serve bread that brings people together — in homes, cafes, and markets.
              </p>
              <div className="mt-6 text-right">
                <button onClick={() => setIsAboutOpen(false)} className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
