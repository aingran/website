import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative asset paths so the build works on GitHub Pages project sites,
// user/org pages, custom domains, and local static previews without extra env setup.
const base = process.env.VITE_BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
})
