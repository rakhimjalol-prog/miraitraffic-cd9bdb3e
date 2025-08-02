import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, ExternalLink } from "lucide-react";

const Help = () => {
  const helpTopics = [
    {
      title: "DMV Requirements",
      description: "Information about California DMV requirements for traffic school",
      icon: "🚗"
    },
    {
      title: "Course Completion",
      description: "How to successfully complete your online traffic school course",
      icon: "✅"
    },
    {
      title: "Technical Support",
      description: "Help with technical issues and troubleshooting",
      icon: "💻"
    },
    {
      title: "Certificate Delivery",
      description: "Information about receiving your completion certificate",
      icon: "📜"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Help Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and get the support you need
          </p>
        </div>

        <Tabs defaultValue="faq" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="faq" className="text-base py-3">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="help-topics" className="text-base py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Help Topics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
                </div>
                
                <div className="bg-muted/50 p-8 rounded-lg">
                  <p className="text-muted-foreground italic text-center text-lg">
                    Insert content here - Q&A accordion will be added
                  </p>
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
                {helpTopics.map((topic, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{topic.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {topic.description}
                          </p>
                          <div className="flex items-center text-primary group-hover:underline">
                            <span className="text-sm font-medium">Learn more</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-soft rounded-lg text-center">
                <p className="text-muted-foreground">
                  DMV links and additional resources will be added to these help topic cards
                </p>
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