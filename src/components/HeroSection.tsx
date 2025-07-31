import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">MIRAI</div>
              <div className="text-sm text-muted-foreground -mt-1">Traffic School</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">🇯🇵 Japanese</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">🇺🇸 English</span>
          </div>
        </div>
      </nav>

      {/* Three.js Animation Space - Reserved */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        {/* Placeholder for GSAP/Three.js animation */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            California DMV-Approved
            <br />
            <span className="text-gradient">Online Traffic School</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
            100% Online · Fully in Japanese · Court Accepted
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl"
              className="group relative overflow-hidden"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Start Course Now</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>DMV License #1234567</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-arrow">
            <div className="flex flex-col items-center text-muted-foreground">
              <span className="text-sm mb-2">Scroll to learn more</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Road Elements */}
      <div className="absolute top-32 left-16 w-20 h-20 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary animate-float">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-20 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary animate-float" style={{ animationDelay: '1s' }}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="8" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;