import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LovableVideoSection from "@/components/LovableVideoSection"; // ✅ Imported video section
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
      <LovableVideoSection /> {/* 🎥 Your driving girl video section */}
      <HowItWorksSection />
      <CourseFeatureSection />
      <CertificateSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
