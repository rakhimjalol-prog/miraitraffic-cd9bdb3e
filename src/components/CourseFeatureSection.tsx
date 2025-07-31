import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseFeatureSection = () => {
  const syllabus = [
    'Basic Traffic Laws',
    'Safe Driving',
    'Road Signs',
    'Driving Under the Influence (DUI)',
    'Defensive Driving & Emergency Situations',
    'Sharing the Road & Special Vehicles',
    'Final Review & Certificate',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Syllabus List */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Mirai Traffic School — Offensive Driving Course Syllabus
            </h2>
            <ul className="space-y-3 mt-6">
              {syllabus.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-xl px-5 py-3 shadow transition hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-700">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-sm md:text-base">{title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Illustration Only */}
          <div className="animate-slide-in-right">
            <img
              src="/lovable-uploads/ChatGPT Image Jul 31, 2025, 03_46_18 PM.png"
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
