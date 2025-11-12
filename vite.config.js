import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Conditional Logic for Deployment Environment
// If VERCEL is set (which it is during Vercel builds), use the root path ('/').
// Otherwise, use the GitHub Pages sub-path ('/brunlike/').
const BASE_PATH = process.env.VERCEL === '1' ? '/' : '/brunlike/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE_PATH, // <-- The path is now dynamically set
})
