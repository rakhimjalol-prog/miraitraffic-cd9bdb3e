import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseFeatureSection = () => {
  const [lang, setLang] = useState<'en' | 'jp'>('en');

  // Detect language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'jp' || storedLang === 'en') {
      setLang(storedLang);
    }
  }, []);

  const syllabus = [
    {
      en: 'Foundations of Traffic Safety and Awareness',
      jp: '交通安全と意識の基礎',
    },
    {
      en: 'Understanding Traffic Laws and Right-of-Way Protocols',
      jp: '交通法規と優先権の理解',
    },
    {
      en: 'Mastering Speed Limits and Defensive Driving',
      jp: '速度制限と防衛運転の習得',
    },
    {
      en: 'Managing Road Rage and Aggressive Driving Behaviors',
      jp: 'ロードレイジと攻撃的運転の対処',
    },
    {
      en: 'Collision Avoidance and Safety Techniques',
      jp: '衝突回避と安全運転技術',
    },
    {
      en: 'Handling Road Rage and Driving Distractions',
      jp: '運転中の怒りと注意散漫への対処',
    },
    {
      en: 'Vehicle and Road Safety',
      jp: '車両と道路の安全性',
    },
  ];

  return (
    <section className="py-20 bg-[#71d4f6]/30 overflow-hidden rounded-sm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Syllabus List */}
          <div className="space-y-6 animate-slide-in-left-slow">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block text-lg">
                Mirai Traffic School
              </span>
              <span className="block text-blue-700 text-2xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-700 [animation-duration:4s] font-bold md:text-3xl">
                {lang === 'jp'
                  ? '安全運転コースのシラバス'
                  : 'Offensive Driving Course Syllabus'}
              </span>
            </h2>
            <ul className="space-y-3 mt-6">
              {syllabus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-xl px-5 py-3 shadow transition hover:shadow-md animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-800">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {lang === 'jp'
                      ? `第${index + 1}章: ${item.jp}`
                      : `Chapter ${index + 1}: ${item.en}`}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                variant="success"
                size="xl"
                className="group text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105 animate-glow-pulse"
              >
                {lang === 'jp' ? 'コースを始める' : 'Start the Course'}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Certificate Sample */}
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
