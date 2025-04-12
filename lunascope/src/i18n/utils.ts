import { namespaces } from './config';

// Store language preference
export function storeLanguage(locale: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', locale);
  }
}

// Get stored language preference
export function getStoredLanguage(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language');
  }
  return null;
}

// Dynamically load translation files
export async function loadTranslations(locale: string) {
  const translations: Record<string, Record<string, string>> = {};
  
  // Load translations for each namespace
  for (const namespace of namespaces) {
    try {
      // Dynamic import of translation files
      const module = await import(`./locales/${locale}/${namespace}.json`);
      translations[namespace] = module.default;
    } catch (error) {
      console.error(`Failed to load ${namespace} translations for ${locale}:`, error);
      translations[namespace] = {};
    }
  }
  
  return translations;
}
