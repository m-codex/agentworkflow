'use client';

import { motion } from 'framer-motion';

const workflows = [
  {
    category: 'Customer Service',
    title: 'Der autonome Service-Agent',
    description: 'Qualifiziert Anfragen, löst Standardprobleme autonom und übergibt komplexe Fälle nahtlos an Ihre Mitarbeiter.',
  },
  {
    category: 'Lead Gen',
    title: 'Der intelligente Lead-Scout',
    description: 'Analysiert Website-Besucher in Echtzeit, qualifiziert Leads nach Ihren Kriterien und bucht Termine direkt im Kalender.',
  },
  {
    category: 'Operations',
    title: 'Der Prozess-Architekt',
    description: 'Optimiert Lieferketten durch Datenanalyse, prognostiziert Engpässe und automatisiert das Reporting.',
  },
];

export function Workflows() {
  return (
    <section id="workflows" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-medium mb-16"
        >
          Workflows in Aktion
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflows.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 border border-[#1A1A1A]/10 bg-[#FAFAFA] hover:border-[#0047ab]/30 transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-[#0047ab] mb-4 block">
                {item.category}
              </span>
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
