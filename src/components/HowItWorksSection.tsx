import { UserPlus, BookOpen, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: t('step1'),
    },
    {
      icon: BookOpen,
      number: "02", 
      title: t('step2'),
    },
    {
      icon: CheckCircle,
      number: "03",
      title: t('step3'),
    },
    {
      icon: Award,
      number: "04",
      title: t('step4'),
    },
  ];

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('howItWorks')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 h-full animate-scale-in" 
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-success" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;