import type { Content, Locale } from './types';
import { es } from './es';
import { en } from './en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content, Locale };
