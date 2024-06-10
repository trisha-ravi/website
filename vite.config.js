import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base URL to the root
  build: {
    assetsDir: '', // Set the assets directory to the root
  }
})