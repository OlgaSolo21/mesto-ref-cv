import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mesto-ref-cv/",
  plugins: [react()],
  // eslint-disable-next-line no-undef
  //base: process.env.NODE_ENV === 'production' ? '/mesto-ref-cv/' : '/' http://localhost:5173,
})
