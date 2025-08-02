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
                    <h2 className="text-2xl font-semibold text-primary mb-4">About Our Company</h2>
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