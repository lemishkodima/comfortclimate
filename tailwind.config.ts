import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",
        accent: "#0EA5E9",
        teal: "#0D9488"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(14,165,233,0.18), transparent 32%), radial-gradient(circle at top right, rgba(13,148,136,0.14), transparent 28%)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
