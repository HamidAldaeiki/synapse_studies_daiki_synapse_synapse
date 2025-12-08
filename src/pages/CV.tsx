import React from "react";
import { Award, Code, Download, ChevronRight } from "lucide-react";

const CV: React.FC = () => {
  const education = [
    { degree: "دكتوراه في علوم الحاسوب", institution: "جامعة الملك سعود", year: "2020-2024", focus: "تخصص: التعلم العميق والرؤية الحاسوبية" },
    { degree: "ماجستير في الذكاء الاصطناعي", institution: "جامعة الملك عبدالعزيز", year: "2017-2019", focus: "تخصص: معالجة اللغات الطبيعية" }
  ];

  const skills = [
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
    { category: "Programming", items: ["Python", "R", "JavaScript", "SQL"] },
    { category: "Research", items: ["Statistical Analysis", "Experimental Design", "Academic Writing"] },
    { category: "Tools", items: ["Git", "Docker", "Jupyter", "LaTeX"] }
  ];

  const awards = [
    "جائزة أفضل بحث في مؤتمر الذكاء الاصطناعي 2023",
    "منحة التميز البحثي من جامعة الملك سعود 2022",
    "جائزة أفضل رسالة دكتوراه في علوم الحاسوب 2024"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">السيرة الذاتية</h1>
        <p className="text-gray-400 leading-relaxed mb-6">
          باحث متخصص في الذكاء الاصطناعي وتعلم الآلة، مع خبرة واسعة في تطوير النماذج التنبؤية وتحليل البيانات. أسعى لتطوير حلول مبتكرة تربط بين البحث الأكاديمي والتطبيقات العملية.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Download className="w-5 h-5" /> تحميل السيرة الذاتية PDF
        </button>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-blue-400" />
          التعليم والمؤهلات
        </h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
              <p className="text-gray-400 text-sm">{edu.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Code className="w-7 h-7 text-blue-400" />
          المهارات التقنية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-blue-400" />
          الجوائز والتكريمات
        </h2>
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
          <ul className="space-y-3">
            {awards.map((award, idx) => (
              <li key={idx} className="text-gray-300 flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;
