import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">MIRAI</div>
              <div className="text-sm text-muted-foreground -mt-1">Traffic School</div>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                <span className="text-purple-600 font-semibold">California’s First Japanese</span>{' '}
                <span className="text-foreground">Online Traffic School</span>
              </h1>

              <ul className="text-muted-foreground text-lg space-y-1 list-disc list-inside">
                <li>DMV-approved.</li>
                <li>Court-accepted.</li>
                <li>Clear your traffic ticket.</li>
                <li>Learn safer driving.</li>
                <li>100% online,</li>
                <li>100% in Japanese</li>
              </ul>

              <Button
                variant="default"
                size="lg"
                className="group bg-success hover:bg-success/90 text-success-foreground shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105 text-2xl font-bold px-8 py-5"
              >
                Start Course Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="relative animate-fade-in-up">
              <div className="bg-gradient-soft rounded-2xl p-8 shadow-large">
                <div className="aspect-square bg-white/50 rounded-xl flex items-center justify-center">
                  <div className="bg-white/50 rounded-xl flex items-center justify-center p-4">
                    <img
                      src="/lovable-uploads/699eb859-ac44-476c-86bb-f5fcf60421dc.png"
                      alt="Driving school illustration"
                      className="w-[640px] max-w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Floating check */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-success/20 rounded-full flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
