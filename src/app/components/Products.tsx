"use client";

import Image from "next/image";

export default function OurProducts() {
  const products = [
    { id: 1, name: "Impact Tea Mate Jumbo Bread", image: "/bread1.png" },
    { id: 2, name: "Impact Tea Mate Jumbo Bread", image: "/bread2.png" },
    { id: 3, name: "Impact Tea Mate Jumbo Bread", image: "/bread3.png" },
    { id: 4, name: "Impact Tea Mate Jumbo Bread", image: "/bread4.png" },
    { id: 5, name: "Impact Tea Mate Jumbo Bread", image: "/bread5.png" },
    { id: 6, name: "Impact Tea Mate Jumbo Bread", image: "/bread6.png" },
  ];

  return (
    <section className="relative bg-[#fcd5b5] py-28 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section heading */}
        <p className="text-[#e57a2a] font-semibold tracking-wider mb-2">
          -OUR PRODUCTS-
        </p>
        <h2 className="text-3xl lg:text-4xl font-serif text-[#3b1f0a] mb-16">
          A variety of yummy treats you can’t get enough of!
        </h2>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 bg-[#f5b98b] opacity-40 rounded-full scale-110"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain relative z-10"
                />
              </div>
              <p className="text-[#3b1f0a] text-sm font-medium font-serif">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
