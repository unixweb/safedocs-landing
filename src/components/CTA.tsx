"use client";

import Script from "next/script";

export default function CTA() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Bereit, Ihre Dokumente sicher zu verwalten?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Starten Sie jetzt kostenlos und überzeugen Sie sich selbst.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-white text-primary font-semibold rounded-lg px-8 py-4 hover:bg-gray-100 transition"
        >
          Jetzt kostenlos starten
        </a>

        <div className="mt-12 border-t border-white/20 pt-10">
          <p className="text-white/80 text-base mb-4">
            Oder bleiben Sie auf dem Laufenden
          </p>
          <div id="signup-form-f7564a7c-1478-4321-9aa9-2190e6d75ba2" />
          <Script
            src="https://zensend.email/forms/f7564a7c-1478-4321-9aa9-2190e6d75ba2/embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
