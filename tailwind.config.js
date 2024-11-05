/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('../assets/image/Frame 36.svg')",
        
      },
      fontFamily:{
        'TradeGothic':['Trade Gothic LT Std', 'sans-serif'],
        'button':['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}