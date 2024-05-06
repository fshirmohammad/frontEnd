/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      vazir:['vazir'],
    },
    extend: {
      backgroundImage: {
        'background-night': 'linear-gradient(167.44deg, #08244F 0%, #134CB5 47.38%, #0B42AB 100%)',
        'background-day':'linear-gradient(167.44deg, #0B7DA1 0%, #33AADD 47.38%, #2DC8EA 100%)'

      },
    },
  },
  plugins: [],
}
