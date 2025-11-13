// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/brunlike/', 
  build: { // 💡 ADD THIS SECTION
    outDir: 'docs', // Tells Vite to output to the 'docs' folder
  }
})