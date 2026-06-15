import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/jsonapi': {
        target: 'https://dev-anthony-playground-site.pantheonsite.io',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})