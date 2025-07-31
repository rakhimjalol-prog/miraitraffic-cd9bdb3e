import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Clock, Users, Award } from "lucide-react";

const CourseOverviewSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Course Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive California traffic school curriculum designed specifically for Japanese speakers
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