"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-0 text-xl group">
          <span className="font-medium text-[#1A1A1A]">agent</span>
          <span className="font-light text-[#1A1A1A]">workflow</span>
          <span className="font-black text-[#0047ab]">.</span>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-12">
          <Link
            href="#kontakt"
            className="text-sm font-light text-[#1A1A1A] hover:text-[#0047ab] transition-colors"
          >
            Kontakt
          </Link>
          <Link
            href="#kontakt"
            className="text-sm font-medium border-2 border-[#1A1A1A] px-6 py-2 rounded-sm hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
          >
            Anfrage Mandat
          </Link>
        </div>
      </nav>
    </header>
  );
}
