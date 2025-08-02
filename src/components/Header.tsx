import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const { language } = useLanguage();
  const isJP = language === 'jp';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100 shadow-soft bg-[#71d4f6]/[0.96]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/dd4edfff-68f0-492b-8321-3146ba649956.png"
              alt="Mirai Traffic School Logo"
              className="w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              {isJP ? 'ホーム' : 'Home'}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              {isJP ? '会社概要' : 'About Us'}
            </Link>
            <Link to="/courts" className="text-gray-700 hover:text-primary transition-colors">
              {isJP ? 'CA 裁判所' : 'CA Courts'}
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-primary transition-colors">
              {isJP ? 'ヘルプ' : 'Help'}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              {isJP ? 'お問い合わせ' : 'Contact'}
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LanguageToggle />
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="success" size="sm" className="px-6 font-semibold">
                {isJP ? '申し込む' : 'Signup'}
              </Button>
              <Button variant="ghost" size="sm" className="px-6 text-blue-500 font-medium">
                {isJP ? 'ログイン' : 'Login'}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {isJP ? 'ホーム' : 'Home'}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {isJP ? '会社概要' : 'About Us'}
              </Link>
              <Link to="/courts" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {isJP ? 'CA 裁判所' : 'CA Courts'}
              </Link>
              <Link to="/help" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {isJP ? 'ヘルプ' : 'Help'}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {isJP ? 'お問い合わせ' : 'Contact'}
              </Link>

              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="success" size="sm">{isJP ? '申し込む' : 'Signup'}</Button>
                <Button variant="ghost" size="sm" className="text-blue-500">
                  {isJP ? 'ログイン' : 'Login'}
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
