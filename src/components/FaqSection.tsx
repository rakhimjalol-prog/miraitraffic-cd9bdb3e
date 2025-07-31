import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FaqSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "Is this DMV-approved?",
      answer: "Yes, Mirai Traffic School is officially licensed by the California DMV with license #E2067 and accepted by all California courts.",
      questionJp: "DMV認定ですか？",
      answerJp: "はい、未来トラフィックスクールはカリフォルニア州DMVの公式ライセンス#E2067を取得しており、カリフォルニア州の全ての裁判所で承認されています。"
    },
    {
      question: "Is everything really in Japanese?",
      answer: "Absolutely! The entire course, including lessons, quizzes, and final exam, is conducted in Japanese. Our interface is designed specifically for Japanese speakers.",
      questionJp: "本当にすべて日本語ですか？",
      answerJp: "はい、絶対です！レッスン、クイズ、最終試験を含む全てのコースが日本語で行われます。インターフェースは日本語話者向けに特別に設計されています。"
    },
    {
      question: "Can I use my phone or tablet?",
      answer: "Yes! Our course works perfectly on all devices - smartphone, tablet, or computer. You can switch between devices and your progress is automatically saved.",
      questionJp: "スマホやタブレットでも受講できますか？",
      answerJp: "はい！私たちのコースはスマートフォン、タブレット、パソコンなど全ての端末で完璧に動作します。端末を切り替えても進捗は自動的に保存されます。"
    },
    {
      question: "How fast can I finish?",
      answer: "Most students complete the course in 4-6 hours. You can work at your own pace and don't need to finish in one sitting. Take breaks whenever you need!",
      questionJp: "どのくらいで修了できますか？",
      answerJp: "ほとんどの生徒は4〜6時間でコースを修了します。自分のペースで進められ、一度に終わらせる必要はありません。いつでも休憩を取ることができます！"
    },
    {
      question: "How do courts receive my certificate?",
      answer: "Once you complete the course, your certificate is automatically sent to both the DMV and your court electronically. No paperwork required!",
      questionJp: "修了証は裁判所にどのように送られますか？",
      answerJp: "コースを修了すると、修了証が自動的にDMVと裁判所の両方に電子的に送信されます。書類作業は一切不要です！"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'en' 
              ? 'Everything you need to know about completing your traffic school in Japanese'
              : '日本語でトラフィックスクールを修了するために知っておくべきすべてのこと'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-0 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-foreground hover:no-underline">
                  {t('language') === 'en' ? faq.question : faq.questionJp}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                  {t('language') === 'en' ? faq.answer : faq.answerJp}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;