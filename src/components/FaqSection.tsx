import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      category: "About the Course",
      question: "What is Mirai Traffic School?",
      answer:
        "Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record.",
    },
    {
      category: "About the Course",
      question: "Is the course approved by the California DMV?",
      answer:
        "Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement.",
    },
    {
      category: "About the Course",
      question: "How long is the course?",
      answer:
        "The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically.",
    },
    {
      category: "About the Course",
      question: "How does identity verification work during the course?",
      answer:
        "As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course.",
    },
    {
      category: "About the Course",
      question: "Will there be videos in the course?",
      answer:
        "Yes! The course includes 14 short, animated videos to help you understand California traffic laws in an easy and engaging way.",
    },
    {
      category: "Registration & Access",
      question: "How do I sign up for the course?",
      answer:
        "Click the “Enroll Now” button on our website, enter your information, and complete payment. You’ll receive login instructions by email.",
    },
    {
      category: "Registration & Access",
      question: "How long do I have to complete the course?",
      answer:
        "You have 60 days from your date of purchase to complete the course. After completion, your course remains accessible for another 30 days.",
    },
    {
      category: "Quizzes, Final Exam & Certificate",
      question: "Are there quizzes in the course?",
      answer:
        "Yes. You’ll take a short quiz after each section. You must score at least 70% to pass each quiz.",
    },
    {
      category: "Quizzes, Final Exam & Certificate",
      question: "Is there a final exam?",
      answer:
        "Yes. At the end of the course, you must pass a final exam with a score of 70% or higher. You may attempt the final exam up to two times.",
    },
    {
      category: "Quizzes, Final Exam & Certificate",
      question: "What happens if I fail a quiz?",
      answer:
        "You can retake each quiz as many times as needed until you pass.",
    },
    {
      category: "Quizzes, Final Exam & Certificate",
      question: "When is my certificate sent to the DMV?",
      answer:
        "As soon as you pass the final exam, your completion certificate is submitted electronically to the DMV. You’ll also receive a copy for your records.",
    },
    {
      category: "Payments & Refunds",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards through our secure payment partner, Stripe. You may also see options like PayPal, Apple Pay, or Google Pay depending on your device.",
    },
    {
      category: "Payments & Refunds",
      question: "Is there a refund policy?",
      answer:
        "Yes. Refunds are available if you have not yet started the course. Once you begin the course, refunds are no longer available.",
    },
    {
      category: "Technical Support",
      question: "Can I switch devices during the course?",
      answer:
        "Yes. Your progress is automatically saved. You can log in from any device and continue right where you left off.",
    },
    {
      category: "Technical Support",
      question: "What if I forget my login details?",
      answer:
        "Click “Forgot Password” on the login page or contact us at support@miraitraffic.com for help.",
    },
    {
      category: "Language Options",
      question: "Is the course available in Japanese?",
      answer:
        "Yes. The full course is presented in Japanese, with English translation available where needed.",
    },
    {
      category: "Still have questions?",
      question: "Didn’t find what you were looking for?",
      answer:
        "Contact our support team anytime at support@miraitraffic.com and we’ll be happy to assist you.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before starting your online traffic school journey
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
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
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
