/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      normal: "500",
      bold: "700",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif", "system-ui"],
      body: ["Raleway", "sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
