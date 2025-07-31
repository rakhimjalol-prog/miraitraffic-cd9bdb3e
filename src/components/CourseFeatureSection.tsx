import { CheckCircle, Clock, Monitor } from 'lucide-react';
import Image from 'next/image';

const CourseSyllabusSection = () => {
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

          {/* Right - Illustration + Features */}
          <div className="space-y-8 animate-slide-in-right">
            <Image
              src="/lovable-uploads/99e73d3c-6ecd-41df-94fd-8b54e29e30d8.png"
              alt="Offensive Driving Illustration"
              width={480}
              height={480}
              className="mx-auto object-contain"
            />

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">Complete Course in Japanese</h4>
                  <p className="text-gray-600 text-sm">All content, quizzes, and exams in Japanese</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">Study at Your Own Pace</h4>
                  <p className="text-gray-600 text-sm">No time limits, pause and resume anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">Mobile-Friendly</h4>
                  <p className="text-gray-600 text-sm">Works on phones, tablets, and computers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSyllabusSection;
