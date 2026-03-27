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
          <div className="relative h-64 lg:h-auto flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute right-[-10%] bottom-[-20%] select-none pointer-events-none"
            >
              <span className="text-[20rem] md:text-[32rem] leading-none font-medium text-[#1A1A1A]/[0.03]">
                a.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-[#0047ab] rounded-full translate-x-1/4 translate-y-1/4"
            />
          </div>
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
