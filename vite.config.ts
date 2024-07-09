import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@Assets": path.resolve(__dirname, "./src/assets/"),
      "@Components": path.resolve(__dirname, "./src/components/"),
      "@Constants": path.resolve(__dirname, "./src/constants/"),
      "@Hooks": path.resolve(__dirname, "./src/hooks/"),
      "@Interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@Pages": path.resolve(__dirname, "./src/pages/"),
      "@Routes": path.resolve(__dirname, "./src/routes"),
      "@Utils": path.resolve(__dirname, "./src/utils")
    }
  }
})
