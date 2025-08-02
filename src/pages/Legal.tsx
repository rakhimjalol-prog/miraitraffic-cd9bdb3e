import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Privacy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please review our terms of use and privacy policy
          </p>
        </div>

        <Tabs defaultValue="terms" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="text-base py-3">
              <FileText className="w-4 h-4 mr-2" />
              📄 Terms of Use
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-base py-3">
              <Shield className="w-4 h-4 mr-2" />
              📄 Privacy Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">Terms of Use</h2>
                </div>
                
                <div className="bg-muted/50 p-8 rounded-lg">
                  <p className="text-muted-foreground italic text-center text-lg">
                    Insert content here
                  </p>
                </div>
                
                <div className="mt-8 text-sm text-muted-foreground">
                  <p>Last updated: [Date to be inserted]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">Privacy Policy</h2>
                </div>
                
                <div className="bg-muted/50 p-8 rounded-lg">
                  <p className="text-muted-foreground italic text-center text-lg">
                    Insert content here
                  </p>
                </div>
                
                <div className="mt-8 text-sm text-muted-foreground">
                  <p>Last updated: [Date to be inserted]</p>
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

export default Legal;