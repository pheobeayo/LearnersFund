/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#593A9E',
        tertiary: '#0C0814'
      },
      fontFamily: {
        'opensans': ["Open Sans", " sans-serif"],
        'titiliumweb': ["Titillium Web", " sans-serif"]
      },
    },
  },
  plugins: [],
}

