import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({ plugins: [ViteMinifyPlugin({}), FullReload(['./**/**.html'])] });
