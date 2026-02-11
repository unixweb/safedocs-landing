"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Wo werden meine Daten gespeichert?",
    answer:
      "Alle Daten werden ausschließlich in zertifizierten deutschen Rechenzentren gespeichert. Wir arbeiten mit ISO 27001-zertifizierten Hosting-Partnern zusammen.",
  },
  {
    question: "Ist SafeDocs DSGVO-konform?",
    answer:
      "Ja, SafeDocs ist vollständig DSGVO-konform. Wir verarbeiten alle Daten gemäß den europäischen Datenschutzrichtlinien und stellen auf Wunsch einen Auftragsverarbeitungsvertrag (AVV) bereit.",
  },
  {
    question: "Kann ich SafeDocs in mein bestehendes System integrieren?",
    answer:
      "Ja, über unsere RESTful API können Sie SafeDocs nahtlos in Ihre bestehende IT-Infrastruktur integrieren. Wir bieten SDKs für alle gängigen Programmiersprachen.",
  },
  {
    question: "Wie funktioniert die Versionierung?",
    answer:
      "Jede Änderung an einem Dokument wird automatisch als neue Version gespeichert. Sie können jederzeit frühere Versionen einsehen und wiederherstellen.",
  },
  {
    question: "Was passiert, wenn ich mein Abo kündige?",
    answer:
      "Nach der Kündigung haben Sie noch 30 Tage Zugriff auf Ihre Daten und können diese exportieren. Danach werden alle Daten sicher und unwiderruflich gelöscht.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja, Sie können den Cloud Starter-Plan 14 Tage lang kostenlos und unverbindlich testen. Es ist keine Kreditkarte erforderlich.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Häufig gestellte Fragen
        </h2>

        <div className="divide-y divide-gray-200">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-text-dark text-lg pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
