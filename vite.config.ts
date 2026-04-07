import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Production base: "/" for custom domain at root. For *.github.io/<repo>/ only, CI sets
// GITHUB_PAGES_BASE via repo variable PAGES_BASE (see .github/workflows/deploy-pages.yml).
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

