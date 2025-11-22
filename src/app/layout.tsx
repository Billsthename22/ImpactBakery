// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Bakery",
  description: "Breads baked with love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700 text-amber-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
