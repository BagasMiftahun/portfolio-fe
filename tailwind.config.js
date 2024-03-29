/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "black-50": "#e6e6e6",
      "black-100": "#b0b0b0",
      "black-200": "#8a8a8a",
      "black-300": "#242424",
      "black-400": "#141414",
      "black-500": "#000000",
      "black-600": "#000000",
      "black-700": "#000000",
      "black-800": "#000000",
      "black-900": "#000000",
      "grey-50": "#f9f9f9",
      "grey-100": "#ededed",
      "grey-200": "#e4e4e4",
      "grey-300": "#d7d7d7",
      "grey-400": "#d0d0d0",
      "grey-500": "#c4c4c4",
      "grey-600": "#b2b2b2",
      "grey-700": "#8b8b8b",
      "grey-800": "#6c6c6c",
      "grey-900": "#525252",
      "white-500": "#ffffff",
      "white-600": "#e8e8e8",
      "white-700": "#b5b5b5",
      "white-800": "#8c8c8c",
      "white-900": "#6b6b6b",
      "green": "#29ae29",
      "yellow": "#ffc62a",
      "red": "#ed2a2a",
      "orange": "#ed7615",
      "lavender": "#6e3cf5",
      "sussie": "#38e1f1",
      "blue-jeans": "#0082ff"
    },
    fontSize: {
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.25rem",
      "xl": "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5.25rem",
      "6xl": "8.75rem",
      "7xl": "14.1875rem"
    },
    fontFamily: {
      regular: ["neue-regular","sans-serif"],
      medium: ["neue-medium","sans-serif"],
      bold: ["neue-bold","sans-serif"],
    },
    boxShadow: {
      "Navigation": "0px 12px 20px 0px rgba(0,0,0,0.04)"
    },
    borderRadius: {
      "none": "0",
      "xs": "0.3125rem",
      "sm": "0.8999999761581421rem",
      "default": "1rem",
      "lg": "1.1148648262023926rem",
      "xl": "1.159319281578064rem",
      "2xl": "1.5rem",
      "3xl": "1.8491132259368896rem",
      "4xl": "2rem",
      "5xl": "2.8638763427734375rem",
      "6xl": "3rem",
      "7xl": "3.767045259475708rem",
      "8xl": "3.849375009536743rem",
      "9xl": "5rem",
      "10xl": "5.092131614685059rem",
      "11xl": "5.5rem",
      "full": "9999px"
    },
    extend: {},
  },
  plugins: [],
}

