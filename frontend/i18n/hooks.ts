'use client';

import { useTranslationContext } from './context';
import { defaultNamespace } from './config';

// Main translation hook
export function useTranslation() {
  return useTranslationContext();
}

// Namespace-specific translation hook
export function useNamespaceTranslation(namespace: string = defaultNamespace) {
  const { t, ...rest } = useTranslationContext();
  
  // Create namespace-specific translation function
  const namespaceT = (key: string, options?: object) => {
    // If key already includes namespace, use it directly
    if (key.includes(':')) {
      return t(key, options);
    }
    // Otherwise add namespace
    return t(`${namespace}:${key}`, options);
  };
  
  return { ...rest, t: namespaceT };
}
