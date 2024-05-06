/* 
default generate

@type {import('tailwindcss').Config} 

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms")({
      //strategy: 'base', // only generate global styles
      //strategy: 'class', // only generate classes
    }),]
}