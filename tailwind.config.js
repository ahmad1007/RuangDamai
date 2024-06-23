import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#64B479",
        GreenLight: "#CFE8D5",
        SemiGreen: "#E8F4EB",
        DarkGreen: "#233F2A",
        FooterGreen : "#4B875B",
      },
    },
  },
  plugins: [daisyui],
}

