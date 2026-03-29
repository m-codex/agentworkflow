"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#expertise", label: "Expertise" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 bg-white border-b border-foreground/5">
      <nav className="max-w-7xl mx-auto h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-0 text-2xl group z-50">
          <span className="font-medium text-foreground">agent</span>
          <span className="font-light text-foreground">workflow</span>
          <span className="font-[1000] text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-light text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="text-sm text-white bg-foreground px-6 py-2 rounded-sm hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            Anfrage Mandat
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <IconX size={24} stroke={1.5} /> : <IconMenu2 size={24} stroke={1.5} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="inline-block text-lg text-white bg-foreground px-8 py-4 rounded-sm hover:bg-primary hover:text-white transition-all text-center"
              >
                Anfrage Mandat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
