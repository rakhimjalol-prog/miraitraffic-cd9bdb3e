import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, HelpCircle, BookOpen, ExternalLink } from "lucide-react";

// Court data unchanged
export const courtDataFull = {
  /* ... existing courtDataFull object unchanged ... */
};

export const Courts = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const counties = Object.keys(courtDataFull);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* ... existing Courts UI unchanged ... */}
      </main>
      <Footer />
    </div>
  );
};

// FAQ definitions
const faqs = [
  {
    category: "About the Course",
    items: [
      {
        question: "What is Mirai Traffic School?",
        answer: "Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record."
      },
      {
        question: "Is the course approved by the California DMV?",
        answer: "Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement."
      },
      {
        question: "How long is the course?",
        answer: "The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically."
      },
      {
        question: "How does identity verification work during the course?",
        answer: "As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course."
      },
      {
        question: "Will there be videos in the course?",
        answer: "Yes! The course includes 14 short, animated videos to help you understand California traffic laws in an easy and engaging way."
      }
    ]
  },
  {
    category: "Registration & Access",
    items: [
      {
        question: "How do I sign up for the course?",
        answer: "Click the “Enroll Now” button on our website, enter your information, and complete payment. You’ll receive login instructions by email."
      },
      {
        question: "How long do I have to complete the course?",
        answer: "You have 60 days from your date of purchase to complete the course. After completion, your course remains accessible for another 30 days."
      }
    ]
  },
  {
    category: "Quizzes, Final Exam & Certificate",
    items: [
      {
        question: "Are there quizzes in the course?",
        answer: "Yes. You’ll take a short quiz after each section. You must score at least 70% to pass each quiz."
      },
      {
        question: "Is there a final exam?",
        answer: "Yes. At the end of the course, you must pass a final exam with a score of 70% or higher. You may attempt the final exam up to two times."
      },
      {
        question: "What happens if I fail a quiz?",
        answer: "You can retake each quiz as many times as needed until you pass."
      },
      {
        question: "When is my certificate sent to the DMV?",
        answer: "As soon as you pass the final exam, your completion certificate is submitted electronically to the DMV. You’ll also receive a copy for your records."
      }
    ]
  },
  {
    category: "Payments & Refunds",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards through our secure payment partner, Stripe. You may also see options like PayPal, Apple Pay, or Google Pay depending on your device."
      },
      {
        question: "Is there a refund policy?",
        answer: "Yes. Refunds are available if you have not yet started the course. Once you begin the course, refunds are no longer available."
      }
    ]
  },
  {
    category: "Technical Support",
    items: [
      {
        question: "Can I switch devices during the course?",
        answer: "Yes. Your progress is automatically saved. You can log in from any device and continue right where you left off."
      },
      {
        question: "What if I forget my login details?",
        answer: "Click “Forgot Password” on the login page or contact us at support@miraitraffic.com for help."
      }
    ]
  },
  {
    category: "Language Options",
    items: [
      {
        question: "Is the course available in Japanese?",
        answer: "Yes. The full course is presented in Japanese, with English translation available where needed."
      }
    ]
  },
  {
    category: "Still Have Questions?",
    items: [
      {
        question: "Didn't find what you were looking for?",
        answer: "Contact our support team anytime at support@miraitraffic.com and we’ll be happy to assist you."
      }
    ]
  }
];

// Help topics with DMV links
const helpTopics = [
  {
    title: "DMV Requirements",
    url: "https://www.dmv.ca.gov/portal/dmv/detail/pubs/handouts/ts",
    icon: "🚗"
  },
  {
    title: "Course Completion",
    url: "https://www.dmv.ca.gov/portal/dmv/detail/ts/certification",
    icon: "✅"
  },
  {
    title: "Technical Support",
    url: "mailto:support@miraitraffic.com",
    icon: "💻"
  },
  {
    title: "Certificate Delivery",
    url: "https://www.dmv.ca.gov/portal/dmv/detail/ts/certificate",
    icon: "📜"
  }
];

export const Help = () => {
  const [tab, setTab] = useState<string>("faq");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions and get the support you need</p>
        </div>
        <Tabs defaultValue="faq" onValueChange={setTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="faq" className="text-base py-3">
              <HelpCircle className="w-4 h-4 mr-2" /> FAQ
            </TabsTrigger>
            <TabsTrigger value="help-topics" className="text-base py-3">
              <BookOpen className="w-4 h-4 mr-2" /> Help Topics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-6">
                  {faqs.map((group, idx) => (
                    <div key={idx}>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">{group.category}</h3>
                      {group.items.map((item, j) => (
                        <div key={j} className="mb-4">
                          <p className="font-medium">Q: {item.question}</p>
                          <p className="ml-4">A: {item.answer}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help-topics">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-semibold text-primary">Help Topics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {helpTopics.map((topic, i) => (
                  <Card key={i} className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{topic.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
                          <a href={topic.url} target="_blank" rel="noopener noreferrer" className="text-primary group-hover:underline flex items-center">
                            <span className="text-sm font-medium">Learn more</span><ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-soft rounded-lg text-center">
                <p className="text-muted-foreground">DMV links and additional resources are available via the cards above.</n                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
