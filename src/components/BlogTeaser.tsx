import Link from "next/link";

function SecureDocsIllustration() {
  return (
    <div className="h-48 bg-gradient-to-br from-[#0f2b46] to-primary flex items-center justify-center overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Decorative background */}
        <circle cx="330" cy="160" r="100" fill="white" fillOpacity="0.03" />
        <circle cx="70" cy="30" r="70" fill="white" fillOpacity="0.03" />

        {/* Concentric security rings */}
        <circle cx="200" cy="96" r="78" stroke="white" strokeOpacity="0.06" strokeWidth="1" fill="none" />
        <circle cx="200" cy="96" r="64" stroke="white" strokeOpacity="0.08" strokeWidth="1" fill="none" />
        <circle cx="200" cy="96" r="50" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />

        {/* Layer 1: Documents fanned out behind vault */}
        {/* Doc left */}
        <g transform="rotate(-15, 148, 96)">
          <rect x="126" y="52" width="44" height="58" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="134" y="66" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
          <rect x="134" y="73" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
          <rect x="134" y="80" width="23" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
        </g>
        {/* Doc right */}
        <g transform="rotate(12, 252, 96)">
          <rect x="230" y="52" width="44" height="58" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="238" y="66" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
          <rect x="238" y="73" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
          <rect x="238" y="80" width="23" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
        </g>

        {/* Layer 2: Central vault door */}
        <circle cx="200" cy="96" r="42" fill="white" fillOpacity="0.12" />
        <circle cx="200" cy="96" r="38" fill="#1e3a5f" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
        {/* Vault spokes */}
        <line x1="200" y1="62" x2="200" y2="72" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        <line x1="200" y1="120" x2="200" y2="130" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        <line x1="166" y1="96" x2="176" y2="96" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        <line x1="224" y1="96" x2="234" y2="96" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        {/* Vault handle */}
        <circle cx="200" cy="96" r="16" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" fill="none" />
        <circle cx="200" cy="96" r="6" fill="white" fillOpacity="0.8" />

        {/* Fingerprint scan (left side) */}
        <g transform="translate(68, 68)">
          {/* Scan frame */}
          <path d="M0 8 L0 2 C0 0.9 0.9 0 2 0 L8 0" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M36 0 L42 0 C43.1 0 44 0.9 44 2 L44 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M44 48 L44 54 C44 55.1 43.1 56 42 56 L36 56" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M8 56 L2 56 C0.9 56 0 55.1 0 54 L0 48" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Fingerprint lines */}
          <path d="M14 38 C14 28 18 18 22 16 C26 14 30 18 30 24" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M18 40 C18 32 20 22 22 20 C25 18 27 22 27 28" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M22 38 C22 34 23 28 24 26" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Scan line */}
          <line x1="4" y1="32" x2="40" y2="32" stroke="#22c55e" strokeOpacity="0.6" strokeWidth="1" />
        </g>

        {/* Status indicators (right side) */}
        {/* Indicator 1 */}
        <circle cx="310" cy="56" r="5" fill="#22c55e" fillOpacity="0.8" />
        <rect x="322" y="53" width="36" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
        {/* Indicator 2 */}
        <circle cx="310" cy="76" r="5" fill="#22c55e" fillOpacity="0.8" />
        <rect x="322" y="73" width="28" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
        {/* Indicator 3 */}
        <circle cx="310" cy="96" r="5" fill="#22c55e" fillOpacity="0.8" />
        <rect x="322" y="93" width="32" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
        {/* Indicator 4 */}
        <circle cx="310" cy="116" r="5" fill="#22c55e" fillOpacity="0.8" />
        <rect x="322" y="113" width="24" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
        {/* Indicator 5 */}
        <circle cx="310" cy="136" r="5" fill="#22c55e" fillOpacity="0.8" />
        <rect x="322" y="133" width="30" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
      </svg>
    </div>
  );
}

