/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Montserrat, monospace",
    },
    extend: {
      fontSize: {
        xxs: "11px",
      },
    },
  },
  plugins: [],
};
