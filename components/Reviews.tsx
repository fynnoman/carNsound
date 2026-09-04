"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const reviews = [
  {
    name: "Susanne Schmitt-Andres",
    date: "vor 5 Monaten",
    text: "Ich habe schnell einen Termin bekommen. Der Einbau wurde schnell und professionell erledigt. Ich habe mich rundum gut aufgehoben gefühlt.",
    stars: 5,
    source: "Cylex",
  },
  {
    name: "Carina Kruschnizki",
    date: "vor 2 Monaten",
    text: "Ich war mit der Firma Car and Sound rundum zufrieden. Der Service war schnell, professionell und sehr freundlich. Von der Terminvereinbarung bis zur Abholung alles top.",
    stars: 5,
    source: "Google",
  },
  {
    name: "Google Verified",
    date: "vor 5 Monaten",
    text: "Ich bin super zufrieden mit der Arbeit. Er hat bei meinem Auto eine Rückfahrkamera nachgerüstet, etwas, was vorher kein anderer Betrieb hinbekommen hat.",
    stars: 5,
    source: "Google",
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section id="stimmen" ref={ref} className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden hairline-t">
      {/* Parallax BMW-schwarz backdrop */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -right-[15%] top-[8%] w-[65vw] h-[80vh] hidden md:block will-change-transform opacity-60"
      >
        <Image
          src="/media/bmw-schwarz.jpeg"
          alt=""
          fill
          sizes="65vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void-950 via-void-950/40 to-transparent" />
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="tape-label">Stimmen</span>
            <span className="vin">Sektion 05</span>
          </div>
          <h2 className="d-hero text-mega leading-[0.85]">
            <span className="oxide-text">4,9</span>{" "}
            <span className="chrome-text">bei 211</span>
            <br />
            <span className="chrome-text">Google Rezensionen.</span>
          </h2>
          <p className="mt-8 text-white/70 text-lg leading-snug max-w-xl">
            Wir schreiben nicht selbst, was wir gut können. Das machen unsere
            Kundinnen und Kunden.
          </p>
        </div>

        {/* Review cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="panel-hard border border-white/10 p-6 md:p-7 flex flex-col min-h-[320px] relative"
            >
              {/* Stamp corner */}
              <span className="absolute top-4 right-4 text-[9px] mono tracking-widest text-oxide-400 border border-oxide-500/50 px-2 py-1">
                {r.source.toUpperCase()}
              </span>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#e02127">
                    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/90 leading-relaxed flex-1 text-[15px]">
                &bdquo;{r.text}&ldquo;
              </blockquote>

              <figcaption className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-white/85 font-medium text-sm">{r.name}</span>
                <span className="mono text-[10px] text-white/50 tabular">{r.date}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Call for reviews link */}
        <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
          <span className="mono text-[10px] text-white/40 tracking-widest">
            NUR ECHTE, VERIFIZIERTE STIMMEN
          </span>
          <a
            href="https://www.google.com/search?q=Car+%26+Sound+Saarlouis"
            target="_blank"
            rel="noreferrer"
            className="btn-press inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white uppercase tracking-widest text-xs font-stencil hover:bg-white/5 transition-colors"
          >
            Alle 211 Rezensionen
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
