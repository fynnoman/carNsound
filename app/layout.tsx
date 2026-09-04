import type { Metadata } from "next";
import { Anton, Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const stencil = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-stencil",
  display: "swap",
});

const sans = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carundsound.de"),
  title: {
    default: "Car & Sound Saarlouis · Meisterwerkstatt für Car Hifi & Kfz-Service",
    template: "%s · Car & Sound Saarlouis",
  },
  description:
    "Car Hifi Nachrüstung, OEM Retrofits, Apple CarPlay & Android Auto Freischaltung, Kfz-Reparaturen aller Marken, Autoglas, Unfallinstandsetzung, Lackierung, Reifen, HU/AU. Meisterbetrieb in Saarlouis.",
  keywords: [
    "Car Hifi Saarlouis",
    "Apple CarPlay Nachrüstung",
    "Android Auto Freischaltung",
    "Rückfahrkamera Nachrüstung",
    "OEM Retrofit",
    "Autowerkstatt Saarlouis",
    "HU AU Saarlouis",
    "Autoglas Saarlouis",
    "Unfallinstandsetzung Saarland",
    "Lackierung Saarlouis",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Car & Sound Saarlouis",
    title: "Car & Sound Saarlouis · Meisterwerkstatt für Car Hifi & Kfz-Service",
    description:
      "Car Hifi Retrofits, CarPlay/Android Auto, Kfz-Service aller Marken, Autoglas, Unfall & Lack, Reifen, HU/AU. Saarlouis.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${stencil.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
