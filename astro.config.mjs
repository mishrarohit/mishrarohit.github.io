// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.rohitmishra.me',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
