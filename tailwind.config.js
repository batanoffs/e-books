/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Montserrat Alternates', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    listStyleImage: {
            none: 'none',
            line: `url("./src/components/assets/line.svg")`,
          },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'blue': '#020921',
        'hover-blue': '#0d142b',
        'white': '#e5e5e5',
        'text-blue': '#808AA9',
        "pink": '#a251db',
      },
      // animation: {
      //   'cursor': 'spin 3s linear infinite',
      // }
    }
  },
  plugins: [],
}