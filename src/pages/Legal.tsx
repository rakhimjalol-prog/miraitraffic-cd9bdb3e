import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Full bilingual Terms of Use sections
const termsSections = [
  { en: { title: "1. General Provisions", content: `This website is maintained by MiraITraffic School (“we,” “us,” “our,” “MiraITraffic™”) to provide online driver-education courses and related services. By using our Site and services, you agree to these Terms. If you do not agree, please do not use our website or services.` },
    jp: { title: "1. 一般規定", content: `本ウェブサイトはMiraITraffic School（以下「当社」）によって運営されており、オンライン運転教育コースおよび関連サービスを提供しています。本サイトおよびサービスのご利用により、本規約に同意したものとみなされます。同意されない場合は利用を中止してください。` } },
  { en: { title: "2. Eligibility & Registration", content: `You must be at least 13 years old to register. If under 18, parental or guardian consent is required. Maintain accurate personal information and secure your credentials.` },
    jp: { title: "2. 利用資格と登録", content: `登録には13歳以上である必要があります。18歳未満の場合は親権者の同意が必要です。正確な個人情報を提供し、アカウント情報を安全に管理してください。` } },
  { en: { title: "3. Hardware & Software Requirements", content: `Use a modern desktop or mobile device with Chrome, Firefox, Edge, or Safari and audio capability. A stable internet connection is recommended.` },
    jp: { title: "3. ハードウェアおよびソフトウェア要件", content: `Chrome、Firefox、Edge、Safariなどの最新ブラウザと音声機能を備えたデスクトップまたはモバイルデバイスを使用してください。安定したインターネット接続を推奨します。` } },
  { en: { title: "4. Course Access & Duration", content: `You have two years from enrollment to complete all modules, quizzes, and the final exam. Completed courses remain accessible for 30 days after certification.` },
    jp: { title: "4. コースの利用期間とアクセス", content: `登録日から2年以内にすべてのモジュール、クイズ、最終試験を修了する必要があります。修了後30日間はコースにアクセス可能です。` } },
  { en: { title: "5. Identity Verification", content: `We verify identity via date of birth and periodic security questions to comply with DMV regulations.` },
    jp: { title: "5. 本人確認", content: `DMV規定に準拠するため、生年月日と定期的なセキュリティ質問を通じて本人確認を行います。` } },
  { en: { title: "6. Honor Code", content: `All coursework must be completed personally. Cheating, account sharing, or shortcuts may result in access termination without refund.` },
    jp: { title: "6. 行動規範", content: `すべての学習は本人が行う必要があります。不正行為、アカウント共有、抜け道の利用が発覚した場合、返金なしでアクセスが停止されることがあります。` } },
  { en: { title: "7. Quizzes & Final Exam", content: `Short quizzes follow each section (min. 70% to pass). A final exam (70% pass required) may be attempted twice.` },
    jp: { title: "7. クイズおよび最終試験", content: `各セクション後に短いクイズ（70%以上で合格）があります。最終試験（70%以上で合格）は2回まで受験可能です。` } },
  { en: { title: "8. Certification & Submission", content: `Upon passing the final exam, your certificate is electronically submitted to the court and DMV. A copy is also provided to you.` },
    jp: { title: "8. 認定証の発行と提出", content: `最終試験に合格すると、証明書が電子的に裁判所およびDMVに提出されます。ユーザーにもコピーが提供されます。` } },
  { en: { title: "9. Payment & Refund Policy", content: `Payments via Stripe. Full refunds available within 30 days if the course has not been started. No refunds after any module is accessed.` },
    jp: { title: "9. 支払いおよび返金ポリシー", content: `支払いはStripeを通じて行います。コース未開始の場合のみ30日以内に全額返金可能です。モジュールを一度でも開始すると返金不可です。` } },
  { en: { title: "10. Data Security & Privacy", content: `We implement industry-standard security measures. See our Privacy Policy for full details on data collection and use.` },
    jp: { title: "10. データセキュリティおよびプライバシー", content: `業界標準のセキュリティ対策を実施しています。データ収集と利用の詳細はプライバシーポリシーをご覧ください。` } },
  { en: { title: "11. Intellectual Property", content: `All content, logos, designs, and trademarks are owned by us or our licensors. Licensed for personal use only.` },
    jp: { title: "11. 知的財産権", content: `すべてのコンテンツ、ロゴ、デザイン、商標は当社またはライセンサーが所有しています。個人利用のみ許可されています。` } },
  { en: { title: "12. Third-Party Links", content: `Our Site may contain links to third-party websites. We are not responsible for their content or privacy practices.` },
    jp: { title: "12. 第三者リンク", content: `本サイトには第三者サイトへのリンクが含まれる場合があります。これらのコンテンツやプライバシー慣行について当社は責任を負いません。` } },
  { en: { title: "13. Children’s Privacy", content: `Our services are not intended for children under 13. We do not knowingly collect personal data from minors under 13.` },
    jp: { title: "13. 子供のプライバシー", content: `当社サービスは13歳未満の児童を対象としていません。13歳未満の個人情報を意図的に収集することはありません。` } },
  { en: { title: "14. Disclaimers & Liability", content: `Services and content are provided “as is.” We disclaim all warranties. Our maximum liability is capped at fees paid in the past 12 months.` },
    jp: { title: "14. 免責事項および責任の制限", content: `サービスおよびコンテンツは現状のまま提供されます。すべての保証を否認します。当社の最大責任額は過去12か月に支払われた料金を上限とします。` } },
  { en: { title: "15. Updates to Terms", content: `We may update these Terms at any time. Continued use constitutes acceptance of changes.` },
    jp: { title: "15. 規約の更新", content: `本規約は随時更新される場合があります。継続利用は変更への同意とみなされます。` } },
  { en: { title: "16. Governing Law & Venue", content: `These Terms are governed by the laws of California. Any dispute will be resolved in California courts or by arbitration in Sacramento.` },
    jp: { title: "16. 準拠法および裁判地", content: `本規約はカリフォルニア州法に準拠します。紛争はカリフォルニア州裁判所またはサクラメントでの仲裁で解決されます。` } },
  { en: { title: "17. Arbitration & Class Action Waiver", content: `All disputes are resolved by individual binding arbitration under AAA rules. Class actions and jury trials are waived.` },
    jp: { title: "17. 仲裁および集団訴訟放棄", content: `すべての紛争はAAA規則に基づく個別の拘束力ある仲裁で解決されます。集団訴訟および陪審裁判は放棄されます。` } },
  { en: { title: "18. Attorney’s Fees", content: `The prevailing party in any enforcement action is entitled to recover reasonable attorney’s fees and costs.` },
    jp: { title: "18. 弁護士費用", content: `当事者は、執行行為において合理的な弁護士費用および費用を回収する権利を有します。` } },
  { en: { title: "19. Severability", content: `If any provision is found invalid, the remainder of these Terms will continue in full force and effect.` },
    jp: { title: "19. 分離可能性", content: `条項の一部が無効と判断された場合でも、本規約の残りの部分は引き続き有効とします。` } },
  { en: { title: "20. Contact Us", content: `For questions or concerns, email info@miraitrafficschool.com or mail to:
MiraITraffic School
1024 Iron Point Rd #1043
Folsom, CA 95630` },
    jp: { title: "20. お問い合わせ", content: `ご質問・ご不明点は以下までご連絡ください：
Email: info@miraitrafficschool.com
住所：
MiraITraffic School
1024 Iron Point Rd #1043
Folsom, CA 95630` } }
];

