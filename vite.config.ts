import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        jordenanropar: resolve(__dirname, 'jordenanropar.html'),
        narlillakalle: resolve(__dirname, 'narlillakalle.html'),
        stream: resolve(__dirname, 'stream.html'),
      },
    },
  },
})
