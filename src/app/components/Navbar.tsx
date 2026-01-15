import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/AboutUs" },
    { name: "OUR PRODUCTS", href: "/Products" },
    { name: "GALLERY", href: "/Gallery" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Impact Bakery Logo"
              width={50}
              height={50}
              className="object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <span className="font-serif text-xl font-bold text-[#0f1720] tracking-tight">
            Impact <span className="text-[#e67a2d]">Bakery</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[#0f1720] text-sm font-bold tracking-wide hover:text-[#e67a2d] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e67a2d] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-[#12966b] hover:bg-[#0f7f5a] hover:shadow-lg text-white font-bold px-6 py-2.5 rounded-full text-xs transition-all transform active:scale-95">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#0f1720] hover:bg-gray-100 rounded-lg transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col items-center gap-4 py-8 px-6 transition-all duration-300 md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href} 
            onClick={() => setMenuOpen(false)}
            className="text-[#0f1720] text-lg font-semibold hover:text-[#e67a2d] transition"
          >
            {link.name}
          </Link>
        ))}
        <hr className="w-full border-gray-100" />
        <button className="w-full bg-[#12966b] text-white font-bold py-4 rounded-xl text-md shadow-md">
          ORDER NOW
        </button>
      </div>
    </header>
  );
}