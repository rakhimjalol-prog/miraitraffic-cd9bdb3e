import { useState, useEffect } from 'react';

// Import translation files
import enTranslations from '../locales/en.json';
import jaTranslations from '../locales/ja.json';

type Language = 'en' | 'ja';
type TranslationObject = Record<string, any>;

const translations: Record<Language, TranslationObject> = {
  en: enTranslations,
  ja: jaTranslations,
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'en' || stored === 'ja') ? stored : 'en';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('language');
      if (stored === 'en' || stored === 'ja') {
        setLanguage(stored);
      }
    };

    // Listen for localStorage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom language change events
    window.addEventListener('languageChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleStorageChange);
    };
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, language, setLanguage };
};