/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { transitionDuration: {'400': '400ms'},
      colors: {
        'dark-bg': '#0a0a0a',
        'darker-bg': '#050505',
        'gold': '#d4af37',
        'gold-light': '#e6c15c',
        'gold-dark': '#b8860b',
        'card-bg': '#121212',
        'text-light': '#f0f0f0',
        'text-gray': '#a0a0a0',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // We assume the app root layout sets 'dark' class
}