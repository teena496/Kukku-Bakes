import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Kukku-Bakes/',
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
