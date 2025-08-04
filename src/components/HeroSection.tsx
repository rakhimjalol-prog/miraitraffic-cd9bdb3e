import { useLanguage } from '@/contexts/LanguageContext';
import { choose } from '@/utils/lang';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const {
    language
  } = useLanguage();
  return <section className="min-h-screen bg-[#71d4f64d] flex items-center justify-center pt-20 rounded-md">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-purple-600">
                {choose("California's First Japanese", "カリフォルニア初の日本語", language)}
              </span>
              <br />
              {choose("Online Traffic School", "オンライン交通学校", language)}
            </h1>
            
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("DMV-approved", "DMV認定", language)}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("Court-accepted", "裁判所承認", language)}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("Clear your traffic ticket", "違反チケットを解除", language)}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("Learn safer driving", "安全運転を学ぶ", language)}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("100% online", "完全オンライン", language)}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                {choose("100% in Japanese", "完全日本語対応", language)}
              </li>
            </ul>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
              {choose("Start Course Now", "今すぐコースを始める", language)} →
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img src="/lovable-uploads/f96f3549-f900-45b8-a46a-bdec488ef260.png" alt="Traffic School Illustration" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Scroll to learn more */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-2">
            {choose("Scroll to learn more", "スクロールして詳細を見る", language)}
          </p>
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;