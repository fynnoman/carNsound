"use client";

const brands = [
  "Audi", "BMW", "Mercedes", "Volkswagen", "Porsche", "Skoda", "Seat", "Cupra",
  "Ford", "Opel", "Renault", "Peugeot", "Citroën", "Fiat", "Toyota", "Mazda",
  "Hyundai", "Kia", "Volvo", "Mini", "Tesla", "Nissan", "Honda", "Suzuki",
  "Dacia", "Alfa Romeo", "Land Rover", "Jaguar",
];

const words = [
  "Diagnose", "Retrofit", "Karosserie", "Lack", "Reifen", "Achse", "HU · AU",
  "CarPlay", "Android Auto", "Rückfahrkamera", "DSP", "Standheizung",
];

export default function Marquee() {
  return (
    <section aria-label="Marken und Leistungen" className="relative py-12 md:py-16 bg-void-950 hairline-t hairline-b overflow-hidden">
      {/* Row 1: brands, big */}
      <div className="relative overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-void-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-void-950 to-transparent z-10" />
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="d-hero text-5xl md:text-8xl tracking-tighter2 text-white/85 px-6 md:px-10 flex items-center gap-6 md:gap-10"
            >
              {b}
              <span className="oxide-text text-4xl md:text-7xl">✕</span>
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center gap-4">
          <span className="mono text-[10px] text-white/40 tracking-widest">
            KOMPETENZ · SEIT 2005
          </span>
          <span className="flex-1 h-px bg-white/[0.08]" />
          <span className="mono text-[10px] text-white/40 tracking-widest">
            WIR ARBEITEN AN ALLEM
          </span>
        </div>
      </div>

      {/* Row 2: words, reverse, smaller */}
      <div className="relative overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-void-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-void-950 to-transparent z-10" />
        <div className="marquee-track reverse fast flex w-max whitespace-nowrap">
          {[...words, ...words].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="d-stencil uppercase text-3xl md:text-5xl text-white/40 px-6 md:px-10 flex items-center gap-6 md:gap-10"
            >
              {w}
              <span className="text-oxide-500">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
