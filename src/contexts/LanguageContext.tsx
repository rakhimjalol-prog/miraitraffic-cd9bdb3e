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
    // Header
    header: {
      home: "Home",
      about: "About Us",
      courses: "Courses",
      howItWorks: "How It Works",
      courtLookup: "Court Lookup",
      login: "Login",
      startCourse: "Start Course",
      offensiveDriving: "Offensive Driving Course"
    },
    
    // Hero Section
    hero: {
      title: "Fast, Court-Approved Traffic School — Fully in Japanese",
      subtitle: "Officially licensed by the California DMV. Study online at your own pace.",
      startCourse: "Start Course Now",
      dmvApproved: "DMV Approved",
      fullyOnline: "100% Online", 
      courtAccepted: "Court Accepted",
      courseInterface: "Course Interface",
      progress: "Progress"
    },
    
    // How It Works
    howItWorks: {
      title: "It's easy to get started",
      subtitle: "Complete your traffic school in 4 simple steps",
      step1: "Register Online",
      step2: "Learn at Your Own Pace", 
      step3: "Pass Final Exam",
      step4: "Get Your Certificate"
    },
    
    // Course Feature
    courseFeature: {
      title: "Offensive Driving Course",
      description: "Dismiss your traffic ticket in Japanese with DMV-approved content.",
      courseTitle: "Traffic School Course",
      approved: "DMV Approved",
      progress: "Progress",
      module1: "Chapter 1: Basic Traffic Laws",
      module2: "Chapter 2: Safe Driving",
      module3: "Chapter 3: Road Signs",
      module4: "Chapter 4: Final Review",
      feature1Title: "Complete Course in Japanese",
      feature1Desc: "All content, quizzes, and exams in Japanese",
      feature2Title: "Study at Your Own Pace",
      feature2Desc: "No time limits, pause and resume anytime",
      feature3Title: "Mobile-Friendly",
      feature3Desc: "Works on phones, tablets, and computers",
      startCourse: "Start the Course"
    },
    
    // Certificate
    certificate: {
      title: "DMV Certificate Included",
      description: "We automatically submit your certificate to the court upon completion.",
      benefit1Title: "Official DMV Certificate",
      benefit1Desc: "Meets all California court requirements",
      benefit2Title: "Automatic Submission",
      benefit2Desc: "We send it directly to the court for you",
      benefit3Title: "Instant Download",
      benefit3Desc: "Get your certificate immediately upon completion",
      certificateTitle: "Certificate of Completion",
      certificateSubtitle: "California Traffic Violator School",
      completedCourse: "has successfully completed the required course",
      licenseNumber: "License #",
      completionDate: "Date",
      officialSeal: "Official DMV Approved School"
    },
    
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      question1: "Is this course accepted by all California courts?",
      answer1: "Yes, our course is DMV-approved and accepted by all California courts.",
      question2: "How long does it take to complete?",
      answer2: "Most students complete the course in 6-8 hours, but you can go at your own pace.",
      question3: "What if I fail the final exam?",
      answer3: "You can retake the final exam as many times as needed at no extra cost."
    },
    
    // Footer
    footer: {
      aboutUs: "About Us",
      faq: "FAQ", 
      privacy: "Privacy",
      terms: "Terms",
      courtLookup: "Court Lookup",
      courseInfo: "Course Info",
      dmvLicense: "DMV License #E2067",
      copyright: "© 2024 Mirai Traffic School. All rights reserved."
    }
  },
  jp: {
    // Header
    header: {
      home: "ホーム",
      about: "会社概要",
      courses: "コース",
      howItWorks: "受講の流れ",
      courtLookup: "裁判所検索",
      login: "ログイン",
      startCourse: "コース開始",
      offensiveDriving: "オフェンシブドライビングコース"
    },
    
    // Hero Section
    hero: {
      title: "迅速で裁判所承認済みのトラフィックスクール — 完全日本語対応",
      subtitle: "カリフォルニア州DMV公式認定。オンラインで自分のペースで学習できます。",
      startCourse: "コースを開始する",
      dmvApproved: "DMV認定",
      fullyOnline: "完全オンライン",
      courtAccepted: "裁判所承認済み",
      courseInterface: "コースインターフェース",
      progress: "進捗"
    },
    
    // How It Works
    howItWorks: {
      title: "簡単に始められます",
      subtitle: "4つの簡単なステップでトラフィックスクールを修了",
      step1: "オンライン登録",
      step2: "自分のペースで学習",
      step3: "最終試験に合格",
      step4: "修了証を受け取る"
    },
    
    // Course Feature
    courseFeature: {
      title: "オフェンシブドライビングコース",
      description: "DMV認定コンテンツで日本語で交通違反切符を無効にできます。",
      courseTitle: "トラフィックスクールコース",
      approved: "DMV認定",
      progress: "進捗",
      module1: "第1章：基本的な交通法規",
      module2: "第2章：安全運転",
      module3: "第3章：道路標識",
      module4: "第4章：最終復習",
      feature1Title: "完全日本語コース",
      feature1Desc: "すべての内容、クイズ、試験が日本語",
      feature2Title: "自分のペースで学習",
      feature2Desc: "時間制限なし、いつでも一時停止・再開可能",
      feature3Title: "モバイル対応",
      feature3Desc: "スマホ、タブレット、パソコンで利用可能",
      startCourse: "コースを開始する"
    },
    
    // Certificate
    certificate: {
      title: "DMV修了証付き",
      description: "修了時に自動的に裁判所に修了証を提出いたします。",
      benefit1Title: "公式DMV修了証",
      benefit1Desc: "カリフォルニア州の全裁判所要件を満たします",
      benefit2Title: "自動提出",
      benefit2Desc: "お客様の代わりに直接裁判所に送信します",
      benefit3Title: "即座にダウンロード",
      benefit3Desc: "修了と同時に修了証をすぐに取得",
      certificateTitle: "修了証明書",
      certificateSubtitle: "カリフォルニア州交通違反者学校",
      completedCourse: "は必要なコースを正常に修了しました",
      licenseNumber: "ライセンス番号",
      completionDate: "修了日",
      officialSeal: "DMV認定校公式印"
    },
    
    // FAQ
    faq: {
      title: "よくある質問",
      question1: "このコースはカリフォルニア州のすべての裁判所で受け入れられますか？",
      answer1: "はい、私たちのコースはDMV認定で、カリフォルニア州のすべての裁判所で受け入れられます。",
      question2: "修了までにどのくらい時間がかかりますか？",
      answer2: "ほとんどの学生は6〜8時間でコースを修了しますが、自分のペースで進めることができます。",
      question3: "最終試験に不合格になった場合はどうなりますか？",
      answer3: "追加料金なしで最終試験を必要な回数だけ再受験できます。"
    },
    
    // Footer
    footer: {
      aboutUs: "会社概要",
      faq: "よくある質問",
      privacy: "プライバシー",
      terms: "利用規約",
      courtLookup: "裁判所検索",
      courseInfo: "コース情報",
      dmvLicense: "DMVライセンス番号 #E2067",
      copyright: "© 2024 Mirai Traffic School. 全著作権所有。"
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
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