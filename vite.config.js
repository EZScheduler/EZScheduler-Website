import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        pages: path.resolve(__dirname, './src/pages'),
        constants: path.resolve(__dirname, './src/constants'),
        assets: path.resolve(__dirname, './src/assets')
      }
    },
    plugins: [react(), svgr()],
    server: {
      port: 3000,
    },
  }
})
