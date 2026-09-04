import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        // Deep industrial dark
        void: {
          950: "#050506",
          900: "#0a0a0b",
          800: "#101012",
          700: "#17171a",
          600: "#1f1f23",
          500: "#2a2a2f",
        },
        // Bone / chrome
        bone: {
          50: "#f7f6f2",
          100: "#eeece6",
          200: "#d9d7d1",
        },
        chrome: {
          200: "#e5e5e8",
          300: "#c9c9ce",
          400: "#93939a",
          500: "#63636a",
        },
        // Oxide red (Gas Monkey signal)
        oxide: {
          700: "#7a1616",
          600: "#a11c1c",
          500: "#c8161d",
          400: "#e02127",
          300: "#f13a3f",
        },
        // Rust / patina
        rust: {
          600: "#8b3a17",
          500: "#a94a1c",
          400: "#c25b25",
        },
        // Signal amber (turn signal / hazard)
        signal: {
          500: "#ffb020",
          400: "#ffc44d",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        stencil: ["var(--font-stencil)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter2: "-0.03em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      backdropBlur: {
        xxl: "48px",
      },
      boxShadow: {
        "chrome-ring": "inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.5), 0 20px 40px -10px rgba(0,0,0,0.6)",
        "hard": "0 24px 60px -20px rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [],
};

export default config;
