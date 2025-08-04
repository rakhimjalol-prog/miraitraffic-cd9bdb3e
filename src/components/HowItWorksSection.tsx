import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
const HowItWorksSection = () => {
  const {
    language
  } = useLanguage();
  return <section className="py-20 from-cyan-200 to-blue-300 bg-[t#71d4f64d] bg-[#71d4f6]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {choose("It's easy to get started", "簡単に始められます", language)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {choose("Complete your traffic school requirements in just 4 simple steps", "交通学校の要件をわずか4つの簡単なステップで完了", language)}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">
              {choose("Register Online", "オンライン登録", language)}
            </h3>
            <p className="text-gray-600">
              {choose("Sign up with your citation information and personal details", "引用情報と個人情報でサインアップ", language)}
            </p>
          </div>

          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">
              {choose("Learn at Your Own Pace", "自分のペースで学習", language)}
            </h3>
            <p className="text-gray-600">
              {choose("Take the online course at your own pace from any device", "任意のデバイスから自分のペースでオンラインコースを受講", language)}
            </p>
          </div>

          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">
              {choose("Pass Final Exam", "最終試験に合格", language)}
            </h3>
            <p className="text-gray-600">
              {choose("Complete the final exam to demonstrate your knowledge", "最終試験を完了して知識を証明", language)}
            </p>
          </div>

          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              04
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">
              {choose("Get Your Certificate", "証明書を取得", language)}
            </h3>
            <p className="text-gray-600">
              {choose("Receive your completion certificate and court notification", "修了証明書と法廷通知を受け取る", language)}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;