/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#16192a',
        'hover': '#242841',
        'huruf': '#6d707e',
        'table-top': '#16192a',
        'table-bot': '#1c2134',
        'background-utama': '#181e2f',
        'warna-huruf':'#a2a3b6',
        'warna-border':'#6d707e',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}