import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/f54d31c3-ff3e-4eb2-80cf-c162a04914da.png" alt="Mirai Logo" className="w-10 h-10 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.home')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.about')}
            </a>
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t('header.courses')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border py-2 z-10">
                  <a
                    href="#course"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {t('header.offensiveDriving')}
                  </a>
                </div>
              )}
            </div>
            <a href="#court-lookup" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.courtLookup')}
            </a>
          </nav>

          {/* Right side: Language + Login + Sign Up */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <div className="hidden lg:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 font-semibold hover:underline"
              >
                {t('header.login')}
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {t('header.signup')}
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">{t('header.home')}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">{t('header.about')}</a>
              <a href="#course" className="text-gray-700 hover:text-blue-600">{t('header.offensiveDriving')}</a>
              <a href="#court-lookup" className="text-gray-700 hover:text-blue-600">{t('header.courtLookup')}</a>
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="ghost" size="sm">{t('header.login')}</Button>
                <Button variant="default" size="sm" className="bg-blue-500 text-white">
                  {t('header.signup')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
