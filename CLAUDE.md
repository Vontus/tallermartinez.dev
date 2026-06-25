# Taller Martínez

Landing one-page de **Taller Martínez**, la marca de servicios de informática de
Alberto Martínez para **negocios locales** (autónomo). Web, datos, copias de
seguridad, redes sociales e **IA aplicada**, llevado por una sola persona.

> No confundir con [vontus.dev](https://vontus.dev): vontus es la cara
> **personal/dev** (portfolio, código abierto). Taller Martínez es la cara de
> **negocio/servicios a empresas**. Marcas separadas a propósito.

## Posicionamiento y tono (IMPORTANTE para escribir copy)

- **Target:** dueños de negocios locales pequeños (p. ej. una tienda con 2
  empleadas), **no técnicos**. Piensan en personas ("el informático"), no en
  departamentos ni en jerga.
- **Promesa central:** despreocuparse. El cliente no quiere ahorrar tiempo ni
  "soluciones disruptivas"; quiere **no pelearse** con la tecnología (Meta
  Business, paneles, avisos, copias de seguridad…).
- **Voz:** cercana, en cristiano, de tú a tú. Evitar tecnicismos y lenguaje
  corporativo ("interlocutor", "departamento", claims grandilocuentes).
- **Diferenciador:** un solo interlocutor de confianza + **IA** (la mayoría de
  "informáticos de barrio" no la ofrecen). La IA va contada concreta y sin humo.

## Identidad visual

- **Logo `>M`:** la `>` (naranja) es un **prompt**; la `M` (blanca) es la inicial.
  Fondo gris carbón. Está en `public/favicon.svg` y en el header.
- **El `>` es marca y viñeta**, no texto de terminal. Se usa como prefijo en
  eyebrows, kickers, CTAs y listas (`<span class="chev">&gt;</span>`). NO meter
  prompts literales tipo `usuario:~$` (el cliente no los entendería).
- **Paleta:** gris carbón + acento naranja. Definida en `:root` de
  `src/styles/global.css` (`--carbon*`, `--accent`, `--fog*`). Solo modo oscuro.
- **Tipografía:** sans limpia para el cuerpo; mono (`--mono`) solo en detalles
  (kickers, chips, el `>`).

## Stack

- [Astro](https://astro.build) — sitio estático, sin framework de UI.
- pnpm. TypeScript en modo strict.

## Estructura

```
src/
  layouts/Base.astro        Header (logo >M), footer, <head>, <slot/>
  pages/index.astro         Toda la landing; el contenido vive en arrays
                            (servicios, principios, construyo) mapeados a componentes
  components/
    SectionHead.astro       kicker (opcional) + título + intro. Reutilizado en
                            servicios / cómo trabajo / contacto / sobre
    ServiceCard.astro       Tarjeta de servicio. Prop `featured` → variante IA
                            (banner horizontal a todo el ancho). Misma estructura
                            .card-body/.card-title/.card-desc en ambas variantes
  styles/global.css         Todos los estilos. Un único archivo
public/favicon.svg          Logo >M
```

### Convenciones

- **Componetizar lo que se repite.** El título/espaciado de las cards y el bloque
  de cabecera de sección viven en un solo sitio para que las variantes no
  diverjan (ese fue el motivo de extraer `ServiceCard`/`SectionHead`).
- **Espaciado título→descripción:** fuente única en `.card-body { gap }`. No
  reintroducir márgenes en una variante y `gap` en otra.
- Secciones del index = arrays de datos en el frontmatter + `.map()`.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:4321/
pnpm build    # genera dist/
```

## Despliegue

- Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) construye y
  publica en GitHub Pages. Repo: `Vontus/tallermartinez.dev` (nombre histórico;
  el dominio es `.net`).
- **Dominio propio:** [tallermartinez.net](https://tallermartinez.net) (apex).
  El `public/CNAME` lo fija y `astro.config.mjs` usa `site:
  'https://tallermartinez.net'` + `base: '/'`.
- DNS (en el registrador): apex `tallermartinez.net` → A records a las IPs de
  GitHub Pages (185.199.108–111.153) + AAAA; `www` → CNAME a `vontus.github.io`.

## Tareas / contexto

- Email de contacto: `hola@tallermartinez.net` (requiere hosting de correo
  configurado en el dominio para que reciba).
- PRs y commits **en inglés**.
