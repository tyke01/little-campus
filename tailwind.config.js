/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    './build/*.html',
    './build/js/*.js',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb5c88',
        secondary: '#2a2c58',
        dark400: '#444444'
      }
    },
  },
  plugins: [],
}







