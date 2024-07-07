import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path module for resolving paths
import autoprefixer from 'autoprefixer'; // Import autoprefixer directly

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    assetsDir: 'assets', // Specify the assets directory
    sourcemap: true, // Enable sourcemaps for debugging
    rollupOptions: {
      // Provide external modules to exclude from the bundle
      external: ['react', 'react-dom'],
    },
  },
  resolve: {
    alias: {
      // Set up aliases for commonly used directories or modules
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    modules: true, // Enable CSS modules for scoped styles
    postcss: {
      plugins: [
        autoprefixer(), // Use autoprefixer plugin directly here
      ],
    },
  },
  server: {
    port: 3000, // Specify the development server port
    open: true, // Automatically open the browser when server starts
  },
  optimizeDeps: {
    include: ['react-icons/fa'], // Specify dependencies to optimize for better performance
  },
});
