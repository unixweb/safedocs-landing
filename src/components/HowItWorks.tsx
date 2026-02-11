export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            So funktioniert&apos;s
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            In drei einfachen Schritten zur sicheren Dokumentenverwaltung
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center md:flex-1 md:max-w-xs">
            {/* Number circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-2xl font-bold text-white">
              1
            </div>

            {/* Icon */}
            <div className="mt-5 text-primary-light">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="mt-4 text-xl font-bold text-text-dark">
              Registrieren
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Kostenloses Konto in unter 2 Minuten erstellen.
            </p>
          </div>

          {/* Connector 1 -> 2 */}
          <div className="hidden shrink-0 md:flex md:items-center md:px-4 md:pt-8">
            <svg
              className="h-6 w-24 text-primary-light/50"
              fill="none"
              viewBox="0 0 96 24"
            >
              <line
                x1="0"
                y1="12"
                x2="76"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M76 6l12 6-12 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center md:flex-1 md:max-w-xs">
            {/* Number circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-2xl font-bold text-white">
              2
            </div>

            {/* Icon */}
            <div className="mt-5 text-primary-light">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="mt-4 text-xl font-bold text-text-dark">
              Dokumente hochladen
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Per Drag &amp; Drop oder API — wir k&uuml;mmern uns um die
              Verschl&uuml;sselung.
            </p>
          </div>

          {/* Connector 2 -> 3 */}
          <div className="hidden shrink-0 md:flex md:items-center md:px-4 md:pt-8">
            <svg
              className="h-6 w-24 text-primary-light/50"
              fill="none"
              viewBox="0 0 96 24"
            >
              <line
                x1="0"
                y1="12"
                x2="76"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M76 6l12 6-12 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center md:flex-1 md:max-w-xs">
            {/* Number circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-2xl font-bold text-white">
              3
            </div>

            {/* Icon */}
            <div className="mt-5 text-primary-light">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21 12.318 12.318 0 0 1 2.25 19.234v-.106A6.375 6.375 0 0 1 8.625 12.75a6.375 6.375 0 0 1 6.163 4.308M11.25 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="mt-4 text-xl font-bold text-text-dark">
              Sicher zusammenarbeiten
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Team einladen, Berechtigungen setzen, loslegen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
