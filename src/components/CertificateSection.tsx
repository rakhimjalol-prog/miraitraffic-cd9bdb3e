import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
import { Award, CheckCircle, Send } from 'lucide-react';
const CertificateSection = () => {
  const {
    language
  } = useLanguage();
  return <section className="py-20 from-cyan-200 to-blue-300 bg-[t#71d4f64d] bg-[#71d4f6]/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {choose('DMV Certificate Included', 'DMV証明書付属', language)}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {choose('We automatically submit your certificate to the court upon completion.', '修了時に裁判所に証明書を自動提出します。', language)}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Official DMV Certificate', '公式DMV証明書', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('Meets all California court requirements', 'カリフォルニア裁判所要件をすべて満たす', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Send className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Automatic Submission', '自動提出', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('We send it directly to the court for you', '裁判所に直接送信いたします', language)}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Award className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{choose('Instant Download', '即座のダウンロード', language)}</h4>
                  <p className="text-gray-600 text-sm">{choose('Get your certificate immediately upon completion', '修了時に証明書を即座に取得', language)}</p>
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