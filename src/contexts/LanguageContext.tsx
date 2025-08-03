import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'jp';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    help: "Help", 
    courts: "Courts",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    
    // Hero Section
    heroTitle: "Traffic Violations School",
    heroSubtitle: "Pass your California traffic course online",
    heroDescription: "Complete your court-required traffic school from home.",
    feature1: "✓ DMV-approved certificate",
    feature2: "✓ 100% online, any device",
    feature3: "✓ Court & DMV accepted",
    startCourseNow: "Start Course Now",
    scrollToLearnMore: "Scroll to learn more",
    
    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.step1": "Sign Up & Start",
    "howItWorks.step2": "Complete Lessons",
    "howItWorks.step3": "Pass Final Exam",
    "howItWorks.step4": "Get Certificate",
    
    // Features Section
    whyChooseUs: "Why Choose Us",
    "features.feature1.title": "100% Online Course",
    "features.feature1.description": "Complete from anywhere, anytime",
    "features.feature2.title": "DMV Approved",
    "features.feature2.description": "Officially licensed by California DMV",
    "features.feature3.title": "Court Accepted",
    "features.feature3.description": "Accepted by all California courts",
    "features.feature4.title": "Instant Certificate",
    "features.feature4.description": "Automatic submission to court & DMV",
    "features.feature5.title": "Mobile Friendly",
    "features.feature5.description": "Works on any device or browser",
    "features.feature6.title": "24/7 Support",
    "features.feature6.description": "Help available when you need it",
    
    quickFeatures: "Quick Features",
    "quickFeatures.feature1": "Fast & Easy",
    "quickFeatures.feature2": "Save Money",
    "quickFeatures.feature3": "Avoid Points",
    "quickFeatures.feature4": "Keep Insurance Low",
    
    // Course Overview
    courseOverview: "Course Overview",
    courseOverviewDescription: "Everything you need to successfully complete your traffic school requirement",
    chapters: "Chapters",
    hours: "Hours",
    graduates: "Graduates",
    courtAcceptance: "Court Acceptance",
    interactiveLessons: "Interactive lessons with multimedia content",
    practiceQuizzes: "Practice quizzes to test your knowledge",
    identityVerification: "Secure identity verification system",
    
    // Certificate
    certificateTitle: "Get Your DMV-Approved Certificate",
    certificateDescription: "Upon completion, receive an official certificate that's automatically submitted to the court and DMV",
    "certificate.benefit1.title": "Instant Delivery",
    "certificate.benefit1.description": "Certificate delivered immediately after passing",
    "certificate.benefit2.title": "Auto Submission",
    "certificate.benefit2.description": "Automatically sent to court and DMV",
    "certificate.benefit3.title": "Verification",
    "certificate.benefit3.description": "Secure verification with court reference",
    
    // Course Features
    courseTitle: "Complete Traffic School Course",
    courseDescription: "Comprehensive curriculum covering California traffic laws and safe driving practices",
    
    // Pricing
    pricing: "Course Pricing",
    priceAmount: "$19.95",
    priceDesc: "One-time payment, no hidden fees",
    startCourse: "Start Course",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqDescription: "Quick answers to common questions about our traffic school course",
    viewAllFaqs: "View All FAQs",
    
    // Final CTA
    finalCtaTitle: "Ready to Get Started?",
    finalCtaDescription: "Join thousands who have successfully completed their traffic school with us",
    finalCtaButton: "Start Course Now",
    sampleLesson: "View Sample Lesson",
    onlineSupport: "Online Support",
    easyToUse: "Easy to Use",
    trustedByCustomers: "Trusted by Customers",
    anyDeviceAnyTime: "Any Device, Any Time",
    dmvApproved: "DMV Approved",
    courtAccepted: "Court Accepted",
    "100Online": "100% Online",
    
    // Footer
    company: "Company",
    quickLinks: "Quick Links",
    support: "Support",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    
    // Help & About specific content
    aboutPageTitle: "About Mirai Traffic School",
    aboutPageDescription: "Learn more about our mission and how our online traffic school works",
    helpPageTitle: "Help & Support",
    helpPageDescription: "Find answers to your questions and get the support you need",
    
    // Contact Page
    contactTitle: "Contact Us",
    contactDescription: "Get in touch with our support team for any questions about your traffic school course",
    getInTouch: "Get in Touch",
    supportHours: "Support Hours",
    emailSupport: "Email Support",
    phoneSupport: "Phone Support",
    followUs: "Follow Us",
    sendMessage: "Send us a Message",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    sendMessageBtn: "Send Message",
    
    // Courts Page
    courtsTitle: "California Court Information",
    courtsDescription: "Find information about your local California court and traffic school requirements",
    eligibilityTitle: "Eligibility Requirements",
    eligibilityDesc: "Check if you qualify for online traffic school",
    eligibleTickets: "Eligible Tickets",
    eligibleTicketsDesc: "Most moving violations are eligible for traffic school",
    courtDeadlines: "Court Deadlines",
    courtDeadlinesDesc: "Important dates and deadlines to remember",
    submitCertificate: "Certificate Submission",
    submitCertificateDesc: "How we submit your completion certificate",
    
    // Legal Page
    legalTitle: "Terms & Privacy",
    legalDescription: "Please review our full Terms of Use and Privacy Policy",
    termsOfUse: "Terms of Use",
    
    // 404 Page
    pageNotFound: "Page Not Found",
    pageNotFoundDesc: "Oops! The page you're looking for doesn't exist",
    returnHome: "Return to Home"
  },
  jp: {
    // Navigation
    home: "ホーム",
    about: "概要",
    help: "ヘルプ",
    courts: "裁判所",
    contact: "お問い合わせ",
    login: "ログイン",
    signup: "新規登録",
    
    // Hero Section
    heroTitle: "交通違反スクール",
    heroSubtitle: "カリフォルニア州交通コースをオンラインで合格",
    heroDescription: "裁判所で必要な交通スクールを自宅で完了しましょう。",
    feature1: "✓ DMV認可証明書",
    feature2: "✓ 100%オンライン、全デバイス対応",
    feature3: "✓ 裁判所・DMV受理",
    startCourseNow: "今すぐコース開始",
    scrollToLearnMore: "詳しく見る",
    
    // How It Works
    "howItWorks.title": "仕組み",
    "howItWorks.step1": "登録と開始",
    "howItWorks.step2": "レッスン完了",
    "howItWorks.step3": "最終試験合格",
    "howItWorks.step4": "証明書取得",
    
    // Features Section
    whyChooseUs: "選ばれる理由",
    "features.feature1.title": "100%オンラインコース",
    "features.feature1.description": "いつでもどこでも受講可能",
    "features.feature2.title": "DMV認可済み",
    "features.feature2.description": "カリフォルニアDMV正式ライセンス",
    "features.feature3.title": "裁判所受理",
    "features.feature3.description": "カリフォルニア州全裁判所で受理",
    "features.feature4.title": "即座の証明書",
    "features.feature4.description": "裁判所・DMVへ自動提出",
    "features.feature5.title": "モバイル対応",
    "features.feature5.description": "全デバイス・ブラウザ対応",
    "features.feature6.title": "24時間サポート",
    "features.feature6.description": "必要な時にサポート利用可能",
    
    quickFeatures: "特徴",
    "quickFeatures.feature1": "迅速・簡単",
    "quickFeatures.feature2": "費用節約",
    "quickFeatures.feature3": "点数回避",
    "quickFeatures.feature4": "保険料維持",
    
    // Course Overview
    courseOverview: "コース概要",
    courseOverviewDescription: "交通スクール要件を成功裏に完了するために必要なすべて",
    chapters: "チャプター",
    hours: "時間",
    graduates: "卒業者",
    courtAcceptance: "裁判所受理",
    interactiveLessons: "マルチメディアコンテンツ付きインタラクティブレッスン",
    practiceQuizzes: "知識テスト用練習クイズ",
    identityVerification: "安全な身元確認システム",
    
    // Certificate
    certificateTitle: "DMV認可証明書を取得",
    certificateDescription: "修了時に裁判所とDMVに自動提出される公式証明書を受領",
    "certificate.benefit1.title": "即座の配信",
    "certificate.benefit1.description": "合格後すぐに証明書配信",
    "certificate.benefit2.title": "自動提出",
    "certificate.benefit2.description": "裁判所とDMVに自動送信",
    "certificate.benefit3.title": "検証",
    "certificate.benefit3.description": "裁判所参照番号付き安全な検証",
    
    // Course Features
    courseTitle: "完全交通スクールコース",
    courseDescription: "カリフォルニア交通法と安全運転の包括的カリキュラム",
    
    // Pricing
    pricing: "コース料金",
    priceAmount: "$19.95",
    priceDesc: "一回払い、隠れた費用なし",
    startCourse: "コース開始",
    
    // FAQ
    faqTitle: "よくある質問",
    faqDescription: "交通スクールコースに関する一般的な質問への迅速な回答",
    viewAllFaqs: "全てのFAQを見る",
    
    // Final CTA
    finalCtaTitle: "始める準備はできましたか？",
    finalCtaDescription: "当校で交通スクールを成功裏に完了した数千人の仲間入り",
    finalCtaButton: "今すぐコース開始",
    sampleLesson: "サンプルレッスンを見る",
    onlineSupport: "オンラインサポート",
    easyToUse: "使いやすい",
    trustedByCustomers: "顧客から信頼",
    anyDeviceAnyTime: "いつでもどのデバイスでも",
    dmvApproved: "DMV認可",
    courtAccepted: "裁判所受理",
    "100Online": "100%オンライン",
    
    // Footer
    company: "会社",
    quickLinks: "クイックリンク",
    support: "サポート",
    legal: "法的情報",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    
    // Help & About specific content
    aboutPageTitle: "ミライ交通スクールについて",
    aboutPageDescription: "当スクールのミッションとオンライン交通スクールの仕組みをご紹介します",
    helpPageTitle: "ヘルプ・サポート",
    helpPageDescription: "質問への回答と必要なサポートを見つけてください",
    
    // Contact Page
    contactTitle: "お問い合わせ",
    contactDescription: "交通スクールコースに関するご質問はサポートチームまでお気軽にお問い合わせください",
    getInTouch: "お問い合わせ",
    supportHours: "サポート時間",
    emailSupport: "メールサポート",
    phoneSupport: "電話サポート",
    followUs: "フォローする",
    sendMessage: "メッセージを送信",
    firstName: "名",
    lastName: "姓",
    emailAddress: "メールアドレス",
    subject: "件名",
    message: "メッセージ",
    sendMessageBtn: "メッセージを送信",
    
    // Courts Page
    courtsTitle: "カリフォルニア州裁判所情報",
    courtsDescription: "お住まいのカリフォルニア州裁判所と交通スクール要件に関する情報を確認",
    eligibilityTitle: "受講資格要件",
    eligibilityDesc: "オンライン交通スクールの受講資格を確認",
    eligibleTickets: "対象となる違反",
    eligibleTicketsDesc: "ほとんどの運転違反が交通スクール対象",
    courtDeadlines: "裁判所期限",
    courtDeadlinesDesc: "重要な日付と期限をお忘れなく",
    submitCertificate: "証明書提出",
    submitCertificateDesc: "修了証明書の提出方法",
    
    // Legal Page
    legalTitle: "利用規約とプライバシーポリシー",
    legalDescription: "利用規約およびプライバシーポリシーを必ずご確認ください",
    termsOfUse: "利用規約",
    
    // 404 Page
    pageNotFound: "ページが見つかりません",
    pageNotFoundDesc: "申し訳ございません。お探しのページは存在しません",
    returnHome: "ホームに戻る"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'en' || stored === 'jp') ? stored : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Dispatch custom event for sync across components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: language }));
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
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