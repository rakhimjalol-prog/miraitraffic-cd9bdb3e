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
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Mirai Traffic Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">Mirai Traffic School</span>
          </div>

          {/* Desktop Nav */}
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
                  {/* Add more course options here if needed */}
                </div>
              )}
            </div>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.howItWorks')}
            </a>
            <a href="#court-lookup" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.courtLookup')}
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                {t('header.login')}
              </Button>
              <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                {t('.Signup')}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.home')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.about')}
              </a>
              <a href="#course" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.offensiveDriving')}
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.howItWorks')}
              </a>
              <a href="#court-lookup" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.courtLookup')}
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  {t('header.login')}
                </Button>
                <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
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
