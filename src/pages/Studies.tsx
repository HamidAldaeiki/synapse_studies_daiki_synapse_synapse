import React from "react";
import { Calendar, ChevronRight } from "lucide-react";

const Studies: React.FC = () => {
  const studies = [
    { id: 1, title: "مستقبل الذكاء الاصطناعي في التعليم", excerpt: "استكشاف لدور الذكاء الاصطناعي في تحويل منظومة التعليم وتخصيص التجربة التعليمية لكل طالب.", date: "2024-03-15", readTime: "8 دقائق", category: "تكنولوجيا التعليم" },
    { id: 2, title: "أخلاقيات البحث في الذكاء الاصطناعي", excerpt: "دراسة معمقة حول التحديات الأخلاقية في تطوير وتطبيق تقنيات الذكاء الاصطناعي.", date: "2024-02-20", readTime: "12 دقيقة", category: "أخلاقيات التقنية" },
    { id: 3, title: "منهجية البحث العلمي الحديث", excerpt: "نظرة شاملة على أحدث الممارسات في البحث العلمي والنشر الأكاديمي.", date: "2024-01-10", readTime: "10 دقائق", category: "منهجية البحث" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">الدراسات والمقالات</h1>
        <p className="text-gray-400">
          مقالات ودراسات متخصصة في مجالات الذكاء الاصطناعي، التعلم الآلي، ومنهجية البحث العلمي.
        </p>
      </div>

      <div className="space-y-6">
        {studies.map(study => (
          <article key={study.id} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">{study.category}</span>
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(study.date).toLocaleDateString("ar-SA")}
              </span>
              <span className="text-gray-500 text-sm">{study.readTime}</span>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">{study.title}</h2>

            <p className="text-gray-300 leading-relaxed mb-4">{study.excerpt}</p>

            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2">
              اقرأ المزيد <ChevronRight className="w-4 h-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Studies;
