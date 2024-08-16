/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: {max: '768px'},
      md: {min : '768px' , max: '1024px'},
      lg: {min: '1024px' , max:'1280px'},
      xl: {min: '1280px'}
    },
  },
  plugins: [],
}

