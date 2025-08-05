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

      {/* ✅ This block shows your video */}
      <section className="w-full bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <video
            src="/driving-girl.mp4"
            className="w-full rounded-xl shadow-xl"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <HowItWorksSection />
      <CourseFeatureSection />
      <CertificateSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
