import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Match the origin allowed by the API's CORS policy.
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5252',
        changeOrigin: true,
      },
    },
  },
})
