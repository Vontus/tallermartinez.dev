// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Dominio propio (apex) vía CNAME → servido en la raíz.
  site: 'https://tallermartinez.net',
  base: '/',
});
