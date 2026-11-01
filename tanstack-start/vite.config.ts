import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'

// nitro() builds a Node server into .output/, which `npm start` runs.
export default defineConfig({
  plugins: [tanstackStart(), nitro(), viteReact()],
})
