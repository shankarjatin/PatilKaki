/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-400': '#9f7aea',
        'pink-500': '#ed64a6',
        'gray-400': '#cbd5e0',
      },
    },
  },
  plugins: [],
}
