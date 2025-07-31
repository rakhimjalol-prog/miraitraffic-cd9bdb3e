import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Clock, CheckCircle } from 'lucide-react';

const CourseFeatureSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Course Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-elegant p-8 max-w-md mx-auto">
              {/* Mock Course Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{t('courseFeature.courseTitle')}</h3>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    {t('courseFeature.approved')}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{t('courseFeature.progress')}</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-0"></div>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((module) => (
                    <div key={module} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-600">{module}</span>
                      </div>
                      <span className="text-sm text-gray-700">
                        {t(`courseFeature.module${module}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-success rounded-full flex items-center justify-center animate-float shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <Monitor className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {t('courseFeature.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('courseFeature.description')}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('courseFeature.feature1Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('courseFeature.feature1Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('courseFeature.feature2Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('courseFeature.feature2Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Monitor className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('courseFeature.feature3Title')}</h4>
                  <p className="text-gray-600 text-sm">{t('courseFeature.feature3Desc')}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button variant="success" size="lg" className="group">
                {t('courseFeature.startCourse')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatureSection;