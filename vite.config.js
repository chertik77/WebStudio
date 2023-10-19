import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  css: {},
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    assetsDir: '',
    cssCodeSplit: false,
  },
  plugins: [injectHTML(), ViteMinifyPlugin(), tailwindcss()],
});
