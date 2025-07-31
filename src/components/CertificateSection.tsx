import { useLanguage } from '@/contexts/LanguageContext';
import { Award, CheckCircle, Send } from 'lucide-react';

const CertificateSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {t('certificate.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('certificate.description')}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('certificate.benefit1Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('certificate.benefit1Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Send className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('certificate.benefit2Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('certificate.benefit2Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Award className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('certificate.benefit3Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('certificate.benefit3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-elegant">
              {/* Mock Certificate */}
              <div className="bg-white rounded-xl p-6 border-4 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t('certificate.certificateTitle')}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {t('certificate.certificateSubtitle')}
                    </p>
                  </div>
                  
                  <div className="py-4">
                    <div className="text-lg font-semibold text-gray-900">
                      [Student Name]
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('certificate.completedCourse')}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                    <div>
                      <div className="font-semibold">{t('certificate.licenseNumber')}</div>
                      <div>E2067</div>
                    </div>
                    <div>
                      <div className="font-semibold">{t('certificate.completionDate')}</div>
                      <div>[Date]</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="text-xs text-gray-500">
                      {t('certificate.officialSeal')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-success rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;