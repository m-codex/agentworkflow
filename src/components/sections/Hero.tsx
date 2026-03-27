'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="pt-48 pb-20 md:pt-60 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-8"
        >
          Strategische Automation <br className="hidden md:block" /> mit agentic AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl font-light text-[#1A1A1A]/80 mb-12"
        >
          Wir entwickeln maßgeschneiderte KI-Workflows für Schweizer KMU,
          die repetitive Prozesse eliminieren und Raum für echte Innovation schaffen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#workflows"
            className="inline-block bg-[#0047ab] text-white px-8 py-4 text-sm font-medium hover:bg-[#003d94] transition-colors"
          >
            Workflow entdecken
          </a>
        </motion.div>
      </div>
    </section>
  );
}
