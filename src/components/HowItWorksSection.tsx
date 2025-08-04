import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';

const HowItWorksSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {choose("How It Works", "仕組み", language)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {choose(
              "Complete your traffic school requirements in just 3 simple steps",
              "交通学校の要件をわずか3つの簡単なステップで完了",
              language
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {choose("Register", "登録", language)}
            </h3>
            <p className="text-gray-600">
              {choose(
                "Sign up with your citation information and personal details",
                "引用情報と個人情報でサインアップ",
                language
              )}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {choose("Complete Course", "コース完了", language)}
            </h3>
            <p className="text-gray-600">
              {choose(
                "Take the online course at your own pace from any device",
                "任意のデバイスから自分のペースでオンラインコースを受講",
                language
              )}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {choose("Get Certificate", "証明書取得", language)}
            </h3>
            <p className="text-gray-600">
              {choose(
                "Receive your completion certificate and court notification",
                "修了証明書と法廷通知を受け取る",
                language
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;