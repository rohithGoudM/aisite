import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure the server options
  server: {
    host: '0.0.0.0',  // Change this to your desired host (e.g., '127.0.0.1' or 'mycustomhost.local')
    port: 3001,       // Change this to your desired port
  }
})
