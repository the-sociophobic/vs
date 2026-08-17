import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to https://the-sociophobic.github.io/vs
// so the base path must match the repo name.
export default defineConfig({
  plugins: [react()],
  base: '/vs/'
})
