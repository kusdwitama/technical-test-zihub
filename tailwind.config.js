/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        'navbar': '1510px',
      },
      colors: {
        'custom-dark': '#16192a',
        'bg-color': '#3e404d',
        'hover': '#242841',
        'text': '#979dad',
        'main': '#3d3f4c',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}