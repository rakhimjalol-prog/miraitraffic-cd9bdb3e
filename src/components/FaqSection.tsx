import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";
const FaqSection = () => {
  const { language } = useLanguage();
  
  const faqs = [
    {
      category: "About the Course",
      question: choose("What is Mirai Traffic School?", "ミライ交通スクールとは？", language),
      answer: choose("Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record.", "ミライ交通スクールは、カリフォルニア州の日本語話者ドライバー向けのオンライン交通学校です。当コースは、交通違反切符の却下とドライビングレコードの点数回避のための裁判所またはDMV要件を満たすお手伝いをします。", language)
    },
    {
      category: "About the Course", 
      question: choose("Is the course approved by the California DMV?", "このコースはカリフォルニアDMVに承認されていますか？", language),
      answer: choose("Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement.", "はい。当コースはカリフォルニアDMVにライセンスされています。ただし、DMVの承認は推奨を意味するものではありません。", language)
    },
    {
      category: "About the Course",
      question: choose("How long is the course?", "コースの所要時間は？", language), 
      answer: choose("The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically.", "カリフォルニアDMVは、オンライン交通学校コースが最低340分（約5.5時間）であることを要求しています。自分のペースでコースを修了でき、進行状況は自動的に保存されます。", language)
    },
    {
      category: "About the Course",
      question: choose("How does identity verification work during the course?", "受講中の本人確認はどのように行われますか？", language),
      answer: choose("As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course.", "DMVの要求に従い、生年月日とコース中の定期的なセキュリティ質問を使用して本人確認を行います。", language)
    }
  ];
  return <section className="py-20 bg-gradient-to-br from-cyan-200 to-blue-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {choose("Frequently Asked Questions", "よくある質問", language)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {choose("Everything you need to know before starting your online traffic school journey", "オンライン交通学校を始める前に知っておくべきすべての情報", language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`} className="bg-white rounded-2xl border-0 shadow-soft hover:shadow-hover transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/faq">
            <Button className="text-lg px-6 py-3 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-all">
              {choose("View All FAQs", "すべての質問を見る", language)}
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default FaqSection;