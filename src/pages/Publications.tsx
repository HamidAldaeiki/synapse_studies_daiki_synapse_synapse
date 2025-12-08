import React from "react";
import { BookOpen, Download, ExternalLink } from "lucide-react";

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Arabic Sentiment Analysis: A Comprehensive Review",
      authors: "أ. د. محمد أحمد، د. سارة علي",
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      abstract: "تقدم هذه الدراسة مراجعة شاملة لتقنيات التعلم العميق المستخدمة في تحليل المشاعر للنصوص العربية، مع التركيز على التحديات الخاصة باللغة العربية وحلولها.",
      link: "#"
    },
    {
      title: "Predictive Modeling for Chronic Disease Management Using Machine Learning",
      authors: "د. محمد أحمد، د. فاطمة خالد، أ. د. أحمد سعيد",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2023",
      abstract: "تطوير نموذج تنبؤي متقدم لإدارة الأمراض المزمنة باستخدام تقنيات التعلم الآلي، مع تحقيق دقة 94% في التنبؤ بتطور المرض.",
      link: "#"
    },
    {
      title: "Transformer-Based Models for Arabic Natural Language Understanding",
      authors: "د. محمد أحمد، د. ليلى حسن",
      journal: "ACL 2023 Proceedings",
      year: "2023",
      abstract: "دراسة تطبيقية لنماذج Transformer في فهم اللغة العربية الطبيعية، مع تقديم نموذج محسّن خاص باللغة العربية.",
      link: "#"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">الأبحاث المنشورة</h1>
        <p className="text-gray-400">
          مجموعة مختارة من الأبحاث الأكاديمية المنشورة في مجلات ومؤتمرات علمية محكّمة.
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <article key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-white leading-tight flex-1">
                {pub.title}
              </h2>
              <span className="text-blue-400 font-medium text-sm bg-blue-600/20 px-3 py-1 rounded-full whitespace-nowrap">
                {pub.year}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-3">{pub.authors}</p>
            <p className="text-blue-400 text-sm mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {pub.journal}
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">{pub.abstract}</p>

            <div className="flex gap-3">
              <a href={pub.link} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> تحميل PDF
              </a>
              <a href={pub.link} className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> رابط المجلة
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Publications;
