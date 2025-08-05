'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const CourseFeatureSection = () => {
  const { language } = useLanguage();
  const playerRef = useRef<any>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const syllabus = [
    { en: 'Foundations of Traffic Safety and Awareness', ja: '交通安全と意識の基礎' },
    { en: 'Understanding Traffic Laws and Right-of-Way Protocols', ja: '交通法規と優先権の理解' },
    { en: 'Mastering Speed Limits and Defensive Driving', ja: '速度制限と防衛運転の習得' },
    { en: 'Managing Road Rage and Aggressive Driving Behaviors', ja: 'ロードレイジと攻撃的運転の対処' },
    { en: 'Collision Avoidance and Safety Techniques', ja: '衝突回避と安全運転技術' },
    { en: 'Handling Road Rage and Driving Distractions', ja: '運転中の怒りと注意散漫への対処' },
    { en: 'Vehicle and Road Safety', ja: '車両と道路の安全性' }
  ];

  useEffect(() => {
    // Load YouTube Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    // Create the player once API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: '_PKFAreG-I8',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: '_PKFAreG-I8',
          controls: 1,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    };

    // Use IntersectionObserver to toggle mute
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playerRef.current?.unMute();
        } else {
          playerRef.current?.mute();
        }
      },
      { threshold: 0.5 }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#71d4f6]/30 overflow-hidden rounded-2xl animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Syllabus List */}
          <div className="space-y-6 animate-slide-in-left-slow">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block text-lg">Mirai Traffic School</span>
              <span className="block text-blue-700 text-2xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-700 [animation-duration:4s] font-bold md:text-3xl">
                {choose('Offensive Driving Course Syllabus', '安全運転コースのシラバス', language)}
              </span>
            </h2>

            <ul className="space-y-3 mt-6">
              {syllabus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-xl px-5 py-3 shadow transition hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-800">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {choose(`Chapter ${index + 1}: ${item.en}`, `第${index + 1}章: ${item.ja}`, language)}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                variant="success"
                size="xl"
                className="group text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105 animate-glow-pulse hover:animate-pulse"
              >
                {choose('Start the Course', 'コースを始める', language)}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Smart YouTube Player */}
          <div className="animate-slide-in-right-slow delay-500">
            <div
              ref={videoWrapperRef}
              className="bg-white rounded-2xl shadow-elegant p-8 max-w-2xl mx-auto"
            >
              <div id="yt-player" className="w-full h-[300px] md:h-[400px] rounded-lg shadow-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseFeatureSection;
