/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      // '@/': new URL('./src/', import.meta.url).pathname,
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueUiKit',
      fileName: (format) => `vue-ui-kit.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/storybook-static/**',
    ],
  },
});
