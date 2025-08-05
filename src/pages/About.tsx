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
    <div className="page-container flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-6 pt-28 pb-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">
            {choose("About Mirai Traffic School", "Mirai Traffic School について", language)}
          </h1>
          <p className="text-muted-foreground mt-2">
            {choose(
              "Learn more about our mission and how our online traffic school works",
              "当スクールのミッションとオンライン交通スクールの仕組みをご紹介します",
              language
            )}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about-us" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="about-us" className="text-base py-3">
              <Building className="w-4 h-4 mr-2" />
              {choose("About", "概要", language)}
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="text-base py-3">
              <Users className="w-4 h-4 mr-2" />
              {choose("How It Works", "仕組み", language)}
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about-us">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  {/* Image/Icon Placeholder */}
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">
                      Image/Icon Space
                    </span>
                  </div>

                  {/* Story Content */}
                  <div className="prose prose-lg max-w-none">
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* How It Works Tab */}
          <TabsContent value="how-it-works">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
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
                        {choose('Visit our ', 'FAQページをご覧いただくか、', language)}<a href="/help" className="text-primary underline">FAQ Page</a>{choose(' or email us at ', '', language)}
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
