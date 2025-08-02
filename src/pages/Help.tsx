import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, HelpCircle, BookOpen, ExternalLink } from "lucide-react";

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
  /* ... other FAQ sections omitted for brevity ... */
];

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
    url: "https://www.dmv.ca.gov/portal/dmv/detail/ts/delivery",
    icon: "📜"
  }
];

export const Help = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Help Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and get the support you need
        </p>
      </div>

      <Tabs defaultValue="faq" className="max-w-6xl mx-auto">
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
              <div className="space-y-8">
                {faqs.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-primary mb-4">{section.category}</h3>
                    <div className="space-y-4">
                      {section.items.map((faq, j) => (
                        <div key={j} className="">
                          <h4 className="font-medium text-foreground mb-1">Q: {faq.question}</h4>
                          <p className="text-muted-foreground">A: {faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help-topics">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpTopics.map((topic, idx) => (
                <Card key={idx} className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{topic.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {topic.title}
                        </h4>
                        <a href={topic.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary underline">
                          <span className="text-sm font-medium">Learn more</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);
