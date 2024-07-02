/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "statblock-bar": "url('/statblockbar.jpg')",
        statblock: "url('/papyr.webp')",
      },
      fontFamily: {
        dndTitle: ["dndTitle", "sans-serif"],
        libre: [
          "Libre Baskerville",
          "Lora",
          "Calisto MT",
          "Bookman Old Style",
          "Bookman",
          "Goudy Old Style",
          "Garamond",
          "Hoefler Text",
          "Bitstream Charter",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        gray: {
          dark: "#1f2022",
        },
      },
    },
  },
  plugins: [],
};
