"use client";

import { motion } from "framer-motion";

type Service = {
  no: string;
  title: string;
  short: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  featured?: boolean;
};

const services: Service[] = [
  {
    no: "01",
    title: "Car Hifi & Retrofits",
    short: "CarPlay · Android Auto · Kamera",
    desc: "Nachrüstung und Freischaltung von Apple CarPlay, Android Auto, Rückfahrkameras, Lautsprecher-Upgrades und OEM Retrofits.",
    tags: ["CarPlay", "Android Auto", "Kamera", "DSP", "OEM"],
    icon: <IconWave />,
    featured: true,
  },
  {
    no: "02",
    title: "Wartung & Reparatur",
    short: "Alle Marken",
    desc: "Inspektion, Öl- und Bremsservice, Diagnose und Reparaturen an Fahrzeugen aller Marken. Ehrliche Diagnose, präzise Ausführung.",
    tags: ["Alle Marken", "Diagnose"],
    icon: <IconGear />,
  },
  {
    no: "03",
    title: "Autoglas",
    short: "Steinschlag · Tausch · ADAS",
    desc: "Steinschlag-Reparatur oder Austausch der Frontscheibe. Assistenzsysteme kalibrieren wir direkt mit.",
    tags: ["Steinschlag", "ADAS-Kalibrierung"],
    icon: <IconGlass />,
  },
  {
    no: "04",
    title: "Unfall · Smart Repair · Lack",
    short: "Von der Delle bis zur Neuwagen-Optik",
    desc: "Farbtongenaue Lackierung, Karosseriearbeit, Smart Repair. Kaskoabwicklung und Ersatzwagen inklusive.",
    tags: ["Instandsetzung", "Lack", "Kasko"],
    icon: <IconShield />,
    featured: true,
  },
  {
    no: "05",
    title: "Reifenservice",
    short: "Montage · Wuchten · RDKS",
    desc: "Sommer, Winter, Ganzjahr. Montage, Wuchten, RDKS-Anlernen und saisonale Einlagerung.",
    tags: ["Montage", "Wuchten", "Einlagerung"],
    icon: <IconWheel />,
  },
  {
    no: "06",
    title: "Achsvermessung",
    short: "3D · Spur · Sturz",
    desc: "Präzise 3D-Vermessung. Lenkung neutral, Reifen halten länger, Verbrauch sinkt.",
    tags: ["3D", "Spur", "Sturz"],
    icon: <IconTarget />,
  },
  {
    no: "07",
    title: "TÜV · AU · HU · Eintragungen",
    short: "Direkt im Haus",
    desc: "Hauptuntersuchung und Abgasuntersuchung direkt im Haus. Anbauteil-Eintragungen inklusive.",
    tags: ["HU", "AU", "Eintragung"],
    icon: <IconStamp />,
  },
  {
    no: "08",
    title: "Unfallgutachten",
    short: "Unabhängig · Beweissicherung",
    desc: "Unabhängige Gutachten nach dem Schaden, für Versicherung, Kaufinteresse oder Bewertung.",
    tags: ["Gutachten", "Beweis"],
    icon: <IconDoc />,
  },
];

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="relative py-24 md:py-40 px-4 md:px-8 hairline-t hairline-b">
      <div className="absolute inset-0 diamond-plate opacity-25 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        {/* Section header */}
        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="tape-label">Werkstatt · Leistungen</span>
              <span className="vin">Sektion 02</span>
            </div>
            <h2 className="d-hero text-mega leading-[0.85]">
              <span className="chrome-text">Ein Haus.</span>
              <br />
              <span className="oxide-text">Acht Disziplinen.</span>
            </h2>
          </div>
          <p className="max-w-md md:justify-self-end text-white/70 leading-snug">
            Was andere auf drei Betriebe verteilen, machen wir unter einem Dach.
            Elektronik, Karosserie und klassische Werkstatt, aus einer Hand und
            aufeinander abgestimmt.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/[0.08]">
          {services.map((s, i) => (
            <motion.article
              key={s.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative border-r border-b border-white/[0.08] p-6 md:p-8 flex flex-col min-h-[320px] overflow-hidden ${
                s.featured ? "lg:col-span-1 bg-void-800/40" : ""
              }`}
            >
              {/* Corner race number */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="d-hero text-white/25 text-6xl leading-none tabular">
                    {s.no}
                  </span>
                  {s.featured && (
                    <span className="mono text-[9px] text-oxide-400 tracking-[0.2em]">
                      ★ HAUPT
                    </span>
                  )}
                </div>
                <span className="text-white/50 group-hover:text-oxide-400 transition-colors duration-300">
                  {s.icon}
                </span>
              </div>

              <div className="mt-8 flex-1">
                <h3 className="d-stencil text-2xl md:text-3xl text-white leading-[0.95]">
                  {s.title}
                </h3>
                <p className="mono text-[10px] text-oxide-400/80 tracking-[0.18em] uppercase mt-2">
                  {s.short}
                </p>
                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] px-2 py-1 border border-white/[0.08] text-white/60 tracking-wider uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-oxide-500 transition-all duration-500 ease-out" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconWave() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 12h2M22 12h-2M6 12v-4M6 12v4M10 12v-7M10 12v7M14 12v-5M14 12v5M18 12v-3M18 12v3" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
    </svg>
  );
}
function IconGlass() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18c2-6 5-9 9-9s7 3 9 9" />
      <path d="M6 18h12" />
      <path d="M11 12l2 3" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}
function IconWheel() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" strokeLinecap="round" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function IconStamp() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M9 2v6a3 3 0 006 0V2M4 18h16v3H4z" />
      <path d="M6 18c1-4 5-5 6-5s5 1 6 5" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M6 3h9l5 5v13H6z" />
      <path d="M15 3v5h5" />
      <path d="M9 13h6M9 17h6" strokeLinecap="round" />
    </svg>
  );
}
