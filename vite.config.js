import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // 👈 Expose to LAN (same as 0.0.0.0)
    port: 3330,        // 👈 Your custom port
    strictPort: true   // 👈 Optional: throws error if port is taken
  }
})
