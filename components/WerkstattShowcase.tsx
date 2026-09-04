"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function WerkstattShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  return (
    <section id="werkstatt" ref={ref} className="relative py-24 md:py-40 px-4 md:px-8 hairline-t">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="tape-label">Der Betrieb</span>
              <span className="vin">Sektion 04</span>
            </div>
            <h2 className="d-hero text-mega leading-[0.85]">
              <span className="chrome-text">Zwei Hallen.</span>
              <br />
              <span className="oxide-text">Ein Team.</span>
            </h2>
          </div>
          <p className="max-w-md md:justify-self-end text-white/70 leading-snug">
            Kfz-Werkstatt und Karosseriebetrieb, beide in Saarlouis, beide unter
            Meisterhand. Wer bei uns reinfährt, muss nirgends mehr hin.
          </p>
        </div>

        {/* Big image row 1 */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
          <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden border border-white/10">
            <motion.div style={{ y: yLeft, scale: scaleLeft }} className="absolute inset-0 will-change-transform">
              <Image
                src="/media/werkstatt-front.jpeg"
                alt="Car & Sound Werkstattgebäude Saarlouis"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-void-950/70 via-transparent to-transparent" />

            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="vin text-white/80 block mb-1">Halle 01</span>
                <span className="d-stencil text-white text-3xl">Car Hifi &amp; Service</span>
              </div>
              <span className="mono text-[10px] text-white/70 tabular">
                49.322°N · 6.749°E
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[300px] py-4">
            <div>
              <span className="vin text-white/50 block mb-2">Fakten · Halle 01</span>
              <ul className="space-y-3">
                {[
                  ["Standort", "Überherrner Str. 3"],
                  ["Fläche", "~350 m²"],
                  ["Buchten", "2 Hebebühnen"],
                  ["Fokus", "Hifi · Service · HU"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="mono text-[10px] text-white/50 uppercase tracking-widest">{k}</span>
                    <span className="text-white text-sm font-medium text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <span className="d-stencil text-oxide-400 text-xl">Meisterbetrieb</span>
              <p className="mt-2 text-white/60 text-sm leading-snug">
                Kfz-Technikermeister mit über 20 Jahren Praxis. Weil Meisterhand
                den Unterschied ausmacht.
              </p>
            </div>
          </div>
        </div>

        {/* Big image row 2 - reversed */}
        <div className="mt-6 md:mt-8 grid md:grid-cols-12 gap-4 md:gap-6 items-start">
          <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[300px] py-4 order-2 md:order-1">
            <div>
              <span className="vin text-white/50 block mb-2">Fakten · Halle 02</span>
              <ul className="space-y-3">
                {[
                  ["Fokus", "Karosserie · Lack"],
                  ["Kabine", "Lackierbox mit Filter"],
                  ["Abwicklung", "Direkt mit Versicherung"],
                  ["Ersatz", "Leihwagen inklusive"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="mono text-[10px] text-white/50 uppercase tracking-widest">{k}</span>
                    <span className="text-white text-sm font-medium text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <span className="d-stencil text-oxide-400 text-xl">Full-Service Unfall</span>
              <p className="mt-2 text-white/60 text-sm leading-snug">
                Vom Abschleppdienst bis zur letzten Politur. Wir übernehmen alles,
                was nach einem Blech-Kontakt nötig wird.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden border border-white/10 order-1 md:order-2">
            <motion.div style={{ y: yRight, scale: scaleRight }} className="absolute inset-0 will-change-transform">
              <Image
                src="/media/werkstatt-seite.jpeg"
                alt="Car & Sound Karosseriewerkstatt Saarlouis"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-void-950/70 via-transparent to-transparent" />

            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="vin text-white/80 block mb-1">Halle 02</span>
                <span className="d-stencil text-white text-3xl">Karosserie &amp; Lack</span>
              </div>
              <span className="mono text-[10px] text-white/70 tabular">
                BAY 03–05
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
