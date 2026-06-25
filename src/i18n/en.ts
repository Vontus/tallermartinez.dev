import type { Content } from './types';

export const en: Content = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    ogImage: 'og-en.png',
    title: 'Taller Martínez — IT support for local businesses in Torrevieja, Alicante & Murcia',
    description:
      'The IT support your local business can rely on, in Torrevieja, Alicante province and the Region of Murcia. Websites, data, backups, social media and AI — handled by one person.',
    areaServed: ['Torrevieja', 'Alicante province', 'Region of Murcia'],
    knowsAbout: [
      'Web design and development',
      'Online shops',
      'Custom apps',
      'Backups',
      'Social media management',
      'Social media ads',
      'AI for small businesses',
      'IT consulting',
    ],
  },
  nav: { services: 'Services', how: 'How I work', langLabel: 'Language' },
  hero: {
    eyebrow: 'tech for local businesses',
    h1: 'The IT support your business can rely on.',
    lead: 'Websites, data, backups and social media — handled by one person. No jargon, and right on your doorstep.',
    ctaPrimary: "Let's talk",
    ctaGhost: 'See services',
  },
  problem: {
    title: "Your job is running your business, not the tech.",
    intro:
      "And yet everything depends on it working — the website, the socials, the data. When it goes wrong, you're the one left wrestling with dashboards and warnings that aren't your problem to solve.",
    pains: [
      "The website's been down or out of date for months.",
      'No backups — until the day you need them.',
      "The socials haven't been touched since last summer.",
      "You're paying for software and nobody's quite sure what it's for.",
    ],
  },
  services: {
    kicker: 'services',
    title: 'What I do for you',
    intro: 'Everything technical, handled by one person. Take what you need.',
    items: [
      {
        titulo: 'AI, put to work for you',
        desc: 'The same AI the big players use, working for you instead: an assistant that answers your customers, content for your socials, or the tedious paperwork handled on its own. No hype, explained in plain English.',
        detalle: ['Assistants & chatbots', 'AI content', 'Automation'],
        destacado: true,
      },
      {
        titulo: 'Your website & apps',
        desc: 'Websites, online shops and custom apps. From a landing page that brings in customers to an in-house tool that saves you hours.',
        detalle: ['Websites & online shops', 'Custom apps', 'Automations'],
      },
      {
        titulo: 'Your data, kept safe',
        desc: "Backups that actually work, your files in order, and data protection done properly. So one bad day doesn't wipe out years of work.",
        detalle: ['Automatic backups', 'Disaster recovery', 'GDPR basics'],
      },
      {
        titulo: 'Your online presence',
        desc: 'Social media, content and ads that actually get seen. You show up where your customers are, without having to wrestle with Meta Business.',
        detalle: ['Social media', 'Local ads', 'Content'],
      },
      {
        titulo: 'Advice',
        desc: "Which tool to use, how to digitise that process, why you're paying for three apps that do the same thing. I explain it jargon-free and you decide.",
        detalle: ['Which tools to use', 'Going digital', 'A second opinion'],
      },
    ],
  },
  how: {
    kicker: 'how I work',
    title: 'Local, hands-on, done right.',
    intro: 'A small operation, straight-talking, and work done properly — start to finish, with my name on it.',
    items: [
      {
        titulo: 'You always deal with me',
        desc: 'No call centres, no ticket numbers. The technical side is handled by one person, the same one from start to finish: me.',
      },
      {
        titulo: 'No jargon',
        desc: 'I explain things in plain English so you can decide with the full picture. No small print, no hype.',
      },
      {
        titulo: 'Clear pricing',
        desc: "A fixed quote before we start. You know what you're paying and why — no surprises at the end of the month.",
      },
      {
        titulo: 'Local to you',
        desc: "Based in Torrevieja, I work across Alicante province and the Region of Murcia. If it helps we meet in person; if not, I'll call you all the same.",
      },
    ],
  },
  about: {
    kicker: "who's behind this",
    title: "I'm just starting out. That works in your favour.",
    bodyHtml:
      "I'm Alberto Martínez, eight years building software. I've just set up Taller Martínez to look after local businesses — which means one thing for you: <strong>my full attention and down-to-earth pricing.</strong> You won't get lost in a crowd of clients.",
    buildKicker: 'what I build',
    projects: [
      {
        nombre: 'warden',
        desc: 'Automatic deployment system for self-hosted services. What keeps my own projects running on their own.',
        tag: 'Infra',
      },
      {
        nombre: 'UrbanDictionaryBot',
        desc: 'A Telegram bot with inline search, navigation and a word of the day. Thousands of lookups served.',
        tag: 'Bot',
      },
      {
        nombre: 'vontus.dev',
        desc: 'My personal software workshop: projects, open source and the more technical side of what I do.',
        tag: 'Web',
      },
    ],
  },
  contact: {
    kicker: 'contact',
    title: 'Tell me what you need.',
    intro: "No obligation. Drop me a line, we'll talk it through, and I'll tell you straight whether I can help and what it'd cost.",
    email: 'alberto@tallermartinez.net',
  },
  footer: { location: 'Torrevieja, Alicante & Murcia' },
};
