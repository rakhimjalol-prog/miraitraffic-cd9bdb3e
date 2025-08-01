import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const CourseFeatureSection = () => {
  const { lang } = useLanguage(); // 'en' or 'jp'

  const content = {
    en: {
      intro: "Mirai Traffic School",
      heading: "Offensive Driving Course Syllabus",
      chapterLabel: "Chapter",
      chapters: [
        "Foundations of Traffic Safety and Awareness",
        "Understanding Traffic Laws and Right-of-Way Protocols",
        "Mastering Speed Limits and Defensive Driving",
        "Managing Road Rage and Aggressive Driving Behaviors",
        "Collision Avoidance and Safety Techniques",
        "Handling Road Rage and Driving Distractions",
        "Vehicle and Road Safety"
      ],
      cta: "Start the Course"
    },
    jp: {
      intro: "未来トラフィックスクール",
      heading: "攻撃的運転防止コースのカリキュラム",
      chapterLabel: "チャプター",
      chapters: [
        "交通安全と意識の基礎",
        "交通法規と優先権の理解",
        "制限速度と防御運転の習得",
        "ロードレイジと攻撃的運転の管理",
        "衝突回避と安全運転技術",
        "気が散る運転とその対策",
        "車両と道路の安全確認"
      ],
      cta: "コースを始める"
    }
  };

  const t = content[lang || 'en'];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden bg-[#71d4f6]/[0.56] rounded-sm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Syllabus List */}
          <div className="space-y-6 animate-slide-in-left-slow">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block text-lg">{t.intro}</span>
              <span className="block text-blue-700 text-2xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-700 [animation-duration:4s] font-bold md:text-3xl">
                {t.heading}
              </span>
            </h2>

            <ul className="space-y-3 mt-6">
              {t.chapters.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-xl px-5 py-3 shadow transition hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-800">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t.chapterLabel} {index + 1}: {title}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <Button variant="success" size="xl" className="group text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105 animate-glow-pulse">
                {t.cta}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Certificate Image */}
          <div className="animate-slide-in-right-slow">
            <div className="bg-white rounded-2xl shadow-elegant p-8 max-w-2xl mx-auto">
              <img
                src="/lovable-uploads/ff32bea8-e760-4d2b-9859-549ffc990c1d.png"
                alt="Traffic Safety Course Completion Illustration"
                className="w-full h-auto rounded-lg shadow-lg scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatureSection;
