/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bd5d38",
        
      },
      fontFamily: {
        "primary-text": ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
