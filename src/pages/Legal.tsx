import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";

// Terms of Use sections
const termsSections = [
  {
    title: "Terms of Use",
    effectiveDate: "08-01-2023",
    items: [
      { heading: "Who We Are", content: `MiraITraffic School (“we,” “us,” “our,” “MiraITraffic™”) operates miraitrafficschool.com and miraitraffic.com to deliver online driver-education courses and related services.` },
      { heading: "By Using Our Site, You Agree", content: `When you browse, register, or take any course on our Site, you’re accepting these Terms in full. If anything here doesn’t sit right with you, please don’t use our services.` },
      { heading: "Updates to These Terms", content: `We may revise these Terms at any time—whether to reflect new features, legal requirements, or improvements. We’ll post the latest version here and update the Effective Date above. It’s on you to check back; continuing to use the Site means you agree to the new Terms.` },
      { heading: "Your Account & Access Requirements", content: `Eligibility: You must be at least 13 years old. If you’re under 18, get a parent’s or guardian’s OK.

Tech requirements: A modern desktop or mobile device with Chrome, Firefox, Edge, or Safari; audio-capable for videos.

Credentials: Keep your password secret. You’re responsible for all activity under your login.` },
      { heading: "Course Completion & Certification", content: `You have two years from enrollment to finish your course. Complete every module, quiz, and the final exam to earn your certificate.

Need a replacement certificate? We can reissue it for a small fee.` },
      { heading: "Honor Code", content: `No cheating, no account-sharing, no shortcuts. If we catch misuse or misrepresentation, we may terminate your access without refund.` },
      { heading: "Intellectual Property", content: `All content, designs, logos, and trademarks on the Site are owned by us (or our licensors). You get a personal, non-exclusive license to access them—nothing more. Don’t copy, distribute, reverse-engineer, or otherwise use materials beyond what we explicitly allow.` },
      { heading: "Disclaimers & Liability Caps", content: `Accuracy: We strive for up-to-date, correct content, but can’t guarantee perfection.

Use at your own risk: We’re not liable for lost data, downtime, or indirect or consequential damages.

Maximum liability: If we ever owe you damages, they’re capped at the fees you paid in the last 12 months.` },
      { heading: "Arbitration & Waivers", content: `Any dispute between you and MiraITraffic School will be resolved by individual binding arbitration under the American Arbitration Association’s rules in Sacramento, CA. You also waive any right to a jury trial.` },
      { heading: "Governing Law", content: `California law applies, without regard to its conflict-of-law rules.` },
      { heading: "Entire Agreement", content: `These Terms (and any linked policies) are the complete agreement between you and us regarding your use of the Site and services.` },
      { heading: "Contact Us", content: `Questions? Reach out anytime:

Email: info@miraitrafficschool.com or info@miraitraffic.com

Mail:
MiraITraffic School
1024 Iron Point Rd #1043
Folsom, CA 95630` }
    ]
  }
];

// Privacy Policy sections
const privacySections = [
  {
    title: "Privacy Policy",
    lastUpdated: "[Insert Date]",
    snapshot: [
      { purpose: "Advertising", data: "Cookies; Usage Data", service: "Google Ads, Facebook Ads" },
      { purpose: "Payments", data: "Name, Billing & Shipping Info", service: "Stripe" },
      { purpose: "Analytics", data: "Cookies; Usage Data", service: "Google Analytics" },
      { purpose: "Hosting & Infrastructure", data: "IP Address; Usage Data", service: "AWS" },
      { purpose: "Optimization & Testing", data: "Cookies; Usage Data", service: "Google Optimize" }
    ],
    items: [
      { heading: "What We Collect", bullets: [
        "Device Information: Browser type, IP address, time zone, cookie data; Pages you visit, referring/exit pages, time spent.",
        "Order Information: Name, billing/shipping address, email, phone; Payment details (processed by Stripe; we don’t store full card numbers)."
      ]},
      { heading: "How We Use It", bullets: [
        "Fulfill orders: process payments, send confirmations, deliver certificates.",
        "Improve our Site: analytics, A/B testing, fraud detection.",
        "Communicate: service updates, promos (only if you opt in)."
      ]},
      { heading: "Sharing & Disclosure", content: `We share data only with:

• Service providers (Stripe, Google, AWS) to run our business
• Legal requests: subpoenas, court orders, or to protect our rights`},
      { heading: "Cookies & Tracking", content: `We use cookies and similar tools for functionality, analytics, and ads. You can disable cookies in your browser, but parts of the Site may not work.` },
      { heading: "Your Rights", content: `California (CCPA): Right to know, delete, opt‑out.
EU (GDPR): Access, correct, port, restrict, erase, withdraw consent, lodge complaint.

To exercise any rights, email info@miraitrafficschool.com or info@miraitraffic.com. We’ll respond within 30 days.` },
      { heading: "Data Retention", content: `We keep Order Information until you ask us to delete it or as long as needed to provide services and meet legal obligations.` },
      { heading: "Children’s Privacy", content: `We don’t knowingly collect data from anyone under 13. If we learn we have, we’ll delete it ASAP. Parents can request deletion at the emails above.` },
      { heading: "Policy Updates", content: `We’ll post changes here with a new Last Updated date. Continued use means acceptance.` }
    ]
  }
];

export const Legal = () => {
  const [active, setActive] = useState<'terms'|'privacy'>('terms');

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

        <Tabs value={active} onValueChange={setActive as any} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="py-3">
              <FileText className="w-4 h-4 mr-2" /> Terms of Use
            </TabsTrigger>
            <TabsTrigger value="privacy" className="py-3">
              <Shield className="w-4 h-4 mr-2" /> Privacy Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">
                    Terms of Use
                  </h2>
                </div>
                <article className="prose prose-lg text-foreground max-w-none">
                  <p className="font-medium">Effective Date: {termsSections[0].effectiveDate}</p>
                  <ol className="list-decimal list-inside space-y-4">
                    {termsSections[0].items.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.heading}</strong>
                        <p>{item.content}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-semibold text-primary">
                    Privacy Policy
                  </h2>
                </div>
                <article className="prose prose-lg text-foreground max-w-none">
                  <p className="font-medium">Last Updated: {privacySections[0].lastUpdated}</p>
                  <h3 className="mt-6 mb-2 text-xl font-semibold">Policy Snapshot</h3>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th>Purpose</th>
                        <th>Data Collected</th>
                        <th>Third-Party Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {privacySections[0].snapshot.map((row, idx) => (
                        <tr key={idx} className={idx % 2 ? 'bg-muted/20' : ''}>
                          <td>{row.purpose}</td>
                          <td>{row.data}</td>
                          <td>{row.service}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h3 className="mt-8 mb-2 text-xl font-semibold">Details</h3>
                  <ol className="list-decimal list-inside space-y-4">
                    {privacySections[0].items.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.heading}</strong>
                        {item.bullets ? (
                          <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                          </ul>
                        ) : (
                          <p>{item.content}</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </article>
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
