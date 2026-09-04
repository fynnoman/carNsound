"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type Gauge = {
  label: string;
  value: number;
  suffix?: string;
  format?: (v: number) => string;
  cap: number;
  redline?: number;
  unit: string;
};

const gauges: Gauge[] = [
  { label: "Google Rating", value: 4.9, cap: 5, unit: "★", format: (v) => v.toFixed(1) },
  { label: "Rezensionen", value: 211, cap: 250, unit: "REV", format: (v) => Math.round(v).toString() },
  { label: "Jahre Erfahrung", value: 20, cap: 25, unit: "YRS", format: (v) => Math.round(v) + "+" },
  { label: "Marken", value: 40, cap: 50, unit: "OEM", format: (v) => Math.round(v) + "+" },
];

export default function GaugeCluster() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 md:px-8 bg-void-900 hairline-t hairline-b">
      <div className="absolute inset-0 racing-stripes opacity-30 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-12 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
              <span className="tape-label">Instrument-Cluster</span>
              <span className="vin">Sektion 03</span>
            </div>
            <h2 className="d-hero text-huge leading-[0.85] max-w-[15ch]">
              <span className="chrome-text">Zahlen, die für</span>{" "}
              <span className="oxide-text">sich sprechen.</span>
            </h2>
          </div>
          <div className="mono text-[10px] text-white/50 tabular text-right">
            <div>LIVE · GOOGLE VERIFIED</div>
            <div>SYNC · 04.09.2026</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
          {gauges.map((g, i) => (
            <GaugeCard key={g.label} g={g} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GaugeCard({ g, delay }: { g: Gauge; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const count = useMotionValue(0);
  const display = useTransform(count, (v) => (g.format ? g.format(v) : v.toFixed(0)));
  const arcOffset = useTransform(count, (v) => 264 * (1 - v / g.cap));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, g.value, {
        duration: 1.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [inView, g.value, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="panel-hard border border-white/10 p-4 sm:p-5 md:p-6 relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
        <span className="vin text-white/50 truncate">{g.label}</span>
        <span className="mono text-[9px] text-oxide-400 shrink-0">● OK</span>
      </div>

      <div className="relative flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-3 sm:gap-3">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-[135deg]">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <motion.circle
              cx="50" cy="50" r="42" fill="none"
              stroke="var(--oxide-bright)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="264"
              style={{ strokeDashoffset: arcOffset }}
            />
          </svg>
        </div>
        <div className="flex flex-col leading-none min-w-0">
          <motion.span className="d-hero text-white text-3xl sm:text-4xl md:text-5xl tabular">
            {display}
          </motion.span>
          <span className="mono text-[9px] sm:text-[10px] text-white/50 mt-1 tracking-widest">
            /{g.cap} · {g.unit}
          </span>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="mono text-[9px] text-white/40 tracking-widest">VERIFIED</span>
        <span className="w-6 h-1 bg-oxide-500" />
      </div>
    </motion.div>
  );
}
