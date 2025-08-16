import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/great-frontend-testimonial-card/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
