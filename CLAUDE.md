# Taller Martínez

Landing **bilingüe (es/en)** de **Taller Martínez**, la marca de servicios de
informática de Alberto Martínez para **negocios locales** (autónomo): web, datos,
copias de seguridad, redes sociales e **IA aplicada**, llevado por una sola
persona, en Torrevieja, la provincia de Alicante y la Región de Murcia.

> Marca separada de [vontus.dev](https://vontus.dev) (la cara personal/dev,
> portfolio y código abierto). Taller Martínez es la cara de negocio/servicios.

## Posicionamiento y tono (para escribir copy)

- **Target:** dueños de negocios locales pequeños, **no técnicos**. En la zona hay
  mucho residente británico, de ahí la versión inglesa.
- **Promesa central:** despreocuparse. El cliente quiere **no pelearse** con la
  tecnología, no "soluciones disruptivas".
- **Voz:** cercana, en cristiano, de tú a tú. Evitar tecnicismos y lenguaje
  corporativo ("interlocutor", "departamento", claims grandilocuentes).
- **Inglés = británico nativo, no traducción literal.** Si un juego de palabras no
  traduce limpio, se reescribe la idea (no se calca).
- **Cuidar la repetición** de "tu negocio" / "informático" (se mantienen solo en
  el H1 y la frase de contraste del problema, por SEO).

## Identidad visual

- **Logo `>M`:** la `>` (naranja) es un **prompt**; la `M` (blanca) es la inicial.
  Sobre gris carbón. Hecho con la tipografía **League Spartan Bold** (la `>` y la
  `M` son glifos reales de la fuente, convertidos a **trazos vectoriales**).
- **El `>` es marca y viñeta**, no texto de terminal. Prefijo en eyebrows, kickers
  y listas (`<span class="chev">&gt;</span>`). NO prompts literales tipo
  `usuario:~$` (el cliente no los entendería).
- **Paleta:** gris carbón + acento naranja, en `:root` de `src/styles/global.css`
  (`--carbon*`, `--accent`, `--fog*`). Solo modo oscuro.
- **Tipografía:** el **logotipo** es League Spartan (outlined, sin cargar la
  fuente). El **cuerpo** es sans del sistema; mono (`--mono`) solo en detalles.

## Activos generados (logo, wordmark, OG)

NO se editan a mano: se **generan** desde League Spartan con `fonttools` (instancia
la fuente variable a Bold 700 y extrae los glifos a `path` con `SVGPathPen`) y se
rasterizan con `sharp`.

- `public/logo.svg`, `public/favicon.svg` — la marca `>M`.
- `public/wordmark.svg` — "Taller Martínez" outlined (header).
- `public/og.png` (es), `public/og-en.png` (en) — 1200×630, imagen social.

## Stack

[Astro](https://astro.build) — sitio estático, sin framework de UI. pnpm. TS strict.

## i18n

Traducciones tipo "proyecto grande", con routing manual (sin la config i18n de
Astro, más predecible en estático):

- **Diccionarios por idioma:** `src/i18n/es.ts` y `src/i18n/en.ts`, tipados por
  `Content` (`types.ts`). **Todo el texto vive ahí.** `index.ts` →
  `getContent(locale)`, `locales`, `defaultLocale`.
- **Markup único:** `src/components/Landing.astro` pinta las secciones desde el
  diccionario; `src/pages/{es,en}/index.astro` son una línea cada una.
- **Rutas:** `/es/` y `/en/`. La raíz `/` (`src/pages/index.astro`) es un
  **redirector cliente** que lee `navigator.languages` y manda a `/es/` o `/en/`
  (por defecto es); entrar directo a `/es` o `/en` se respeta. La raíz va `noindex`.

## SEO

- Por idioma: `<html lang>`, title, description, Open Graph, Twitter y JSON-LD
  `ProfessionalService` localizados (en `Base.astro`, desde el diccionario).
- `hreflang` es/en/x-default en cada página + `public/sitemap.xml` (ambas URLs) y
  `public/robots.txt`. `og:image` propio por idioma.

## Estructura

```
src/
  layouts/Base.astro        <head> (meta/SEO/hreflang/JSON-LD), header, footer. Prop: locale
  components/
    Landing.astro           Todas las secciones; prop locale (lee el diccionario)
    SectionHead.astro       kicker (opcional) + título + intro
    ServiceCard.astro       Tarjeta. Prop `featured` → variante IA (banner ancho).
                            Estructura .card-body/.card-title/.card-desc
    Kicker.astro            `> texto` (un solo sitio para el espacio tras el `>`)
  i18n/{types,es,en,index}.ts
  pages/{index,es/index,en/index}.astro
  styles/global.css         Todos los estilos (un único archivo)
public/  logo.svg wordmark.svg favicon.svg og.png og-en.png CNAME robots.txt sitemap.xml
```

### Convenciones

- **Componetizar lo que se repite** (cards, cabeceras, kickers) para que las
  variantes no diverjan. Espaciado título→descripción de las cards: fuente única
  en `.card-body { gap }`.
- **Texto nuevo → al diccionario** (`src/i18n/*.ts`), nunca hardcodear en el
  markup, y siempre en los **dos idiomas**.
- PRs y commits **en inglés**.

## Desarrollo y despliegue

```bash
pnpm install
pnpm dev      # http://localhost:4321/  (/, /es/, /en/)
pnpm build    # genera dist/
```

Push a `main` → GitHub Actions despliega a GitHub Pages. Dominio propio vía
`public/CNAME`; `astro.config.mjs` con `base: '/'`.
