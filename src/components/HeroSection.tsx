// src/pages/Home.tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
export default function Home() {
  const {
    language
  } = useLanguage();
  return <div className="page-container">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">
          {choose('Mirai Traffic School', 'ミライ交通スクール', language)}
        </h1>
        <p className="mt-2 text-lg">
          {choose("California’s First Japanese Online Traffic School", "カリフォルニア初の日本語対応オンライン交通学校", language)}
        </p>
        <p>{choose("DMV-approved • Court-accepted", "DMV認定 • 裁判所承認", language)}</p>
        <p>{choose("Clear your traffic ticket • Learn safer driving", "違反チケットを解除 • 安全運転を学ぶ", language)}</p>
        <p>{choose("100% online • 100% in Japanese", "完全オンライン • 完全日本語対応", language)}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          {choose("Start Course Now", "今すぐコースを始める", language)}
        </button>
      </header>

      <section className="py-16 text-center">
        <img src="/illustrations/driving-school.png" alt="Driving School Illustration" className="mx-auto mb-4" />
        <p>{choose("Scroll to learn more", "スクロールして詳細を見る", language)}</p>
      </section>

      

      

      

      
    </div>;
}