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
      width: {
        '26' : '120px',
        '51' : '200px',
        'search' : '261px',
        'navbar': '1240px',
      },
      height: {
        '18' : '72px',
      },
      margin: {
        '2.5' : '10px',
        '4.5' : '18px',
        '37' : '153px',
        '57' : '233px',
        '85' : '348px',
      },
      padding: {
        '2.5' : '10px',
        '4.5' : '18px',
        '11.5' : '46px',
        '37' : '153px',
        '57' : '233px',
        '85' : '348px',
      },
      colors: {
        "side" : "#1E1F23",
        "violet-1" : "#8265f7",
        "violet-hover" : "#6243e0",
        "dark-mode" : "#565656",
        "search" : "#ECECEC",
      },
      boxShadow: {
        "inner-2": "0 4px 15px -3px rgb(165 165 165 / 0.75), 0 4px 6px -4px rgb(165 165 165 / 0.75)",
        "b" : "0 2px 5px -2px #8e8e8e",
      },
      fontFamily: {
        mulish : "Mulish",
      },
    },
  },
  plugins: [],
}