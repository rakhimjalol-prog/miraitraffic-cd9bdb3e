import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Users } from "lucide-react";

const About = () => {
  const [lang, setLang] = useState<'en' | 'jp'>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'jp' || storedLang === 'en') {
      setLang(storedLang);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {lang === 'jp' ? 'ミライ交通スクールについて' : 'About Mirai Traffic School'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'jp'
              ? '当スクールのミッションとオンライン交通スクールの仕組みをご紹介します'
              : 'Learn more about our mission and how our online traffic school works'}
          </p>
        </div>

        <Tabs defaultValue="about-us" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="about-us" className="text-base py-3">
              <Building className="w-4 h-4 mr-2" />
              {lang === 'jp' ? '私たちについて' : 'About Us'}
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="text-base py-3">
              <Users className="w-4 h-4 mr-2" />
              {lang === 'jp' ? '仕組み' : 'How It Works'}
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
                      {lang === 'jp' ? '私たちのストーリー' : 'Our Story'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>2019 – {lang === 'jp' ? 'ビジョンの始まり' : 'The Vision Begins'}:</strong> {lang === 'jp' ? '日本語を話す方々のために交通スクールを立ち上げるという構想が始まりました。' : 'Our founder envisioned a traffic school to support Japanese speakers facing language and legal barriers in California.'}</li>
                      <li><strong>2020–2023 – {lang === 'jp' ? 'コース開発' : 'Course Development'}:</strong> {lang === 'jp' ? 'DMV顧問やバイリンガル教育者と連携し、分かりやすい日本語コースを作成しました。' : 'We partnered with DMV advisors and bilingual educators to create a compliant, easy-to-understand Japanese course.'}</li>
                      <li><strong>2024–2025 – {lang === 'jp' ? 'DMV認可と公開' : 'DMV Approval & Public Launch'}:</strong> {lang === 'jp' ? 'DMVの正式な承認を受け、カリフォルニア州全体で日本語話者を対象にサービスを提供開始しました。' : 'Our course received official DMV approval and launched across California to serve the Japanese-speaking community.'}</li>
                    </ul>

                    <p className="mt-6">
                      {lang === 'jp'
                        ? 'ミライ交通スクールは、カリフォルニア州のDMVにより正式に認可された完全オンラインの交通スクールです。日本語を話すドライバーの方々に向けて、母国語で簡単かつ便利に、裁判所とDMVの要件を満たすお手伝いをします。'
                        : 'Mirai Traffic School offers a fully online traffic school course, officially licensed by the California Department of Motor Vehicles (DMV). Our program is designed specifically for Japanese-speaking drivers in California. We make it easy and convenient to meet both court and DMV requirements — all in your native language, from the comfort of your home.'}
                    </p>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {lang === 'jp' ? 'ミライ交通スクールを選ぶ理由' : 'Why Choose Mirai Traffic School'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>100% {lang === 'jp' ? 'オンライン' : 'Online'}:</strong> {lang === 'jp' ? '自分のペースでいつでも学習可能 — 通学不要です。' : 'Study at your own pace, anytime — no classrooms, no commutes.'}</li>
                      <li><strong>{lang === 'jp' ? '完全日本語対応' : 'Fully in Japanese'}:</strong> {lang === 'jp' ? '全てのレッスン、クイズ、最終試験は日本語で提供。' : 'All lessons, quizzes, and the final exam are written in native Japanese.'}</li>
                      <li><strong>DMV-{lang === 'jp' ? '認可済み' : 'Approved'}:</strong> {lang === 'jp' ? 'カリフォルニアDMVに認可され、全ての裁判所で受理されます。' : 'Officially licensed by the California DMV and accepted by all courts.'}</li>
                      <li><strong>{lang === 'jp' ? '全てのデバイス対応' : 'Works on All Devices'}:</strong> {lang === 'jp' ? 'パソコン、タブレット、スマホでいつでも学習可能。' : 'Complete the course on your tablet or computer — anytime, anywhere.'}</li>
                      <li><strong>{lang === 'jp' ? '安全かつプライベート' : 'Secure & Private'}:</strong> {lang === 'jp' ? '最新のセキュリティ技術で個人情報を保護。' : 'Your personal data is fully protected with modern security protocols.'}</li>
                      <li><strong>{lang === 'jp' ? '即時発行証明書' : 'Instant Certificate'}:</strong> {lang === 'jp' ? '修了証明書は裁判所およびDMVへ自動送信されます。' : 'Your Certificate of Completion is submitted automatically to the court and DMV.'}</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
                      {lang === 'jp' ? '修了後に得られるもの' : 'What You’ll Receive After Completion'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>✓ {lang === 'jp' ? 'DMV認可証明書' : 'DMV-Approved Certificate'}:</strong> {lang === 'jp' ? '修了証は電子的に裁判所とDMVに提出されます。' : 'Submitted electronically to the court and DMV.'}</li>
                      <li><strong>✓ {lang === 'jp' ? '違反点数の回避' : 'Keep Points Off Your Record'}:</strong> {lang === 'jp' ? '違反点数が加算されるのを防ぎます。' : 'Helps prevent points from being added to your driving record.'}</li>
                      <li><strong>✓ {lang === 'jp' ? '保険料の増加防止' : 'Prevent Insurance Rate Increases'}:</strong> {lang === 'jp' ? 'チケットを無効にすることで保険料の上昇を抑えます。' : 'May help avoid higher insurance premiums by dismissing eligible tickets.'}</li>
                      <li><strong>✓ {lang === 'jp' ? '交通違反チケットの無効化' : 'Dismiss Eligible Traffic Tickets'}:</strong> {lang === 'jp' ? 'コース修了後、対象となるチケットは無効にできます。' : 'Eligible tickets can be dismissed upon successful course completion.'}</li>
                      <li><strong>✓ {lang === 'jp' ? '安心感' : 'Peace of Mind'}:</strong> {lang === 'jp' ? '裁判所とDMVの要件を安心して満たせます。' : 'You’ve met court and DMV requirements with confidence.'}</li>
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
                      {lang === 'jp' ? '受講方法の流れ' : 'How Students Register and Complete the Course'}
                    </h2>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground italic text-center">
                        {lang === 'jp' ? 'ここにコンテンツを追加してください' : 'Insert content here'}
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
