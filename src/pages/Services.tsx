import React from "react";
import { Users, Brain, Code, FileText, Award, BookOpen, ChevronRight } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    { icon: Users, title: "الإشراف الأكاديمي", description: "إشراف متخصص على رسائل الماجستير والدكتوراه في مجالات الذكاء الاصطناعي وعلوم البيانات.", features: ["تطوير منهجية البحث","مراجعة الأدبيات العلمية","توجيه تصميم التجارب","مراجعة وتحرير الرسالة"] },
    { icon: Brain, title: "تطوير نماذج التعلم الآلي", description: "بناء وتدريب نماذج الذكاء الاصطناعي المتقدمة حسب احتياجاتك البحثية أو التجارية.", features: ["نماذج التصنيف والتنبؤ","معالجة اللغات الطبيعية","الرؤية الحاسوبية","أنظمة التوصية"] },
    { icon: Code, title: "تنقيب وتحليل البيانات", description: "استخلاص المعرفة والأنماط من مجموعات البيانات الكبيرة باستخدام تقنيات متقدمة.", features: ["تنظيف ومعالجة البيانات","التحليل الإحصائي المتقدم","التصور التفاعلي للبيانات","بناء لوحات المعلومات"] },
    { icon: FileText, title: "إعداد الأوراق العلمية", description: "مساعدة شاملة في كتابة وتحرير الأبحاث العلمية للنشر في المجلات والمؤتمرات.", features: ["صياغة أكاديمية احترافية","مراجعة منهجية شاملة","تنسيق حسب معايير المجلات","إعداد المواد التكميلية"] },
    { icon: Award, title: "تصميم العروض الأكاديمية", description: "إنشاء عروض تقديمية احترافية للمؤتمرات والندوات العلمية.", features: ["تصميم شرائح احترافي","رسوم بيانية وإنفوجرافيك","سرد قصصي فعّال","تحضير للعرض والأسئلة"] },
    { icon: BookOpen, title: "ورش العمل والتدريب", description: "برامج تدريبية متخصصة في البحث العلمي وتقنيات الذكاء الاصطناعي.", features: ["ورش عمل Python للبحث العلمي","مقدمة في التعلم الآلي","منهجية البحث العلمي","كتابة الأوراق العلمية"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">خدماتنا الأكاديمية</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          نقدم مجموعة متكاملة من الخدمات الأكاديمية والبحثية المتخصصة للباحثين والمؤسسات، مع التركيز على الجودة والاحترافية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
            <service.icon className="w-14 h-14 text-blue-400 mb-6" />
            <h2 className="text-2xl font-semibold text-white mb-3">{service.title}</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
