import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Mirai Traffic School
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our mission and how our online traffic school works
          </p>
        </div>

        <Tabs defaultValue="about-us" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="about-us" className="text-base py-3">
              <Building className="w-4 h-4 mr-2" />
              About Us
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="text-base py-3">
              <Users className="w-4 h-4 mr-2" />
              How It Works
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about-us">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>2019 – The Vision Begins:</strong> Our founder envisioned a traffic school to support Japanese speakers facing language and legal barriers in California.</li>
                      <li><strong>2020–2023 – Course Development:</strong> We partnered with DMV advisors and bilingual educators to create a compliant, easy-to-understand Japanese course.</li>
                      <li><strong>2024–2025 – DMV Approval & Public Launch:</strong> Our course received official DMV approval and launched across California to serve the Japanese-speaking community.</li>
                    </ul>

                    <p className="mt-6">
                      Mirai Traffic School offers a fully online traffic school course, officially licensed by the California Department of Motor Vehicles (DMV). Our program is designed specifically for Japanese-speaking drivers in California. We make it easy and convenient to meet both court and DMV requirements — all in your native language, from the comfort of your home.
                    </p>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Why Choose Mirai Traffic School</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>100% Online:</strong> Study at your own pace, anytime — no classrooms, no commutes.</li>
                      <li><strong>Fully in Japanese:</strong> All lessons, quizzes, and the final exam are written in native Japanese.</li>
                      <li><strong>DMV-Approved:</strong> Officially licensed by the California DMV and accepted by all courts.</li>
                      <li><strong>Works on All Devices:</strong> Complete the course on your tablet or computer — anytime, anywhere.</li>
                      <li><strong>Secure & Private:</strong> Your personal data is fully protected with modern security protocols.</li>
                      <li><strong>Instant Certificate:</strong> Your Certificate of Completion is submitted automatically to the court and DMV.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">What You’ll Receive After Completion</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>✓ DMV-Approved Certificate:</strong> Submitted electronically to the court and DMV.</li>
                      <li><strong>✓ Keep Points Off Your Record:</strong> Helps prevent points from being added to your driving record.</li>
                      <li><strong>✓ Prevent Insurance Rate Increases:</strong> May help avoid higher insurance premiums by dismissing eligible tickets.</li>
                      <li><strong>✓ Dismiss Eligible Traffic Tickets:</strong> Eligible tickets can be dismissed upon successful course completion.</li>
                      <li><strong>✓ Peace of Mind:</strong> You’ve met court and DMV requirements with confidence.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center mb-8">
                    <span className="text-muted-foreground text-lg">Image/Icon Space</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-primary mb-4">How Students Register and Complete the Course</h2>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground italic text-center">
                        Insert content here
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default About;
