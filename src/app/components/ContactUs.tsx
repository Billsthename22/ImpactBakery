"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#fff8f0] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f5d8b2]/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#e5c5a1]/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Info section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm tracking-widest font-semibold text-[#b97a41] mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mb-8">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Questions, orders, or special requests? Reach out to us anytime and
            our friendly team will get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-[#e57a2a]" />
              <span>123 Bakery Lane, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-[#e57a2a]" />
              <span>+234 801 234 5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#e57a2a]" />
              <span>hello@impactbakery.com</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-12"
        >
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b97a41]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b97a41]"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b97a41] resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e57a2a] text-white font-semibold py-4 rounded-xl hover:bg-[#c06c2d] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Optional bakery illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 w-[500px] h-[500px] bg-[url('/images/bakery-illustration.png')] bg-contain bg-no-repeat pointer-events-none" />
    </section>
  );
}
