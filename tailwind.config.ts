import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1C50C0",
        inactive: "rgba(73, 115, 205, 0.20);",
        btn: "rgba(255,255,255,0.20)",
        "card-yellow": "#F1C71B",
        "card-orange": "#E44714",
        "card-pink": "#C12475",
        "card-purple": "#5F2A78",
        "card-teal": "#05A9B4",
      },
      gap: {
        "30": "30px",
        "70": "70px",
      },
      padding: {
        "125": "125px",
      },
      borderRadius: {
        mid: "100px",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primary: "#1C50C0",
      },
      margin: {
        "60x": "60px",
        "100x": "100px",
      },
      screens: {
        sm: "730px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
export default config;
