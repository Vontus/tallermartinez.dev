# Taller Martínez

Landing de **Taller Martínez** — informática para negocios locales: web, datos,
copias de seguridad y redes sociales, llevado por una sola persona.

Marca de servicios para empresas de Alberto Martínez (la cara más personal/dev
vive en [vontus.dev](https://vontus.dev)).

## Stack

- [Astro](https://astro.build) — sitio estático.
- Despliegue automático a GitHub Pages en cada push a `main`.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # genera dist/
```

## Despliegue

Sirve como repo de proyecto en `https://vontus.github.io/tallermartinez.dev/`.
Al contratar el dominio propio: añadir `public/CNAME` con `tallermartinez.dev`,
y en `astro.config.mjs` poner `site: 'https://tallermartinez.dev'` y `base: '/'`.
