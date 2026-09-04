import Link from "next/link";

export const metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <main className="relative min-h-screen px-4 md:px-8 pt-32 md:pt-36 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="mono text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-widest">
          ← Zurück
        </Link>
        <h1 className="mt-6 d-hero text-huge chrome-text leading-[0.85]">
          Impressum
        </h1>

        <div className="mt-12 space-y-10 text-white/75 leading-relaxed">
          <section>
            <h2 className="vin mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Car &amp; Sound<br />
              Überherrner Str. 3<br />
              66740 Saarlouis<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">Kontakt</h2>
            <p>
              Telefon: 06831 704070<br />
              E-Mail: info@carundsound.de
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">Umsatzsteuer-ID</h2>
            <p>Wird auf Anfrage mitgeteilt.</p>
          </section>

          <section>
            <h2 className="vin mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Geschäftsführung Car &amp; Sound, Anschrift wie oben.</p>
          </section>

          <section>
            <h2 className="vin mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="vin mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
