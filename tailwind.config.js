const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", ...fontFamily.sans],
      },
      colors: {
        background: "#0f172a",
        foreground: "#f8fafc",
        brand: {
          DEFAULT: "#6366f1",
          foreground: "#e0e7ff",
        },
        surface: {
          DEFAULT: "rgba(15, 23, 42, 0.78)",
          muted: "rgba(148, 163, 184, 0.08)",
        },
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 30px 80px -35px rgba(99, 102, 241, 0.65)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(14,165,233,0.2), transparent 65%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        glow: "glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
