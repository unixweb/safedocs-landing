export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Produkt */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white/80">
              Produkt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#preise" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#api" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  API-Dokumentation
                </a>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white/80">
              Unternehmen
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#ueber-uns" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#karriere" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Karriere
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white/80">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#impressum" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#agb" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white/80">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:info@safedocsportal.com" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  info@safedocsportal.com
                </a>
              </li>
              <li>
                <a href="tel:+49123456789" className="text-base text-white/70 hover:text-white hover:underline transition-colors">
                  +49 123 456789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-white/20" />

        <p className="mt-8 text-center text-base text-white/60">
          &copy; 2026 SafeDocs Portal. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
