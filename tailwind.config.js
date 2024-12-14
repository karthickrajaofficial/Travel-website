/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/swiper/**/*.{js,jsx,ts,tsx}', // Ensure all your JSX, TSX, JS, and TS files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#634789",      // Custom primary color
        light: "#FFFFFF1A",      // Semi-transparent white
        gray: "#9DA1B4",         // Custom gray color
        lightgray: "#F4F6FA",    // Light gray background
        orange: "#FA9556",       // Custom orange color
      },
      fontFamily: {
        // Example of adding a custom font
        sans: ['"Inter"', 'sans-serif'], 
        // Add more fonts here as needed
      },
      spacing: {
        // You can add custom spacing sizes here if required
        '128': '32rem', 
        '144': '36rem',
      },
      screens: {
        // Custom breakpoints can be added
        'xl': '1440px',  // Example of overriding a screen size
      },
      boxShadow: {
        // Custom box shadows
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
