import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="start-course" className="py-20 bg-gradient-to-br from-primary/5 to-purple/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('finalCtaTitle')}
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('language') === 'en'
              ? "Don't let language barriers slow you down. Complete your California traffic school requirement in Japanese with full DMV approval and court acceptance."
              : "言語の壁があなたを遅らせないでください。DMVの完全承認と裁判所の受諾により、日本語でカリフォルニア州のトラフィックスクール要件を満たしてください。"
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              variant="default"
              size="lg"
              className="group min-w-[250px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('startCourse')}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              {t('language') === 'en' ? 'View Sample Lesson' : 'サンプルレッスンを見る'}
            </Button>
          </div>

          {/* 🚀 Icon Feature Strip (Inline SVGs) */}
          <div className="py-16 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-xl my-12">
            <div className="flex flex-wrap justify-center gap-12 text-center">
              {/* 1. Support */}
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white rounded-full shadow-md p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636zM9 12h6" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-foreground">Online Support</h4>
              </div>

              {/* 2. Easy to Use */}
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white rounded-full shadow-md p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-foreground">Easy to Use</h4>
              </div>

              {/* 3. Trusted */}
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white rounded-full shadow-md p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-foreground">Trusted by Customers</h4>
              </div>

              {/* 4. Any Device */}
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white rounded-full shadow-md p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-3-6v6m0-6v-6" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-foreground">Any Device, Any Time</h4>
              </div>
            </div>
          </div>

          {/* ✅ Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              DMV Approved
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Court Accepted
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
