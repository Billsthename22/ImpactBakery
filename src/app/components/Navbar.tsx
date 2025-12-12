
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Impact Bakery Logo"
              width={90}
              height={90}
              className="object-contain -mb-4"
            />
          </div>
          <span className="font-serif text-xl font-semibold text-[#0f1720]">
            Impact Bakery
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">HOME</Link>
          <Link href="/AboutUs" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">ABOUT US</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">OUR PRODUCTS</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">GALLERY</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">CONTACT US</Link>
        </nav>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-[#12966b] hover:bg-[#0f7f5a] text-white font-semibold px-5 py-2 rounded-md text-sm transition">
          ORDER NOW
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-[#0f1720] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-6 px-4">
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">HOME</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">ABOUT US</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">OUR PRODUCTS</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">GALLERY</Link>
          <Link href="#" className="text-[#0f1720] font-medium hover:text-[#e67a2d] transition">CONTACT US</Link>
          <button className="bg-[#12966b] hover:bg-[#0f7f5a] text-white font-semibold px-5 py-2 rounded-md text-sm transition">
            ORDER NOW
          </button>
        </div>
      )}
    </header>
  );
}
