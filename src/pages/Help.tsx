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
    category: choose("1. About the Course", "1. コースについて", language),
    items: [
      {
        question: choose("What is Mirai Traffic School?", "Mirai交通学校とは何ですか？", language),
        answer: choose("Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record.", "Mirai交通学校は、カリフォルニアの日本語を話すドライバー向けに設計されたオンライン交通学校です。私たちのコースは、違反チケットの解消や運転記録へのポイント加算を防ぐために、裁判所やDMVの要件を満たすのに役立ちます。", language)
      },
      {
        question: choose("Is the course approved by the California DMV?", "このコースはカリフォルニアDMVに承認されていますか？", language),
        answer: choose("Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement.", "はい。このコースはカリフォルニアDMVに認可されています。ただし、DMVの承認は推薦を意味するものではありません。", language)
      },
      {
        question: choose("How long is the course?", "コースの所要時間は？", language),
        answer: choose("The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically.", "カリフォルニアDMVは、オンライン交通学校のコースに最低340分（約5.5時間）を要することを義務付けています。ご自身のペースで進めることができ、進捗は自動的に保存されます。", language)
      },
      {
        question: choose("How does identity verification work during the course?", "コース中の本人確認はどのように行われますか？", language),
        answer: choose("As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course.", "DMVの要件に従い、コース中に生年月日や定期的なセキュリティ質問を使用して本人確認を行います。", language)
      },
      {
        question: choose("Will there be videos in the course?", "コースにビデオは含まれていますか？", language),
        answer: choose("Yes! The course includes 14 short, animated videos to help you understand California traffic laws in an easy and engaging way.", "はい！コースには、カリフォルニアの交通法を簡単かつわかりやすく学べる14本の短いアニメーションビデオが含まれています。", language)
      }
    ]
  },
  {
    category: choose("2. Registration & Access", "2. 登録とアクセス", language),
    items: [
      {
        question: choose("How do I sign up for the course?", "コースに申し込むには？", language),
        answer: choose("Click the “Enroll Now” button on our website, enter your information, and complete payment. You’ll receive login instructions by email.", "当社ウェブサイトの「今すぐ登録」ボタンをクリックし、情報を入力して支払いを完了してください。ログイン情報はメールで届きます。", language)
      },
      {
        question: choose("How long do I have to complete the course?", "コースの受講期限は？", language),
        answer: choose("You have 60 days from your date of purchase to complete the course. After completion, your course remains accessible for another 30 days.", "購入日から60日以内にコースを完了する必要があります。完了後も30日間はアクセス可能です。", language)
      }
    ]
  },
  {
    category: choose("3. Quizzes, Final Exam & Certificate", "3. クイズ、最終試験、修了証明書", language),
    items: [
      {
        question: choose("Are there quizzes in the course?", "コースにはクイズがありますか？", language),
        answer: choose("Yes. You’ll take a short quiz after each section. You must score at least 70% to pass each quiz.", "はい。各セクションの後に短いクイズがあります。70%以上の正解率で合格となります。", language)
      },
      {
        question: choose("Is there a final exam?", "最終試験はありますか？", language),
        answer: choose("Yes. At the end of the course, you must pass a final exam with a score of 70% or higher. You may attempt the final exam up to two times.", "はい。コース終了時に70%以上のスコアで最終試験に合格する必要があります。最終試験は2回まで受けられます。", language)
      },
      {
        question: choose("What happens if I fail a quiz?", "クイズに不合格になった場合は？", language),
        answer: choose("You can retake each quiz as many times as needed until you pass.", "合格するまで何度でもクイズを再受験できます。", language)
      },
      {
        question: choose("When is my certificate sent to the DMV?", "修了証はいつDMVに送られますか？", language),
        answer: choose("As soon as you pass the final exam, your completion certificate is submitted electronically to the DMV. You’ll also receive a copy for your records.", "最終試験に合格すると、修了証明書がDMVに電子的に送信されます。また、ご自身用のコピーも提供されます。", language)
      }
    ]
  },
  {
    category: choose("4. Payments & Refunds", "4. 支払いと返金", language),
    items: [
      {
        question: choose("What payment methods do you accept?", "どのような支払い方法がありますか？", language),
        answer: choose("We accept all major credit and debit cards through our secure payment partner, Stripe. You may also see options like PayPal, Apple Pay, or Google Pay depending on your device.", "安全な決済パートナーStripeを通じて、主要なクレジットカードおよびデビットカードをご利用いただけます。お使いのデバイスによっては、PayPal、Apple Pay、Google Payなどもご利用いただけます。", language)
      },
      {
        question: choose("Is there a refund policy?", "返金ポリシーはありますか？", language),
        answer: choose("Yes. Refunds are available if you have not yet started the course. Once you begin the course, refunds are no longer available.", "はい。コースを開始していない場合は返金可能です。コース開始後は返金不可となります。", language)
      }
    ]
  },
  {
    category: choose("5. Technical Support", "5. 技術サポート", language),
    items: [
      {
        question: choose("Can I switch devices during the course?", "コース中にデバイスを変更できますか？", language),
        answer: choose("Yes. Your progress is automatically saved. You can log in from any device and continue right where you left off.", "はい。進捗は自動的に保存されますので、どのデバイスからでも続きから再開できます。", language)
      },
      {
        question: choose("What if I forget my login details?", "ログイン情報を忘れた場合は？", language),
        answer: choose("Click “Forgot Password” on the login page or contact us at support@miraitraffic.com for help.", "ログインページの「パスワードをお忘れですか？」をクリックするか、support@miraitraffic.com までご連絡ください。", language)
      }
    ]
  },
  {
    category: choose("6. Language Options", "6. 言語オプション", language),
    items: [
      {
        question: choose("Is the course available in Japanese?", "コースは日本語で利用できますか？", language),
        answer: choose("Yes. The full course is presented in Japanese, with English translation available where needed.", "はい。コース全体が日本語で提供されており、必要に応じて英語の翻訳も表示されます。", language)
      }
    ]
  },
  {
    category: choose("7. Still have questions?", "7. その他のご質問", language),
    items: [
      {
        question: choose("Didn’t find what you were looking for?", "お探しの情報が見つかりませんでしたか？", language),
        answer: choose("Contact our support team anytime at support@miraitraffic.com and we’ll be happy to assist you.", "support@miraitraffic.com までお気軽にご連絡ください。スタッフが丁寧に対応いたします。", language)
      }
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