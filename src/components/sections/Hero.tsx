'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="flex pt-48 pb-20 md:pt-60 md:pb-32 px-6 border-y border-[#1A1A1A]/5">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
       <div> 
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-8"
        >
          Intelligente KI-Agenten für Schweizer KMU.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl font-light text-[#1A1A1A]/80 mb-12"
        >
          Massgeschneiderte Workflows, die Ihre zeitraubenden Arbeitsschritte sicher ausführen. Weniger Aufwand im Arbeitsalltag, mehr Raum für Neues.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#workflows"
            className="inline-block bg-[#0047ab] text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-[#003d94] transition-colors"
          >
            Beispiel-Workflows
          </a>
        </motion.div>
      </div>
      {/* Right: Watermark and Circle */}
          <div className="relative flex h-64 lg:h-auto items-end justify-end overflow-visible">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-baseline select-none pointer-events-none"
            >
              <span className="text-[18rem] md:text-[32rem] leading-none font-medium text-[#1A1A1A]/[0.03]">
                a
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-10 h-10 md:w-16 md:h-16 bg-[#0047ab] rounded-full mb-[2rem]"
              />
            </motion.div>
          </div>
        </div>
    </section>
  );
}
