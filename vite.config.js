import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  css: [
    "../../assets/iconfont/iconfont.css"
  ],
  plugins: [vue()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    }
  }
  
})
