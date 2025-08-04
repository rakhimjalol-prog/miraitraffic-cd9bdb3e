import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-soft">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs px-3 py-1 h-8 rounded-full"
      >
        🇺🇸 EN
      </Button>
      <Button
        variant={language === 'ja' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ja')}
        className="text-xs px-3 py-1 h-8 rounded-full"
      >
        🇯🇵 JP
      </Button>
    </div>
  );
};

export default LanguageToggle;