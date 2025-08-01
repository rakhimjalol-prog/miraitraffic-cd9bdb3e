import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Mirai Traffic School" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">Mirai Traffic School</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
              {t('header.home')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              {t('header.about')}
            </a>

            {/* Courses Dropdown */}
            <div className="relative">
              <button onClick={() => setIsCoursesOpen(!isCoursesOpen)} className="flex items-center text-gray-700 hover:text-primary transition-colors">
                {t('header.courses')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elegant border border-gray-100 py-2">
                  <a href="#course" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    {t('header.offensiveDriving')}
                  </a>
                </div>
              )}
            </div>

            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              {t('header.howItWorks')}
            </a>
            <a href="#court-lookup" className="text-gray-700 hover:text-primary transition-colors">
              {t('header.courtLookup')}
            </a>

            {/* More Dropdown for Policies */}
            <div className="relative">
              <button onClick={() => setIsMoreOpen(!isMoreOpen)} className="flex items-center text-gray-700 hover:text-primary transition-colors">
                {t('header.more')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elegant border border-gray-100 py-2">
                  <a href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">FAQ</a>
                  <a href="#terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Terms & Conditions</a>
                  <a href="#privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Privacy Policy</a>
                  <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact Us</a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="px-[22px]">
                {t('header.signup')}
              </Button>
              <Button size="sm" className="bg-primary text-white px-[22px]">
                {t('header.login')}
              </Button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-primary">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home">{t('header.home')}</a>
              <a href="#about">{t('header.about')}</a>
              <a href="#course">{t('header.offensiveDriving')}</a>
              <a href="#how-it-works">{t('header.howItWorks')}</a>
              <a href="#court-lookup">{t('header.courtLookup')}</a>
              <a href="#faq">FAQ</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#contact">Contact Us</a>
              <Button variant="ghost" size="sm">{t('header.signup')}</Button>
              <Button variant="success" size="sm">{t('header.login')}</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
