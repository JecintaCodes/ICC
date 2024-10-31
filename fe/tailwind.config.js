/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        mobile:{max: "320px"},
        tablet:{max: "768px"}
      }
    },
  },
  plugins: [],
}
