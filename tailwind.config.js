/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffebfe',
        'disabled-text': '#a39ea2',
        'background': '#321030',
        'primary': '#01cb0e',
        'secondary': '#001e11',
        'accent': '#66e901',
        'accent-v2': '#d8f5c1',
       },
    },
  },
  plugins: [
  ],
}
