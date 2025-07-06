import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    /* ───────────────────── Container ───────────────────── */
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",     // ⇢ extra side-gap on laptops (≥1280 px)
      },
      /* 960 → tablets, 1140 → 1366-px laptops (adds margins) */
      screens: {
        lg:  "960px",
        xl:  "1140px",
        "2xl": "1400px",
      },
    },

    /* ───────────────────── Extensions ───────────────────── */
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      /* ―‖ CSS-Vars colors (unchanged) ―‖ */
      colors: {
        border:        "hsl(var(--border))",
        input:         "hsl(var(--input))",
        ring:          "hsl(var(--ring))",
        background:    "hsl(var(--background))",
        foreground:    "hsl(var(--foreground))",
        primary: {
          DEFAULT:     "hsl(var(--primary))",
          foreground:  "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:     "hsl(var(--secondary))",
          foreground:  "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:     "hsl(var(--destructive))",
          foreground:  "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:     "hsl(var(--muted))",
          foreground:  "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:     "hsl(var(--accent))",
          foreground:  "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:     "hsl(var(--popover))",
          foreground:  "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:     "hsl(var(--card))",
          foreground:  "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* accordion keyframes (unchanged) */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },

      /* ―‖ smooth subtle hover utility ―‖ */
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(.4,0,.2,1)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
    },
  },

  /* tailwind-animate remained */
  plugins: [require("tailwindcss-animate")],
}

export default config
