import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";

// Bilingual Terms of Use sections (20 sections)
const termsSections = [
  { en: { title: "1. General Provisions", content: `This website is maintained by MiraITraffic School (“we,” “us,” “our,” “MiraITraffic™”) to provide online driver-education courses and related services. By using our Site and services, you agree to these Terms. If you do not agree, please do not use our website or services.` }, jp: { title: "1. 一般規定", content: `本ウェブサイトはMiraITraffic School（以下「当社」）によって運営され、オンライン運転教育コースおよび関連サービスを提供しています。本サイトおよびサービスのご利用により本規約に同意したものとみなされます。同意されない場合はご利用を中止してください。` } },
  { en: { title: "2. Eligibility & Registration", content: `Users must be at least 13 years old to register. If under 18, parental or guardian consent is required. Provide accurate personal information and keep credentials secure.` }, jp: { title: "2. 利用資格と登録", content: `登録には13歳以上である必要があります。18歳未満の場合は親権者の同意が必要です。正確な個人情報を提供し、認証情報を安全に管理してください。` } },
  { en: { title: "3. Hardware & Software Requirements", content: `Use a modern desktop or mobile device with Chrome, Firefox, Edge, or Safari and audio capability. A stable internet connection is recommended.` }, jp: { title: "3. ハードウェアおよびソフトウェア要件", content: `Chrome、Firefox、Edge、Safariなどの最新ブラウザと音声機能を備えたデスクトップまたはモバイルデバイスを使用してください。安定したインターネット接続を推奨します。` } },
  { en: { title: "4. Course Access & Duration", content: `You have two years from enrollment to complete all modules, quizzes, and the final exam. Completed courses remain accessible for 30 days after certification.` }, jp: { title: "4. コースの利用期間とアクセス", content: `登録日から2年以内にすべてのモジュール、クイズ、最終試験を修了する必要があります。修了後30日間はコースにアクセス可能です。` } },
  { en: { title: "5. Identity Verification", content: `We verify identity via date of birth and periodic security questions to comply with DMV regulations.` }, jp: { title: "5. 本人確認", content: `DMV規定に準拠するため、生年月日と定期的なセキュリティ質問で本人確認を行います。` } },
  { en: { title: "6. Honor Code", content: `All coursework must be completed personally. Cheating, account sharing, or shortcuts may result in access termination without refund.` }, jp: { title: "6. 行動規範", content: `すべての学習は本人が行う必要があります。不正行為、アカウント共有、抜け道の利用が発覚した場合、返金なしでアクセスが停止されることがあります。` } },
  { en: { title: "7. Quizzes & Final Exam", content: `Short quizzes follow each section (minimum 70% to pass). The final exam (70% pass required) may be attempted twice.` }, jp: { title: "7. クイズおよび最終試験", content: `各セクション後に短いクイズがあります（70%以上で合格）。最終試験（70%以上で合格）は2回まで受験可能です。` } },
  { en: { title: "8. Certification & Submission", content: `Upon passing the final exam, your certificate is electronically submitted to the court and DMV. A copy is provided to you.` }, jp: { title: "8. 認定証の発行と提出", content: `最終試験合格後、認定証が電子的に裁判所およびDMVに提出されます。コピーがユーザーに提供されます。` } },
  { en: { title: "9. Payment & Refund Policy", content: `Payments are processed via Stripe. Full refunds available within 30 days if the course has not been started. No refunds after any module access.` }, jp: { title: "9. 支払いおよび返金ポリシー", content: `支払いはStripeで処理されます。コース未開始の場合のみ30日以内に全額返金が可能です。モジュールを一度でも開始すると返金不可です。` } },
  { en: { title: "10. Data Security & Privacy", content: `We implement industry-standard security measures. See our Privacy Policy for full data collection and usage details.` }, jp: { title: "10. データセキュリティおよびプライバシー", content: `業界標準のセキュリティ対策を実施しています。データ収集および利用の詳細はプライバシーポリシーをご覧ください。` } },
  { en: { title: "11. Intellectual Property", content: `All content, logos, designs, and trademarks are owned by us or our licensors. Licensed for personal use only.` }, jp: { title: "11. 知的財産権", content: `すべてのコンテンツ、ロゴ、デザイン、商標は当社またはライセンサーが所有しています。個人利用のみ許可されています。` } },
  { en: { title: "12. Third-Party Links", content: `Our Site may contain links to third-party websites. We are not responsible for their content or privacy practices.` }, jp: { title: "12. 第三者リンク", content: `本サイトには第三者サイトへのリンクが含まれる場合があります。これらのサイトのコンテンツやプライバシー慣行について当社は責任を負いません。` } },
  { en: { title: "13. Children’s Privacy", content: `Our services are not intended for children under 13. We do not knowingly collect personal data from minors under 13.` }, jp: { title: "13. 子供のプライバシー", content: `当社のサービスは13歳未満の児童を対象としていません。13歳未満の個人情報を意図的に収集することはありません。` } },
  { en: { title: "14. Disclaimers & Liability", content: `Services and content are provided “as is.” We disclaim all warranties. Our maximum liability is capped at fees paid in the past 12 months.` }, jp: { title: "14. 免責事項および責任の制限", content: `サービスおよびコンテンツは現状のまま提供されます。すべての保証を否認します。当社の最大責任額は過去12か月に支払われた料金を上限とします。` } },
  { en: { title: "15. Updates to Terms", content: `We may update these Terms at any time. Continued use constitutes acceptance of changes.` }, jp: { title: "15. 規約の更新", content: `本規約は随時更新される場合があります。継続利用は変更への同意とみなされます。` } },
  { en: { title: "16. Governing Law & Venue", content: `These Terms are governed by California law without regard to its conflict rules. Disputes are resolved in California courts or by arbitration in Sacramento.` }, jp: { title: "16. 準拠法および裁判地", content: `本規約はカリフォルニア州法に準拠します。紛争はカリフォルニア州裁判所またはサクラメントでの仲裁で解決されます。` } },
  { en: { title: "17. Arbitration & Class Action Waiver", content: `All disputes are resolved by individual binding arbitration under AAA rules. Class actions and jury trials are waived.` }, jp: { title: "17. 仲裁および集団訴訟権放棄", content: `すべての紛争はAAA規則に基づく拘束力のある個別仲裁で解決されます。集団訴訟および陪審裁判権は放棄されます。` } },
  { en: { title: "18. Attorney’s Fees", content: `The prevailing party in any enforcement action is entitled to recover reasonable attorneys’ fees and costs.` }, jp: { title: "18. 弁護士費用", content: `本規約の執行において勝訴した当事者は合理的な弁護士費用および費用を回収する権利を有します。` } },
  { en: { title: "19. Reservation of Rights", content: `We reserve all rights not expressly granted herein. Nothing transfers ownership to users.` }, jp: { title: "19. 権利留保", content: `本規約で明示的に付与されていないすべての権利を留保します。ユーザーへの所有権移転はありません。` } },
  { en: { title: "20. Contact Information", content: `For questions, contact us at info@miraitrafficschool.com or mail to 1024 Iron Point Rd #1043, Folsom, CA 95630.` }, jp: { title: "20. 連絡先情報", content: `ご質問は info@miraitrafficschool.com までメール、または 1024 Iron Point Rd #1043, Folsom, CA 95630 まで郵送でお問い合わせください。` } },
];

