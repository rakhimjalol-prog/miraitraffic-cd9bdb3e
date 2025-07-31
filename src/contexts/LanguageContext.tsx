import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    heroHeadline: "The easiest way to complete your California Traffic School — 100% in Japanese",
    heroSubheadline: "DMV-Approved · 100% Online · Court Accepted",
    startCourse: "Start Course Now",
    scrollToLearnMore: "Scroll to learn more",
    
    // Features
    whyChooseUs: "Why Choose Mirai Traffic School?",
    feature1Title: "100% Online",
    feature1Desc: "Complete the course anytime, anywhere",
    feature2Title: "Fully in Japanese",
    feature2Desc: "Native content, quizzes, and final exam",
    feature3Title: "DMV Approved",
    feature3Desc: "Official license #E2067",
    feature4Title: "Works on All Devices",
    feature4Desc: "Phone, tablet, or laptop",
    feature5Title: "Secure & Private",
    feature5Desc: "Your data is protected",
    feature6Title: "Instant Certificate",
    feature6Desc: "Sent to DMV & court automatically",
    
    // How It Works
    howItWorks: "How It Works",
    step1: "Sign Up",
    step2: "Take Lessons & Quizzes",
    step3: "Pass Final Exam",
    step4: "Get DMV Certificate",
    
    // Course Overview
    courseOverview: "Interactive Japanese-Language Traffic School Course",
    courseOverviewDesc: "Complete your traffic school requirement with our comprehensive course designed specifically for Japanese speakers.",
    courseFeature1: "7 structured chapters",
    courseFeature2: "Built-in quizzes and pop-up ID checks",
    courseFeature3: "Video content and progress tracking",
    courseFeature4: "Generates DMV-compliant certificate",
    
    // Pricing
    pricing: "Simple, Transparent Pricing",
    priceAmount: "$29.95",
    priceDesc: "Includes full course, quizzes, and DMV certificate",
    
    // Final CTA
    finalCtaTitle: "Join hundreds of Japanese drivers who completed the course online",
    
    // Footer
    aboutUs: "About Us",
    faq: "FAQ",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    courtLookup: "California Court Lookup",
    dmvLicense: "DMV License #E2067"
  },
  jp: {
    // Hero Section
    heroHeadline: "カリフォルニア州トラフィックスクールを日本語で簡単に修了できます",
    heroSubheadline: "DMV認定・完全オンライン・裁判所で承認済み",
    startCourse: "コースを開始する",
    scrollToLearnMore: "詳細を見るにはスクロールしてください",
    
    // Features
    whyChooseUs: "なぜ未来トラフィックスクールを選ぶのか？",
    feature1Title: "完全オンライン",
    feature1Desc: "いつでもどこでも受講可能",
    feature2Title: "完全日本語対応",
    feature2Desc: "日本語での授業・クイズ・試験",
    feature3Title: "DMV認定",
    feature3Desc: "公式ライセンス番号 #E2067",
    feature4Title: "すべての端末に対応",
    feature4Desc: "スマホ・タブレット・パソコン",
    feature5Title: "安全なデータ保護",
    feature5Desc: "お客様の情報は安全に保護されます",
    feature6Title: "修了証は自動送信",
    feature6Desc: "DMVと裁判所に自動的に送信されます",
    
    // How It Works
    howItWorks: "受講の流れ",
    step1: "サインアップ",
    step2: "授業とクイズを受ける",
    step3: "最終試験に合格",
    step4: "DMV修了証を受け取る",
    
    // Course Overview
    courseOverview: "インタラクティブな日本語トラフィックスクール講座",
    courseOverviewDesc: "日本語話者向けに特別に設計された包括的なコースで、トラフィックスクールの要件を満たします。",
    courseFeature1: "7章構成",
    courseFeature2: "確認クイズと本人確認",
    courseFeature3: "ビデオコンテンツと進捗追跡",
    courseFeature4: "DMV準拠の修了証発行",
    
    // Pricing
    pricing: "シンプルで透明な料金体系",
    priceAmount: "$29.95",
    priceDesc: "すべて含まれて（コース・クイズ・修了証）",
    
    // Final CTA
    finalCtaTitle: "多くの日本人ドライバーがこのコースを修了しています",
    
    // Footer
    aboutUs: "会社概要",
    faq: "よくある質問",
    contact: "お問い合わせ",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    courtLookup: "カリフォルニア州裁判所検索",
    dmvLicense: "DMVライセンス番号 #E2067"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};