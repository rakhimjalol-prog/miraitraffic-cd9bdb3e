import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
const FaqSection = () => {
  const { t } = useTranslation();
  
  const faqs = [
    {
      category: "About the Course",
      question: t('faqSection.faq1.question'),
      answer: t('faqSection.faq1.answer')
    },
    {
      category: "About the Course", 
      question: t('faqSection.faq2.question'),
      answer: t('faqSection.faq2.answer')
    },
    {
      category: "About the Course",
      question: t('faqSection.faq3.question'), 
      answer: t('faqSection.faq3.answer')
    },
    {
      category: "About the Course",
      question: t('faqSection.faq4.question'),
      answer: t('faqSection.faq4.answer')
    }
  ];
  return <section className="py-20 from-purple-50/30 to-blue-50/30 bg-[transparent#71d4f64d] bg-[#71d4f6]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('faqSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faqSection.description')}
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
              {t('faqSection.viewAllButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default FaqSection;