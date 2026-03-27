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
    category: 'Customer Service',
    title: 'Der autonome Service-Agent',
    description: 'Qualifiziert Anfragen, löst Standardprobleme autonom und übergibt komplexe Fälle nahtlos an Ihre Mitarbeiter.',
    steps: [
      {
        title: 'Eingangskanal-Monitoring',
        description: 'Überwacht E-Mail, Chat und Telefon rund um die Uhr auf neue Anfragen.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Intents & Sentiment',
        description: 'Analysiert die Absicht und Stimmung des Kunden in Millisekunden.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Wissensdatenbank-Abgleich',
        description: 'Durchsucht Dokumentationen und FAQs nach der präzisesten Antwort.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Autonome Problemlösung',
        description: 'Führt Aktionen wie Passwort-Resets oder Statusabfragen direkt im CRM aus.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Nahtlose Übergabe',
        description: 'Eskaliert komplexe Fälle mit vollem Kontext an den richtigen Mitarbeiter.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Lern-Feedback-Loop',
        description: 'Optimiert Antworten basierend auf Mitarbeiter-Korrekturen und Kundenfeedback.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
    ],
  },
  {
    category: 'Lead Gen',
    title: 'Der intelligente Lead-Scout',
    description: 'Analysiert Website-Besucher in Echtzeit, qualifiziert Leads nach Ihren Kriterien und bucht Termine direkt im Kalender.',
    steps: [
      {
        title: 'Besucher-Identifikation',
        description: 'Erkennt Unternehmen hinter anonymen IP-Adressen und Website-Besuchen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Verhaltens-Analyse',
        description: 'Bewertet das Interesse basierend auf Verweildauer und besuchten Seiten.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Data Enrichment',
        description: 'Reichert Profile mit LinkedIn-Daten und Finanzkennzahlen automatisch an.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Smart Qualification',
        description: 'Filtert Leads nach Ihrem idealen Kundenprofil (ICP).',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Automatisierte Ansprache',
        description: 'Versendet personalisierte Erstnachrichten über den effektivsten Kanal.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Termin-Buchung',
        description: 'Synchronisiert Verfügbarkeiten und fixiert Meetings direkt im Kalender.',
        colSpan: 'md:col-span-3',
        rowSpan: 'md:row-span-1',
      },
    ],
  },
  {
    category: 'Operations',
    title: 'Der Prozess-Architekt',
    description: 'Optimiert Lieferketten durch Datenanalyse, prognostiziert Engpässe und automatisiert das Reporting.',
    steps: [
      {
        title: 'Daten-Aggregation',
        description: 'Bündelt Informationen aus ERP, Excel und externen Logistik-Systemen.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
      },
      {
        title: 'Pattern Recognition',
        description: 'Erkennt Ineffizienzen und Anomalien in Echtzeit-Datenströmen.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Prädiktive Planung',
        description: 'Prognostiziert Materialbedarf und mögliche Verzögerungen proaktiv.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Workflow-Orchestrierung',
        description: 'Triggert Folgeprozesse in abhängigen Abteilungen automatisch an.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Auto-Reporting',
        description: 'Erstellt visuelle Dashboards und Berichte für das Management ohne manuellen Aufwand.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
      },
      {
        title: 'Governance-Check',
        description: 'Prüft jeden Schritt auf Einhaltung interner Richtlinien und Compliance.',
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
                    className={`p-8 border border-[#1A1A1A]/10 bg-[#FAFAFA] flex flex-col justify-between hover:border-[#0047ab]/30 transition-colors ${step.colSpan} ${step.rowSpan}`}
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
