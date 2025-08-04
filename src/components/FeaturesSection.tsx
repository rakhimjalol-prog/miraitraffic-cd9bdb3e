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
import { choose } from "@/utils/lang";

const FeaturesSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: choose("100% Online Course", "100%オンラインコース", language),
      description: choose("Complete from anywhere, anytime", "いつでもどこでも受講可能", language),
    },
    {
      icon: Globe,
      title: choose("DMV Approved", "DMV認可済み", language),
      description: choose("Officially licensed by California DMV", "カリフォルニアDMV正式ライセンス", language),
    },
    {
      icon: Shield,
      title: choose("Court Accepted", "裁判所受理", language),
      description: choose("Accepted by all California courts", "カリフォルニア州全裁判所で受理", language),
    },
    {
      icon: Smartphone,
      title: choose("Instant Certificate", "即座の証明書", language),
      description: choose("Automatic submission to court & DMV", "裁判所・DMVへ自動提出", language),
    },
    {
      icon: Lock,
      title: choose("Mobile Friendly", "モバイル対応", language),
      description: choose("Works on any device or browser", "全デバイス・ブラウザ対応", language),
    },
    {
      icon: FileText,
      title: choose("24/7 Support", "24時間サポート", language),
      description: choose("Help available when you need it", "必要な時にサポート利用可能", language),
    },
  ];

  const quickIcons = [
    {
      icon: Headphones,
      text: choose("Online Support", "オンラインサポート", language),
    },
    {
      icon: Mountain,
      text: choose("Easy to Use", "使いやすい", language),
    },
    {
      icon: Star,
      text: choose("Trusted by Customers", "顧客から信頼", language),
    },
    {
      icon: MonitorSmartphone,
      text: choose("Any Device, Any Time", "いつでもどのデバイスでも", language),
    },
  ];

  return (
    <>
      {/* Main Feature Cards */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {choose("Why Choose Us", "選ばれる理由", language)}
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
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
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

      {/* Quick Features */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickIcons.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg shadow-soft flex items-center justify-center group-hover:shadow-hover transition-shadow">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
