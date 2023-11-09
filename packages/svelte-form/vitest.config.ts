import svelte from 'vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'solid-form',
    dir: './src',
    watch: false,
    setupFiles: [],
    environment: 'jsdom',
    globals: true,
    coverage: { provider: 'istanbul' },
  },
  plugins: [svelte()],
})
