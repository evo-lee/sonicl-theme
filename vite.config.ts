import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts')
      },
      output: {
        entryFileNames: '[name].iife.js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})
