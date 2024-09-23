import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for external API
      '/api': {
        target: 'https://api.schiphol.nl',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Proxy for your local backend
      '/local-api': {
        target: 'http://localhost:5100', // Your local backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local-api/, ''), // This rewrites '/local-api' to match backend paths
      },
    },
  },
})
