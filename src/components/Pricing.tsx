"use client";

import { useState, FormEvent } from "react";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enterprise Anfrage");
    const body = encodeURIComponent(
      `Name / Firma: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    );
    window.location.href = `mailto:info@safedocsportal.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-dark transition cursor-pointer"
          aria-label="Schließen"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-xl font-bold text-text-dark mb-1">
          Enterprise Anfrage
        </h3>
        <p className="text-sm text-text-muted mb-6">
          Interessiert an On-Premise oder einem individuellen Paket? Erzählen Sie uns kurz von Ihrem Anwendungsfall.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-text-dark mb-1">
              Name / Firma
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Muster GmbH"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-text-dark mb-1">
              E-Mail
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="kontakt@firma.de"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-text-dark mb-1">
              Nachricht
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ihre Nachricht an uns..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-light resize-y"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary-light px-6 py-2.5 font-semibold text-white transition hover:bg-primary cursor-pointer"
            >
              Anfrage senden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showContact, setShowContact] = useState(false);

  const plans = [
    {
      name: "Cloud Starter",
      price: "99€",
      originalPrice: "199€",
      priceSuffix: " /Monat",
      discount: true,
      features: [
        "5 GB Speicher",
        "1 Nutzer",
        "E-Mail-Support",
        "Grundlegende Verschlüsselung",
      ],
      buttonText: "14 Tage kostenlos testen",
      buttonHref: "https://buy.stripe.com/3cI28qbcPbpadOqdtac7u03",
      highlighted: false,
      contact: false,
    },
    {
      name: "Cloud Business",
      price: "199€",
      originalPrice: "299€",
      priceSuffix: " /Monat",
      discount: true,
      features: [
        "100 GB Speicher",
        "Bis zu 10 Nutzer",
        "Prioritäts-Support",
        "Ende-zu-Ende Verschlüsselung",
        "Versionierung",
        "API-Zugang",
      ],
      buttonText: "14 Tage kostenlos testen",
      buttonHref: "https://buy.stripe.com/fZu5kC94H50MbGidtac7u04",
      highlighted: true,
      contact: false,
    },
    {
      name: "Enterprise",
      price: "Auf Anfrage",
      originalPrice: null,
      priceSuffix: "",
      discount: false,
      features: [
        "Unbegrenzter Speicher",
        "Unbegrenzte Nutzer",
        "Dedizierter Ansprechpartner",
        "Erweiterte Sicherheit",
        "Custom Integration",
        "SLA-Garantie",
      ],
      buttonText: "Kontakt aufnehmen",
      buttonHref: "",
      highlighted: false,
      contact: true,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Unsere Preise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Transparent und fair — wählen Sie den passenden Plan
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl bg-white p-8 shadow-sm ${
                plan.highlighted
                  ? "ring-2 ring-primary-light scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-light px-4 py-1 text-base font-semibold text-white">
                  Beliebt
                </span>
              )}

              <h3 className="mb-4 text-xl font-bold text-text-dark">
                {plan.name}
              </h3>

              <div className="mb-2">
                {plan.discount && plan.originalPrice && (
                  <span className="text-lg text-text-muted line-through mr-2">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                {plan.priceSuffix && (
                  <span className="text-text-muted">{plan.priceSuffix}</span>
                )}
              </div>
              <p className="text-xs text-text-muted mb-1">
                Netto zzgl. 19% MwSt.
              </p>

              {plan.discount && (
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                    </svg>
                    Zeitlich begrenztes Angebot
                  </span>
                </div>
              )}

              {!plan.discount && <div className="mb-6" />}

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.contact ? (
                <button
                  onClick={() => setShowContact(true)}
                  className="w-full rounded-lg border-2 border-primary-light px-6 py-3 font-semibold text-primary-light transition hover:bg-primary-light hover:text-white cursor-pointer"
                >
                  {plan.buttonText}
                </button>
              ) : plan.highlighted ? (
                <a href={plan.buttonHref} className="block w-full rounded-lg bg-primary-light px-6 py-3 font-semibold text-white text-center transition hover:bg-primary">
                  {plan.buttonText}
                </a>
              ) : (
                <a href={plan.buttonHref} className="block w-full rounded-lg border-2 border-primary-light px-6 py-3 font-semibold text-primary-light text-center transition hover:bg-primary-light hover:text-white">
                  {plan.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  );
}
