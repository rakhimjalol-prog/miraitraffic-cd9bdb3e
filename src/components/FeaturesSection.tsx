import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, Smartphone, Lock, FileText } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "100% Online",
    description: "Study anytime, no classrooms required. Complete at your own pace from anywhere."
  },
  {
    icon: Globe,
    title: "Fully in Japanese",
    description: "Native-language quizzes and lessons designed specifically for Japanese speakers."
  },
  {
    icon: Shield,
    title: "DMV Approved",
    description: "Accepted by all California courts and meets DMV requirements."
  },
  {
    icon: Smartphone,
    title: "Works on All Devices",
    description: "Phone, tablet, computer - seamless experience across all platforms."
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Protected student data with industry-standard security measures."
  },
  {
    icon: FileText,
    title: "Instant Certificate",
    description: "Auto-submitted to court and DMV upon completion. No waiting."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Mirai Traffic School?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Japanese-speaking drivers who have successfully completed their traffic school with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;