// Bilingual Privacy Policy sections
const privacySnapshot = [
  { en: ["Advertising", "Cookies; Usage Data", "Google Ads, Facebook Ads"], jp: ["広告", "クッキー; 利用状況データ", "Google Ads, Facebook Ads"] },
  { en: ["Payments", "Order Information", "Stripe"], jp: ["支払い", "注文情報", "Stripe"] },
  { en: ["Analytics", "Cookies; Usage Data", "Google Analytics"], jp: ["分析", "クッキー; 利用状況データ", "Google Analytics"] },
  { en: ["Hosting & Infrastructure", "IP Address; Usage Data", "AWS"], jp: ["ホスティング & インフラ", "IPアドレス; 利用状況データ", "AWS"] },
  { en: ["Optimization", "Cookies; Usage Data", "Google Optimize"], jp: ["最適化", "クッキー; 利用状況データ", "Google Optimize"] },
];

const privacyDetails = [
  { en: { heading: "1. What We Collect", content: [
      "Device Information (browser type, IP address, time zone, cookies)",
      "Order Information (name, address, email, phone, payment details)"
    ]
  }, jp: { heading: "1. 収集する情報", content: [
      "デバイス情報 (ブラウザ、IPアドレス、タイムゾーン、クッキー)",
      "注文情報 (名前、住所、メールアドレス、電話番号、支払い情報)"
    ]
  }},
  { en: { heading: "2. How We Use Data", content: [
      "To fulfill orders and process payments",
      "To improve our Site through analytics and testing",
      "To communicate service updates (opt-in)"
    ]
  }, jp: { heading: "2. 情報の利用方法", content: [
      "注文処理および支払い処理",
      "分析およびテストによるサイト改善",
      "サービス更新通知（オプトイン）"
    ]
  }},
  { en: { heading: "3. Disclosure", content: `We share data only with service providers (Stripe, AWS, Google) and as required by law.` }, jp: { heading: `3. 開示`, content: `データはサービスプロバイダ(Stripe, AWS, Google)および法的要請にのみ共有されます。` } },
  { en: { heading: "4. Cookies & Tracking", content: `Cookies and pixels are used for functionality and analytics. Disabling cookies may limit features.` }, jp: { heading: `4. クッキーと追跡`, content: `クッキーおよびピクセルは機能および分析のために使用されます。クッキーを無効化すると機能が制限される場合があります。` } },
  { en: { heading: "5. User Rights", content: `CCPA: right to know, delete, opt-out. GDPR: access, correct, portability, erasure, withdraw consent.` }, jp: { heading: `5. ユーザーの権利`, content: `CCPA: 知る権利、削除する権利、オプトアウト。GDPR: アクセス、修正、データポータビリティ、消去、同意撤回。` } },
  { en: { heading: `6. Data Retention`, content: `We retain data as long as needed for business and legal purposes or until user requests deletion.` }, jp: { heading: `6. データ保持`, content: `ビジネスおよび法的目的で必要な期間、またはユーザーからの削除 요청までデータを保持します。` } },
  { en: { heading: `7. Children’s Privacy`, content: `We do not knowingly collect data from children under 13. Any such data will be deleted immediately.` }, jp: { heading: `7. 子供のプライバシー`, content: `13歳未満の児童から意図的にデータを収集しません。収集した場合は直ちに削除します。` } },
  { en: { heading: `8. Do Not Track`, content: `We do not change practices if a Do Not Track signal is detected.` }, jp: { heading: `8. トラッキング拒否`, content: `Do Not Trackシグナル検出時にも慣行は変更しません。` } },
  { en: { heading: `9. System Logs`, content: `System logs and usage data may be collected for maintenance and security.` }, jp: { heading: `9. システムログ`, content: `メンテナンスおよびセキュリティのためにシステムログおよび使用データを収集する場合があります。` } },
  { en: { heading: `10. Changes to Policy`, content: `Updates will be posted with a revised date. Continued use implies acceptance.` }, jp: { heading: `10. ポリシーの変更`, content: `更新日時を付して掲載します。継続使用は同意とみなされます。` } },
];

const Legal = () => {
  const [active, setActive] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms & Privacy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Please review our full Terms of Use and Privacy Policy</p>
        </main>
        <Tabs value={active} onValueChange={setActive} className="max-w-4xl mx-auto">...
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
