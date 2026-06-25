// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Repo de proyecto en GitHub Pages mientras no esté el dominio propio.
  // Al contratar tallermartinez.dev: site → 'https://tallermartinez.dev', base → '/'.
  site: 'https://vontus.github.io',
  base: '/tallermartinez.dev/',
});
