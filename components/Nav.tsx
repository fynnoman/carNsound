"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#leistungen", label: "Leistungen", no: "01" },
  { href: "#werkstatt", label: "Werkstatt", no: "02" },
  { href: "#stimmen", label: "Stimmen", no: "03" },
  { href: "#standort", label: "Standort", no: "04" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 220);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top VIN strip */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-oxide-500 text-white text-[10px] tracking-[0.25em] uppercase font-mono py-1.5 px-4 flex items-center justify-between">
        <span className="tabular">
          MEISTERBETRIEB · SEIT 20+ JAHREN · SAARLOUIS
        </span>
        <span className="tabular hidden sm:inline">
          MO–FR 08:00–17:00 · TEL 06831 704070
        </span>
        <span className="tabular sm:hidden">06831 704070</span>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-6 inset-x-0 z-50"
      >
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <div
            className={`panel-hard border border-white/10 flex items-center justify-between pl-4 pr-2 py-2 transition-shadow duration-300 ${
              scrolled ? "shadow-hard" : ""
            }`}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="d-hero text-white text-xl tracking-tighter2 -mb-0.5">
                  CAR<span className="oxide-text">&amp;</span>SOUND
                </span>
                <span className="vin text-white/40">SLS · CAR HIFI · KFZ</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0 text-sm text-white/70 font-stencil font-bold uppercase tracking-widest">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group px-3 py-2 flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <span className="mono text-[9px] text-white/40 group-hover:text-oxide-400 transition-colors">
                    {l.no}
                  </span>
                  <span>{l.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#kontakt"
                className="btn-press hidden sm:inline-flex items-center gap-2 chrome-btn text-sm px-4 py-2 uppercase tracking-widest font-stencil"
              >
                Termin
                <Arrow />
              </a>
              <button
                aria-label="Menu"
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden btn-press w-11 h-11 grid place-items-center border border-white/15 bg-void-800"
              >
                <span className="relative w-4 h-3 block">
                  <span className={`absolute inset-x-0 top-0 h-[2px] bg-white transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                  <span className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
                  <span className={`absolute inset-x-0 bottom-0 h-[2px] bg-white transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="lg:hidden fixed inset-0 z-40 bg-void-950/95 backdrop-blur-2xl"
      >
        <div className="pt-32 px-4">
          <div className="panel-hard p-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-4 border-b border-white/[0.06] flex items-center gap-4 hover:bg-white/[0.03]"
              >
                <span className="mono text-xs text-oxide-400 tabular">{l.no}</span>
                <span className="d-stencil text-white text-2xl">{l.label}</span>
              </a>
            ))}
            <a
              href="tel:+4968317040 70"
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-4 flex items-center justify-between"
            >
              <span className="vin">Rufen</span>
              <span className="d-hero text-white text-2xl tabular">06831&nbsp;704070</span>
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="btn-press mt-2 oxide-btn text-center py-4 uppercase tracking-widest font-stencil text-base"
            >
              Termin anfragen
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function LogoMark() {
  return (
    <span className="relative w-11 h-11 grid place-items-center bg-oxide-500 border border-black/60 overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/40" />
      <span className="d-hero text-white text-lg leading-none z-10">C&amp;S</span>
      <span className="absolute bottom-0 inset-x-0 h-[3px] bg-black/50" />
    </span>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
