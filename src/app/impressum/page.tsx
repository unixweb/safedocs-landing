import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl mb-10">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none text-text-dark space-y-8">
            {/* Angaben */}
            <section>
              <p className="text-lg leading-relaxed">
                Joachim Hummel
                <br />
                Lisbergstrasse 12
                <br />
                81249 München
                <br />
                Deutschland
              </p>

              <p className="mt-4 text-lg leading-relaxed">
                Tel.:{" "}
                <a
                  href="tel:+498980044390"
                  className="text-primary-light hover:underline"
                >
                  +49-89-80044390
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@safedocsportal.com"
                  className="text-primary-light hover:underline"
                >
                  info@safedocsportal.com
                </a>
              </p>

              <p className="mt-4 text-lg leading-relaxed">
                Umsatzsteuer-Identifikationsnummer: DE185721123
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-xl font-bold text-primary mt-8 mb-3">
                Verantwortliche/r i.S.d. § 18 Abs. 2 MStV
              </h2>
              <p className="text-lg leading-relaxed">
                Joachim Hummel, Lisbergstrasse 12, 81249 München
              </p>
            </section>

            {/* Urheberrechtshinweis */}
            <section>
              <h2 className="text-xl font-bold text-primary mt-8 mb-3">
                Urheberrechtshinweis &amp; KI-Verbot
              </h2>
              <p className="text-lg leading-relaxed">
                Der Betreiber dieser Website untersagt ausdrücklich die Nutzung
                sämtlicher Inhalte (Texte, Bilder, Metadaten) durch Dritte für
                folgende Zwecke:
              </p>

              <ul className="mt-4 space-y-2 list-disc list-inside text-lg text-text-dark">
                <li>
                  Training, Entwicklung oder Optimierung von Systemen
                  künstlicher Intelligenz (KI)
                </li>
                <li>Maschinelles Lernen (ML)</li>
                <li>Text- und Data-Mining</li>
              </ul>

              <p className="mt-6 text-lg leading-relaxed">
                Dieses Verbot gilt unabhängig davon, ob:
              </p>

              <ul className="mt-4 space-y-2 list-disc list-inside text-lg text-text-dark">
                <li>
                  Technische Schutzmaßnahmen (wie Robots-Meta-Tags)
                  implementiert sind oder nicht
                </li>
                <li>
                  Inhalte über öffentlich zugängliche Schnittstellen abgerufen
                  werden
                </li>
                <li>
                  Die Verarbeitung durch Bots, Crawler oder andere
                  automatisierte Systeme erfolgt
                </li>
              </ul>

              <p className="mt-6 text-lg leading-relaxed">
                Ausnahmen bedürfen der schriftlichen Genehmigung des
                Website-Betreibers.
              </p>

              <p className="mt-4 text-sm text-text-muted font-mono">
                Referenzierte Meta-Tags:{" "}
                <code className="bg-bg-light px-2 py-1 rounded text-sm">
                  &lt;meta name=&quot;robots&quot;
                  content=&quot;noai, noimageai&quot;&gt;
                </code>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
