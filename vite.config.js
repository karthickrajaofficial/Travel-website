import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], // Make sure Swiper is explicitly included in the optimized dependencies
  },
  server: {
    // Optional: If you're using Vite's development server and need to configure proxy settings
    // proxy: {
    //   '/api': 'http://localhost:5000',
    // },
  },
})
