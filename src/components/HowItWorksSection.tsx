// src/contexts/LanguageSupport.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Type
type Language = 'en' | 'ja';

// Context
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

// Provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mirai-language');
    return saved === 'ja' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('mirai-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook
export const useLanguage = () => useContext(LanguageContext);

// Utility
export function choose<T>(en: T, ja: T, lang: string): T {
  return lang === 'ja' ? ja : en;
}

// Toggle Component
export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'font-bold underline' : ''}
      >
        🇺🇸 EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={language === 'ja' ? 'font-bold underline' : ''}
      >
        🇯🇵 JP
      </button>
    </div>
  );
};
