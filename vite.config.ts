import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 Add this line to make relative paths work (especially for GitHub Pages or subfolders)
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
