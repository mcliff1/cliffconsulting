import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  server: {
    port: 3000,
    host: true,
    open: false
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx', // ← point to .jsx
    globals: true,
    css: true,
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/**/*.test.{js,jsx}',
        'src/index.js',
        'src/registerServiceWorker.js',
        'src/**/*.bak'
      ]
    }
  }
})