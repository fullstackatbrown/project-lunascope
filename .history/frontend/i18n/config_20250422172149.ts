// Configuration for the translation module

// Default language
export const defaultLanguage = 'en';

// Supported languages
export const supportedLanguages = ['en', 'zh'];

// Language names for display
export const languageNames = {
  en: 'English',
  zh: '中文',
};

// Translation namespaces
export const namespaces = ['common', 'home'];

// Default namespace, contains most commonly used translations
export const defaultNamespace = 'common';

// Language detection options
export const detectionOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};
