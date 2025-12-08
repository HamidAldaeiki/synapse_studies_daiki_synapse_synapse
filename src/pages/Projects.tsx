import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "نظام التنبؤ بالأمراض المزمنة",
      description: "منصة متكاملة تستخدم التعلم العميق للتنبؤ بتطور الأمراض المزمنة مثل السكري وارتفاع ضغط الدم. يوفر النظام تقارير تحليلية مفصلة للأطباء.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      tech: ["PyTorch", "FastAPI", "React", "PostgreSQL"],
      status: "مكتمل",
      github: "#",
      demo: "#"
    },
    {
      title: "محلل المشاعر العربي",
      description: "أداة متقدمة لتحليل المشاعر في النصوص العربية باستخدام نماذج Transformer المحسّنة، مع دعم اللهجات المختلفة.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      tech: ["Transformers", "Python", "FastAPI", "Docker"],
      status: "قيد التطوير",
      github: "#",
      demo: "#"
    },
    {
      title: "منصة تحليل البيانات الطبية",
      description: "نظام شامل لتحليل البيانات الطبية وإنشاء التقارير الإحصائية، مع واجهة تفاعلية وأدوات تصور متقدمة.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      status: "مكتمل",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">المشاريع البحثية</h1>
        <p className="text-gray-400">
          مجموعة من المشاريع التطبيقية في مجالات الذكاء الاصطناعي والتعلم الآلي.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all">
            <div className="h-48 bg-gray-700 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  project.status === "مكتمل"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-yellow-600/20 text-yellow-400"
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={project.github} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" /> Github
                </a>
                <a href={project.demo} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