function DsgvoIllustration() {
  return (
    <div className="h-48 bg-gradient-to-br from-[#0f2b46] to-primary flex items-center justify-center overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Decorative background */}
        <circle cx="340" cy="150" r="90" fill="white" fillOpacity="0.04" />
        <circle cx="60" cy="40" r="70" fill="white" fillOpacity="0.04" />

        {/* EU stars circle */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const cx = 160 + Math.cos(angle) * 52;
          const cy = 96 + Math.sin(angle) * 52;
          return (
            <polygon
              key={i}
              points={`${cx},${cy - 6} ${cx + 2.3},${cy - 1.8} ${cx + 5.7},${cy - 1.8} ${cx + 2.9},${cy + 1.2} ${cx + 3.5},${cy + 5.8} ${cx},${cy + 3} ${cx - 3.5},${cy + 5.8} ${cx - 2.9},${cy + 1.2} ${cx - 5.7},${cy - 1.8} ${cx - 2.3},${cy - 1.8}`}
              fill="white"
              fillOpacity="0.7"
            />
          );
        })}

        {/* Paragraph symbol in center of stars */}
        <text
          x="160"
          y="106"
          textAnchor="middle"
          fontSize="40"
          fontWeight="bold"
          fill="white"
          fillOpacity="0.9"
          fontFamily="serif"
        >
          &sect;
        </text>

        {/* Clipboard / checklist */}
        <rect x="248" y="36" width="60" height="80" rx="5" fill="white" fillOpacity="0.9" />
        {/* Clipboard top */}
        <rect x="263" y="28" width="30" height="14" rx="4" fill="white" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Checklist items */}
        {/* Item 1 - checked */}
        <rect x="258" y="56" width="12" height="12" rx="2" stroke="#22c55e" strokeWidth="1.5" fill="#22c55e" fillOpacity="0.15" />
        <path d="M261 62 L264 65 L268 59" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="276" y="59" width="24" height="4" rx="2" fill="#94a3b8" fillOpacity="0.5" />

        {/* Item 2 - checked */}
        <rect x="258" y="74" width="12" height="12" rx="2" stroke="#22c55e" strokeWidth="1.5" fill="#22c55e" fillOpacity="0.15" />
        <path d="M261 80 L264 83 L268 77" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="276" y="77" width="20" height="4" rx="2" fill="#94a3b8" fillOpacity="0.5" />

        {/* Item 3 - unchecked */}
        <rect x="258" y="92" width="12" height="12" rx="2" stroke="#94a3b8" strokeWidth="1.5" fill="white" />
        <rect x="276" y="95" width="22" height="4" rx="2" fill="#94a3b8" fillOpacity="0.5" />

        {/* Decorative: small padlock */}
        <rect x="78" y="120" width="18" height="14" rx="3" fill="white" fillOpacity="0.2" />
        <path
          d="M81 120 L81 115 C81 110 87 106 93 110 L93 115 L93 120"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* 2026 year text */}
        <text
          x="340"
          y="155"
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fill="white"
          fillOpacity="0.12"
          fontFamily="sans-serif"
        >
          2026
        </text>
      </svg>
    </div>
  );
}

