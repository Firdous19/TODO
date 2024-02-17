/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "hsl(235, 24%, 19%)",
        bodyColor: "hsl(235, 21%, 11%)",
      },
    },
  },
  plugins: [],
};
