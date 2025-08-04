import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
import { Award, CheckCircle, Send } from 'lucide-react';
const CertificateSection = () => {
  const { language } = useLanguage();
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {choose('Get Your DMV-Approved Certificate', 'DMV認可証明書を取得', language)}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {choose('Upon completion, receive an official certificate that\'s automatically submitted to the court and DMV', '修了時に裁判所とDMVに自動提出される公式証明書を受領', language)}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Instant Delivery', '即座の配信', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('Certificate delivered immediately after passing', '合格後すぐに証明書配信', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Send className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Auto Submission', '自動提出', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('Automatically sent to court and DMV', '裁判所とDMVに自動送信', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Award className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Verification', '検証', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('Secure verification with court reference', '裁判所参照番号付き安全な検証', language)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-elegant">
              {/* Certificate Image */}
              <div className="bg-white rounded-xl gap-4 gap-x-40 ">
                <img src="/lovable-uploads/f96f3549-f900-45b8-a46a-bdec488ef260.png" alt="Sample Certificate of Completion" className="w-full h-auto rounded-lg" />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 font-medium">
                    {choose('Certificate of Completion', '修了証明書', language)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {choose('Traffic School Completion', '交通スクール修了', language)}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-success rounded-full flex items-center justify-center animate-float shadow-lg" style={{
            animationDelay: '1.5s'
          }}>
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CertificateSection;