/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        CMBLUE: "#3EB8D4",
        CMDARK: "#323232",
        CMRED: "#FF5341",
      },
    },
  },
  plugins: [],
};
