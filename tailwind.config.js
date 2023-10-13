/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#382536',
        'background': '#92ecb6',
        'primary': '#71436f',
        'secondary': '#2a0928',
        'accent': '#d22dc7',
       },
    },
  },
  plugins: [
  ],
}
