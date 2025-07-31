import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Clock, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseOverviewSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('courseOverview')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('courseOverviewDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Course Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-0 shadow-soft text-center animate-scale-in">
              <CardContent className="p-6">
                <Book className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">7</h3>
                <p className="text-muted-foreground">Chapters</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">8</h3>
                <p className="text-muted-foreground">Hours</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">10K+</h3>
                <p className="text-muted-foreground">Graduates</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground">Court Accepted</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Features */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                    <span className="text-success font-bold">✓</span>
                  </div>
                  Interactive Lessons with Progress Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each chapter includes multimedia content, examples, and checkpoints to ensure understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                    <span className="text-success font-bold">✓</span>
                  </div>
                  Built-in Japanese Quizzes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test your knowledge with native Japanese quizzes after each lesson section.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                    <span className="text-success font-bold">✓</span>
                  </div>
                  Secure ID Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pop-up ID checks throughout the course ensure compliance with DMV requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;