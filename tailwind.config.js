const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '480px',
      sx: '560px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        extend: {
          bgGradientDeg: {
            75: '75deg',
          }
        }
      },
      dropShadow: {
        'main': '0 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(
            theme('bgGradientDeg', {}),
            {
              10: '10deg',
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
};
