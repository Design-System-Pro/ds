const { fontFamily } = require("tailwindcss/defaultTheme");

// REVIEW: We might benefit from using the js transform from tokens instead of the css variables. More type safety and better performance.
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "ds-",
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "var(--primitives-mode-1-text-font-family-sans)",
        ...fontFamily.sans,
      ],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderRadius: {
      none: "var(--primitives-mode-1-radius-none)",
      DEFAULT: "var(--primitives-mode-1-radius-base)",
      md: "var(--primitives-mode-1-radius-md)",
      lg: "var(--primitives-mode-1-radius-lg)",
      xl: "var(--primitives-mode-1-radius-xl)",
    },
    spacing: {
      0: "var(--primitives-mode-1-spacing-0)",
      0.5: "var(--primitives-mode-1-spacing-0-5)",
      1: "var(--primitives-mode-1-spacing-1)",
      2: "var(--primitives-mode-1-spacing-2)",
      3: "var(--primitives-mode-1-spacing-3)",
      4: "var(--primitives-mode-1-spacing-4)",
      5: "var(--primitives-mode-1-spacing-5)",
      6: "var(--primitives-mode-1-spacing-6)",
      7: "var(--primitives-mode-1-spacing-7)",
      8: "var(--primitives-mode-1-spacing-8)",
      9: "var(--primitives-mode-1-spacing-9)",
      10: "var(--primitives-mode-1-spacing-10)",
      11: "var(--primitives-mode-1-spacing-11)",
    },
    gap: {
      2: "var(--primitives-mode-1-gap-2)",
    },
    padding: {
      2: "var(--primitives-mode-1-padding-2)",
      3: "var(--primitives-mode-1-padding-3)",
      4: "var(--primitives-mode-1-padding-4)",
      5: "var(--primitives-mode-1-padding-5)",
      6: "var(--primitives-mode-1-padding-6)",
      7: "var(--primitives-mode-1-padding-7)",
      8: "var(--primitives-mode-1-padding-8)",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        button: [
          "var(--button-base-font-size)",
          {
            letterSpacing: "var(--button-base-letter-spacing)",
            fontWeight: "var(--button-base-font-weight)",
            lineHeight: "var(--button-base-line-height)",
          },
        ],
      },
      boxShadow: {
        "focus-ring": "var(--focus-ring)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
