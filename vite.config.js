import { defineConfig } from 'vite';

export default defineConfig({
  base: '/auto-scroller/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        unused: true,
      },
      format: {
        comments: false,
      },
      mangle: true,
    },
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'auto-scroller.min.js',
      },
    },
    emptyOutDir: true,
  },
});
