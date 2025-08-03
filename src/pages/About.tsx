import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="page-container">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1>{t('aboutPageTitle')}</h1>
          <p>{t('aboutPageDescription')}</p>
        </div>

        <Tabs defaultValue="about-us" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="about-us" className="text-base py-3">
              <Building className="w-4 h-4 mr-2" />
              {t('about')}
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="text-base py-3">
              <Users className="w-4 h-4 mr-2" />
              {t('howItWorks.title')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about-us">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                      {language === 'jp' ? '私たちのストーリー' : 'Our Story'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>2019 – {language === 'jp' ? 'ビジョンの始まり' : 'The Vision Begins'}:</strong> {language === 'jp' ? '日本語話者が直面する言語や法的な障壁を支援するために交通スクールを設立するという構想が始まりました。' : 'Our founder envisioned a traffic school to support Japanese speakers facing language and legal barriers in California.'}</li>
                      <li><strong>2020–2023 – {language === 'jp' ? 'コース開発' : 'Course Development'}:</strong> {language === 'jp' ? 'DMV顧問やバイリンガル教育者と連携し、分かりやすく準拠した日本語コースを作成しました。' : 'We partnered with DMV advisors and bilingual educators to create a compliant, easy-to-understand Japanese course.'}</li>
                      <li><strong>2024–2025 – {language === 'jp' ? 'DMV認可と公開' : 'DMV Approval & Public Launch'}:</strong> {language === 'jp' ? 'DMVから正式に承認され、カリフォルニア州全体で日本語話者向けにサービスを開始しました。' : 'Our course received official DMV approval and launched across California to serve the Japanese-speaking community.'}</li>
                    </ul>

                    <p className="mt-6">
                      {language === 'jp' ? 'ミライ交通スクールは、カリフォルニア州のDMVにより正式に認可された完全オンラインの交通スクールです。日本語を話すドライバーの方々に向けて、母国語で簡単かつ便利に、裁判所とDMVの要件を満たすお手伝いをします。' : 'Mirai Traffic School offers a fully online traffic school course, officially licensed by the California Department of Motor Vehicles (DMV). Our program is designed specifically for Japanese-speaking drivers in California. We make it easy and convenient to meet both court and DMV requirements — all in your native language, from the comfort of your home.'}
                    </p>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {language === 'jp' ? 'ミライ交通スクールを選ぶ理由' : 'Why Choose Mirai Traffic School'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>100% {language === 'jp' ? 'オンライン' : 'Online'}:</strong> {language === 'jp' ? '自分のペースでいつでも学習可能 — 通学不要です。' : 'Study at your own pace, anytime — no classrooms, no commutes.'}</li>
                      <li><strong>{language === 'jp' ? '完全日本語対応' : 'Fully in Japanese'}:</strong> {language === 'jp' ? '全てのレッスン、クイズ、最終試験は日本語で提供。' : 'All lessons, quizzes, and the final exam are written in native Japanese.'}</li>
                      <li><strong>DMV-{language === 'jp' ? '認可済み' : 'Approved'}:</strong> {language === 'jp' ? 'カリフォルニアDMVに認可され、全ての裁判所で受理されます。' : 'Officially licensed by the California DMV and accepted by all courts.'}</li>
                      <li><strong>{language === 'jp' ? '全てのデバイス対応' : 'Works on All Devices'}:</strong> {language === 'jp' ? 'パソコン、タブレット、スマホでいつでも学習可能。' : 'Complete the course on your tablet, or computer — anytime, anywhere.'}</li>
                      <li><strong>{language === 'jp' ? '安全かつプライベート' : 'Secure & Private'}:</strong> {language === 'jp' ? '最新のセキュリティ技術で個人情報を保護。' : 'Your personal data is fully protected with modern security protocols.'}</li>
                      <li><strong>{language === 'jp' ? '即時発行証明書' : 'Instant Certificate'}:</strong> {language === 'jp' ? '修了証明書は裁判所およびDMVへ自動送信されます。' : 'Your Certificate of Completion is submitted automatically to the court and DMV.'}</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {language === 'jp' ? '修了後に得られるもの' : "What You'll Receive After Completion"}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>✓ {language === 'jp' ? 'DMV認可証明書' : 'DMV-Approved Certificate'}:</strong> {language === 'jp' ? '修了証は電子的に裁判所とDMVに提出されます。' : 'Submitted electronically to the court and DMV.'}</li>
                      <li><strong>✓ {language === 'jp' ? '違反点数の回避' : 'Keep Points Off Your Record'}:</strong> {language === 'jp' ? '違反点数が加算されるのを防ぎます。' : 'Helps prevent points from being added to your driving record.'}</li>
                      <li><strong>✓ {language === 'jp' ? '保険料の増加防止' : 'Prevent Insurance Rate Increases'}:</strong> {language === 'jp' ? 'チケットを無効にすることで保険料の上昇を抑えます。' : 'May help avoid higher insurance premiums by dismissing eligible tickets.'}</li>
                      <li><strong>✓ {language === 'jp' ? '交通違反チケットの無効化' : 'Dismiss Eligible Traffic Tickets'}:</strong> {language === 'jp' ? 'コース修了後、対象となるチケットは無効にできます。' : 'Eligible tickets can be dismissed upon successful course completion.'}</li>
                      <li><strong>✓ {language === 'jp' ? '安心感' : 'Peace of Mind'}:</strong> {language === 'jp' ? '裁判所とDMVの要件を安心して満たせます。' : "You've met court and DMV requirements with confidence."}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                      {language === 'jp' ? '簡単に始められる理由' : 'What Makes It Easy'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{language === 'jp' ? '完全オンライン — 通学や運転は不要です' : 'Fully online — no classrooms, no driving'}</li>
                      <li>{language === 'jp' ? '日本語話者向け — 母国語でサポート' : 'Designed for Japanese speakers — with native-language support'}</li>
                      <li>{language === 'jp' ? 'いつでも学習可能 — 一時停止や再開が可能' : 'Study anytime — pause and resume as needed'}</li>
                      <li>{language === 'jp' ? '修了証の迅速な提出 — 裁判所とDMVに自動送信' : 'Fast certificate delivery — automatic court & DMV submission'}</li>
                      <li>{language === 'jp' ? 'すべてのデバイス対応 — スマホ、タブレット、PC' : 'Works on all devices — phone, tablet, or computer'}</li>
                    </ul>

                    <div className="mt-6 bg-muted/50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-muted-foreground">
                        💡 {language === 'jp' ? '登録前に裁判所の対象資格を確認してください。過去18ヶ月間に交通スクールを受講していなければ、ほとんどの運転者が対象です。' : "Check your court eligibility before registering. Most drivers are eligible if they haven't taken traffic school in the last 18 months."}
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground">
                        {language === 'jp' ? 'さらに質問がありますか？' : 'Still Have Questions?'}<br />
                        {language === 'jp' ? 'FAQページをご覧いただくか、' : 'Visit our '}<a href="/help" className="text-primary underline">FAQ Page</a>{language === 'jp' ? '' : ' or email us at '}
                        <a href="mailto:support@miraitraffic.com" className="text-blue-600 underline">support@miraitraffic.com</a> — {language === 'jp' ? '英語と日本語の両方で対応いたします。' : "we're happy to help in both English and Japanese."}
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