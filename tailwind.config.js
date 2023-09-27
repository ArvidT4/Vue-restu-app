/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'test': '992px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

