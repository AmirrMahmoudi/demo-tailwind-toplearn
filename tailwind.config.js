/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        min600: "600px",
      },
      colors: {
        "custom-blue": "#153248",
      },
    },
  },
  plugins: [],
};
