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
        'bg-color': '#3e404d',
        'hover': '#242841',
        'text': '#979dad',
        'main': '#3d3f4c',
        'secondary': '#1b2033',
        'table-top': '#16192a',
        'table-bot': '#1c2134',
        'judul': '#8188b4',
        'main-text': '#ffffff',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}