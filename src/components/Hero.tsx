export default function Hero() {
  return (
    <section className="w-full bg-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left column — text content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Sicherer Dokumentenaustausch für Moderne Unternehmen
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Das sichere Portal für Firmen und Selbstständige. Verwalten Sie
            Kontakte, tauschen Sie sensible Verträge aus und bearbeiten Sie
            Rechnungen mit moderner, authentifizierter Verschlüsselung.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-primary-light px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-primary"
            >
              Kostenlos testen
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-primary-light px-8 py-3 text-base font-semibold text-primary-light transition-colors hover:bg-primary-light hover:text-white"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        {/* Right column — app screenshot */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/safedocs-screenshot.jpeg"
            alt="SafeDocs Portal — Dashboard mit Portalverwaltung, Datei-Upload und mobiler Ansicht"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
