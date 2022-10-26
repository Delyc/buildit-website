/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-green": "#678C92",
        "bold-text-green" : "#486A6F",
        "blued-green": "#5BCCDE",
        "footer-white": "#F4F7FF",
        "white-green": "#E1EBFA",
        "btn-white": "#C6DBFF"
        
     
       

      },
      borderRadius:{
        "small-rounded": "0.188rem",
        "sized-rounded": "0.313rem"
      }
    },
  },
  plugins: [],
}