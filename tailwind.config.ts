import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#030516",
        secondaryBackground: "#1f3449",
        linearBackground: "rgba(12, 38, 69, 0)",
        linearBackground2: "rgba(7, 22, 38, 0)",
        accent: "#60a6e7",
        accent3: "rgb(12 38 69/1)",
        darkGrey: "#aea9b1",
        lightGrey: "#e6e0e9",
      },
    },
  },
  plugins: [],
} satisfies Config
