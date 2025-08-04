import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";

const PricingSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {choose('Course Pricing', 'コース料金', language)}
          </h2>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-white border-0 shadow-large hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-5xl font-bold text-foreground mb-2">
                $19.95
              </div>
              <p className="text-muted-foreground mb-8">
                {choose('One-time payment, no hidden fees', '一回払い、隠れた費用なし', language)}
              </p>
              
              <Button 
                size="lg" 
                className="w-full mb-6 bg-success hover:bg-success/90 text-success-foreground shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {choose('Start Course', 'コース開始', language)}
              </Button>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Secure checkout with Stripe</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <CreditCard className="w-6 h-6 text-muted-foreground" />
                  <span>Visa • Mastercard • American Express</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;