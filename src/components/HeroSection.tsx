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
            <img src="/logo.png" alt="Mirai Logo" className="w-14 h-14 object-contain" />
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
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl leading-snug">
                <span className="text-purple-600 font-semibold">California’s First Japanese</span>{" "}
                <span className="text-[#111827] font-medium">Online Traffic School</span>
              </h1>

              {/* Bullet Points */}
              <ul className="text-muted-foreground text-base space-y-1 pl-4 list-disc">
                <li>DMV-approved.</li>
                <li>Court-accepted.</li>
                <li>Clear your traffic ticket.</li>
                <li>Learn safer driving.</li>
                <li>100% online,</li>
                <li>100% in Japanese</li>
              </ul>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  variant="default"
                  size="lg"
                  className="group bg-success hover:bg-success/90 text-success-foreground shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105 text-2xl font-bold px-8 py-6"
                >
                  Start Course Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up">
              <div className="bg-gradient-soft rounded-2xl p-8 shadow-large">
                <div className="aspect-square bg-white/50 rounded-xl flex items-center justify-center"
