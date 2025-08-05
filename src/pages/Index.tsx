import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CourseFeatureSection from "@/components/CourseFeatureSection";
import CertificateSection from "@/components/CertificateSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { Fade, Slide } from "react-awesome-reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Fade duration={1000} triggerOnce>
        <HeroSection />
      </Fade>

      {/* 🎥 Video Section Between Hero and How It Works */}
      <Slide direction="up" duration={800} triggerOnce>
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
      </Slide>

      <Fade duration={1000} delay={200} triggerOnce>
        <HowItWorksSection />
      </Fade>
      
      <Slide direction="up" duration={800} delay={300} triggerOnce>
        <CourseFeatureSection />
      </Slide>
      
      <Fade duration={1000} delay={400} triggerOnce>
        <CertificateSection />
      </Fade>
      
      <Slide direction="up" duration={800} delay={500} triggerOnce>
        <FaqSection />
      </Slide>
      
      <Fade duration={1000} triggerOnce>
        <Footer />
      </Fade>
    </div>
  );
};

export default Index;
