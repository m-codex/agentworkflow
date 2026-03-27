'use client';

import { motion } from 'framer-motion';

interface WorkflowStep {
  title: string;
  description: string;
  colSpan: string; // Tailwind col-span class
  rowSpan: string; // Tailwind row-span class
}

interface Workflow {
  category: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
}

const workflows: Workflow[] = [
  {
    category: 'Kundenservice',
    title: 'Der E-Mail-Assistent',
    description: 'Autonome Vorbereitung Ihrer Korrespondenz.',
    steps: [
      {
        title: 'Intelligente Email-Analyse',
        description: 'Der Agent analysiert eingehende Mails nach Priorität, Absicht und Kontext.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Entwurfs-Service',
        description: 'Basierend auf Ihren Daten erstellt die KI präzise Antwort-Entwürfe in Ihrem Stil.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'CRM-Synchronisation',
        description: 'Kontakte und Termine werden ohne manuelles Abtippen direkt in Ihre Systeme übertragen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Freigabe-Dashboard',
        description: 'In Ihrem Workflow-Dashboard können Sie die E-Mail zum Versand freigeben oder im Bedarfsfall vorher noch bearbeiten.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
    ],
  },
  {
    category: 'Backoffice',
    title: 'Der Rechnungs-Agent',
    description: 'Intelligente Automatisierung Ihres Kreditoren-Managements.',
    steps: [
      {
        title: 'Multikanal-Erfassung',
        description: 'Der Agent überwacht Ihre E-Mail-Postfächer und Cloud-Verzeichnisse. Er erkennt Rechnungen in PDFs oder Scans sofort und extrahiert sie autonom.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Deep-Data-Extraktion:',
        description: 'Mittels KI liest der Agent alle relevanten Kopf- und Zeilendaten aus – von der IBAN und Referenznummer bis hin zu Mehrwertsteuersätzen und Skontofristen.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Intelligente Kontierung',
        description: 'Basierend auf historischen Daten und Ihren Buchungsregeln schlägt der Agent automatisch das passende Sachkonto und die Kostenstelle vor.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Nahtloser ERP-Transfer',
        description: 'Die validierten Daten werden fehlerfrei an Ihre Buchhaltungssoftware (z.B. Bexio, Abacus oder Sage) übermittelt, sodass Sie nur noch die finale Zahlung freigeben müssen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
    ],
  },
  {
    category: 'Wissensdatenbank',
    title: 'Der Wissens-Agent',
    description: 'Zentraler Zugriff auf Ihr gesamtes Firmen-Know-how.',
    steps: [
      {
        title: 'Semantische Suche',
        description: 'Der Agent findet Informationen in Dokumenten, Handbüchern oder Protokollen – auch wenn die Begriffe nicht exakt übereinstimmen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Präzise Antworten',
        description: 'Statt nur Links zu liefern, formuliert die KI direkt die passende Antwort basierend auf Ihren internen Quellen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Anpassung der Dokumentation',
        description: 'Der Agent kann bei Bedarf Anpassungen an bestehende Dokumenten vornehmen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Onboarding-Support',
        description: 'Er dient als digitaler Mentor für neue Mitarbeiter und beantwortet Fragen zu Prozessen und Richtlinien rund um die Uhr.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
    ],
  },
];

export function Workflows() {
  return (
    <section id="workflows" className="py-24 px-6 border-y border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-medium mb-24"
        >
          Workflows in Aktion
        </motion.h2>

        <div className="flex flex-col gap-32">
          {workflows.map((workflow, workflowIndex) => (
            <div key={workflow.title} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mb-12"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-[#0047ab] mb-4 block">
                  {workflow.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium mb-4">{workflow.title}</h3>
                <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                  {workflow.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
                {workflow.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: stepIndex * 0.1 }}
                    className={`p-8 border border-[#1A1A1A]/10 bg-white rounded-lg flex flex-col justify-between hover:border-[#0047ab]/30 transition-colors ${step.colSpan} ${step.rowSpan}`}
                  >
                    <div>
                      <h4 className="text-lg font-medium mb-3">{step.title}</h4>
                      <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
