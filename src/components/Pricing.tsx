export default function Pricing() {
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

              {plan.highlighted ? (
                plan.buttonHref ? (
                  <a href={plan.buttonHref} className="block w-full rounded-lg bg-primary-light px-6 py-3 font-semibold text-white text-center transition hover:bg-primary">
                    {plan.buttonText}
                  </a>
                ) : (
                  <button className="w-full rounded-lg bg-primary-light px-6 py-3 font-semibold text-white transition hover:bg-primary">
                    {plan.buttonText}
                  </button>
                )
              ) : (
                plan.buttonHref ? (
                  <a href={plan.buttonHref} className="block w-full rounded-lg border-2 border-primary-light px-6 py-3 font-semibold text-primary-light text-center transition hover:bg-primary-light hover:text-white">
                    {plan.buttonText}
                  </a>
                ) : (
                  <button className="w-full rounded-lg border-2 border-primary-light px-6 py-3 font-semibold text-primary-light transition hover:bg-primary-light hover:text-white">
                    {plan.buttonText}
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
