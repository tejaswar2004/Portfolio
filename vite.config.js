// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio-v2-master/', // Change this to your repository name
  // If your repository is just "portfolio" or "my-portfolio", update accordingly
  // For example: base: '/portfolio/' or base: '/my-portfolio/'
})