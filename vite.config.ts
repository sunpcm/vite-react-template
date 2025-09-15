import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // <--- 导入

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: { alias: { '@': '/src' } },
});
