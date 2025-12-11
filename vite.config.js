import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure correct asset paths when deployed to GitHub Pages project sites
// If the repo is a user/organization site (repo name like <user>.github.io),
// base will remain '/'. For project sites (e.g. https://<user>.github.io/<repo>/),
// base becomes '/<repo>/' so assets resolve correctly.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const isCI = !!process.env.GITHUB_ACTIONS
const base = repoName ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
