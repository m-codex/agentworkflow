'use client';

import { motion } from 'framer-motion';
import { IconSearch, IconCpu, IconBolt } from '@tabler/icons-react';

const services = [
  {
    number: '01',
    title: 'Prozess-Analyse',
    description: 'Ich identifiziere das grösste Potenzial in Ihren Abläufen. Gemeinsam definieren wir die Aufgaben, die ein KI-Worflow für Sie übernehmen kann.',
    icon: IconSearch,
  },
  {
    number: '02',
    title: 'Workflow-Design',
    description: 'Ich entwickle die Logik Ihrer Agenten und verbinde die KI mit Ihren Business-Tools. So erledigen die Systeme Aufgaben sicher und im richtigen Kontext.',
    icon: IconCpu,
  },
  {
    number: '03',
    title: 'Nahtlose Integration',
    description: 'Ich implementiere die Workflows nahtlos in Ihre bestehende Software-Landschaft ein, ohne dabei den Betrieb zu unterbrechen.',
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

               <span className="text-3xl font-light text-[#0047ab] mb-6">{service.number}</span>
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
