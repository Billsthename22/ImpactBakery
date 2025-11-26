"use client";

import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#12966b] text-white relative py-20 px-6 lg:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Impact Bakery</h2>
          <p className="text-sm text-[#f7f7f7]/90">
            Baking excellence into every bite. From our ovens to your table, we bring joy through artisanal breads and pastries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#e57a2a] transition">About Us</a></li>
            <li><a href="#menu" className="hover:text-[#e57a2a] transition">Menu</a></li>
            <li><a href="#contact" className="hover:text-[#e57a2a] transition">Contact</a></li>
            <li><a href="#shop" className="hover:text-[#e57a2a] transition">Shop</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 Bakery Street, Lagos, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@impactbakery.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +234 800 123 4567
            </li>
          </ul>
        </div>

        {/* Socials / Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 mb-6">
            <a href="#" className="hover:text-[#e57a2a] transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#e57a2a] transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#e57a2a] transition"><Twitter className="w-5 h-5" /></a>
          </div>

          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-xl p-3 text-gray-800 flex-1 focus:outline-none"
            />
            <button className="bg-[#e57a2a] px-6 py-3 rounded-xl text-white font-semibold hover:bg-[#d96d23] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-[#f7f7f7]/80">
        &copy; {new Date().getFullYear()} Impact Bakery. All rights reserved.
      </div>
    </footer>
  );
}
