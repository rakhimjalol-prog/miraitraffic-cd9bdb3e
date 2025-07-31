import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this traffic school DMV-approved?",
    answer: "Yes! Mirai Traffic School is fully approved by the California DMV and meets all state requirements. Our DMV license number is displayed on our certificate and website."
  },
  {
    question: "Is the course really in Japanese?",
    answer: "Absolutely. Our entire course, including lessons, quizzes, and instructions, is written in native Japanese by Japanese language experts specifically for Japanese speakers living in California."
  },
  {
    question: "Can I study on my phone or tablet?",
    answer: "Yes! Our platform is fully optimized for mobile devices. You can study on your phone, tablet, or computer - your progress is automatically saved across all devices."
  },
  {
    question: "How fast can I finish the course?",
    answer: "While the course requires a minimum of 8 hours as mandated by California law, you can complete it at your own pace. Most students finish within 1-3 days, taking breaks as needed."
  },
  {
    question: "Will the court receive my certificate?",
    answer: "Yes! Upon completion, your certificate is automatically submitted to both the court and DMV. You'll also receive a copy for your records with verification details."
  },
  {
    question: "What if I need help during the course?",
    answer: "Our Japanese-speaking customer support team is available via chat, email, and phone during business hours. We're here to help you succeed!"
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our Japanese traffic school course
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-soft border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-primary font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
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