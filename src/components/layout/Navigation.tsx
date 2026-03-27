"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#1A1A1A]/5">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-0 text-xl group">
          <span className="font-medium text-[#1A1A1A]">agent</span>
          <span className="font-light text-[#1A1A1A]">workflow</span>
          <span className="font-[1000] text-[#0047ab]">.</span>
        </Link>

        {/* Links */}
         <div className="flex items-center space-x-12">
          <Link
            href="#workflow"
            className="text-sm font-light text-[#1A1A1A] hover:text-[#0047ab] transition-colors"
          >
            Workflow
          </Link>
          <Link
            href="#expertise"
            className="text-sm font-light text-[#1A1A1A] hover:text-[#0047ab] transition-colors"
          >
            Expertise
          </Link>
          <Link
            href="#kontakt"
            className="text-sm font-light text-[#1A1A1A] hover:text-[#0047ab] transition-colors"
          >
            Kontakt
          </Link>
         </div>
          <Link
            href="#kontakt"
            className="text-sm text-white bg-[#1A1A1A] px-6 py-2 rounded-md hover:bg-[#0047ab] hover:text-white transition-all active:scale-95"
          >
            Anfrage Mandat
          </Link>
       
      </nav>
    </header>
  );
}
