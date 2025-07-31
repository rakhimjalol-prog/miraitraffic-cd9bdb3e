import {
  CheckCircle,
  Globe,
  Shield,
  Smartphone,
  Lock,
  FileText,
  Headphones,
  Star,
  MonitorSmartphone,
  Mountain,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      icon: Globe,
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      icon: Shield,
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
    {
      icon: Smartphone,
      title: t("feature4Title"),
      description: t("feature4Desc"),
    },
    {
      icon: Lock,
      title: t("feature5Title"),
      description: t("feature5Desc"),
    },
    {
      icon: FileText,
      title: t("feature6Title"),
      description: t("feature6Desc"),
    },
  ];

  const quickIcons = [
    {
      icon: Headphones,
      text: t("featureQuick1") || "Online Support",
    },
    {
      icon: Mountain,
      text: t("featureQuick2") || "Easy to Use",
    },
    {
      icon: Star,
      text: t("featureQuick3") || "Trusted by Customers",
    },
    {
      icon: MonitorSmartphone,
      text: t("featureQuick4") || "Any Device, Any Time",
    },
  ];

  return (
    <>
      {/* Main Feature Cards */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("whyChooseUs")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
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

      {/* Horizontal Icon Strip */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 text-center animate-fade-in-up">
          {quickIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-full shadow-md p-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-base font-medium text-foreground">{item.text}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
