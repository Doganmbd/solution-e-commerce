//! React npx create-react-app ile kurulan projeleri tailwind in desteklemediğini söylüyor ve nextJs vb. ile bu işlmelerin yapılmasını tavsiye ediyor.


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}