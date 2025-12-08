import React from "react";
import { ChevronRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-blue-900/20 to-gray-800/30 border border-gray-700 rounded-2xl p-12 mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">من نحن</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Synapse Studies هو مركز متخصص في الدراسات والأبحاث الأكاديمية، نجمع بين الصرامة العلمية والتطبيق العملي لتقديم معرفة رصينة تخدم المجتمع البحثي والأكاديمي.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">رؤيتنا</h2>
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            نسعى لأن نكون مرجعًا علميًا موثوقًا في مجالات الذكاء الاصطناعي وعلوم البيانات، وأن نساهم في تطوير البحث العلمي في العالم العربي من خلال إنتاج معرفة أصيلة ومبتكرة تربط بين النظرية والتطبيق.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">رسالتنا</h2>
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
          <ul className="space-y-4">
            <li className="text-gray-300 flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">إنتاج أبحاث علمية رصينة ومحكّمة تساهم في تقدم المعرفة الإنسانية</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">تقديم خدمات أكاديمية متميزة تدعم الباحثين في رحلتهم العلمية</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">نقل المعرفة التقنية المتقدمة وتبسيطها للمجتمع الأكاديمي</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">بناء جسور التعاون بين الأكاديميين والممارسين في المجال</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
