// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: '/light-dark-switch',
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      
    },
  },
  plugins: [dts()]
});