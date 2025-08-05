import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CourseFeatureSection from "@/components/CourseFeatureSection";
import CertificateSection from "@/components/CertificateSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <motion.div {...fadeInUp}>
        <HeroSection />
      </motion.div>

      {/* 🎥 Video Section Between Hero and How It Works */}
      <motion.section 
        className="w-full overflow-hidden bg-[#C6EEFF]"
        {...slideUp}
        transition={{ ...slideUp.transition, delay: 0.2 }}
      >
        <video
          src="/drivinggirl.mp4"
          className="w-full h-[60vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.section>

      <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}>
        <HowItWorksSection />
      </motion.div>
      
      <motion.div {...slideUp} transition={{ ...slideUp.transition, delay: 0.4 }}>
        <CourseFeatureSection />
      </motion.div>
      
      <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.5 }}>
        <CertificateSection />
      </motion.div>
      
      <motion.div {...slideUp} transition={{ ...slideUp.transition, delay: 0.6 }}>
        <FaqSection />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
