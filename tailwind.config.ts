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
        // Design system tokens
        navy: "#002855",
        blue: "#1565C0",
        sky: "#1E88E5",
        accent: "#F59E0B",
        "accent-hover": "#D97706",
        surface: "#F5F5F5",
        charcoal: "#333333",
        muted: "#757575",
        border: "#E0E0E0",
        // Semantic aliases
        primary: "#1565C0",
        secondary: "#002855",
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.08)",
        md: "0 4px 12px rgba(0,0,0,0.10)",
        lg: "0 8px 24px rgba(0,0,0,0.12)",
        cta: "0 4px 16px rgba(245,158,11,0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
