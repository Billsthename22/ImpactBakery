"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
type Product = {
  id: number;
  name: string;
  desc: string;
  price?: string;
  img: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Sourdough Loaf", desc: "A tangy, chewy crusty loaf. Perfect for toasts and sandwiches.", price: "₦2,500", img: "/bread1.jpg" },
  { id: 2, name: "Whole Wheat", desc: "Nutty whole grain bread, healthy and hearty.", price: "₦2,000", img: "/bread2.jpg" },
  { id: 3, name: "French Baguette", desc: "Crispy crust with a soft interior — classic.", price: "₦1,800", img: "/bread3.jpg" },
  { id: 4, name: "Ciabatta", desc: "Open crumb, great for paninis and dipping.", price: "₦2,200", img: "/bread4.jpg" },
  { id: 5, name: "Rye Bread", desc: "Dense and flavorful, perfect for sandwiches with strong cheeses.", price: "₦2,300", img: "/bread5.jpg" },
  { id: 6, name: "Brioche Loaf", desc: "Soft, slightly sweet bread, ideal for breakfast or desserts.", price: "₦2,800", img: "/bread6.jpg" },
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
        <section id="home" className="relative h-[72vh] md:h-[80vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bakery-hero.jpg')",
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

        {/* ABOUT */}
        <section id="about" className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src="/about.jpg" alt="About Impact Bakery" className="w-full h-80 object-cover" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0A8A3A]">About Impact Bakery</h3>
              <p className="mt-4 text-gray-700">
                Impact Bakery began as a small family bakery with a mission to bring premium-quality bread to our neighborhood.
                Our bakers blend traditional techniques with modern quality standards to produce bread with exceptional flavor and texture.
              </p>

              <p className="mt-4 text-gray-600">
                We bake fresh every day, focusing on wholesome ingredients and consistent quality.
              </p>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setIsAboutOpen(true)} className="bg-[#FF8A00] text-white px-4 py-2 rounded-lg font-medium shadow hover:brightness-95 transition">Read More</button>
                <a href="#products" className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">See Products</a>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-16 px-6 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-[#0A8A3A] text-center">Our Bread Collection</h3>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">Handcrafted loaves made with care — from rustic sourdough to soft whole wheat.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <motion.article key={p.id} whileHover={{ scale: 1.03 }} className="group bg-white rounded-xl shadow-md overflow-hidden border">
                  <div className="relative">
                    <img src={p.img} alt={p.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute left-3 top-3 bg-[#0A8A3A] text-white px-2 py-1 rounded-md text-xs font-semibold">{p.name.split(" ")[0]}</div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800">{p.name}</h4>
                    <p className="mt-2 text-sm text-gray-600">{p.desc}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-lg font-bold text-[#0A8A3A]">{p.price}</div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setActiveProduct(p)} className="px-3 py-2 bg-[#FF8A00] text-white rounded-lg text-sm shadow hover:brightness-95 transition">Details</button>
                        <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-[#f3f3f3] transition">Add</button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us & What We Do */}
        <section id="why" className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-3xl font-bold text-[#0A8A3A]">Why Choose Impact Bakery</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0A8A3A] text-white flex items-center justify-center font-semibold">✓</div>
                  <div>
                    <h4 className="font-semibold">Fresh Every Day</h4>
                    <p className="text-sm text-gray-600">We bake daily to ensure freshness in every bite.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0A8A3A] text-white flex items-center justify-center font-semibold">⏱</div>
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Timely deliveries so your bread arrives warm and fresh.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0A8A3A] text-white flex items-center justify-center font-semibold">🌾</div>
                  <div>
                    <h4 className="font-semibold">Quality Ingredients</h4>
                    <p className="text-sm text-gray-600">We use carefully sourced grains and no unnecessary additives.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0A8A3A]">What We Do</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#FF8A00] text-white flex items-center justify-center font-bold">B</div>
                  <div>
                    <h4 className="font-semibold">Baking</h4>
                    <p className="text-sm text-gray-600">Crafting a range of bread styles to suit every taste.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#FF8A00] text-white flex items-center justify-center font-bold">W</div>
                  <div>
                    <h4 className="font-semibold">Wholesale</h4>
                    <p className="text-sm text-gray-600">Supplying cafés, restaurants and stores with fresh bread.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#FF8A00] text-white flex items-center justify-center font-bold">D</div>
                  <div>
                    <h4 className="font-semibold">Delivery</h4>
                    <p className="text-sm text-gray-600">Local delivery available within city limits.</p>
                  </div>
                </div>
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
                <div>📍 123 Bread Street, Your City</div>
                <div>📞 +234 800 000 0000</div>
                <div>✉️ hello@impactbakery.example</div>
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
