
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'maincolor':'#00A8FF',
      'backgroundclr':'#F5F5F5',
      'paraclr':'rgba(0, 0, 0, 0.50)',   
},
boxShadow:{
  'mainshadow':'10px 10px 0 #000',
  'mainshadow2':'-10px 10px 0px 0px #00A8FF',
  'shadowblack':'-10px 10px 0px 0px #000',

},
hover:{
  'mainhover':'#00A8FF',
 

},
    extend: {},
  },
  plugins: [],
}