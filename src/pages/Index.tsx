import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CourseFeatureSection from "@/components/CourseFeatureSection";
import CertificateSection from "@/components/CertificateSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <CourseFeatureSection />
      <CertificateSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
