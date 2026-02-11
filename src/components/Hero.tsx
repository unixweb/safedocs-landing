export default function Hero() {
  return (
    <section className="w-full bg-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left column — text content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Ihre Dokumente.
            <br />
            Sicher. Immer verfügbar.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            SafeDocs Portal bietet Unternehmen eine sichere, DSGVO-konforme
            Lösung für Dokumentenspeicherung und -verwaltung.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
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

        {/* Right column — illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 360"
            className="w-full max-w-md lg:max-w-lg"
            aria-hidden="true"
          >
            {/* Background circle */}
            <circle cx="200" cy="180" r="150" fill="#f7f8fa" />

            {/* Document — rear page */}
            <rect
              x="130"
              y="60"
              width="140"
              height="190"
              rx="8"
              fill="#ffffff"
              stroke="#2d6da8"
              strokeWidth="2"
            />

            {/* Document — front page */}
            <rect
              x="115"
              y="75"
              width="140"
              height="190"
              rx="8"
              fill="#ffffff"
              stroke="#1e3a5f"
              strokeWidth="2.5"
            />

            {/* Text lines on document */}
            <rect x="135" y="105" width="80" height="6" rx="3" fill="#2d6da8" opacity="0.5" />
            <rect x="135" y="120" width="100" height="6" rx="3" fill="#2d6da8" opacity="0.35" />
            <rect x="135" y="135" width="60" height="6" rx="3" fill="#2d6da8" opacity="0.35" />
            <rect x="135" y="155" width="90" height="6" rx="3" fill="#2d6da8" opacity="0.25" />
            <rect x="135" y="170" width="100" height="6" rx="3" fill="#2d6da8" opacity="0.25" />
            <rect x="135" y="185" width="70" height="6" rx="3" fill="#2d6da8" opacity="0.25" />
            <rect x="135" y="205" width="50" height="6" rx="3" fill="#2d6da8" opacity="0.15" />
            <rect x="135" y="220" width="80" height="6" rx="3" fill="#2d6da8" opacity="0.15" />

            {/* Shield */}
            <g transform="translate(210, 160)">
              {/* Shield body */}
              <path
                d="M0-60 L50-40 L50 10 Q50 55 0 75 Q-50 55 -50 10 L-50-40 Z"
                fill="#1e3a5f"
                opacity="0.9"
              />
              {/* Shield inner */}
              <path
                d="M0-48 L40-32 L40 8 Q40 45 0 62 Q-40 45 -40 8 L-40-32 Z"
                fill="#2d6da8"
              />
              {/* Checkmark */}
              <polyline
                points="-16,6 -4,20 20,-10"
                fill="none"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Lock icon — small, bottom-left of document */}
            <g transform="translate(142, 240)">
              <rect x="-10" y="0" width="20" height="15" rx="3" fill="#1e3a5f" />
              <path
                d="M-6-1 L-6-6 Q-6-13 0-13 Q6-13 6-6 L6-1"
                fill="none"
                stroke="#1e3a5f"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="0" cy="7" r="2" fill="#ffffff" />
            </g>

            {/* Decorative dots */}
            <circle cx="80" cy="100" r="4" fill="#22c55e" opacity="0.5" />
            <circle cx="320" cy="260" r="5" fill="#22c55e" opacity="0.4" />
            <circle cx="310" cy="90" r="3" fill="#2d6da8" opacity="0.3" />
            <circle cx="90" cy="260" r="3.5" fill="#2d6da8" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
