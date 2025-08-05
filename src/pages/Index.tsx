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

      {/* 🎥 Video Section Between Hero and How It Works */}
      <section className="w-full overflow-hidden bg-[#C6EEFF]">
        <video
          src="/drivinggirl.mp4"
          className="w-full h-[60vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
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
