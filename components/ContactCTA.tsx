"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const topics = [
  "Car Hifi / CarPlay Nachrüstung",
  "Wartung & Inspektion",
  "Autoglas",
  "Unfallinstandsetzung",
  "Reifen / Achsvermessung",
  "HU / AU / Eintragung",
  "Sonstiges",
];

export default function ContactCTA() {
  const [topic, setTopic] = useState(topics[0]);

  return (
    <section id="kontakt" className="relative py-16 sm:py-24 md:py-40 px-4 md:px-8 hairline-t bg-void-950">
      <div className="absolute inset-0 diamond-plate opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto safe-x">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 md:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
              <span className="tape-label">Kontakt</span>
              <span className="vin">Sektion 07</span>
            </div>
            <h2 className="d-hero text-mega leading-[0.85]">
              <span className="chrome-text">Sag uns,</span>
              <br />
              <span className="oxide-text">worum es geht.</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-white/70 text-base sm:text-lg leading-snug max-w-md">
              Anfragen beantworten wir werktags innerhalb weniger Stunden.
              Wer schneller mag, ruft an.
            </p>

            <div className="mt-8 sm:mt-10 space-y-3">
              <a
                href="tel:+496831704070"
                className="btn-press panel-hard border border-white/10 flex items-center justify-between gap-3 px-4 sm:px-5 py-4 hover:bg-white/5 transition-colors min-h-[72px]"
              >
                <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <IconPhone />
                  <div className="flex flex-col leading-none gap-1 min-w-0">
                    <span className="vin text-white/50">Telefon</span>
                    <span className="d-hero text-white text-xl sm:text-2xl tabular truncate">
                      06831 704070
                    </span>
                  </div>
                </span>
                <Arrow />
              </a>
              <a
                href="mailto:info@carundsound.de"
                className="btn-press panel-hard border border-white/10 flex items-center justify-between gap-3 px-4 sm:px-5 py-4 hover:bg-white/5 transition-colors min-h-[72px]"
              >
                <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <IconMail />
                  <div className="flex flex-col leading-none gap-1 min-w-0">
                    <span className="vin text-white/50">E-Mail</span>
                    <span className="d-stencil text-white text-lg sm:text-xl truncate">
                      info@carundsound.de
                    </span>
                  </div>
                </span>
                <Arrow />
              </a>
              <a
                href="https://maps.google.com/?q=Überherrner+Str.+3,+66740+Saarlouis"
                target="_blank"
                rel="noreferrer"
                className="btn-press panel-hard border border-white/10 flex items-center justify-between gap-3 px-4 sm:px-5 py-4 hover:bg-white/5 transition-colors min-h-[72px]"
              >
                <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <IconPin />
                  <div className="flex flex-col leading-none gap-1 min-w-0">
                    <span className="vin text-white/50">Adresse</span>
                    <span className="d-stencil text-white text-lg sm:text-xl truncate">
                      Überherrner Str. 3, Saarlouis
                    </span>
                  </div>
                </span>
                <Arrow />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const body = `Thema: ${data.get("topic")}\n\nName: ${data.get("name")}\nTelefon: ${data.get("phone")}\nKennzeichen: ${data.get("plate") || "—"}\n\n${data.get("message")}`;
              window.location.href = `mailto:info@carundsound.de?subject=${encodeURIComponent(
                "Anfrage · " + (data.get("topic") as string)
              )}&body=${encodeURIComponent(body)}`;
            }}
            className="panel-hard border border-white/10"
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-void-800/40 flex items-center justify-between gap-3 flex-wrap">
              <span className="tape-label">Auftragsformular</span>
              <span className="mono text-[10px] text-oxide-400">ORDER · #2026-004</span>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-5">
              <div>
                <label className="vin block mb-3">Anliegen · Was brauchst du?</label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`btn-press text-[11px] sm:text-xs px-2.5 sm:px-3 py-2 sm:py-1.5 border transition-all duration-200 uppercase tracking-wider sm:tracking-widest font-stencil min-h-[36px] ${
                        topic === t
                          ? "bg-oxide-500 text-white border-oxide-500"
                          : "text-white/70 border-white/15 hover:border-white/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="topic" value={topic} />
              </div>

              <Field label="Name" name="name" placeholder="Vor- und Nachname" required />
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
                <Field label="Telefon" name="phone" placeholder="06831 …" type="tel" required />
                <Field label="Kennzeichen (optional)" name="plate" placeholder="SLS-…" />
              </div>
              <div>
                <label className="vin block mb-2">Nachricht</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Kurz zum Fahrzeug und zum Anliegen."
                  className="w-full bg-void-800 border border-white/10 px-4 py-3 text-base sm:text-base text-white placeholder:text-white/30 focus:border-oxide-500 focus:outline-none transition-colors resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="btn-press oxide-btn py-4 uppercase tracking-widest font-stencil text-base flex items-center justify-center gap-3 min-h-[52px]"
              >
                Anfrage absenden
                <Arrow />
              </button>

              <p className="mono text-[10px] text-white/40 text-center tracking-widest uppercase">
                Deine Daten werden nur für die Bearbeitung deiner Anfrage verwendet
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="vin block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-void-800 border border-white/10 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-oxide-500 focus:outline-none transition-colors font-medium"
      />
    </div>
  );
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--oxide-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.7.6 2.5a2 2 0 01-.4 2.1L8 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.8.3 1.6.5 2.5.6a2 2 0 011.7 2z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--oxide-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--oxide-bright)" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
