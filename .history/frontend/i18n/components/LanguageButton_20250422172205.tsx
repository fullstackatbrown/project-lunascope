'use client';

import { useTranslation } from '../hooks';
import { languageNames } from '../config';

interface LanguageButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function LanguageButton({ className = '', style = {} }: LanguageButtonProps) {
  const { locale, changeLanguage, t } = useTranslation();
  
  // Toggle to next language
  const toggleLanguage = () => {
    const nextLanguage = locale === 'en' ? 'zh' : 'en';
    changeLanguage(nextLanguage);
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className={`bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow ${className}`}
      style={style}
      aria-label={t('common:switchLanguage')}
    >
      {locale === 'en' ? '🇨🇳' : '🇺🇸'} {languageNames[locale === 'en' ? 'zh' : 'en']}
    </button>
  );
}
