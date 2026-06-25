import type { Content } from './types';

export const es: Content = {
  meta: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    ogImage: 'og.png',
    title: 'Taller Martínez — Informático para empresas en Torrevieja, Alicante y Murcia',
    description:
      'El informático de confianza de tu negocio en Torrevieja, la provincia de Alicante y la Región de Murcia. Diseño web, tiendas online, copias de seguridad, redes sociales e IA, en manos de una sola persona.',
    areaServed: ['Torrevieja', 'Provincia de Alicante', 'Región de Murcia'],
    knowsAbout: [
      'Diseño y desarrollo web',
      'Tiendas online',
      'Aplicaciones a medida',
      'Copias de seguridad',
      'Gestión de redes sociales',
      'Publicidad en redes',
      'Inteligencia artificial para negocios',
      'Consultoría informática',
    ],
  },
  nav: { services: 'Servicios', how: 'Cómo trabajo', cta: 'Hablemos', langLabel: 'Idioma' },
  hero: {
    eyebrow: 'tecnología para empresas locales',
    h1: 'El informático de confianza de tu negocio.',
    lead: 'Web, datos, copias de seguridad y redes sociales, en manos de una sola persona. Sin tecnicismos y aquí al lado.',
    ctaPrimary: 'Hablemos',
    ctaGhost: 'Ver servicios',
  },
  problem: {
    title: 'Lo tuyo es tu negocio, no la informática.',
    intro:
      'Y aun así, dependes de que funcione: la web, las redes, los datos. Y cuando se tuerce, te toca pelearte con paneles y avisos que no son lo tuyo.',
    pains: [
      'La web lleva meses caída o desactualizada.',
      'No tienes copias de seguridad… hasta que las necesitas.',
      'Las redes sociales llevan abandonadas desde el verano pasado.',
      'Pagas programas que nadie sabe muy bien para qué son.',
    ],
  },
  services: {
    kicker: 'servicios',
    title: 'Qué hago por ti',
    intro: 'Todo lo técnico, llevado por una sola persona. Coge lo que necesites.',
    items: [
      {
        titulo: 'IA aplicada a tu día a día',
        desc: 'La misma inteligencia artificial que usan las grandes, puesta a trabajar para ti: un asistente que atiende a tus clientes, contenido para redes o el papeleo pesado hecho solo. Sin humo y explicado en cristiano.',
        detalle: ['Asistentes y chatbots', 'Contenido con IA', 'Automatización'],
        destacado: true,
      },
      {
        titulo: 'Tu web y tus apps',
        desc: 'Páginas, tiendas y aplicaciones a medida. Desde una landing que capte clientes hasta una herramienta interna que te ahorre horas.',
        detalle: ['Webs y tiendas online', 'Apps a medida', 'Automatizaciones'],
      },
      {
        titulo: 'Tus datos a salvo',
        desc: 'Copias de seguridad que funcionan de verdad, orden en tus archivos y cumplimiento de protección de datos. Para que un susto no se lleve años de trabajo.',
        detalle: ['Copias automáticas', 'Recuperación ante fallos', 'RGPD básico'],
      },
      {
        titulo: 'Tu presencia online',
        desc: 'Redes sociales, contenido y publicidad que sí se ve. Apareces donde está tu gente, sin que tengas que pelearte con Meta Business.',
        detalle: ['Redes sociales', 'Publicidad local', 'Contenido'],
      },
      {
        titulo: 'Consultoría',
        desc: 'Qué herramienta usar, cómo digitalizar ese proceso, por qué pagas tres programas que hacen lo mismo. Te lo explico sin tecnicismos y decides tú.',
        detalle: ['Qué herramientas usar', 'Digitalizar procesos', 'Segunda opinión'],
      },
    ],
  },
  how: {
    kicker: 'cómo trabajo',
    title: 'Cercanía de barrio, herramientas de hoy.',
    intro: '«Taller» es una palabra de oficio: trabajo bien hecho y trato directo. Así trabajo yo.',
    items: [
      {
        titulo: 'Hablas siempre conmigo',
        desc: 'Nada de centralitas ni tickets. La parte técnica la lleva una persona, la misma de principio a fin: yo.',
      },
      {
        titulo: 'Sin tecnicismos',
        desc: 'Te explico las cosas en cristiano y tú decides con la información clara. Nada de letra pequeña ni humo.',
      },
      {
        titulo: 'Precios claros',
        desc: 'Presupuesto cerrado antes de empezar. Sabes lo que pagas y por qué, sin sorpresas a final de mes.',
      },
      {
        titulo: 'En tu zona',
        desc: 'Con base en Torrevieja, trabajo en toda la provincia de Alicante y la Región de Murcia. Si hace falta, nos vemos; si no, te llamo igual.',
      },
    ],
  },
  about: {
    kicker: 'quién está detrás',
    title: 'Empiezo ahora. Y eso te conviene.',
    bodyHtml:
      'Soy Alberto Martínez, 8 años desarrollando software. Acabo de montar Taller Martínez para dar servicio a negocios de la zona, y eso significa una cosa para ti: <strong>atención total y precios de cercanía.</strong> No te pierdes entre otros mil.',
    buildKicker: 'lo que construyo',
    projects: [
      {
        nombre: 'warden',
        desc: 'Sistema de despliegue automático para servicios self-hosted. Lo que mantiene mis proyectos funcionando solos.',
        tag: 'Infra',
      },
      {
        nombre: 'UrbanDictionaryBot',
        desc: 'Bot de Telegram con búsqueda inline, navegación y palabra del día. Miles de consultas servidas.',
        tag: 'Bot',
      },
      {
        nombre: 'vontus.dev',
        desc: 'Mi taller personal de software: proyectos, código abierto y el lado más técnico de lo que hago.',
        tag: 'Web',
      },
    ],
  },
  contact: {
    kicker: 'contacto',
    title: 'Cuéntame qué necesitas.',
    intro: 'Sin compromiso. Me escribes, lo vemos, y te digo claro si puedo ayudarte y cuánto costaría.',
    email: 'alberto@tallermartinez.net',
  },
  footer: { location: 'Torrevieja, Alicante y Murcia' },
};
