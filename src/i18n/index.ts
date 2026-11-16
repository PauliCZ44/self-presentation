import { en, type Dictionary } from "./en";
import { cs } from "./cs";

export const locales = ["en", "cs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, cs };

/** Usage in .astro files: `const t = useTranslations(Astro.currentLocale);` */
export function useTranslations(locale: string | undefined): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries[defaultLocale];
}
