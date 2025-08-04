// src/pages/Home.tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="page-container">
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

      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">
          {choose("It's easy to get started", "始めるのは簡単です", language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            ["Register Online", "オンラインで登録"],
            ["Learn at Your Own Pace", "自分のペースで学習"],
            ["Pass Final Exam", "最終試験に合格"],
            ["Get Your Certificate", "修了証を受け取る"]
          ].map(([en, ja], i) => (
            <div key={i}>
              <h3 className="text-xl font-bold">{`0${i + 1}`}</h3>
              <p>{choose(en, ja, language)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 text-center bg-gray-50">
        <h2 className="text-xl font-semibold mb-6">
          {choose("Offensive Driving Course Syllabus", "交通安全コース シラバス", language)}
        </h2>
        <ul className="max-w-3xl mx-auto text-left space-y-2">
          {[
            ["Foundations of Traffic Safety and Awareness", "交通安全と意識の基礎"],
            ["Understanding Traffic Laws and Right-of-Way Protocols", "交通法規と優先権の理解"],
            ["Mastering Speed Limits and Defensive Driving", "制限速度と防衛運転の習得"],
            ["Managing Road Rage and Aggressive Driving Behaviors", "怒り運転と攻撃的運転の管理"],
            ["Collision Avoidance and Safety Techniques", "衝突回避と安全技術"],
            ["Handling Road Rage and Driving Distractions", "怒り運転と注意散漫の対処"],
            ["Vehicle and Road Safety", "車両および道路の安全"]
          ].map(([en, ja], i) => (
            <li key={i}>
              <strong>{i + 1}. </strong>{choose(en, ja, language)}
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
          {choose("Start the Course", "コースを始める", language)}
        </button>
      </section>

      <section className="py-12 bg-white text-center">
        <img src="/illustrations/certificate.png" alt="Certificate Illustration" className="mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-4">
          {choose("DMV Certificate Included", "DMV修了証付き", language)}
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>{choose("Official DMV Certificate:", "公式DMV修了証：", language)}</strong>{" "}
            {choose("Meets all California court requirements", "カリフォルニア州裁判所の全要件を満たします", language)}
          </li>
          <li>
            <strong>{choose("Automatic Submission:", "自動提出：", language)}</strong>{" "}
            {choose("We send it directly to the court for you", "修了後に裁判所へ直接提出されます", language)}
          </li>
          <li>
            <strong>{choose("Instant Download:", "即時ダウンロード：", language)}</strong>{" "}
            {choose("Get your certificate immediately upon completion", "修了後すぐにダウンロード可能", language)}
          </li>
        </ul>
      </section>

      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-4">
          {choose("Frequently Asked Questions", "よくある質問", language)}
        </h2>
        <p className="mb-6">
          {choose("Everything you need to know before starting your online traffic school journey", "オンライン交通学校を始める前に知っておくべきすべての情報", language)}
        </p>
        <ul className="space-y-2">
          <li>{choose("What is Mirai Traffic School?", "ミライ交通スクールとは？", language)}</li>
          <li>{choose("Is the course approved by the California DMV?", "このコースはカリフォルニアDMVに承認されていますか？", language)}</li>
          <li>{choose("How long is the course?", "コースの所要時間は？", language)}</li>
          <li>{choose("How does identity verification work during the course?", "受講中の本人確認はどのように行われますか？", language)}</li>
        </ul>
        <button className="mt-6 underline text-blue-600">
          {choose("View All FAQs", "すべての質問を見る", language)}
        </button>
      </section>
    </div>
  );
}
