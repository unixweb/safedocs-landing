import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl mb-10">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-lg leading-relaxed text-text-dark">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                1) Einleitung und Kontaktdaten des Verantwortlichen
              </h2>

              <p className="mb-4">
                1.1 Wir freuen uns, dass du unsere Website besuchst und
                bedanken uns für dein Interesse. Im Folgenden informieren wir
                dich über den Umgang mit deinen personenbezogenen Daten bei der
                Nutzung unserer Website. Personenbezogene Daten sind hierbei
                alle Daten, mit denen du persönlich identifiziert werden kannst.
              </p>

              <p>
                1.2 Verantwortlicher für die Datenverarbeitung auf dieser
                Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
                Joachim Hummel, Lisbergstrasse 12, 81249 München, Deutschland,
                Tel.:{" "}
                <a
                  href="tel:+498987181763"
                  className="text-primary-light hover:underline"
                >
                  +49-89-87181763
                </a>
                , E-Mail:{" "}
                <a
                  href="mailto:info@safedocsportal.com"
                  className="text-primary-light hover:underline"
                >
                  info@safedocsportal.com
                </a>
                . Der für die Verarbeitung von personenbezogenen Daten
                Verantwortliche ist diejenige natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten
                entscheidet.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                2) Datenerfassung beim Besuch unserer Website
              </h2>

              <p className="mb-4">
                2.1 Bei der bloß informatorischen Nutzung unserer Website, also
                wenn du dich nicht registrierst oder uns anderweitig
                Informationen übermittelst, erheben wir nur solche Daten, die
                dein Browser an den Seitenserver übermittelt (sog.
                &bdquo;Server-Logfiles&ldquo;). Wenn du unsere Website
                aufrufst, erheben wir die folgenden Daten, die für uns
                technisch erforderlich sind, um dir die Website anzuzeigen:
              </p>

              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffs</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>
                  Quelle/Verweis, von welchem du auf die Seite gelangtest
                </li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>
                  Verwendete IP-Adresse (ggf.: in anonymisierter Form)
                </li>
              </ul>

              <p className="mb-4">
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
                Basis unseres berechtigten Interesses an der Verbesserung der
                Stabilität und Funktionalität unserer Website. Eine Weitergabe
                oder anderweitige Verwendung der Daten findet nicht statt. Wir
                behalten uns allerdings vor, die Server-Logfiles nachträglich
                zu überprüfen, sollten konkrete Anhaltspunkte auf eine
                rechtswidrige Nutzung hinweisen.
              </p>

              <p>
                2.2 Diese Website nutzt aus Sicherheitsgründen und zum Schutz
                der Übertragung personenbezogener Daten und anderer
                vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an uns)
                eine SSL-bzw. TLS-Verschlüsselung. Du kannst eine
                verschlüsselte Verbindung an der Zeichenfolge
                &bdquo;https://&ldquo; und dem Schloss-Symbol in deiner
                Browserzeile erkennen.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                3) Hosting &amp; Content-Delivery-Network
              </h2>

              <p className="mb-4">
                Für das Hosting unserer Website und die Darstellung der
                Seiteninhalte nutzen wir einen Anbieter, der seine Leistungen
                selbst oder durch ausgewählte Sub-Unternehmer ausschließlich
                auf Servern innerhalb der Europäischen Union erbringt.
              </p>

              <p className="mb-4">
                Sämtliche auf unserer Website erhobenen Daten werden auf diesen
                Servern verarbeitet.
              </p>

              <p>
                Wir haben mit dem Anbieter einen
                Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                Daten unserer Seitenbesucher sicherstellt und eine
                unberechtigte Weitergabe an Dritte untersagt.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                4) Cookies
              </h2>

              <p className="mb-4">
                Um den Besuch unserer Website attraktiv zu gestalten und die
                Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir
                Cookies, also kleine Textdateien, die auf deinem Endgerät
                abgelegt werden. Teilweise werden diese Cookies nach Schließen
                des Browsers automatisch wieder gelöscht (sog.
                &bdquo;Session-Cookies&ldquo;), teilweise verbleiben diese
                Cookies länger auf deinem Endgerät und ermöglichen das
                Speichern von Seiteneinstellungen (sog. &bdquo;persistente
                Cookies&ldquo;). Im letzteren Fall kannst du die Speicherdauer
                der Übersicht zu den Cookie-Einstellungen deines Webbrowsers
                entnehmen.
              </p>

              <p className="mb-4">
                Sofern durch einzelne von uns eingesetzte Cookies auch
                personenbezogene Daten verarbeitet werden, erfolgt die
                Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur
                Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO
                im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1
                lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der
                bestmöglichen Funktionalität der Website sowie einer
                kundenfreundlichen und effektiven Ausgestaltung des
                Seitenbesuchs.
              </p>

              <p className="mb-4">
                Du kannst deinen Browser so einstellen, dass du über das Setzen
                von Cookies informiert wirst und einzeln über deren Annahme
                entscheiden oder die Annahme von Cookies für bestimmte Fälle
                oder generell ausschließen kannst.
              </p>

              <p>
                Bitte beachte, dass bei Nichtannahme von Cookies die
                Funktionalität unserer Website eingeschränkt sein kann.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                5) Kontaktaufnahme
              </h2>

              <p className="mb-4">
                Im Rahmen der Kontaktaufnahme mit uns (z.B. per
                Kontaktformular oder E-Mail) werden personenbezogene Daten
                erhoben. Welche Daten im Falle der Nutzung eines
                Kontaktformulars erhoben werden, ist aus dem jeweiligen
                Kontaktformular ersichtlich. Diese Daten werden ausschließlich
                zum Zweck der Beantwortung deines Anliegens bzw. für die
                Kontaktaufnahme und die damit verbundene technische
                Administration gespeichert und verwendet.
              </p>

              <p>
                Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
                berechtigtes Interesse an der Beantwortung deines Anliegens
                gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt deine Kontaktierung
                auf den Abschluss eines Vertrages ab, so ist zusätzliche
                Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b
                DSGVO. Deine Daten werden nach abschließender Bearbeitung
                deiner Anfrage gelöscht. Dies ist der Fall, wenn sich aus den
                Umständen entnehmen lässt, dass der betroffene Sachverhalt
                abschließend geklärt ist und sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                6) Registrierung bei SafeDocs Portal
              </h2>

              <p className="mb-4">
                Du kannst dich auf unserer Website unter Angabe von
                personenbezogenen Daten registrieren. Welche personenbezogenen
                Daten für die Registrierung verarbeitet werden, ergibt sich aus
                der Eingabemaske, die für die Registrierung verwendet wird. Wir
                verwenden für die Registrierung das sog.
                Double-opt-in-Verfahren, d.h. deine Registrierung ist erst
                abgeschlossen, wenn du zuvor deine Anmeldung über eine dir zu
                diesem Zweck zugesandte Bestätigungs-E-Mail durch Klick auf den
                darin enthaltenen Link bestätigt hast. Falls deine
                diesbezügliche Bestätigung nicht binnen 24 Stunden erfolgt, wird
                deine Anmeldung automatisch aus unserer Datenbank gelöscht. Die
                Angabe der zuvor genannten Daten ist verpflichtend. Alle
                weiteren Informationen kannst du freiwillig durch Nutzung
                unseres Portals bereitstellen.
              </p>

              <p>
                Wenn du SafeDocs Portal nutzt, speichern wir deine zur
                Vertragserfüllung erforderlichen Daten, auch evtl. Angaben zur
                Zahlungsweise, bis du deinen Zugang endgültig löschst.
                Weiterhin speichern wir die von dir angegebenen freiwilligen
                Daten für die Zeit deiner Nutzung des Portals, soweit du diese
                nicht zuvor löschst. Alle Angaben kannst du im geschützten
                Kundenbereich verwalten und ändern. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">
                7) Nutzung von Kundendaten zur Direktwerbung
              </h2>

              <h3 className="text-lg font-semibold text-text-dark mb-3">
                Anmeldung zu unserem E-Mail-Newsletter
              </h3>

              <p className="mb-4">
                Wenn du dich zu unserem E-Mail Newsletter anmeldest, übersenden
                wir dir regelmäßig Informationen zu unseren Angeboten.
                Pflichtangabe für die Übersendung des Newsletters ist allein
                deine E-Mailadresse. Die Angabe weiterer Daten ist freiwillig
                und wird verwendet, um dich persönlich ansprechen zu können. Für
                den Versand des Newsletters verwenden wir das sog. Double
                Opt-in Verfahren. Dies bedeutet, dass wir dir erst dann einen
                E-Mail Newsletter übermitteln werden, wenn du uns ausdrücklich
                bestätigt hast, dass du in den Empfang von Newsletter
                einwilligst. Wir schicken dir dann eine Bestätigungs-E-Mail,
                mit der du gebeten wirst, durch Anklicken eines entsprechenden
                Links zu bestätigen, dass du künftig den Newsletter erhalten
                willst.
              </p>

              <p>
                Mit der Aktivierung des Bestätigungslinks erteilst du uns deine
                Einwilligung für die Nutzung deiner personenbezogenen Daten
                gemäß Art. 6 Abs. 1 lit. a DSGVO. Bei der Anmeldung zum
                Newsletter speichern wir deine vom Internet Service-Provider
                (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit
                der Anmeldung, um einen möglichen Missbrauch deiner
                E-Mail-Adresse zu einem späteren Zeitpunkt nachvollziehen zu
                können. Die von uns bei der Anmeldung zum Newsletter erhobenen
                Daten werden ausschließlich für Zwecke der werblichen Ansprache
                im Wege des Newsletters benutzt. Du kannst den Newsletter
                jederzeit über den dafür vorgesehenen Link im Newsletter oder
                durch entsprechende Nachricht an den eingangs genannten
                Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird
                deine E-Mailadresse unverzüglich in unserem Newsletter-Verteiler
                gelöscht, soweit du nicht ausdrücklich in eine weitere Nutzung
                deiner Daten eingewilligt hast oder wir uns eine
                darüberhinausgehende Datenverwendung vorbehalten, die gesetzlich
                erlaubt ist und über die wir dich in dieser Erklärung
                informieren.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
