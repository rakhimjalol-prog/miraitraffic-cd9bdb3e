import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-container">
      <Header />
      <main className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h1>404</h1>
          <p>{choose("Page not found", "ページが見つかりません", language)}</p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            {choose("Return Home", "ホームに戻る", language)}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
