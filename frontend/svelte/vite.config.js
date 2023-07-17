import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
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
