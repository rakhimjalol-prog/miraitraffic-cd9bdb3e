import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Clock, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";
const Contact = () => {
  const {
    language
  } = useLanguage();
  return <div className="page-container">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1>{choose('Contact Us', 'お問い合わせ', language)}</h1>
          <p>{choose('Get in touch with our support team for any questions about your traffic school course', '交通スクールコースに関するご質問はサポートチームまでお気軽にお問い合わせください', language)}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Customer Service Image */}
            <div className="rounded-xl overflow-hidden shadow-soft">
              <img 
                src="/lovable-uploads/ebc584db-15e6-4623-a21c-20ab7189158a.png" 
                alt="Customer Service Representative" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <Card className="border-0 shadow-soft h-fit">
            <CardContent className="p-8">
              <h2>{choose('Get in Touch', 'お問い合わせ', language)}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3>{choose('Support Hours', 'サポート時間', language)}</h3>
                    <p className="text-muted-foreground">Insert content here</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3>{choose('Email Support', 'メールサポート', language)}</h3>
                    <p className="text-muted-foreground">Insert content here</p>
                  </div>
                </div>

                

                
              </div>
            </CardContent>
          </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2>{choose('Send us a Message', 'メッセージを送信', language)}</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{choose('First Name', '名', language)}</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="border-border focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{choose('Last Name', '姓', language)}</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="border-border focus:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{choose('Email Address', 'メールアドレス', language)}</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" className="border-border focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{choose('Subject', '件名', language)}</Label>
                  <Input id="subject" placeholder="What is your message about?" className="border-border focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{choose('Message', 'メッセージ', language)}</Label>
                  <Textarea id="message" placeholder="Enter your message here..." rows={6} className="border-border focus:ring-primary resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                  {choose('Send Message', 'メッセージを送信', language)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Contact;