// Full bilingual Privacy Policy sections
const privacySections = [
  { en: { title: "1. What We Collect", content: `Device Information (browser type, IP address, time zone, cookies); Order Information (name, billing/shipping address, email, phone, payment details).` },
    jp: { title: "1. 収集する情報", content: `デバイス情報（ブラウザ種類、IPアドレス、タイムゾーン、クッキー）、注文情報（氏名、請求先/配送先住所、メール、電話、支払情報）。` } },
  { en: { title: "2. How We Use Data", content: `To fulfill orders; improve our Site; communicate updates and promotions (with consent).` },
    jp: { title: "2. データの利用方法", content: `注文処理、サイト改善、同意に基づく更新・プロモーションの通知。` } },
  { en: { title: "3. Sharing & Disclosure", content: `We share data only with service providers (Stripe, Google Analytics, AWS) and to comply with legal requests.` },
    jp: { title: "3. 共有および開示", content: `データはサービスプロバイダー（Stripe、Google Analytics、AWS）のみと共有し、法的要請に応じて開示します。` } },
  { en: { title: "4. Cookies & Tracking", content: `We use cookies and similar tools for functionality, analytics, and advertising. You may disable cookies, but some features may not work.` },
    jp: { title: "4. クッキーと追跡", content: `機能、分析、広告のためにクッキーなどを使用しています。無効化すると一部機能が利用できなくなる場合があります。` } },
  { en: { title: "5. User Rights", content: `California Residents: CCPA rights to know, delete, opt-out; EU Residents: GDPR rights to access, correct, port, restrict, delete, withdraw consent.` },
    jp: { title: "5. ユーザーの権利", content: `カリフォルニア州住民：知る権利、削除権、オプトアウト権(EU：アクセス、訂正、移転、制限、削除、同意撤回権)。` } },
  { en: { title: "6. Data Retention", content: `We retain data as long as needed for business and legal purposes or until you request deletion.` },
    jp: { title: "6. データ保持", content: `ビジネスおよび法的目的に必要な期間保持し、削除要請があれば対応します。` } },
  { en: { title: "7. Third-Party Tools", content: `We use Stripe (payments), Google Analytics (analytics), AWS (hosting), Google Ads & Facebook Ads (ads), Google Optimize (testing).` },
    jp: { title: "7. 第三者ツール", content: `Stripe（支払い）、Google Analytics（分析）、AWS（ホスティング）、Google Ads & Facebook Ads（広告）、Google Optimize（テスト）を使用しています。` } },
  { en: { title: "8. Children’s Privacy", content: `Our services are not directed at children under 13. Any data from minors under 13 will be deleted immediately.` },
    jp: { title: "8. 子供のプライバシー", content: `当社サービスは13歳未満の児童を対象としていません。13歳未満のデータは速やかに削除します。` } },
  { en: { title: "9. Do Not Track", content: `We do not alter our practices in response to DNT signals.` },
    jp: { title: "9. DNTへの対応", content: `Do Not Track信号に応じて当社の慣行を変更しません。` } },
  { en: { title: "10. Policy Updates", content: `We may update this policy; changes will be posted with the updated date. Continued use implies acceptance.` },
    jp: { title: "10. ポリシーの更新", content: `本ポリシーは更新される場合があります。変更は更新日とともに掲示され、継続利用は同意とみなされます。` } }
];

