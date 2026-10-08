import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite-plus';

// https://viteplus.dev/config/
export default defineConfig({
  plugins: [
    // Prerendering bakes the page into dist/index.html at build time; the
    // client only hydrates it to wire up the theme toggle.
    preact({ prerender: { enabled: true, renderTarget: '#app' } }),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
  build: {
    target: 'es2022',
  },
  lint: {
    ignorePatterns: ['dist/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ['dist/**'],
    singleQuote: true,
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
