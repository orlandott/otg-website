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
        // OTG brand palette — orlandotgroupinc.com
        navy:          "#080808",   // near-black (was deep navy)
        blue:          "#116dff",   // OTG brand blue
        sky:           "#3385ff",   // lighter blue variant
        accent:        "#116dff",   // CTA / action (same brand blue)
        "accent-hover": "#0055e0",  // darker blue on hover
        surface:       "#f5f5f5",   // light gray background
        charcoal:      "#202020",   // primary dark text
        muted:         "#757575",   // secondary text
        border:        "#e0e0e0",   // borders / dividers
        // Semantic aliases
        primary:       "#116dff",
        secondary:     "#080808",
        foreground:    "var(--foreground)",
        background:    "var(--background)",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body:    ["var(--font-barlow)", "sans-serif"],
      },
      boxShadow: {
        sm:  "0 1px 3px rgba(0,0,0,0.08)",
        md:  "0 4px 12px rgba(0,0,0,0.15)",
        lg:  "0 8px 24px rgba(0,0,0,0.18)",
        cta: "0 4px 16px rgba(17,109,255,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
