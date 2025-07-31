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
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">Mirai Traffic School</span>
              <span className="block text-blue-700 text-2xl md:text-3xl font-bold animate-typewriter">
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
                className="group text-lg px-6 py-3 animate-pulse rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105"
              >
                Start the Course
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Illustration Only */}
          <div className="animate-slide-in-right">
            <img
              src="/lovable-uploads/9f5415f5-1d9e-4b54-952c-05cfdea3f1c0.png"
              alt="Certificate and Safety Illustration"
              className="mx-auto object-contain w-[480px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatureSection;