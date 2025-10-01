import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rlbnwm.github.io/Jonathan-Cohen-Website/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
