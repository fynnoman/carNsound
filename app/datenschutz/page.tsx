import Link from "next/link";

export const metadata = {
  title: "Datenschutz",
};

export default function Datenschutz() {
  return (
    <main className="relative min-h-screen px-4 md:px-8 pt-32 md:pt-36 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="mono text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-widest">
          ← Zurück
        </Link>
        <h1 className="mt-6 d-hero text-huge chrome-text leading-[0.85]">
          Datenschutz
        </h1>

        <div className="mt-12 space-y-10 text-white/75 leading-relaxed">
          <section>
            <h2 className="vin mb-3">1. Verantwortlicher</h2>
            <p>
              Car &amp; Sound<br />
              Überherrner Str. 3, 66740 Saarlouis<br />
              info@carundsound.de · 06831 704070
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">2. Verarbeitung beim Besuch der Website</h2>
            <p>
              Beim Aufruf dieser Website werden durch den auf deinem Endgerät zum
              Einsatz kommenden Browser automatisch Informationen an den Server unserer
              Website gesendet. Diese Informationen werden temporär in einem Logfile
              gespeichert und nach spätestens sieben Tagen automatisch gelöscht.
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">3. Kontaktaufnahme</h2>
            <p>
              Wenn du uns per E-Mail oder über das Kontaktformular kontaktierst, werden
              deine Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese
              Daten geben wir nicht ohne deine Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">4. Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
              Verarbeitung deiner personenbezogenen Daten. Zur Ausübung dieser Rechte
              wende dich an info@carundsound.de.
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">5. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Es
              findet kein Tracking und keine Weitergabe an Dritte statt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
