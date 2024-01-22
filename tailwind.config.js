/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './src/app/ui/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      "colors": {
        "shoe-wax": "#2C2C2C"
      }
    },
  },
  plugins: [],
}

