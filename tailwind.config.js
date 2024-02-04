/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: { 
    extend: { 
        colors: { 
            transparent: 'transparent', 
            current: 'currentColor', 
            black: colors.black, 
            white: colors.white, 
            emerald: colors.emerald, 
            indigo: colors.indigo, 
            yellow: colors.yellow, 
            stone: colors.warmGray, 
            sky: colors.lightBlue, 
            neutral: colors.trueGray, 
            gray: colors.coolGray, 
            slate: colors.blueGray, 
            lime: colors.lime, 
            rose: colors.rose, 
        }
    }
},
  plugins: [],
}

