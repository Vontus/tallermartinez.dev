export type Locale = 'es' | 'en';

export interface Service {
  titulo: string;
  desc: string;
  detalle: string[];
  destacado?: boolean;
}

export interface Principle {
  titulo: string;
  desc: string;
}

export interface Project {
  nombre: string;
  desc: string;
  tag: string;
}

export interface Content {
  meta: {
    htmlLang: string; // <html lang>
    ogLocale: string; // og:locale (es_ES / en_GB)
    ogImage: string; // file in /public
    title: string;
    description: string;
    /** Schema.org ProfessionalService fields that read differently per language. */
    areaServed: string[];
    knowsAbout: string[];
  };
  nav: { services: string; how: string; cta: string; langLabel: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  problem: { title: string; intro: string; pains: string[] };
  services: { kicker: string; title: string; intro: string; items: Service[] };
  how: { kicker: string; title: string; intro: string; items: Principle[] };
  about: {
    kicker: string;
    title: string;
    /** HTML — contains a <strong>. */
    bodyHtml: string;
    buildKicker: string;
    projects: Project[];
  };
  contact: { kicker: string; title: string; intro: string; email: string };
  footer: { location: string };
}
