import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OTG brand palette — from .claude/skills/theme-selector/SKILL.md
        navy:          "#1a202c",   // neutral dark — header, footer, dark sections
        blue:          "#317ACC",   // brand blue — primary interactive, links
        sky:           "#1E5EBF",   // sky blue — secondary accents, hover states
        accent:        "#2E7D52",   // logo / brand green — primary CTAs
        "accent-hover": "#256b46",  // darker green on hover
        surface:       "#F5F7FA",   // light gray — section backgrounds, forms
        charcoal:      "#2D3748",   // dark gray — body text
        muted:         "#718096",   // medium gray — captions, secondary info
        border:        "#D9E2EC",   // soft gray — dividers, input borders
        green:         "#2E7D52",   // trust green — checkmarks, benefits
        // Semantic aliases
        primary:       "#003087",
        secondary:     "#1a202c",
        foreground:    "var(--foreground)",
        background:    "var(--background)",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body:    ["var(--font-barlow)", "sans-serif"],
      },
      boxShadow: {
        sm:  "0 1px 3px rgba(0,0,0,0.08)",
        md:  "0 4px 12px rgba(0,0,0,0.10)",
        lg:  "0 8px 24px rgba(0,0,0,0.12)",
        cta: "0 4px 16px rgba(46,125,82,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
