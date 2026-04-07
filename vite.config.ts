import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages project URLs are /<repo>/; set GITHUB_PAGES_BASE in CI (see .github/workflows).
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

