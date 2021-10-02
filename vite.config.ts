import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import polyfillNode from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
    
  },
  plugins: [react(),polyfillNode()],
  optimizeDeps: {
    exclude: ['web3'] // <= The libraries that need shimming should be excluded from dependency optimization.
  },
})
