'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SeniorMandate() {
  return (
    <section id="mandat" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Exklusive Mandate<span className="text-[#0047ab] font-bold">.</span></h2>
            <p className="text-lg font-light text-[#1A1A1A]/80 mb-8 leading-relaxed">
              Ich setze auf Qualität statt Quantität. Unsere Zusammenarbeit erfolgt ausschließlich im Rahmen exklusiver Mandate, um eine optimale Integration und maximale Wirkung Ihrer KI-Strategie zu garantieren.
            </p>
            <ul className="space-y-4 mb-10">
              {['Direkter Zugang zum Experten', 'Ganzheitliche Prozess-Strategie', 'Langfristige Begleitung & Optimierung'].map((item, i) => (
                <li key={i} className="flex items-center font-light text-[#1A1A1A]/70">
                  <div className="w-1.5 h-1.5 bg-[#0047ab] rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-block text-white bg-[#1A1A1A] px-8 py-4 text-sm font-medium rounded-md hover:bg-[[#0047ab] transition-colors"
            >
              Anfrage Mandat
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative max-w-lg aspect-[1/1] bg-[#FAFAFA]"
          >
            <Image 
             src="/Max-Profilbild2.png" 
             alt="Portrait" 
             fill 
             className="object-cover grayscale" 
           />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
