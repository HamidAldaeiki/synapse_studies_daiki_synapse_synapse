import React from "react";
import { ChevronRight, Users, Brain, Code, FileText, BookOpen, Download } from "lucide-react";

const Home: React.FC = () => {
  const services = [
    { icon: Users, title: "الإشراف الأكاديمي", desc: "إشراف متخصص على رسائل الماجستير والدكتوراه" },
    { icon: Brain, title: "تطوير نماذج ML", desc: "بناء وتدريب نماذج الذكاء الاصطناعي المتقدمة" },
    { icon: Code, title: "تنقيب البيانات", desc: "تحليل واستخلاص الأنماط من البيانات الضخمة" },
    { icon: FileText, title: "الأوراق العلمية", desc: "إعداد وتحرير الأبحاث للنشر الأكاديمي" }
  ];

  const recentWorks = [
    { title: "نمذجة التنبؤ بالأمراض المزمنة", category: "Deep Learning", year: "2024" },
    { title: "تحليل المشاعر في النصوص العربية", category: "NLP", year: "2024" },
    { title: "أنظمة التوصية الذكية", category: "Recommender Systems", year: "2023" }
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            مركز الدراسات <span className="text-blue-400">والأبحاث الأكاديمية</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            نجمع بين العمق الأكاديمي والتطبيق العملي في مجالات الذكاء الاصطناعي، تعلم الآلة، وتحليل البيانات. نقدم بحثًا علميًا رصينًا وخدمات متخصصة للباحثين والمؤسسات.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              استكشف الأبحاث <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">خدماتنا الأكاديمية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">أحدث الأعمال</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentWorks.map((work, idx) => (
            <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">{work.category}</span>
                <span className="text-xs text-gray-500">{work.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{work.title}</h3>
              <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1 mt-4">
                اقرأ المزيد <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
