/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sahel : ['sahel'],
      sahelBold : ['sahelBold'], 
      khameneiiBold : ['khameneiiBold'],
      khameneiiRegular : ['khameneiiRegular']
    },
    borderRadius : {
      'lg' : '1.5rem'
    }
  },
  plugins: [],
}

