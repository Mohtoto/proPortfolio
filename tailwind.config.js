/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      height: {
        "screen-dynamic": "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh"
      }
    },
  },
  plugins: [

  ],
}