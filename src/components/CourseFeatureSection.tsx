import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseFeatureSection = () => {
  const syllabus = [
    'Foundations of Traffic Safety and Awareness',
    'Understanding Traffic Laws and Right-of-Way Protocols',
    'Mastering Speed Limits and Defensive Driving',
    'Managing Road Rage and Aggressive Driving Behaviors',
    'Collision Avoidance and Safety Techniques',
    'Handling Road Rage and Driving Distractions',
    'Vehicle and Road Safety',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Syllabus List */}
          <div className="space-y-6 animate-slide-in-left-slow">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">Mirai Traffic School</span>
              <span className="block text-blue-700 text-2xl md:text-3xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-700 [animation-duration:4s]">
                Offensive Driving Course Syllabus
              </span>
            </h2>
            <ul className="space-y-3 mt-6">
              {syllabus.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-xl px-5 py-3 shadow transition hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-800">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    Chapter {index + 1}: {title}
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
                Start the Course
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Certificate Sample */}
          <div className="animate-slide-in-right-slow">
            <div className="bg-white rounded-2xl shadow-elegant p-8 max-w-2xl mx-auto">
              <img
                src="/lovable-uploads/f8362481-ab07-4fae-8a3f-7c187c196dd4.png"
                alt="Sample Certificate of Completion"
                className="w-full h-auto rounded-lg shadow-lg scale-110"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 font-medium">
                  Sample Certificate of Completion
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Your official certificate will be issued upon course completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatureSection;