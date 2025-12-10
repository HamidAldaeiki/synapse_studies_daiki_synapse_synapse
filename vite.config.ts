import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/synapse_studies_daiki_synapse_synapse", // 
  plugins: [react()],
})
