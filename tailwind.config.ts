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
        brand: {
          navy: "#0D1B2A",
          steel: "#1B4F72",
          sky: "#5DADE2",
          amber: "#F39C12",
          offwhite: "#F4F6F7",
          slate: "#566573",
        },
        primary: "#1B4F72",
        secondary: "#0D1B2A",
        accent: "#F39C12",
        "section-alt": "#F4F6F7",
        "dark-bg": "#0D1B2A",
        "dark-section": "#10253A",
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
