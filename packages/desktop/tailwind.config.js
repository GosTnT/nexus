/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/view/*.{js,jsx,ts,tsx}", // Fixing the path and adding recursive '**'
    "./app/view/*.html", // Fixing the path and using a single asterisk for HTML files in the root directory
  ],
  theme: {
    extend: {
      colors: {
        input_border: '#424245',
        main_cta: '#0071e3',
        secondary_cta: '#7F1819',
        main_bg: '#101010',
        secondary_bg: '#2E2E30',
      },
    },
  },
  plugins: [],
};

