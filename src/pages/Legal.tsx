import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";

// 1) Define your “topics” as arrays of { title, body }:
const termsSections = [
  {
    title: "1.0 General Provisions",
    body: `This website is maintained by Next Door Driving, Inc (“us”, “we”) for the purpose of providing online courses...`,
  },
  {
    title: "2.0 Hardware and Software Requirements",
    body: `We require Microsoft IE11+, Firefox, Chrome, or any equivalent. We recommend a device with speakers...`,
  },
  {
    title: "3.0 Completion and Certification Policy",
    body: `You must complete all modules to receive a certificate. Duplicate certificates carry a fee...`,
  },
  // …and so on for 4.0, 5.0, … 20.0
];

const privacySections = [
  {
    title: "Policy Summary",
    body: `Personal Data collected for the following purposes and using the following services:
– Advertising (Google Ads, Facebook Ads)…`,
  },
  {
    title: "Contact Information",
    body: `Owner & Data Controller:
Next Door Driving, Inc
1024 Iron Point Rd #1043, Folsom, CA…`,
  },
  {
    title: "Personal Information We Collect",
    body: `We collect Device Information (browser, IP, cookies…) and Order Information (name, email, payment data)…`,
  },
  // …and so on for each bullet you listed
];

export const Legal = () => {
  const [tab, setTab] = useState<"terms" | "privacy">("terms");

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

        <Tabs
          defaultValue="terms"
          onValueChange={(v) => setTab(v as any)}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="py-3">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Use
            </TabsTrigger>
            <TabsTrigger value="privacy" className="py-3">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </TabsTrigger>
          </TabsList>

          {/* TERMS TAB */}
          <TabsContent value="terms">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">
                    Terms of Use
                  </h2>
                </div>

                <div className="space-y-8">
                  {termsSections.map((sec, i) => (
                    <div key={i}>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {sec.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-sm text-muted-foreground">
                  <p>Last updated: [Date to be inserted]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PRIVACY TAB */}
          <TabsContent value="privacy">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">
                    Privacy Policy
                  </h2>
                </div>

                <div className="space-y-8">
                  {privacySections.map((sec, i) => (
                    <div key={i}>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {sec.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
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
