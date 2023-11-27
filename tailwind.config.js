/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary" : '#4540DB',
        "secondary" : '#4943DA',
        "colorBg" : '#F6F7FC',
      },
      boxShadow: {
        "primaryShadow": ['b0px 1px 4px 0px rgba(0, 0, 0, 0.25)'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}