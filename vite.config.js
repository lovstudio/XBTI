import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { lovinspPlugin } from 'lovinsp'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    lovinspPlugin({ bundler: 'vite' }),
    react(),
  ],
})
