'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="flex pt-48 pb-12 md:pt-60 md:pb-24 px-6 border-b border-foreground/5">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
       <div> 
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light tracking-normal mb-8 text-balance"
        >
          Intelligente KI-Agenten für Schweizer KMU.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl font-light text-foreground/80 mb-12 text-balance"
        >
           Massgeschneiderte KI-Workflows, die repetitive Prozesse übernehmen und so Raum für echte Weiterentwicklung schaffen. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#workflows"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary-hover transition-colors"
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
              <span className="text-[24rem] md:text-[32rem] leading-none font-medium text-foreground/[0.03]">
                a
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-10 h-10 md:w-16 md:h-16 bg-primary rounded-full mb-[2rem]"
              />
            </motion.div>
          </div>
        </div>
    </section>
  );
}
