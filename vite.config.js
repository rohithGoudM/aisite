import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Import the visualizer plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ 
      open: true, // Automatically open the report in your browser
      filename: 'dist/stats.html', // Output file name
      template: 'treemap', // Choose a template for the report (optional)
    }),
  ],
  build: {
    outDir: '../AI_Agents/Api/dist', // Specify your output directory
  },
  // Configure the server options
  server: {
    host: '0.0.0.0',  // Change this to your desired host (e.g., '127.0.0.1' or 'mycustomhost.local')
    port: 3001,       // Change this to your desired port
  },
});
