import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/website", // Ensure that the base URL is set correctly
  build: {
    assetsDir: "", // Set the assets directory to the root
  },
})
