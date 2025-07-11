import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    minify: 'terser', // terser로 압축 및 난독화
    terserOptions: {
      compress: {
        drop_console: true, // console.* 제거
        drop_debugger: true, // debugger 제거
      },
      format: {
        comments: false, // 주석 제거
      },
    },
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined, // 코드 스플리팅 비활성화(북마클릿 용도)
        entryFileNames: 'auto-scroller.min.js',
      },
    },
    emptyOutDir: true,
  },
});
