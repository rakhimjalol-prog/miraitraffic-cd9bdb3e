import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Mirai Traffic School</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('language') === 'en' 
                ? "California's premier Japanese-language online traffic school. DMV-approved and court-accepted since 2020."
                : "カリフォルニア州最高の日本語オンライントラフィックスクール。2020年からDMV認定・裁判所承認。"
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {t('dmvLicense')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('language') === 'en' ? 'Quick Links' : 'クイックリンク'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('startCourse')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'Sample Lesson' : 'サンプルレッスン'}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'Course Information' : 'コース情報'}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('courtLookup')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('language') === 'en' ? 'Support' : 'サポート'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'Help Center' : 'ヘルプセンター'}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('contact')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'Technical Support' : 'テクニカルサポート'}</a></li>
              <li>
                <div className="text-muted-foreground">
                  <div>Phone: (555) 123-4567</div>
                  <div>Email: support@miraitraffic.com</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('language') === 'en' ? 'Legal' : '法的情報'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'DMV Information' : 'DMV情報'}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('language') === 'en' ? 'Refund Policy' : '返金ポリシー'}</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {t('language') === 'en' 
              ? "© 2024 Mirai Traffic School. All rights reserved. Licensed by the California DMV."
              : "© 2024 未来トラフィックスクール。すべての権利予約。カリフォルニア州DMVによるライセンス。"
            }
          </div>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {t('language') === 'en' ? 'Language:' : '言語:'}
            </span>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;