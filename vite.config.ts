import { defineConfig } from 'vite-plus';

// https://viteplus.dev/config/
export default defineConfig({
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
    include: ['src/**/*.test.ts'],
    setupFiles: ['src/test-setup.ts'],
  },
});
