"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return ( 
    <section className="relative py-28 px-6 lg:px-20 bg-[#fffdf9] overflow-hidden">
      
      {/* BREAD BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/bread-background.jpg" // replace with your bread image in public folder
          alt="Bread background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-[#fffdf9]/80"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-widest font-semibold text-[#b97a41]">
          CONTACT US
        </p>

        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mt-3 mb-12 leading-tight">
          Get in Touch
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-lg grid gap-6"
        >
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
            className="bg-[#b97a41] text-white font-semibold py-4 rounded-xl hover:bg-[#c08649] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
