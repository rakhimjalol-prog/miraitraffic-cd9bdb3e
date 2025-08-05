'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="page-container font-sans text-gray-800">
      <Header />

      {/* ✅ Push content below sticky header */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            {choose("About Mirai Traffic School", "ミライ交通スクールについて", language)}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {choose(
              "Learn more about our mission and how our online traffic school works",
              "当スクールのミッションとオンライン交通スクールの仕組みをご紹介します",
              language
            )}
          </p>
        </div>

        <Tabs defaultValue="about-us" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/30">
            <TabsTrigger value="about-us" className="text-base py-3">
              <Building className="w-4 h-4 mr-2" />
              {choose("About", "概要", language)}
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="text-base py-3">
              <Users className="w-4 h-4 mr-2" />
              {choose("How It Works", "仕組み", language)}
            </TabsTrigger>
          </TabsList>

          {/* === ABOUT US TAB === */}
          <TabsContent value="about-us">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  {/* ✅ LOGO IMAGE REPLACING "Image/Icon Space" */}
                  <div className="w-full h-64 bg-white rounded-lg flex items-center justify-center mb-8 shadow">
                    <img
                      src="/lovable-uploads/dd4edfff-68f0-492b-8321-3146ba649956.png"
                      alt="Mirai Traffic School Logo"
                      className="max-h-48 object-contain"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-800">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                      {choose('Our Story', '私たちのストーリー', language)}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>2019 – {choose('The Vision Begins', 'ビジョンの始まり', language)}:</strong> {choose('Our founder envisioned a traffic school to support Japanese speakers facing language and legal barriers in California.', '日本語話者が直面する言語や法的な障壁を支援するために交通スクールを設立するという構想が始まりました。', language)}</li>
                      <li><strong>2020–2023 – {choose('Course Development', 'コース開発', language)}:</strong> {choose('We partnered with DMV advisors and bilingual educators to create a compliant, easy-to-understand Japanese course.', 'DMV顧問やバイリンガル教育者と連携し、分かりやすく準拠した日本語コースを作成しました。', language)}</li>
                      <li><strong>2024–2025 – {choose('DMV Approval & Public Launch', 'DMV認可と公開', language)}:</strong> {choose('Our course received official DMV approval and launched across California to serve the Japanese-speaking community.', 'DMVから正式に承認され、カリフォルニア州全体で日本語話者向けにサービスを開始しました。', language)}</li>
                    </ul>

                    <p className="mt-6">
                      {choose('Mirai Traffic School offers a fully online traffic school course, officially licensed by the California Department of Motor Vehicles (DMV). Our program is designed specifically for Japanese-speaking drivers in California. We make it easy and convenient to meet both court and DMV requirements — all in your native language, from the comfort of your home.', 'ミライ交通スクールは、カリフォルニア州のDMVにより正式に認可された完全オンラインの交通スクールです。日本語を話すドライバーの方々に向けて、母国語で簡単かつ便利に、裁判所とDMVの要件を満たすお手伝いをします。', language)}
                    </p>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {choose('Why Choose Mirai Traffic School', 'ミライ交通スクールを選ぶ理由', language)}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>100% {choose('Online', 'オンライン', language)}:</strong> {choose('Study at your own pace, anytime — no classrooms, no commutes.', '自分のペースでいつでも学習可能 — 通学不要です。', language)}</li>
                      <li><strong>{choose('Fully in Japanese', '完全日本語対応', language)}:</strong> {choose('All lessons, quizzes, and the final exam are written in native Japanese.', '全てのレッスン、クイズ、最終試験は日本語で提供。', language)}</li>
                      <li><strong>DMV-{choose('Approved', '認可済み', language)}:</strong> {choose('Officially licensed by the California DMV and accepted by all courts.', 'カリフォルニアDMVに認可され、全ての裁判所で受理されます。', language)}</li>
                      <li><strong>{choose('Works on All Devices', '全てのデバイス対応', language)}:</strong> {choose('Complete the course on your tablet, or computer — anytime, anywhere.', 'パソコン、タブレット、スマホでいつでも学習可能。', language)}</li>
                      <li><strong>{choose('Secure & Private', '安全かつプライベート', language)}:</strong> {choose('Your personal data is fully protected with modern security protocols.', '最新のセキュリティ技術で個人情報を保護。', language)}</li>
                      <li><strong>{choose('Instant Certificate', '即時発行証明書', language)}:</strong> {choose('Your Certificate of Completion is submitted automatically to the court and DMV.', '修了証明書は裁判所およびDMVへ自動送信されます。', language)}</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {choose("What You'll Receive After Completion", '修了後に得られるもの', language)}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>✓ {choose('DMV-Approved Certificate', 'DMV認可証明書', language)}:</strong> {choose('Submitted electronically to the court and DMV.', '修了証は電子的に裁判所とDMVに提出されます。', language)}</li>
                      <li><strong>✓ {choose('Keep Points Off Your Record', '違反点数の回避', language)}:</strong> {choose('Helps prevent points from being added to your driving record.', '違反点数が加算されるのを防ぎます。', language)}</li>
                      <li><strong>✓ {choose('Prevent Insurance Rate Increases', '保険料の増加防止', language)}:</strong> {choose('May help avoid higher insurance premiums by dismissing eligible tickets.', 'チケットを無効にすることで保険料の上昇を抑えます。', language)}</li>
                      <li><strong>✓ {choose('Dismiss Eligible Traffic Tickets', '交通違反チケットの無効化', language)}:</strong> {choose('Eligible tickets can be dismissed upon successful course completion.', 'コース修了後、対象となるチケットは無効にできます。', language)}</li>
                      <li><strong>✓ {choose('Peace of Mind', '安心感', language)}:</strong> {choose("You've met court and DMV requirements with confidence.", '裁判所とDMVの要件を安心して満たせます。', language)}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* === HOW IT WORKS TAB — UNCHANGED CONTENT === */}
          <TabsContent value="how-it-works">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  {/* You can replace this with a different image if needed */}
                  <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-800">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                      {choose('What Makes It Easy', '簡単に始められる理由', language)}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{choose('Fully online — no classrooms, no driving', '完全オンライン — 通学や運転は不要です', language)}</li>
                      <li>{choose('Designed for Japanese speakers — with native-language support', '日本語話者向け — 母国語でサポート', language)}</li>
                      <li>{choose('Study anytime — pause and resume as needed', 'いつでも学習可能 — 一時停止や再開が可能', language)}</li>
                      <li>{choose('Fast certificate delivery — automatic court & DMV submission', '修了証の迅速な提出 — 裁判所とDMVに自動送信', language)}</li>
                      <li>{choose('Works on all devices — phone, tablet, or computer', 'すべてのデバイス対応 — スマホ、タブレット、PC', language)}</li>
                    </ul>

                    <div className="mt-6 bg-muted/50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-muted-foreground">
                        💡 {choose("Check your court eligibility before registering. Most drivers are eligible if they haven't taken traffic school in the last 18 months.", '登録前に裁判所の対象資格を確認してください。過去18ヶ月間に交通スクールを受講していなければ、ほとんどの運転者が対象です。', language)}
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground">
                        {choose('Still Have Questions?', 'さらに質問がありますか？', language)}<br />
                        {choose('Visit our ', 'FAQページをご覧いただくか、', language)}
                        <a href="/help" className="text-primary underline">FAQ Page</a>
                        {choose(' or email us at ', '', language)}
                        <a href="mailto:support@miraitraffic.com" className="text-blue-600 underline">support@miraitraffic.com</a> — {choose("we're happy to help in both English and Japanese.", '英語と日本語の両方で対応いたします。', language)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default About;
