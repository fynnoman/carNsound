"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const scrimO = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const titleO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: "100svh", minHeight: "700px" }}
    >
      {/* Background image */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/media/bmw-rot.jpeg"
          alt="Car & Sound Saarlouis - Fahrzeug in der Werkstatt"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark scrim */}
      <motion.div
        style={{ opacity: scrimO }}
        className="absolute inset-0 bg-gradient-to-b from-void-950/50 via-void-950/70 to-void-950"
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_100%_100%,rgba(200,22,29,0.25),transparent_60%)]" />
      <div className="absolute inset-0 racing-stripes opacity-30 mix-blend-overlay" />

      {/* Corner brackets */}
      <CornerBrackets />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col pt-32 md:pt-36 pb-24 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-between">
          {/* Top row: tape + VIN */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between gap-4"
          >
            <span className="tape-label">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Meisterbetrieb · Saarlouis
            </span>
            <span className="vin hidden md:inline text-white/60">
              REC · 04.09 · Bay 01 · SLS-DE
            </span>
          </motion.div>

          {/* Middle: massive title */}
          <motion.div style={{ y: titleY, opacity: titleO }} className="pt-4">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="d-hero text-hero text-white leading-[0.82]"
            >
              <span className="block chrome-text">Klang.</span>
              <span className="block chrome-text">Stahl.</span>
              <span className="block oxide-text">Kabel.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid md:grid-cols-[1fr_auto] gap-6 md:items-end max-w-[1000px]"
            >
              <p className="max-w-lg text-white/80 text-base md:text-lg leading-snug font-medium">
                Apple CarPlay Nachrüstung, OEM Retrofits, Karosserie, Lack, HU/AU, Reifen.
                <span className="text-white"> Alles unter einem Dach.</span>
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="btn-press oxide-btn inline-flex items-center gap-2 px-6 py-3.5 uppercase tracking-widest text-sm font-stencil"
                >
                  Termin sichern
                  <Arrow />
                </a>
                <a
                  href="#leistungen"
                  className="btn-press inline-flex items-center gap-2 px-6 py-3.5 uppercase tracking-widest text-sm font-stencil border border-white/25 text-white hover:bg-white/10 transition-colors"
                >
                  Leistungen
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom row: rating stamp + gauge + scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <RatingStamp />
              <div className="flex flex-col leading-tight">
                <span className="vin text-white/60">Google Rating</span>
                <span className="d-hero text-white text-3xl md:text-4xl tabular">
                  4,9<span className="text-white/40 text-xl">/5</span>
                </span>
                <span className="mono text-[10px] text-white/50 tabular">
                  · 211 Rezensionen · Verifiziert
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <RpmGauge />
              <div className="flex flex-col text-right">
                <span className="vin text-white/50">Standort</span>
                <span className="d-stencil text-white text-lg">Überherrner Str. 3</span>
                <span className="mono text-[10px] text-white/50">66740 SAARLOUIS · DE</span>
              </div>
            </div>

            <ScrollCue />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-24 md:top-28 left-4 md:left-8 w-8 h-8 border-l-2 border-t-2 border-white/40" />
      <div className="absolute top-24 md:top-28 right-4 md:right-8 w-8 h-8 border-r-2 border-t-2 border-white/40" />
      <div className="absolute bottom-6 left-4 md:left-8 w-8 h-8 border-l-2 border-b-2 border-white/40" />
      <div className="absolute bottom-6 right-4 md:right-8 w-8 h-8 border-r-2 border-b-2 border-white/40" />
    </div>
  );
}

function RatingStamp() {
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
      <div className="absolute inset-0 rounded-full border-2 border-oxide-500 rotate-[-8deg]" />
      <div className="absolute inset-2 rounded-full border border-oxide-500/50" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="d-stencil text-oxide-400 text-[10px] tracking-[0.2em]">GOOGLE</span>
        <span className="d-hero text-oxide-400 text-2xl md:text-3xl leading-none tabular">4.9</span>
        <span className="mono text-[8px] text-oxide-400/80 tracking-widest">211 REV</span>
      </div>
    </div>
  );
}

function RpmGauge() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-[135deg]">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="4"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="var(--oxide)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="264"
          initial={{ strokeDashoffset: 264 }}
          animate={{ strokeDashoffset: 264 * (1 - 0.78) }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="mono text-[8px] text-white/50">CAP</span>
        <span className="d-hero text-white text-sm leading-none tabular">78%</span>
      </div>
    </div>
  );
}

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="hidden sm:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
    >
      <span className="vin text-white/50">Scroll</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="block w-px h-8 bg-white/40"
      />
    </motion.div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
