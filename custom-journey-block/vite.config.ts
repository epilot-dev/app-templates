import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [react(), typescript(), cssInjectedByJsPlugin()],
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    allowedHosts: true,
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      formats: ['umd'],
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'index',
      fileName: 'bundle',
    },
    cssCodeSplit: false,
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
