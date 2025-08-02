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

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'lang' && (e.newValue === 'jp' || e.newValue === 'en')) {
        setLang(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
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
                    <p>
                      {lang === 'jp'
                        ? 'ミライ交通スクールは、日本語話者のためにカリフォルニア州で設立された、完全オンラインの交通スクールです。私たちは文化や言語の壁を超えて、簡単で安心して受講できる学習体験を提供します。'
                        : 'Mirai Traffic School is a fully online traffic school established in California for Japanese speakers. We provide a simple and reliable learning experience that overcomes cultural and language barriers.'}
                    </p>
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
                      {lang === 'jp' ? '簡単に始められる理由' : 'What Makes It Easy'}
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{lang === 'jp' ? '完全オンライン — 通学や運転は不要です' : 'Fully online — no classrooms, no driving'}</li>
                      <li>{lang === 'jp' ? '日本語話者向け — 母国語でサポート' : 'Designed for Japanese speakers — with native-language support'}</li>
                      <li>{lang === 'jp' ? 'いつでも学習可能 — 一時停止や再開が可能' : 'Study anytime — pause and resume as needed'}</li>
                      <li>{lang === 'jp' ? '修了証の迅速な提出 — 裁判所とDMVに自動送信' : 'Fast certificate delivery — automatic court & DMV submission'}</li>
                      <li>{lang === 'jp' ? 'すべてのデバイス対応 — スマホ、タブレット、PC' : 'Works on all devices — phone, tablet, or computer'}</li>
                    </ul>
                    <div className="mt-6 bg-muted/50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-muted-foreground">
                        💡 {lang === 'jp'
                          ? '登録前に裁判所の対象資格を確認してください。過去18ヶ月間に交通スクールを受講していなければ、ほとんどの運転者が対象です。'
                          : 'Check your court eligibility before registering. Most drivers are eligible if they haven’t taken traffic school in the last 18 months.'}
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground">
                        {lang === 'jp' ? 'さらに質問がありますか？' : 'Still Have Questions?'}<br />
                        {lang === 'jp' ? 'FAQページをご覧いただくか、' : 'Visit our '}<a href="/faq" className="text-blue-600 underline">FAQ Page</a>{lang === 'jp' ? 'をご覧いただくか、' : ' or email us at '}
                        <a href="mailto:support@miraitraffic.com" className="text-blue-600 underline">support@miraitraffic.com</a> — {lang === 'jp' ? '英語と日本語の両方で対応いたします。' : 'we’re happy to help in both English and Japanese.'}
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
