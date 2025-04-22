'use client';

import { ReactNode, useEffect, useState, useCallback } from 'react';
import { TranslationContext } from './context';
import { defaultLanguage, supportedLanguages } from './config';
import { loadTranslations, getStoredLanguage, storeLanguage } from './utils';

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  // State
  const [locale, setLocale] = useState(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Initialize: load language setting from localStorage
  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
      setLocale(storedLanguage);
    }
  }, []);

  // Load translation files
  useEffect(() => {
    async function loadLanguageData() {
      setIsLoading(true);
      try {
        const data = await loadTranslations(locale);
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadLanguageData();
  }, [locale]);

  // Translation function
  const t = useCallback((key: string, options?: object) => {
    // Parse key name, format: namespace:key or key
    const [namespace, translationKey] = key.includes(':') 
      ? key.split(':') 
      : ['common', key];
    
    // Find translation
    const translation = translations[namespace]?.[translationKey];
    
    // If translation not found, return key name
    if (!translation) {
      return translationKey;
    }
    
    // Replace variables
    if (options) {
      return Object.entries(options).reduce(
        (text, [key, value]) => text.replace(new RegExp(`{{${key}}}`, 'g'), String(value)),
        translation
      );
    }
    
    return translation;
  }, [translations]);

  // Check if key has translation
  const hasTranslation = useCallback((key: string) => {
    const [namespace, translationKey] = key.includes(':') 
      ? key.split(':') 
      : ['common', key];
    
    return !!translations[namespace]?.[translationKey];
  }, [translations]);

  // Change language
  const changeLanguage = useCallback((newLocale: string) => {
    if (supportedLanguages.includes(newLocale)) {
      setLocale(newLocale);
      storeLanguage(newLocale);
    }
  }, []);

  // Provide context value
  const contextValue = {
    locale,
    t,
    changeLanguage,
    hasTranslation,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {isLoading ? <div>Loading translations...</div> : children}
    </TranslationContext.Provider>
  );
}
