import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";

const Help = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("faq");

const faqs = [
  {
    category: choose("About the Course", "コースについて", language),
    items: [
      {
        question: choose("What is Mirai Traffic School?", "Mirai交通学校とは何ですか？", language),
        answer: choose("Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record.", "Mirai交通学校は、カリフォルニア州の日本語話者向けのオンライン交通学校です。交通違反チケットの解消や、運転記録へのポイント加算回避を支援します。", language)
      },
      {
        question: choose("Is the course approved by the California DMV?", "このコースはカリフォルニアDMVに承認されていますか？", language),
        answer: choose("Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement.", "はい。このコースはカリフォルニアDMVの認可を受けていますが、承認は推奨を意味するものではありません。", language)
      },
      // ... more items
    ]
  },
  {
    category: choose("Registration & Access", "登録とアクセス", language),
    items: [
      {
        question: choose("How do I sign up for the course?", "コースにサインアップするにはどうすればよいですか？", language),
        answer: choose("Click the “Enroll Now” button on our website, enter your information, and complete payment. You’ll receive login instructions by email.", "当社ウェブサイトの「今すぐ登録」ボタンをクリックし、情報を入力して支払いを完了してください。ログイン情報がメールで送信されます。", language)
      },
      // ... more items
    ]
  },
  // Add more categories...
];


  const helpTopics = [
    {
      category: choose("Renewal Services", "更新サービス", language),
      items: [
        { title: choose("Driver License Renewal", "運転免許証の更新", language), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-license-id-card-online-renewal/", icon: "🔄" },
        { title: choose("Commercial License Renewal", "商業免許証の更新", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/commercial-driver-license-renewal/", icon: "🚛" },
        { title: choose("REAL ID Upgrade", "REAL IDへのアップグレード", language), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/", icon: "⭐" },
        { title: choose("Vehicle Registration Renewal", "車両登録の更新", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-renewal/", icon: "🚘" },
        { title: choose("Disabled Parking Renewal", "障害者駐車許可証の更新", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-renewal/", icon: "🅿️" },
        { title: choose("Planned Non-operation Renewal", "計画的非稼働更新", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/file-for-planned-non-operation-vfo/", icon: "📆" }
      ]
    },
    {
      category: choose("Apply / Request", "申請・リクエスト", language),
      items: [
        { title: choose("Driver License Application", "運転免許証申請", language), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/", icon: "📝" },
        { title: choose("Change Address", "住所変更", language), url: "https://www.dmv.ca.gov/portal/online-change-of-address-coa-system/", icon: "🏠" },
        { title: choose("Title Transfer", "名義変更", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/title-transfer/", icon: "🔁" },
        { title: choose("Notice of Transfer", "譲渡通知", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/notice-of-transfer-and-release-of-liability-nrl/", icon: "📑" },
        { title: choose("Disabled Parking Application", "障害者駐車許可証申請", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-application/", icon: "🅿️" },
        { title: choose("Affidavit of Non-Use", "非使用宣誓書", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/affidavit-of-non-use/", icon: "📃" }
      ]
    },
    {
      category: choose("Order Items", "アイテム注文", language),
      items: [
        { title: choose("Order Driver Record", "運転記録の注文", language), url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-driver-record-request/", icon: "📄" },
        { title: choose("Order Vehicle Record", "車両記録の注文", language), url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-vehicle-record-request/", icon: "🚗" },
        { title: choose("Personalized Plates", "パーソナライズドプレート", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/license-plates/order-special-interest-and-personalized-license-plates/", icon: "🔠" },
        { title: choose("Clean Air Decal", "クリーンエアデカール", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/clean-air-vehicle-decals-for-using-carpool-lanes/", icon: "🌿" },
        { title: choose("Mussel Sticker", "ムール貝ステッカー", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/register-your-boat-vessel/quagga-sticker-request/", icon: "🐚" }
      ]
    },
    {
      category: choose("Replace Documents", "書類の再発行", language),
      items: [
        { title: choose("Driver License Replacement", "運転免許証の再発行", language), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/replace-your-driver-license-or-identification-dl-id-card/online-duplicate-driver-license-request/", icon: "♻️" },
        { title: choose("Sticker Replacement", "ステッカーの再発行", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/online-replacement-sticker-or-registration-card/", icon: "🏷️" },
        { title: choose("Title Replacement", "タイトルの再発行", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-title/", icon: "🆕" },
        { title: choose("Disabled Parking Replacement", "障害者駐車許可証の再発行", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-replacement/", icon: "🔁" },
        { title: choose("License Plate Replacement", "ナンバープレートの再発行", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-license-plates/", icon: "🔧" }
      ]
    },
    {
      category: choose("Status Lookup", "ステータス確認", language),
      items: [
        { title: choose("Virtual Office Case Status", "バーチャルオフィスケースステータス", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/case-status/", icon: "📋" },
        { title: choose("Driver License Status", "運転免許証ステータス", language), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/", icon: "🔎" },
        { title: choose("Vehicle Registration Status", "車両登録ステータス", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-status/", icon: "🚙" },
        { title: choose("Occupational Licensing", "職業免許", language), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/", icon: "🧑‍💼" },
        { title: choose("Traffic School Lookup", "交通学校検索", language), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/traffic-school-list/", icon: "🏫" },
        { title: choose("Motor Carrier Permit", "自動車運送業許可", language), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/motor-carrier-services-mcs/motor-carrier-permits/active-motor-carriers/", icon: "🚛" }
      ]
    },
    {
      category: choose("Make a Payment", "支払いを行う", language),
      items: [
        { title: choose("Dishonored Check Payment", "不渡り小切手の支払い", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dishonored-check-payment/", icon: "❌💵" },
        { title: choose("Reinstatement Fee", "復帰手数料", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/suspended-vehicle-registration/", icon: "💰" },
        { title: choose("Reissue Fee Payment", "再発行手数料の支払い", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/reissue-fees/", icon: "♻️" },
        { title: choose("Fee Calculators", "手数料計算機", language), url: "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/vehicle-registration-fee-calculator/calculate-my-fees/", icon: "🧮" }
      ]
    },
    {
      category: choose("Submit a Report", "レポートを提出", language),
      items: [
        { title: choose("Report Accident", "事故報告", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/accident-reporting/", icon: "🚨" },
        { title: choose("Medical Examination", "医学的検査", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/medical-examination-report/", icon: "🩺" },
        { title: choose("Commercial Training", "商業運転訓練", language), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/submit-dl-1236-vfo/", icon: "📄" }
      ]
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1>{choose("Help Topics", "ヘルプトピック", language)}</h1>
            <p>{choose("Find the help you need for DMV services and traffic school questions", "DMVサービスと交通学校に関する質問のサポートを見つけてください", language)}</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                {choose("FAQ", "よくある質問", language)}
              </TabsTrigger>
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {choose("DMV Topics", "DMVトピック", language)}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{choose("Frequently Asked Questions", "よくある質問", language)}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="mt-6">
              <div className="grid gap-6">
                <h2 className="text-2xl font-semibold text-primary">{choose("DMV Help Topics", "DMVヘルプトピック", language)}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {helpTopics.map((topic, index) => (
                    <Card key={index} className="h-fit">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-primary">{topic.category}</h3>
                        <div className="space-y-2">
                          {topic.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted"
                            >
                              <span className="text-base">{item.icon}</span>
                              <span className="flex-1">{item.title}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;