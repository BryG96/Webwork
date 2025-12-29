
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
