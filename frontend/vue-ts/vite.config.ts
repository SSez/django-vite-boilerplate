import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
