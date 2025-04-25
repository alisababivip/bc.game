// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // Thay đổi nếu cần
  build: {
    outDir: 'dist', // Thư mục đầu ra
    assetsDir: 'assets', // Thư mục chứa tài nguyên tĩnh
    manifest: true,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
