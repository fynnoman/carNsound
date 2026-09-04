import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.08] bg-void-950">
      {/* Big wordmark strip */}
      <div className="border-b border-white/[0.06] py-10 md:py-16 px-4 md:px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="d-hero leading-[0.85] text-[16vw] tracking-tighter2">
            <span className="chrome-text">CAR</span>
            <span className="oxide-text">&amp;</span>
            <span className="chrome-text">SOUND</span>
          </h3>
        </div>
      </div>

      <div className="py-14 md:py-16 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2">
            <span className="tape-label">Meisterbetrieb</span>
            <p className="mt-6 text-white/60 max-w-sm leading-snug text-sm">
              Meisterwerkstatt für Car Hifi und Kfz-Service in Saarlouis.
              Alle Marken, ein Team, ehrliche Arbeit.
            </p>
          </div>

          <div>
            <h4 className="vin mb-4">Werkstatt</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Überherrner Str. 3</li>
              <li>66740 Saarlouis</li>
              <li className="pt-2 mono tabular">
                <a className="hover:text-white transition-colors" href="tel:+4968317040 70">
                  06831 704070
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="mailto:info@carundsound.de">
                  info@carundsound.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="vin mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="/impressum">
                  Impressum
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/datenschutz">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mono text-[10px] uppercase tracking-widest text-white/40">
          <span>© {year} CAR &amp; SOUND SAARLOUIS · ALLE RECHTE VORBEHALTEN</span>
          <span className="flex items-center gap-4 flex-wrap">
            <span className="tabular">GOOGLE 4,9 / 211 REV</span>
            <span>·</span>
            <span>MEISTERBETRIEB KFZ-TECHNIK</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
