import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'
import path from 'path'

const replaceOptions = {
  __DATE__: new Date().toISOString(),
  __START_YEAR__: 2024,
  preventAssignment: true,
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' }),
    replace(replaceOptions),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  rollupOptions: {
    output: {
      manualChunks: {
        'react': ['react', 'react-dom', 'react-router-dom'],
      },
    }
  }
})
