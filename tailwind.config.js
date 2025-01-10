/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/swiper/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f0f5ff',
          100: '#e6edff',
          200: '#bfd4ff',
          300: '#94b5ff',
          400: '#608cff',
          500: '#3366ff',
          600: '#0037db',
          700: '#002db3',
          800: '#001f80',
          900: '#121a2d',
          950: '#0a0f1a',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc2',
          200: '#ffd980',
          300: '#ffc53d',
          400: '#ffb41a',
          500: '#faa307',
          600: '#e68a00',
          700: '#cc7a00',
          800: '#a66200',
          900: '#804d00',
        },
        primary: "#121a2d", //#100C08
        light: "#FFFFFF1A",
        gray: {
          DEFAULT: "#9DA1B4",
          light: "#F4F6FA",
        },
        accent: "#FA9556",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        screen: "100vh",
      },
      // ... rest of the configuration from previous example
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};