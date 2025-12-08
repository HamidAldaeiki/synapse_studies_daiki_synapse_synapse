import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // يجعل كل المسارات نسبية للعمل على GitHub Pages
  plugins: [react()],
})
