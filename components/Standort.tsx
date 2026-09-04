"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const hours = [
  ["Montag", "08:00 · 14:00", "12:00 · 17:00"],
  ["Dienstag", "08:00 · 14:00", "12:00 · 17:00"],
  ["Mittwoch", "08:00 · 14:00", "12:00 · 17:00"],
  ["Donnerstag", "08:00 · 14:00", "12:00 · 17:00"],
  ["Freitag", "08:00 · 14:00", "12:00 · 17:00"],
  ["Samstag", "geschlossen", ""],
  ["Sonntag", "geschlossen", ""],
];

export default function Standort() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  const [todayIdx, setTodayIdx] = useState<number | null>(null);
  useEffect(() => {
    setTodayIdx((new Date().getDay() + 6) % 7);
  }, []);

  return (
    <section id="standort" ref={ref} className="relative min-h-screen overflow-hidden hairline-t">
      {/* Parallax werkstatt-seite background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/media/werkstatt-seite.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/80 via-void-950/60 to-void-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_800px_at_90%_20%,rgba(200,22,29,0.18),transparent_65%)]" />
      <div className="absolute inset-0 racing-stripes opacity-25 mix-blend-overlay" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 py-16 sm:py-24 md:py-40 safe-x">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-start">
          {/* Left: address & big number */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
              <span className="tape-label">Standort</span>
              <span className="vin">Sektion 06</span>
            </div>
            <h2 className="d-hero text-mega leading-[0.85] break-words">
              <span className="chrome-text">Überherrner</span>
              <br />
              <span className="chrome-text">Str. 3,</span>{" "}
              <span className="oxide-text">SLS.</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-white/80 text-base sm:text-lg leading-snug max-w-md">
              Zwischen Innenstadt und Autobahn. Kundenparkplätze direkt vor der Tür.
              Fahrzeugannahme außerhalb der Öffnungszeiten nach Absprache möglich.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://maps.google.com/?q=Überherrner+Str.+3,+66740+Saarlouis"
                target="_blank"
                rel="noreferrer"
                className="btn-press panel-hard border border-white/10 p-4 sm:p-5 flex flex-col hover:bg-white/5 transition-colors min-h-[100px]"
              >
                <span className="vin text-white/50 mb-2">Navigation</span>
                <span className="d-stencil text-white text-xl sm:text-2xl">Route öffnen</span>
                <span className="mono text-[10px] text-white/40 mt-2 tabular">
                  49.322° · 6.749°
                </span>
              </a>
              <a
                href="tel:+496831704070"
                className="btn-press oxide-btn p-4 sm:p-5 flex flex-col min-h-[100px]"
              >
                <span className="mono text-[10px] text-white/80 mb-2 tracking-widest uppercase">
                  24/7 Anruf
                </span>
                <span className="d-hero text-white text-xl sm:text-2xl tabular leading-none">
                  06831&nbsp;704070
                </span>
                <span className="mono text-[10px] text-white/70 mt-2 uppercase tracking-widest">
                  direkt in die halle
                </span>
              </a>
            </div>

            <address className="mt-8 not-italic text-white/60 text-sm leading-relaxed">
              Car &amp; Sound<br />
              Überherrner Str. 3<br />
              66740 Saarlouis · Deutschland<br />
              <a href="mailto:info@carundsound.de" className="text-white/80 hover:text-white transition-colors">
                info@carundsound.de
              </a>
            </address>
          </div>

          {/* Right: hours instrument cluster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="panel-hard border border-white/10"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-void-800/40">
              <span className="tape-label">Betriebszeiten</span>
              <span className="mono text-[10px] text-oxide-400 tracking-widest">● LIVE</span>
            </div>

            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left px-3 sm:px-6 py-3 mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-normal">Tag</th>
                  <th className="text-right px-3 sm:px-6 py-3 mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-normal">Vormittag</th>
                  <th className="text-right px-3 sm:px-6 py-3 mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-normal">Nachmittag</th>
                </tr>
              </thead>
              <tbody>
                {hours.map(([day, morning, afternoon], i) => {
                  const isToday = i === todayIdx;
                  const isClosed = morning === "geschlossen";
                  return (
                    <tr
                      key={day}
                      className={`border-b border-white/[0.05] ${
                        isToday ? "bg-oxide-500/10" : ""
                      }`}
                    >
                      <td className={`px-3 sm:px-6 py-3 sm:py-4 d-stencil text-base sm:text-lg ${
                        isToday ? "text-oxide-300" : isClosed ? "text-white/35" : "text-white"
                      }`}>
                        <span className="flex items-center gap-2">
                          {isToday && <span className="w-1.5 h-1.5 rounded-full bg-oxide-400 animate-pulse shrink-0" />}
                          <span className="truncate">{day}</span>
                        </span>
                      </td>
                      <td className={`text-right px-3 sm:px-6 py-3 sm:py-4 mono text-xs sm:text-sm tabular whitespace-nowrap ${
                        isClosed ? "text-white/35" : isToday ? "text-white" : "text-white/70"
                      }`}>
                        {isClosed ? "—" : morning}
                      </td>
                      <td className={`text-right px-3 sm:px-6 py-3 sm:py-4 mono text-xs sm:text-sm tabular whitespace-nowrap ${
                        isClosed ? "text-white/35" : isToday ? "text-white" : "text-white/70"
                      }`}>
                        {isClosed ? "—" : afternoon}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 flex items-center justify-between gap-3 text-[11px] flex-wrap">
              <span className="mono text-white/50 tracking-widest uppercase text-[9px] sm:text-[11px]">
                Notfall · nach Absprache
              </span>
              <span className="mono text-white/50 tabular text-[9px] sm:text-[11px]">TZ: EUROPE/BERLIN</span>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 md:mt-16 panel-hard border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-void-800/40 flex-wrap">
            <span className="tape-label">Anfahrt · Google Maps</span>
            <span className="mono text-[9px] sm:text-[10px] text-white/50 tracking-widest tabular">
              49.322°N · 6.749°E · SLS
            </span>
          </div>

          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full">
            <iframe
              src="https://www.google.com/maps?q=%C3%9Cberherrner+Str.+3%2C+66740+Saarlouis&hl=de&z=15&output=embed"
              title="Standort Car & Sound Saarlouis - Google Maps"
              className="absolute inset-0 w-full h-full grayscale-[35%] contrast-125"
              style={{ border: 0, filter: "grayscale(35%) contrast(1.15) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Corner brackets over map */}
            <div className="pointer-events-none absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/70" />
            <div className="pointer-events-none absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/70" />
            <div className="pointer-events-none absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/70" />
            <div className="pointer-events-none absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/70" />
          </div>

          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 gap-3 sm:gap-4 flex-wrap">
            <span className="d-stencil text-white text-base sm:text-lg leading-tight">
              Überherrner Str. 3 · 66740 Saarlouis
            </span>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=%C3%9Cberherrner+Str.+3%2C+66740+Saarlouis"
              target="_blank"
              rel="noreferrer"
              className="btn-press oxide-btn inline-flex items-center gap-2 px-5 py-3 uppercase tracking-widest text-xs font-stencil min-h-[44px]"
            >
              Route berechnen
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
