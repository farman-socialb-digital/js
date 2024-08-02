/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    container: false,
  },
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        body: "#F0F8FF",
        red: "#D81B1B",
        green: "#14A02C",
        blue: "#287DFD",
        orange: "#D88950",
        dark: "#374957",
        grey: "#969696",
        progress: "#D88950",
        "dark-mode": "#010c22",
        "light-dark-mode": "#041d50",
        "grey-mode": "#cedaf1",
        // Add custom border color
        "primary-blue": "#287DFD",
        "menu-active": "#3a88fc",
        "menu-left-border": "#93befe",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
      fontSize: {
        12: ["0.8rem", "0.8rem"],
        13: ["0.813rem", "0.813rem"],
        14: ["0.9rem", "0.9rem"],
        16: ["1rem", "1rem"],
        18: ["1.125rem", "1.125rem"],
        20: ["1.25rem", "1.25rem"],
        22: ["1.375rem", "1.375rem"],
        24: ["1.5rem", "1.5rem"],
        26: ["1.625rem", "1.625rem"],
        28: ["1.8rem", "1.8rem"],
        36: ["2rem", "2rem"],
        48: ["3rem", "3rem"],
        64: ["4rem", "4rem"],
        "2xl": "1.563rem",
        base: "1rem",
        xl: "1.25rem",
      },
      // Add custom utility classes
      width: {
        228: "228px",
      },
      height: {
        58: "58px",
      },
      top: {
        339: "339px",
      },
      left: {
        347: "347px",
      },
      borderRadius: {
        7: "7px",
      },
      borderWidth: {
        1: "1px",
      },
      opacity: {
        7: "0.07",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ],
};