function CloudTransformationIllustration() {
  return (
    <div className="h-48 bg-gradient-to-br from-[#0f2b46] to-primary flex items-center justify-center overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Decorative background */}
        <circle cx="60" cy="150" r="80" fill="white" fillOpacity="0.04" />
        <circle cx="350" cy="40" r="60" fill="white" fillOpacity="0.04" />

        {/* Chaotic emails (left side) */}
        {/* Email 1 - tilted */}
        <g transform="rotate(-12, 100, 80)">
          <rect x="70" y="60" width="54" height="38" rx="3" fill="white" fillOpacity="0.35" />
          <path d="M70 63 L97 82 L124 63" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
        </g>
        {/* Email 2 - tilted other way */}
        <g transform="rotate(8, 120, 100)">
          <rect x="90" y="78" width="54" height="38" rx="3" fill="white" fillOpacity="0.3" />
          <path d="M90 81 L117 100 L144 81" stroke="white" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
        </g>
        {/* Email 3 - slightly tilted */}
        <g transform="rotate(-5, 80, 110)">
          <rect x="55" y="92" width="48" height="34" rx="3" fill="white" fillOpacity="0.25" />
          <path d="M55 95 L79 111 L103 95" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
        </g>
        {/* Exclamation mark for chaos */}
        <text x="138" y="72" fontSize="20" fontWeight="bold" fill="#ef4444" fillOpacity="0.7" fontFamily="sans-serif">!</text>

        {/* Arrow in the middle */}
        <path
          d="M170 96 L210 96"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M204 88 L214 96 L204 104"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Cloud (right side) */}
        <path
          d="M270 110 C255 110 248 100 250 90 C252 78 264 70 276 72 C280 60 294 54 306 58 C318 62 324 74 320 84 C332 84 338 96 330 106 C324 114 312 114 312 114 L270 114 Z"
          fill="white"
          fillOpacity="0.9"
          stroke="white"
          strokeWidth="1"
        />

        {/* Organized folder structure inside cloud */}
        {/* Folder 1 */}
        <rect x="268" y="86" width="22" height="16" rx="2" fill="#2d6da8" fillOpacity="0.7" />
        <rect x="268" y="83" width="10" height="5" rx="1.5" fill="#2d6da8" fillOpacity="0.7" />
        {/* Folder 2 */}
        <rect x="294" y="86" width="22" height="16" rx="2" fill="#22c55e" fillOpacity="0.7" />
        <rect x="294" y="83" width="10" height="5" rx="1.5" fill="#22c55e" fillOpacity="0.7" />

        {/* Small checkmark on cloud */}
        <circle cx="290" cy="72" r="8" fill="#22c55e" />
        <path d="M286 72 L289 75 L295 69" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Upload arrows (decorative) */}
        <line x1="234" y1="130" x2="234" y2="118" stroke="white" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" />
        <path d="M230 122 L234 116 L238 122" stroke="white" strokeOpacity="0.15" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="340" y1="140" x2="340" y2="128" stroke="white" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" />
        <path d="M336 132 L340 126 L344 132" stroke="white" strokeOpacity="0.15" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function BlogTeaser() {
  const articles = [
    {
      date: "5. Februar 2026",
      title: "5 Tipps für sichere Dokumentenverwaltung im Unternehmen",
      excerpt:
        "Erfahren Sie, wie Sie Ihre Unternehmensdokumente optimal schützen und gleichzeitig die Produktivität steigern.",
      slug: "/blog/sichere-dokumentenverwaltung",
      illustration: <SecureDocsIllustration />,
    },
    {
      date: "28. Januar 2026",
      title: "DSGVO-Compliance: Was Unternehmen 2026 wissen müssen",
      excerpt:
        "Die wichtigsten Änderungen und Anforderungen im Datenschutz für das aktuelle Jahr im Überblick.",
      slug: "/blog/dsgvo-compliance-2026",
      illustration: <DsgvoIllustration />,
    },
    {
      date: "15. Januar 2026",
      title: "Digitale Transformation: Von Email Chaos zur Cloud Organisation",
      excerpt:
        "Wie der Umstieg auf digitale Dokumentenverwaltung Ihrem Unternehmen Zeit und Kosten spart.",
      slug: "/blog/digitale-transformation",
      illustration: <CloudTransformationIllustration />,
    },
  ];

  return (
    <section id="blog" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Aktuelles aus unserem Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {article.illustration ?? (
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light" />
              )}

              <div className="p-6">
                <p className="text-text-muted text-base mb-2">{article.date}</p>
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-text-muted mb-4">{article.excerpt}</p>
                <Link
                  href={article.slug}
                  className="text-primary-light hover:underline font-medium"
                >
                  Weiterlesen &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
