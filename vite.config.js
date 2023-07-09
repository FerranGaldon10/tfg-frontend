import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida de la construcción
    rollupOptions: {
      input: {
        index: '/index.html', // Ruta al archivo main.jsx
        App2: '/pages/App2.html',
        App3: '/pages/App3.html',
        App4: '/pages/App4.html',
        App5: '/pages/App5.html',
        App6: '/pages/App6.html',
        App7: '/pages/App7.html',
        App8: '/pages/App8.html'
      },
    },
  },
})
