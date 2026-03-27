'use client';

import { motion } from 'framer-motion';
import { IconSearch, IconCpu, IconBolt } from '@tabler/icons-react';

const services = [
  {
    title: 'Prozessanalyse',
    description: 'Wir identifizieren Ineffizienzen in Ihren bestehenden Abläufen und finden das größte Potenzial für Automatisierung.',
    icon: IconSearch,
  },
  {
    title: 'Agentic Architecture',
    description: 'Design von autonomen KI-Agenten, die spezialisierte Aufgaben übernehmen und intelligent miteinander kommunizieren.',
    icon: IconCpu,
  },
  {
    title: 'Nahtlose Integration',
    description: 'Implementierung der Workflows in Ihre bestehende Software-Landschaft ohne Unterbrechung des Betriebs.',
    icon: IconBolt,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <service.icon className="w-8 h-8 text-[#0047ab] stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
