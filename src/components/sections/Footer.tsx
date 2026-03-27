'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="kontakt" className="pt-24 pb-12 px-6 border-t border-[#1A1A1A]/5 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Contact Block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl md:text-5xl font-medium mb-4">
              <span className="text-[#0047ab]">mw</span>@agnt.ch
            </div>
            <div className="text-2xl md:text-3xl font-light text-[#1A1A1A]/40 mb-12">
              agentworkflow.ch
            </div>

            <div className="text-sm font-light text-[#1A1A1A]/50">
              Domain Expertise: <span className="text-[#0047ab]">agentswiss.ch</span>
            </div>
          </motion.div>

          {/* Right: Watermark and Circle */}
          <div className="relative flex h-64 lg:h-auto items-end justify-end overflow-visible">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2 }}
    className="relative flex items-baseline select-none pointer-events-none"
  >
    {/* Das 'a' - leading-none ist wichtig, damit kein extra Platz oben/unten entsteht */}
    <span className="text-[20rem] md:text-[32rem] leading-none font-medium text-[#1A1A1A]/[0.03]">
      a
    </span>

    {/* Der Punkt - jetzt direkt im Textfluss neben dem 'a' */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-10 h-10 md:w-16 md:h-16 bg-[#0047ab] rounded-full -ml-[2rem] mb-[2rem]"
    />
  </motion.div>
</div>

        {/* Bottom: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-[#1A1A1A]/5 gap-6">
          <div className="flex gap-8 text-xs font-light text-[#1A1A1A]/60">
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Datenschutz</a>
          </div>
          <div className="text-xs font-light text-[#1A1A1A]/40">
            © 2024 Werthmüller Agent Workflows
          </div>
        </div>
      </div>
    </footer>
  );
}
