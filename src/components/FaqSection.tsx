import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FaqSection = () => {
  const faqs = [{
    category: "About the Course",
    question: "What is Mirai Traffic School?",
    answer: "Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record."
  }, {
    category: "About the Course",
    question: "Is the course approved by the California DMV?",
    answer: "Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement."
  }, {
    category: "About the Course",
    question: "How long is the course?",
    answer: "The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically."
  }, {
    category: "About the Course",
    question: "How does identity verification work during the course?",
    answer: "As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course."
  }];
  return <section className="py-20 from-purple-50/30 to-blue-50/30 bg-[transparent#71d4f64d] bg-[#71d4f6]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before starting your online traffic school journey
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
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default FaqSection;