const Legal = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState<'terms'|'privacy'>('terms');

  return (
    <div className="page-container">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1>{t('legalTitle')}</h1>
          <p>{t('legalDescription')}</p>
        </div>

        <Tabs value={active} onValueChange={setActive as any} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="py-3"><FileText className="w-5 h-5 mr-2"/>{t('termsOfUse')}</TabsTrigger>
            <TabsTrigger value="privacy" className="py-3"><Shield className="w-5 h-5 mr-2"/>{t('privacyPolicy')}</TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <article className="prose prose-lg text-foreground max-w-none space-y-8">
                  <h2 className="flex items-center"><FileText className="inline w-6 h-6 text-primary mr-2"/>{t('termsOfUse')}</h2>
                  <ol className="list-decimal list-inside space-y-6">
                    {termsSections.map((sec,idx)=>(
                      <li key={idx}>
                        <h3 className="font-semibold text-lg">{language==='jp'?sec.jp.title:sec.en.title}</h3>
                        <p className="mt-2">{language==='jp'?sec.jp.content:sec.en.content}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <article className="prose prose-lg text-foreground max-w-none space-y-8">
                  <h2 className="flex items-center"><Shield className="inline w-6 h-6 text-primary mr-2"/>{t('privacyPolicy')}</h2>
                  <ol className="list-decimal list-inside space-y-6">
                    {privacySections.map((sec,idx)=>(
                      <li key={idx}>
                        <h3 className="font-semibold text-lg">{language==='jp'?sec.jp.title:sec.en.title}</h3>
                        <p className="mt-2">{language==='jp'?sec.jp.content:sec.en.content}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
