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
        question: choose("What is Mirai Traffic School?", "Mirai交通学校とは？", language),
        answer: choose("Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record.", "Mirai交通学校は、カリフォルニア州の日本語話者向けに設計されたオンライン交通学校です。違反チケットの解除や運転記録へのポイント追加を防ぐために、裁判所やDMVの要件を満たす手助けをします。", language)
      },
      {
        question: choose("Is the course approved by the California DMV?", "このコースはカリフォルニアDMVに認可されていますか？", language),
        answer: choose("Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement.", "はい。本コースはカリフォルニアDMVにより認可されています。ただし、DMVの承認は推薦を意味するものではありません。", language)
      },
      {
        question: choose("How long is the course?", "コースの所要時間は？", language),
        answer: choose("The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically.", "カリフォルニアDMVは、オンライン交通学校のコースに最低340分（約5.5時間）を求めています。ご自身のペースで進めることができ、進捗は自動で保存されます。", language)
      },
      {
        question: choose("How does identity verification work during the course?", "本人確認はどのように行われますか？", language),
        answer: choose("As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course.", "DMVの要件に基づき、生年月日や定期的なセキュリティ質問により本人確認を行います。", language)
      },
      {
        question: choose("Will there be videos in the course?", "コースには動画がありますか？", language),
        answer: choose("Yes! The course includes 14 short, animated videos to help you understand California traffic laws in an easy and engaging way.", "はい！カリフォルニアの交通法を分かりやすく学べる、14本の短いアニメーション動画が含まれています。", language)
      }
    ]
  },
  {
    category: choose("Registration & Access", "登録とアクセス", language),
    items: [
      {
        question: choose("How do I sign up for the course?", "コースへの登録方法は？", language),
        answer: choose("Click the “Enroll Now” button on our website, enter your information, and complete payment. You’ll receive login instructions by email.", "ウェブサイトの「今すぐ登録」ボタンをクリックして情報を入力し、支払いを完了してください。ログイン方法はメールで送信されます。", language)
      },
      {
        question: choose("How long do I have to complete the course?", "コースの受講期限はありますか？", language),
        answer: choose("You have 60 days from your date of purchase to complete the course. After completion, your course remains accessible for another 30 days.", "購入日から60日以内にコースを修了する必要があります。修了後も30日間はアクセス可能です。", language)
      }
    ]
  },
  {
    category: choose("Quizzes, Final Exam & Certificate", "クイズ・最終試験・証明書", language),
    items: [
      {
        question: choose("Are there quizzes in the course?", "コースにクイズはありますか？", language),
        answer: choose("Yes. You’ll take a short quiz after each section. You must score at least 70% to pass each quiz.", "はい。各セクション後に短いクイズがあります。合格には70％以上のスコアが必要です。", language)
      },
      {
        question: choose("Is there a final exam?", "最終試験はありますか？", language),
        answer: choose("Yes. At the end of the course, you must pass a final exam with a score of 70% or higher. You may attempt the final exam up to two times.", "はい。コースの最後に70％以上のスコアで合格する最終試験があります。最終試験は最大2回まで受けられます。", language)
      },
      {
        question: choose("What happens if I fail a quiz?", "クイズに不合格の場合は？", language),
        answer: choose("You can retake each quiz as many times as needed until you pass.", "合格するまで何度でもクイズを再受験できます。", language)
      },
      {
        question: choose("When is my certificate sent to the DMV?", "証明書はいつDMVに送信されますか？", language),
        answer: choose("As soon as you pass the final exam, your completion certificate is submitted electronically to the DMV. You’ll also receive a copy for your records.", "最終試験に合格すると、修了証明書がDMVに電子送信されます。また、自分用のコピーも受け取れます。", language)
      }
    ]
  },
  {
    category: choose("Payments & Refunds", "支払いと返金", language),
    items: [
      {
        question: choose("What payment methods do you accept?", "どの支払い方法が使えますか？", language),
        answer: choose("We accept all major credit and debit cards through our secure payment partner, Stripe. You may also see options like PayPal, Apple Pay, or Google Pay depending on your device.", "Stripeによる安全な決済を通じて、主要なクレジットカードとデビットカードをご利用いただけます。デバイスによってはPayPal、Apple Pay、Google Payも使用可能です。", language)
      },
      {
        question: choose("Is there a refund policy?", "返金ポリシーはありますか？", language),
        answer: choose("Yes. Refunds are available if you have not yet started the course. Once you begin the course, refunds are no longer available.", "はい。コースを開始していない場合は返金可能です。一度開始すると返金はできません。", language)
      }
    ]
  },
  {
    category: choose("Technical Support", "技術サポート", language),
    items: [
      {
        question: choose("Can I switch devices during the course?", "受講中にデバイスを変更できますか？", language),
        answer: choose("Yes. Your progress is automatically saved. You can log in from any device and continue right where you left off.", "はい。進捗は自動保存されるため、どのデバイスからでもログインして続けられます。", language)
      },
      {
        question: choose("What if I forget my login details?", "ログイン情報を忘れた場合は？", language),
        answer: choose("Click “Forgot Password” on the login page or contact us at support@miraitraffic.com for help.", "ログインページの「パスワードを忘れた」リンクをクリックするか、support@miraitraffic.comまでご連絡ください。", language)
      }
    ]
  },
  {
    category: choose("Language Options", "言語オプション", language),
    items: [
      {
        question: choose("Is the course available in Japanese?", "コースは日本語で利用できますか？", language),
        answer: choose("Yes. The full course is presented in Japanese, with English translation available where needed.", "はい。コース全体が日本語で提供され、必要に応じて英語の翻訳もあります。", language)
      }
    ]
  },
  {
    category: choose("Still have questions?", "その他の質問", language),
    items: [
      {
        question: choose("Didn’t find what you were looking for?", "探している情報が見つかりませんでしたか？", language),
        answer: choose("Contact our support team anytime at support@miraitraffic.com and we’ll be happy to assist you.", "いつでも support@miraitraffic.com にご連絡ください。サポートチームが対応いたします。", language)
      }
    ]
  }
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