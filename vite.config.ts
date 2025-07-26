import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Open browser on npm run dev
  },
  build: {
    outDir: 'dist',
  },
});
