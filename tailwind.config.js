/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: '1320px',
        },
      },
      margin: {
        '37' : '153px',
        '57' : '233px',
        '85' : '348px',
      },
      padding: {
        '37' : '153px',
        '57' : '233px',
        '85' : '348px',
      },
      colors: {
        "violet-1" : "#8265f7",
        "violet-hover" : "#6243e0",
        "dark-mode" : "#565656",
      },
      boxShadow: {
        "inner-2": "0 4px 15px -3px rgb(165 165 165 / 0.75), 0 4px 6px -4px rgb(165 165 165 / 0.75)"
      }
    },
  },
  plugins: [],
}