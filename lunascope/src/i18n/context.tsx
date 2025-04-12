'use client';

import { createContext, useContext } from 'react';
import { defaultLanguage } from './config';

// Translation context type
export interface TranslationContextType {
  // Current language
  locale: string;
  // Translation function
  t: (key: string, options?: object) => string;
  // Function to change language
  changeLanguage: (newLocale: string) => void;
  // Check if a key has translation
  hasTranslation: (key: string) => boolean;
}

// Create default context
const defaultContext: TranslationContextType = {
  locale: defaultLanguage,
  t: (key) => key, // Default returns the key itself
  changeLanguage: () => {}, // Empty function
  hasTranslation: () => false,
};

// Create context
export const TranslationContext = createContext<TranslationContextType>(defaultContext);

// Custom hook to access translation context
export const useTranslationContext = () => useContext(TranslationContext);
