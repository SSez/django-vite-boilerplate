import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    outDir: '../../backend/templates/dist',
    manifest: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: `vite/[name].js`,
        assetFileNames: `vite/[name].[ext]`
      }
    }
  }
})