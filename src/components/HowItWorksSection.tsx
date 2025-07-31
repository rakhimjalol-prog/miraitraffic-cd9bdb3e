import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, BookOpen, Trophy, Award } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description: "Create your account and choose your course package. Quick 2-minute registration."
  },
  {
    icon: BookOpen,
    number: "02", 
    title: "Complete Lessons & Quizzes",
    description: "Study 7 comprehensive chapters with built-in Japanese quizzes and ID verification."
  },
  {
    icon: Trophy,
    number: "03",
    title: "Pass Final Exam",
    description: "Complete the final exam with our user-friendly interface designed for success."
  },
  {
    icon: Award,
    number: "04",
    title: "Get DMV Certificate",
    description: "Receive your completion certificate instantly and auto-submitted to court."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete your California traffic school in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 h-full animate-scale-in" 
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-success" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;