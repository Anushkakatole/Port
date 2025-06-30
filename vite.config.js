import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer';
import somePlugin from 'some-plugin'


/** @type {import('tailwindcss').Config} */


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    somePlugin(),
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }

})
