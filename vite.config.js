import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const __dirname = path.resolve()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: [
      {
        find: '@public',
        replacement: path.resolve(__dirname, 'public')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  },
  server: {
    allowedHosts: [
      '089f-179-49-52-54.ngrok-free.app'
    ]
  }
})
