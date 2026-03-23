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
        primary: "#0066ff",
        "section-alt": "#f8f9fa",
        "dark-bg": "#0f0f1a",
        "dark-section": "#1a1a2e",
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
