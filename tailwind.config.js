/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "restaurant-red": {
          DEFAULT: "#B91C1C",
          light: "#DC2626",
          dark: "#7F1D1D",
          accent: "#EA580C",
        },
        "deep-brown": {
          DEFAULT: "#1A0F0A",
          dark: "#0F0704",
          light: "#2C1810",
          card: "#170D08",
        },
        "spice-gold": {
          DEFAULT: "#D89A3A",
          light: "#E5B35C",
          dark: "#B87A1E",
          metallic: "#F3C66F",
        },
        "warm-amber": {
          DEFAULT: "#C77A24",
          light: "#E08F38",
          dark: "#9A4B16",
        },
        "cream": {
          DEFAULT: "#F7F3E9",
          muted: "#D8D1C2",
          warm: "#FAF6ED",
          dark: "#C5BEAD",
        },
        "champagne": {
          DEFAULT: "#F7E7CE",
          light: "#FAF5EC",
          surface: "#FFFDF9",
          border: "#DEC398",
          dark: "#E5CFA9",
          muted: "#7A5E48",
          espresso: "#23120B",
          50: "#FCF9F3",
          100: "#FAF5EC",
          200: "#F7E7CE",
          300: "#EED7B3",
          400: "#DEC398",
          500: "#CCA875",
          600: "#B88E56",
          700: "#8D6837",
          800: "#5D4424",
          900: "#23120B",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "restaurant-gradient": "linear-gradient(180deg, #0A0503 0%, #170A04 40%, #0F0603 75%, #050201 100%)",
        "gold-gradient": "linear-gradient(135deg, #F3C66F 0%, #D89A3A 50%, #9A4B16 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(35, 18, 11, 0.85) 0%, rgba(18, 8, 4, 0.95) 100%)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(216, 154, 58, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(216, 154, 58, 0.25)",
        "red-glow": "0 0 25px rgba(185, 28, 28, 0.3)",
        "card-glow": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(216, 154, 58, 0.2)",
      },
    },
  },
  plugins: [],
};
