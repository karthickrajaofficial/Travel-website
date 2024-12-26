/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/swiper/**/*.{js,jsx,ts,tsx}", // Ensure all your JSX, TSX, JS, and TS files are included
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
        sans: ['"Inter"', "sans-serif"], // Custom font family for text
      },
      spacing: {
        128: "32rem",  // Custom spacing size
        144: "36rem",  // Custom spacing size
        screen: "100vh", // Ensure full height for screens
      },
      screens: {
        xl: "1440px",   // Override for larger screens
        "2xl": "1536px",  // Custom breakpoint for even larger screens
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)", // Light custom shadow
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.1)", // Dark custom shadow
      },
      transitionDuration: {
        1000: "1000ms", // Custom transition duration for smooth scrolling
      },
      animation: {
        fade: "fadeIn 1s ease-out", // Fading animation
        parallax: "parallax 3s ease-in-out infinite", // Parallax animation
        "bounce-slow": "bounce 3s infinite", // Slow bounce animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        parallax: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    // Include any necessary plugins here, such as typography, forms, or line-clamp
    // For example:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
